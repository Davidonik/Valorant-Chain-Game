const {
  validateSubmission,
  getRandomStarter,
  getTeammates,
  getSharedTeams,
  getAllPlayerNames,
} = require("./gameLogic");

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

// What the lobby needs to show: who's in, who's host, which region
function roomInfo(room) {
  return {
    code: room.code,
    region: room.region,
    hostId: room.players[0]?.id ?? null,
    players: room.players.map((p) => ({ id: p.id, name: p.name })),
  };
}

function newRoom(code, socketId, playerName, region, solo = false) {
  return {
    code,
    solo,                    // solo practice: one player, the turn never passes
    region: region ?? null,  // null = any region
    status: "waiting",       // waiting | playing | finished
    players: [{ id: socketId, name: playerName }],
    activePlayerId: null,
    chain: [],               // [{ submittedBy, canonicalName, teams }]
    usedPlayers: [],
    seedPlayer: null,
    timer: null,
    timerStarted: null,
    cleanupTimer: null,
    lives: {},               // { socketId: livesLeft }
    lastWrongGuess: {},      // { socketId: timestamp }
    rematchVotes: new Set(),
  };
}

function getOpponent(room, socketId) {
  return room.players.find((p) => p.id !== socketId);
}

// ---------------------------------------------------------------------------
// Timer management
// ---------------------------------------------------------------------------

const TURN_DURATION = 15; // seconds
const ROOM_IDLE_MS = 10 * 60_000; // how long a finished room waits for a rematch
const MAX_LIVES = 3;
const WRONG_GUESS_COOLDOWN_MS = 1000; // blocks rapid-fire guessing

function clearRoomTimer(room) {
  if (room.timer) {
    clearTimeout(room.timer);
    room.timer = null;
  }
}

function clearCleanupTimer(room) {
  if (room.cleanupTimer) {
    clearTimeout(room.cleanupTimer);
    room.cleanupTimer = null;
  }
}

function finishGame(io, code, room) {
  room.status = "finished";
  clearRoomTimer(room);

  // Keep the room around for a rematch, then drop it
  clearCleanupTimer(room);
  room.cleanupTimer = setTimeout(() => {
    io.to(code).emit("opponent_left");
    io.socketsLeave(code);
    rooms.delete(code);
  }, ROOM_IDLE_MS);
}

// A player left or disconnected — tell the other one and remove the room
function closeRoom(io, socket) {
  const found = getRoomBySocket(socket.id);
  if (!found) return;
  const { code, room } = found;

  clearRoomTimer(room);
  clearCleanupTimer(room);

  const opponent = getOpponent(room, socket.id);
  const leaver = room.players.find((p) => p.id === socket.id);

  // Guest left the lobby before the start — keep the room open for the host
  if (room.status === "waiting" && opponent && leaver !== room.players[0]) {
    room.players = room.players.filter((p) => p.id !== socket.id);
    socket.leave(code);
    io.to(code).emit("room_update", roomInfo(room));
    console.log(`${leaver.name} (${socket.id}) left room ${code}`);
    return;
  }

  if (opponent && room.status === "playing") {
    socket.to(code).emit("opponent_disconnected", {
      disconnectedName: leaver?.name ?? "Opponent",
    });
  } else if (opponent) {
    socket.to(code).emit("opponent_left");
  }

  io.socketsLeave(code);
  rooms.delete(code);
  console.log(`Room ${code} deleted (${socket.id} left)`);
}

// The active player loses (ran out of time or out of lives)
function activePlayerLoses(io, code, room, reason) {
  const loser = room.players.find((p) => p.id === room.activePlayerId);
  const winner = room.players.find((p) => p.id !== room.activePlayerId);

  if (!loser || (!winner && !room.solo)) return;

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
    reason,
    solo: room.solo,
    region: room.region,
    currentPlayer,
    missedAnswers,
    loserId: loser.id,
    loserName: loser.name,
    winnerId: winner?.id ?? null,
    winnerName: winner?.name ?? null,
    seedPlayer: room.seedPlayer,
    chain: room.chain,
  });

  finishGame(io, code, room);
}

function startTurnTimer(io, code, room) {
  clearRoomTimer(room);
  room.timerStarted = Date.now();

  room.timer = setTimeout(
    () => activePlayerLoses(io, code, room, "timeout"),
    TURN_DURATION * 1000
  );
}

// ---------------------------------------------------------------------------
// Socket event handlers
// ---------------------------------------------------------------------------

function handleSocketEvents(io, socket) {

  // ── CREATE ROOM ────────────────────────────────────────────────────────────
  socket.on("create_room", ({ playerName, region }, callback) => {
    const code = generateRoomCode();
    const room = newRoom(code, socket.id, playerName, region);

    rooms.set(code, room);
    socket.join(code);

    console.log(`Room ${code} created by ${playerName} (${socket.id})`);
    callback({ success: true, code, room: roomInfo(room) });
  });

  // ── SOLO PRACTICE: a one-player room that starts right away ───────────────
  socket.on("create_solo", ({ playerName, region } = {}, callback) => {
    if (typeof callback !== "function") return;
    if (getRoomBySocket(socket.id)) closeRoom(io, socket);

    const code = generateRoomCode();
    const room = newRoom(code, socket.id, playerName || "You", region, true);

    rooms.set(code, room);
    socket.join(code);

    console.log(`Solo game ${code} started by ${room.players[0].name} (${socket.id})`);
    callback({ success: true });
    startGame(io, code, room);
  });

  // ── JOIN ROOM ──────────────────────────────────────────────────────────────
  socket.on("join_room", ({ code, playerName }, callback) => {
    const upperCode = code.toUpperCase();
    const room = rooms.get(upperCode);

    if (!room || room.solo) {
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
    callback({ success: true, room: roomInfo(room) });

    // Host starts the game from the lobby
    socket.to(upperCode).emit("room_update", roomInfo(room));
  });

  // ── SET REGION (host only, before the game starts) ─────────────────────────
  socket.on("set_region", ({ region } = {}) => {
    const found = getRoomBySocket(socket.id);
    if (!found) return;
    const { code, room } = found;

    if (room.status !== "waiting") return;
    if (room.players[0].id !== socket.id) return;

    room.region = typeof region === "string" && region ? region : null;
    io.to(code).emit("room_update", roomInfo(room));
  });

  // ── START GAME (host only) ─────────────────────────────────────────────────
  socket.on("start_game", () => {
    const found = getRoomBySocket(socket.id);
    if (!found) return;
    const { code, room } = found;

    if (room.status !== "waiting") return;
    if (room.players[0].id !== socket.id) return;
    if (room.players.length < 2) return;

    startGame(io, code, room);
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

    if (Date.now() - (room.lastWrongGuess[socket.id] ?? 0) < WRONG_GUESS_COOLDOWN_MS) {
      socket.emit("too_fast");
      return;
    }

    const result = validateSubmission(input, currentPlayer, room.usedPlayers);

    if (!result.valid) {
      // Every wrong guess costs a life
      room.lives[socket.id] -= 1;
      room.lastWrongGuess[socket.id] = Date.now();

      socket.emit("invalid_move", { reason: result.reason, input });
      io.to(code).emit("lives_update", { lives: room.lives });

      if (room.lives[socket.id] <= 0) {
        activePlayerLoses(io, code, room, "out_of_lives");
      }
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

    // Switch turns (solo: stays with the same player)
    const opponent = room.solo ? room.players[0] : getOpponent(room, socket.id);
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

    // Solo: a player with no unused teammates is a dead end
    if (availableTeammates.length === 0 && room.solo) {
      io.to(code).emit("game_over", {
        reason: "no_moves",
        solo: true,
        region: room.region,
        seedPlayer: room.seedPlayer,
        chain: room.chain,
      });
      finishGame(io, code, room);
      return;
    }

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
        seedPlayer: room.seedPlayer,
        chain: room.chain,
      });

      finishGame(io, code, room);
      return;
    }

    startTurnTimer(io, code, room);
  });

  // ── REMATCH ────────────────────────────────────────────────────────────────
  socket.on("rematch_request", () => {
    const found = getRoomBySocket(socket.id);
    if (!found) {
      socket.emit("opponent_left");
      return;
    }
    const { code, room } = found;

    if (room.status !== "finished") return;

    room.rematchVotes.add(socket.id);
    io.to(code).emit("rematch_vote", { votes: room.rematchVotes.size });

    if (room.rematchVotes.size === room.players.length) {
      room.rematchVotes.clear();
      startGame(io, code, room);
    }
  });

  // ── DISCONNECT ─────────────────────────────────────────────────────────────
  socket.on("disconnect", () => closeRoom(io, socket));

  // ── LEAVE ROOM (back to main menu) ─────────────────────────────────────────
  socket.on("leave_room", () => closeRoom(io, socket));

  // ── PLAYER NAMES (for the input suggestions) ───────────────────────────────
  socket.on("get_player_names", (callback) => {
    if (typeof callback === "function") callback(getAllPlayerNames());
  });
}

// ---------------------------------------------------------------------------
// Start / restart game
// ---------------------------------------------------------------------------

function startGame(io, code, room) {
  const starter = getRandomStarter(room.region);

  clearCleanupTimer(room);
  room.status = "playing";
  room.chain = [];
  room.usedPlayers = [starter];
  room.seedPlayer = starter;
  room.lives = Object.fromEntries(room.players.map((p) => [p.id, MAX_LIVES]));
  room.lastWrongGuess = {};

  const firstPlayer = room.players[Math.floor(Math.random() * room.players.length)];
  room.activePlayerId = firstPlayer.id;

  console.log(
    `Game started in room ${code} — seed: ${starter}, first: ${firstPlayer.name}`
  );

  io.to(code).emit("game_start", {
    solo: room.solo,
    seedPlayer: starter,
    activePlayerId: firstPlayer.id,
    players: room.players.map((p) => ({ id: p.id, name: p.name })),
    turnDuration: TURN_DURATION,
    lives: room.lives,
    maxLives: MAX_LIVES,
  });

  startTurnTimer(io, code, room);
}

module.exports = { handleSocketEvents };
