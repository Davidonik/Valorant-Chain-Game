import { useEffect, useRef, useState } from "react";
import socket from "../socket";
import Timer from "../components/Timer";
import Chain from "../components/Chain";

export default function Game({ playerName, roomCode, initialGameState, onGameOver }) {
  const [gameState, setGameState] = useState(initialGameState);
  const [chain, setChain] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [availableCount, setAvailableCount] = useState(null);
  const [timerKey, setTimerKey] = useState(0); // increment to reset timer
  const inputRef = useRef(null);

  const myId = socket.id;
  const isMyTurn = gameState?.activePlayerId === myId;
  const seedPlayer = gameState?.seedPlayer;
  const turnDuration = gameState?.turnDuration ?? 15;

  // Current player in chain (last submitted, or seed)
  const currentPlayer =
    chain.length > 0 ? chain[chain.length - 1].canonicalName : seedPlayer;

  const players = gameState?.players ?? [];
  const opponent = players.find((p) => p.id !== myId);
  const me = players.find((p) => p.id === myId);

  useEffect(() => {
    // Restore chain if re-entering game after rematch
    if (initialGameState) {
      setGameState(initialGameState);
      setChain([]);
      setInput("");
      setMessage("");
      setTimerKey((k) => k + 1);
    }
  }, [initialGameState]);

  useEffect(() => {
    function onValidMove(data) {
      setChain(data.chain);
      setAvailableCount(data.availableCount);
      setGameState((prev) => ({ ...prev, activePlayerId: data.nextActivePlayerId }));
      setInput("");
      setMessage("");
      setTimerKey((k) => k + 1);

      if (data.nextActivePlayerId === myId) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }

    function onInvalidMove({ reason, input: bad }) {
      const msgs = {
        PLAYER_NOT_FOUND: `"${bad}" — player not found.`,
        ALREADY_USED: `"${bad}" has already been used.`,
        NOT_TEAMMATES: `"${bad}" was not a teammate of ${currentPlayer}.`,
      };
      setMessage(msgs[reason] || `Invalid: ${reason}`);
    }

    function onNotYourTurn() {
      setMessage("It's not your turn!");
    }

    function onGameOverEvent(data) {
      onGameOver(data);
    }

    function onOpponentDisconnected({ disconnectedName }) {
      setMessage(`${disconnectedName} disconnected. Game ended.`);
      setTimeout(() => onGameOver({ reason: "disconnect", disconnectedName }), 2000);
    }

    socket.on("valid_move", onValidMove);
    socket.on("invalid_move", onInvalidMove);
    socket.on("not_your_turn", onNotYourTurn);
    socket.on("game_over", onGameOverEvent);
    socket.on("opponent_disconnected", onOpponentDisconnected);

    return () => {
      socket.off("valid_move", onValidMove);
      socket.off("invalid_move", onInvalidMove);
      socket.off("not_your_turn", onNotYourTurn);
      socket.off("game_over", onGameOverEvent);
      socket.off("opponent_disconnected", onOpponentDisconnected);
    };
  }, [currentPlayer, myId, onGameOver]);

  // Focus input when it becomes my turn
  useEffect(() => {
    if (isMyTurn) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isMyTurn]);

  function submit() {
    const trimmed = input.trim();
    if (!trimmed || !isMyTurn) return;
    socket.emit("submit_player", { input: trimmed });
  }

  function handleKey(e) {
    if (e.key === "Enter") submit();
  }

  const turnLabel = isMyTurn
    ? "Your turn"
    : `${opponent?.name ?? "Opponent"}'s turn`;

  return (
    <div className="page game-page">
      {/* Header row */}
      <div className="game-header">
        <div className="player-badge me">{me?.name ?? playerName}</div>
        <div className="vs-badge">VS</div>
        <div className="player-badge opp">{opponent?.name ?? "Opponent"}</div>
      </div>

      {/* Timer */}
      <Timer
        key={timerKey}
        duration={turnDuration}
        isMyTurn={isMyTurn}
      />

      {/* Turn indicator */}
      <div className={`turn-label ${isMyTurn ? "my-turn" : "their-turn"}`}>
        {turnLabel}
      </div>

      {/* Current player to link from */}
      <div className="current-player-box">
        Name a teammate of <span className="highlight">{currentPlayer}</span>
        {availableCount !== null && (
          <span className="avail-count"> ({availableCount} left)</span>
        )}
      </div>

      {/* Input */}
      {isMyTurn && (
        <div className="input-row">
          <input
            ref={inputRef}
            className="input game-input"
            type="text"
            placeholder="Type a player name…"
            value={input}
            onChange={(e) => { setInput(e.target.value); setMessage(""); }}
            onKeyDown={handleKey}
          />
          <button className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      )}

      {message && <p className="game-message">{message}</p>}

      {/* Chain */}
      <Chain chain={chain} seedPlayer={seedPlayer} myId={myId} players={players} />
    </div>
  );
}
