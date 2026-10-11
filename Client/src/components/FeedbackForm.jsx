import { useState } from "react";
import socket from "../socket";

const TYPES = ["Bug", "Add a player", "Feature", "Other"];

const PLACEHOLDERS = {
  "Bug": "What happened, and what did you expect?",
  "Add a player": "Player name, and the teams and teammates they played with",
  "Feature": "What would you like to see?",
  "Other": "Tell us anything",
};

export default function FeedbackForm() {
  const [type, setType] = useState(TYPES[0]);
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    if (!message.trim()) return setError("Write a message first.");
    setLoading(true);
    setError("");
    socket
      .timeout(8000)
      .emit("submit_feedback", { type, message: message.trim(), contact: contact.trim() }, (err, res) => {
        setLoading(false);
        if (err) return setError("Could not reach the server. Try again.");
        if (res.success) {
          setSent(true);
        } else {
          setError(res.error || "Could not send feedback.");
        }
      });
  }

  if (sent) {
    return <p className="subtitle">Thanks — your feedback was sent!</p>;
  }

  return (
    <>
      <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
        {TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <textarea
        className="input feedback-message"
        placeholder={PLACEHOLDERS[type]}
        value={message}
        maxLength={1000}
        rows={5}
        onChange={(e) => { setMessage(e.target.value); setError(""); }}
      />
      <input
        className="input"
        type="text"
        placeholder="Email or Discord (optional, for a reply)"
        value={contact}
        maxLength={100}
        onChange={(e) => setContact(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
        {loading ? "Sending…" : "Send Feedback"}
      </button>
      {error && <p className="error">{error}</p>}
    </>
  );
}
