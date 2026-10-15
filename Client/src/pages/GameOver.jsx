import { useEffect, useState } from "react";
import socket from "../socket";
import Chain from "../components/Chain";

export default function GameOver({ playerName, roomCode, result, onHome }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [opponentLeft, setOpponentLeft] = useState(false);

  const myId = socket.id;
  const iWon = result?.winnerId === myId;
  const isDisconnect = result?.reason === "disconnect";
  const canRematch = !isDisconnect && !opponentLeft;

  useEffect(() => {
    function onRematchVote({ votes: v }) {
      setVotes(v);
    }
    function onOpponentLeft() {
      setOpponentLeft(true);
    }
    socket.on("rematch_vote", onRematchVote);
    socket.on("opponent_left", onOpponentLeft);
    return () => {
      socket.off("rematch_vote", onRematchVote);
      socket.off("opponent_left", onOpponentLeft);
    };
  }, []);

  function handleRematch() {
    if (voted) return;
    setVoted(true);
    socket.emit("rematch_request");
  }

  const reasonText = {
    timeout: `${result?.loserName} ran out of time`,
    no_moves: `${result?.loserName} had no valid moves left`,
    out_of_lives: `${result?.loserName} ran out of lives`,
    disconnect: `${result?.disconnectedName ?? "Opponent"} disconnected`,
  }[result?.reason] ?? "";

  return (
    <div className="page gameover-page">
      <div className={`result-banner ${iWon ? "win" : "lose"}`}>
        {isDisconnect ? "Opponent left" : iWon ? "You win! 🎉" : "You lose 😔"}
      </div>

      <p className="reason-text">{reasonText}</p>

      {canRematch && (
        <div className="rematch-row">
          <button
            className={`btn btn-primary ${voted ? "voted" : ""}`}
            onClick={handleRematch}
            disabled={voted}
          >
            {voted ? `Waiting… (${votes}/2)` : "Rematch"}
          </button>
          <button className="btn btn-ghost" onClick={onHome}>Main Menu</button>
        </div>
      )}

      {!canRematch && (
        <>
          {opponentLeft && <p className="reason-text">Your opponent left — no rematch available.</p>}
          <button className="btn btn-ghost" onClick={onHome}>Main Menu</button>
        </>
      )}

      {/* Answers the loser could have given */}
      {result?.missedAnswers?.length > 0 && (
        <div className="missed-answers">
          <h3>Teammates of {result.currentPlayer} still available</h3>
          <ul className="missed-list">
            {result.missedAnswers.map((a) => (
              <li key={a.name} className="missed-item">
                <span className="missed-name">{a.name}</span>
                <span className="chain-meta">{a.teams}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Chain recap */}
      {result?.seedPlayer && (
        <div className="chain-recap">
          <h3>Chain recap</h3>
          <Chain
            chain={result.chain}
            seedPlayer={result.seedPlayer}
            myId={myId}
            players={[]}
            readonly
          />
        </div>
      )}
    </div>
  );
}
