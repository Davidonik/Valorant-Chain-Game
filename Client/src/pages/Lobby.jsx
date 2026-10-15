import { useEffect, useState } from "react";
import socket from "../socket";
import { FUN_FACTS } from "../funFacts";
import { regionFor } from "../regions";
import RegionPicker from "../components/RegionPicker";

const FACT_INTERVAL = 7000; // ms

// navigator.clipboard is unavailable on non-HTTPS pages and some browsers
function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    if (ok) resolve();
    else reject(new Error("copy failed"));
  });
}

export default function Lobby({ room, onBack, onHostLeft }) {
  const roomCode = room?.code ?? "";
  const players = room?.players ?? [];
  const isHost = room?.hostId === socket.id;
  const host = players.find((p) => p.id === room?.hostId);
  const full = players.length === 2;
  const region = regionFor(room?.region);

  const [copied, setCopied] = useState(null); // null | "ok" | "failed"
  const [revealed, setRevealed] = useState(false); // code hidden until revealed
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * FUN_FACTS.length));

  useEffect(() => {
    const id = setInterval(
      () => setFactIndex((i) => (i + 1) % FUN_FACTS.length),
      FACT_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Host left or closed the page — send the guest back to the menu
    socket.on("opponent_left", onHostLeft);
    return () => socket.off("opponent_left", onHostLeft);
  }, [onHostLeft]);

  function copyCode() {
    copyText(roomCode)
      .then(() => setCopied("ok"))
      .catch(() => setCopied("failed"));
    setTimeout(() => setCopied(null), 2000);
  }

  const hint = {
    ok: "Copied!",
    failed: revealed
      ? "Couldn't copy - select the code and copy it manually"
      : "Couldn't copy - show the code and copy it manually",
  }[copied] ?? "The code is hidden - copy it without showing it";

  return (
    <div className="page lobby-page">
      <h1 className="title">
        {full ? "Ready to play" : "Waiting for opponent…"}
      </h1>
      <p className="subtitle">
        {full
          ? isHost ? "Start the game when you're both ready" : `Waiting for ${host?.name ?? "the host"} to start…`
          : "Share this code with your friend"}
      </p>

      <div className="card">
        {isHost ? (
          <div className="lobby-region-select">
            <span className="chain-label">Region</span>
            <RegionPicker
              value={room?.region ?? ""}
              onChange={(value) => socket.emit("set_region", { region: value || null })}
            />
          </div>
        ) : (
          <div className="lobby-region">
            <span className="region-icon">{region.icon}</span>
            <div>
              <span className="chain-label">Region</span>
              <div className="lobby-region-name">{region.label}</div>
            </div>
          </div>
        )}

        <ul className="lobby-players">
          {players.map((p) => (
            <li key={p.id} className="lobby-player">
              <span>{p.name}{p.id === socket.id ? " (you)" : ""}</span>
              {p.id === room?.hostId && <span className="chain-label">Host</span>}
            </li>
          ))}
          {!full && <li className="lobby-player empty">Waiting for a player…</li>}
        </ul>

        {isHost && full && (
          <button className="btn btn-primary" onClick={() => socket.emit("start_game")}>
            Start Game
          </button>
        )}
      </div>

      <div className="fun-fact">
        <span className="chain-label">Did you know?</span>
        <p key={factIndex} className="fun-fact-text">{FUN_FACTS[factIndex]}</p>
      </div>

      {isHost && !full && (
      <div className="card">
        <div className={`room-code ${revealed ? "" : "hidden"}`}>
          {revealed ? roomCode : "•".repeat(roomCode.length)}
        </div>
        <div className="btn-row code-actions">
          <button className="btn btn-secondary" onClick={() => setRevealed((r) => !r)}>
            {revealed ? "Hide Code" : "Show Code"}
          </button>
          <button className="btn btn-primary" onClick={copyCode}>
            Copy Code
          </button>
        </div>
        <p className={`hint ${copied === "ok" ? "copied" : ""}`}>{hint}</p>
        <div className="spinner" />
      </div>
      )}

      <button className="btn btn-ghost" onClick={onBack}>Leave Room</button>
    </div>
  );
}
