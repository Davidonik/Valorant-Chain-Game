import { useEffect, useState } from "react";
import { FUN_FACTS } from "../funFacts";

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

export default function Lobby({ playerName, roomCode, onBack }) {
  const [copied, setCopied] = useState(null); // null | "ok" | "failed"
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * FUN_FACTS.length));

  useEffect(() => {
    const id = setInterval(
      () => setFactIndex((i) => (i + 1) % FUN_FACTS.length),
      FACT_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  function copyCode() {
    copyText(roomCode)
      .then(() => setCopied("ok"))
      .catch(() => setCopied("failed"));
    setTimeout(() => setCopied(null), 2000);
  }

  const hint = {
    ok: "Copied!",
    failed: "Couldn't copy — select the code and copy it manually",
  }[copied] ?? "Click the code to copy it";

  return (
    <div className="page lobby-page">
      <h1 className="title">Waiting for opponent…</h1>
      <p className="subtitle">Share this code with your friend</p>

      <div className="card">
        <div className="room-code" onClick={copyCode} title="Click to copy">
          {roomCode}
        </div>
        <p className={`hint ${copied === "ok" ? "copied" : ""}`}>{hint}</p>
        <div className="spinner" />
        <p className="waiting-text">Hi <strong>{playerName}</strong> — game starts as soon as they join!</p>
      </div>

      <div className="fun-fact">
        <span className="chain-label">Did you know?</span>
        <p key={factIndex} className="fun-fact-text">{FUN_FACTS[factIndex]}</p>
      </div>

      <button className="btn btn-ghost" onClick={onBack}>Leave Room</button>
    </div>
  );
}
