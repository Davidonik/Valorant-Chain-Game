import { useState } from "react";
import socket from "../socket";
import RegionPicker from "../components/RegionPicker";

export default function Home({ onJoined, notice }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [mode, setMode] = useState(null); // "create" | "join"
  const [region, setRegion] = useState(""); // "" = any region
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCreate() {
    if (!name.trim()) return setError("Enter your name first.");
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

  function handleJoin() {
    if (!name.trim()) return setError("Enter your name first.");
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
        <input
          className="input"
          type="text"
          placeholder="Your name"
          value={name}
          maxLength={20}
          onChange={(e) => { setName(e.target.value); setError(""); }}
        />

        {!mode && (
          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => setMode("create")}>
              Create Room
            </button>
            <button className="btn btn-secondary" onClick={() => setMode("join")}>
              Join Room
            </button>
          </div>
        )}

        {mode === "create" && (
          <>
            <RegionPicker value={region} onChange={setRegion} />
            <button className="btn btn-primary" onClick={handleCreate} disabled={loading}>
              {loading ? "Creating…" : "Create Room"}
            </button>
            <button className="btn btn-ghost" onClick={() => setMode(null)}>Back</button>
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
            <button className="btn btn-ghost" onClick={() => setMode(null)}>Back</button>
          </>
        )}

        {error && <p className="error">{error}</p>}
        {notice && !error && <p className="notice">{notice}</p>}
      </div>
    </div>
  );
}
