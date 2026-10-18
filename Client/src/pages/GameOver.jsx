import { useEffect, useState } from "react";
import socket from "../socket";
import Chain from "../components/Chain";

const SOLO_BEST_KEY = "valochain-solo-best";

function readSoloBest() {
  try {
    return Number(localStorage.getItem(SOLO_BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

export default function GameOver({ result, onHome }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [opponentLeft, setOpponentLeft] = useState(false);

  const myId = socket.id;
  const iWon = result?.winnerId === myId;
  const isDisconnect = result?.reason === "disconnect";
  const canRematch = !isDisconnect && !opponentLeft;

  // Solo: score is the chain length, best kept in this browser
  const solo = !!result?.solo;
  const chainLength = result?.chain?.length ?? 0;
  const [prevBest] = useState(readSoloBest);
  const newBest = solo && chainLength > prevBest;

  useEffect(() => {
    if (!newBest) return;
    try {
      localStorage.setItem(SOLO_BEST_KEY, String(chainLength));
    } catch {
      // storage blocked - best score just isn't kept
    }
  }, [newBest, chainLength]);

  useEffect(() => {
    function onRematchVote({ votes: v }) {
      setVotes(v);
    }
    function onOpponentLeft() {
      if (!result?.solo) setOpponentLeft(true); // solo has no opponent
    }
    socket.on("rematch_vote", onRematchVote);
    socket.on("opponent_left", onOpponentLeft);
    return () => {
      socket.off("rematch_vote", onRematchVote);
      socket.off("opponent_left", onOpponentLeft);
    };
  }, [result?.solo]);

  function handleRematch() {
    if (voted) return;
    setVoted(true);

    // Solo: start a fresh game instead of reusing the old room, which may be
    // gone (expired, server restarted, or the connection dropped and came back)
    if (solo) {
      socket.emit("create_solo", { region: result?.region ?? null }, (res) => {
        if (!res?.success) setVoted(false);
      });
      return;
    }
    socket.emit("rematch_request");
  }

  const lastPlayer = result?.chain?.at(-1)?.canonicalName ?? result?.seedPlayer;
  const reasonText = (solo
    ? {
        timeout: "You ran out of time",
        no_moves: `Dead end - every teammate of ${lastPlayer} was already used`,
        out_of_lives: "You ran out of lives",
      }
    : {
        timeout: `${result?.loserName} ran out of time`,
        no_moves: `${result?.loserName} had no valid moves left`,
        out_of_lives: `${result?.loserName} ran out of lives`,
        disconnect: `${result?.disconnectedName ?? "Opponent"} disconnected`,
      })[result?.reason] ?? "";

  return (
    <div className="page gameover-page">
      {solo ? (
        <div className={`result-banner ${newBest ? "win" : "lose"}`}>
          Chain of {chainLength}
        </div>
      ) : (
        <div className={`result-banner ${iWon ? "win" : "lose"}`}>
          {isDisconnect ? "Opponent left" : iWon ? "You win!" : "You lose"}
        </div>
      )}

      <p className="reason-text">{reasonText}</p>
      {solo && (
        <p className="reason-text">
          {newBest ? "New personal best!" : `Personal best: ${prevBest}`}
        </p>
      )}

      {canRematch && (
        <div className="rematch-row">
          <button
            className={`btn btn-primary ${voted ? "voted" : ""}`}
            onClick={handleRematch}
            disabled={voted}
          >
            {solo
              ? voted ? "Starting…" : "Play Again"
              : voted ? `Waiting… (${votes}/2)` : "Rematch"}
          </button>
          <button className="btn btn-ghost" onClick={onHome}>Main Menu</button>
        </div>
      )}

      {!canRematch && (
        <>
          {opponentLeft && <p className="reason-text">Your opponent left - no rematch available.</p>}
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
