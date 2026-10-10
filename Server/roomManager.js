const { validateSubmission, getRandomStarter, getTeammates, getSharedTeams } = require("./gameLogic");

// ---------------------------------------------------------------------------
// In-memory room store
// ---------------------------------------------------------------------------

const rooms = new Map();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I/O/0/1 to avoid confusion
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return rooms.has(code) ? generateRoomCode() : code;
}

function getRoomBySocket(socketId) {
  for (const [code, room] of rooms.entries()) {
    if (room.players.some((p) => p.id === socketId)) {
      return { code, room };
    }
  }
  return null;
}

function getOpponent(room, socketId) {
  return room.players.find((p) => p.id !== socketId);
}

// ---------------------------------------------------------------------------
// Timer management
// ---------------------------------------------------------------------------

const TURN_DURATION = 15; // seconds

function clearRoomTimer(room) {
  if (room.timer) {
    clearTimeout(room.timer);
    room.timer = null;
  }
}

function startTurnTimer(io, code, room) {
  clearRoomTimer(room);
  room.timerStarted = Date.now();

  room.timer = setTimeout(() => {
    const loser = room.players.find((p) => p.id === room.activePlayerId);
    const winner = room.players.find((p) => p.id !== room.activePlayerId);

    if (!loser || !winner) return;

    // What the loser could have answered
    const currentPlayer =
      room.chain.length > 0
        ? room.chain[room.chain.length - 1].canonicalName
        : room.seedPlayer;
    const missedAnswers = getTeammates(currentPlayer)
      .filter((t) => !room.usedPlayers.includes(t))
      .map((t) => ({
        name: t,
        teams: getSharedTeams(currentPlayer, t).join(", "),
      }));

    io.to(code).emit("game_over", {
      reason: "timeout",
      currentPlayer,
      missedAnswers,
      loserId: loser.id,
      loserName: loser.name,
      winnerId: winner.id,
      winnerName: winner.name,
      chain: room.chain,
    });

    room.status = "finished";
    clearRoomTimer(room);

    setTimeout(() => rooms.delete(code), 30_000);
  }, TURN_DURATION * 1000);
}

// ---------------------------------------------------------------------------
// Socket event handlers
// ---------------------------------------------------------------------------

function handleSocketEvents(io, socket) {

  // ── CREATE ROOM ────────────────────────────────────────────────────────────
  socket.on("create_room", ({ playerName, region }, callback) => {
    const code = generateRoomCode();

    const room = {
      code,
      region: region ?? null,  // null = any region
      status: "waiting",       // waiting | playing | finished
      players: [{ id: socket.id, name: playerName }],
      activePlayerId: null,
      chain: [],               // [{ submittedBy, canonicalName, teams }]
      usedPlayers: [],
      seedPlayer: null,
      timer: null,
      timerStarted: null,
      rematchVotes: new Set(),
    };

    rooms.set(code, room);
    socket.join(code);

    console.log(`Room ${code} created by ${playerName} (${socket.id})`);
    callback({ success: true, code });
  });

  // ── JOIN ROOM ──────────────────────────────────────────────────────────────
  socket.on("join_room", ({ code, playerName }, callback) => {
    const upperCode = code.toUpperCase();
    const room = rooms.get(upperCode);

    if (!room) {
      return callback({ success: false, error: "Room not found." });
    }
    if (room.status !== "waiting") {
      return callback({ success: false, error: "Game already in progress." });
    }
    if (room.players.length >= 2) {
      return callback({ success: false, error: "Room is full." });
    }
    if (room.players[0].id === socket.id) {
      return callback({ success: false, error: "You created this room." });
    }

    room.players.push({ id: socket.id, name: playerName });
    socket.join(upperCode);

    console.log(`${playerName} (${socket.id}) joined room ${upperCode}`);
    callback({ success: true });

    // Both players connected — start the game
    startGame(io, upperCode, room);
  });

  // ── SUBMIT PLAYER ──────────────────────────────────────────────────────────
  socket.on("submit_player", ({ input }) => {
    const found = getRoomBySocket(socket.id);
    if (!found) return;
    const { code, room } = found;

    if (room.status !== "playing") return;
    if (socket.id !== room.activePlayerId) {
      socket.emit("not_your_turn");
      return;
    }

    const currentPlayer =
      room.chain.length > 0
        ? room.chain[room.chain.length - 1].canonicalName
        : room.seedPlayer;

    const result = validateSubmission(input, currentPlayer, room.usedPlayers);

    if (!result.valid) {
      socket.emit("invalid_move", { reason: result.reason, input });
      return;
    }

    // Valid move — update state
    clearRoomTimer(room);

    room.chain.push({
      submittedBy: socket.id,
      canonicalName: result.canonicalName,
      teams: result.teams,
    });
    room.usedPlayers.push(result.canonicalName);

    // Switch turns
    const opponent = getOpponent(room, socket.id);
    room.activePlayerId = opponent.id;

    const availableTeammates = getTeammates(result.canonicalName).filter(
      (t) => !room.usedPlayers.includes(t)
    );

    io.to(code).emit("valid_move", {
      submittedBy: socket.id,
      canonicalName: result.canonicalName,
      teams: result.teams,
      chain: room.chain,
      nextActivePlayerId: opponent.id,
      availableCount: availableTeammates.length,
    });

    // Check if opponent has any valid moves left
    if (availableTeammates.length === 0) {
      const winner = room.players.find((p) => p.id === socket.id);
      const loser = opponent;

      io.to(code).emit("game_over", {
        reason: "no_moves",
        loserId: loser.id,
        loserName: loser.name,
        winnerId: winner.id,
        winnerName: winner.name,
        chain: room.chain,
      });

      room.status = "finished";
      setTimeout(() => rooms.delete(code), 30_000);
      return;
    }

    startTurnTimer(io, code, room);
  });

  // ── REMATCH ────────────────────────────────────────────────────────────────
  socket.on("rematch_request", () => {
    const found = getRoomBySocket(socket.id);
    if (!found) return;
    const { code, room } = found;

    if (room.status !== "finished") return;

    room.rematchVotes.add(socket.id);
    io.to(code).emit("rematch_vote", { votes: room.rematchVotes.size });

    if (room.rematchVotes.size === 2) {
      room.rematchVotes.clear();
      startGame(io, code, room);
    }
  });

  // ── DISCONNECT ─────────────────────────────────────────────────────────────
  socket.on("disconnect", () => {
    const found = getRoomBySocket(socket.id);
    if (!found) return;
    const { code, room } = found;

    clearRoomTimer(room);

    const opponent = getOpponent(room, socket.id);
    const disconnected = room.players.find((p) => p.id === socket.id);

    if (opponent && room.status === "playing") {
      io.to(code).emit("opponent_disconnected", {
        disconnectedName: disconnected?.name ?? "Opponent",
      });
    }

    rooms.delete(code);
    console.log(`Room ${code} deleted (${socket.id} disconnected)`);
  });
}

// ---------------------------------------------------------------------------
// Start / restart game
// ---------------------------------------------------------------------------

function startGame(io, code, room) {
  const starter = getRandomStarter(room.region);

  room.status = "playing";
  room.chain = [];
  room.usedPlayers = [starter];
  room.seedPlayer = starter;

  const firstPlayer = room.players[Math.floor(Math.random() * 2)];
  room.activePlayerId = firstPlayer.id;

  console.log(
    `Game started in room ${code} — seed: ${starter}, first: ${firstPlayer.name}`
  );

  io.to(code).emit("game_start", {
    seedPlayer: starter,
    activePlayerId: firstPlayer.id,
    players: room.players.map((p) => ({ id: p.id, name: p.name })),
    turnDuration: TURN_DURATION,
  });

  startTurnTimer(io, code, room);
}

module.exports = { handleSocketEvents };
