import { useEffect, useState } from "react";
import socket from "../socket";
import RegionPicker from "../components/RegionPicker";
import { localDate } from "../dates";

export default function Home({ onJoined, onDaily, notice }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [mode, setMode] = useState(null); // "create" | "join" | "solo"
  const [region, setRegion] = useState(""); // "" = any region
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState(false); // shown above the name box
  const [loading, setLoading] = useState(false);
  const [yesterday, setYesterday] = useState(null); // yesterday's daily player

  useEffect(() => {
    // Fails quietly before there was a yesterday (launch day)
    socket.emit("daily_get", { date: localDate(new Date(), -1) }, (res) => {
      if (res.success) setYesterday(res.player);
    });
  }, []);

  // Errors belong to the screen they were shown on
  function switchMode(next) {
    setMode(next);
    setError("");
    setNameError(false);
  }

  function handleCreate() {
    if (!name.trim()) return setNameError(true);
    setLoading(true);
    setError("");
    socket.emit("create_room", { playerName: name.trim(), region: region || null }, (res) => {
      setLoading(false);
      if (res.success) {
        onJoined({ name: name.trim(), room: res.room });
      } else {
        setError(res.error || "Could not create room.");
      }
    });
  }

  // The server sends game_start right after, which App turns into the game page
  function handleSolo() {
    setLoading(true);
    setError("");
    socket.emit("create_solo", { region: region || null }, (res) => {
      setLoading(false);
      if (!res.success) setError(res.error || "Could not start a solo game.");
    });
  }

  function handleJoin() {
    if (!name.trim()) return setNameError(true);
    if (!code.trim()) return setError("Enter a room code.");
    setLoading(true);
    setError("");
    socket.emit("join_room", { playerName: name.trim(), code: code.trim() }, (res) => {
      setLoading(false);
      if (res.success) {
        onJoined({ name: name.trim(), room: res.room });
      } else {
        setError(res.error || "Could not join room.");
      }
    });
  }

  return (
    <div className="page home-page">
      <h1 className="title">ValoChain</h1>
      <p className="subtitle">Chain Valorant pro players by their teammates</p>

      <div className="card">
        {/* Only 1v1 needs a name - the opponent sees it */}
        {(mode === "create" || mode === "join") && (
          <>
            {nameError && <p className="error">Enter your name first.</p>}
            <input
              className="input"
              type="text"
              placeholder="Your name"
              value={name}
              maxLength={20}
              autoFocus
              onChange={(e) => { setName(e.target.value); setError(""); setNameError(false); }}
            />
          </>
        )}

        {!mode && (
          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => switchMode("create")}>
              Create Room
            </button>
            <button className="btn btn-secondary" onClick={() => switchMode("join")}>
              Join Room
            </button>
          </div>
        )}

        {!mode && (
          <button className="btn btn-secondary" onClick={() => switchMode("solo")}>
            Solo Practice
          </button>
        )}

        {mode === "solo" && (
          <>
            <p className="subtitle">Chain players on your own - how long can you go?</p>
            <RegionPicker value={region} onChange={setRegion} />
            <button className="btn btn-primary" onClick={handleSolo} disabled={loading}>
              {loading ? "Starting…" : "Start Solo"}
            </button>
            <button className="btn btn-ghost" onClick={() => switchMode(null)}>Back</button>
          </>
        )}

        {mode === "create" && (
          <>
            <RegionPicker value={region} onChange={setRegion} />
            <button className="btn btn-primary" onClick={handleCreate} disabled={loading}>
              {loading ? "Creating…" : "Create Room"}
            </button>
            <button className="btn btn-ghost" onClick={() => switchMode(null)}>Back</button>
          </>
        )}

        {mode === "join" && (
          <>
            <input
              className="input"
              type="text"
              placeholder="Room code (e.g. AB3XK)"
              value={code}
              maxLength={5}
              onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
            />
            <button className="btn btn-primary" onClick={handleJoin} disabled={loading}>
              {loading ? "Joining…" : "Join Room"}
            </button>
            <button className="btn btn-ghost" onClick={() => switchMode(null)}>Back</button>
          </>
        )}

        {error && <p className="error">{error}</p>}
        {notice && !error && <p className="notice">{notice}</p>}
      </div>

      <h2 className="title title-secondary">Daily Pro Player</h2>
      <p className="subtitle">A new pro player every day. Name their teammates just like Worlde.</p>

      <div className="card">
        <button className="btn btn-secondary" onClick={onDaily}>
          Start
        </button>
        {yesterday && (
          <p className="notice">
            Yesterday's featured player: <span className="highlight">{yesterday}</span>
          </p>
        )}
      </div>
    </div>
  );
}
