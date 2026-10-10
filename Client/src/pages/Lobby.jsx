export default function Lobby({ playerName, roomCode, onBack }) {
  function copyCode() {
    navigator.clipboard.writeText(roomCode).catch(() => {});
  }

  return (
    <div className="page lobby-page">
      <h1 className="title">Waiting for opponent…</h1>
      <p className="subtitle">Share this code with your friend</p>

      <div className="card">
        <div className="room-code" onClick={copyCode} title="Click to copy">
          {roomCode}
        </div>
        <p className="hint">Click the code to copy it</p>
        <div className="spinner" />
        <p className="waiting-text">Hi <strong>{playerName}</strong> — game starts as soon as they join!</p>
      </div>

      <button className="btn btn-ghost" onClick={onBack}>Leave Room</button>
    </div>
  );
}
