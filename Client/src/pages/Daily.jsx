import { useEffect, useMemo, useRef, useState } from "react";
import socket from "../socket";
import Hearts from "../components/Hearts";
import { localDate } from "../dates";

const MAX_LIVES = 3;
const MAX_SUGGESTIONS = 6;
const STORAGE_PREFIX = "valochain-daily-";

function emptyProgress() {
  return { found: [], wrong: [], lives: MAX_LIVES, hintUsed: false }; // found: [{ index, name, teams }]
}

function loadProgress(date) {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_PREFIX + date));
    if (saved && Array.isArray(saved.found) && Array.isArray(saved.wrong)) return saved;
  } catch {
    // storage blocked or corrupt - start fresh
  }
  return emptyProgress();
}

function saveProgress(date, progress) {
  try {
    localStorage.setItem(STORAGE_PREFIX + date, JSON.stringify(progress));
  } catch {
    // storage blocked - progress just won't survive a reload
  }
}

function timeUntilMidnight(now) {
  const d = new Date(now);
  const midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  const secs = Math.max(0, Math.floor((midnight - d) / 1000));
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(Math.floor(secs / 3600))}:${pad(Math.floor(secs / 60) % 60)}:${pad(secs % 60)}`;
}

export default function Daily({ onHome }) {
  const [now, setNow] = useState(Date.now());
  const [date, setDate] = useState(() => localDate());
  const [puzzle, setPuzzle] = useState(null);       // { number, player, slots, teams }
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(() => loadProgress(date));
  const [answers, setAnswers] = useState(null);     // revealed once the game ends
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(null);     // { text, good }
  const [allPlayers, setAllPlayers] = useState([]);
  const [highlight, setHighlight] = useState(-1);
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState("");
  const [teamsAfterGame, setTeamsAfterGame] = useState(false); // shown after the end - no 💡
  const inputRef = useRef(null);

  const total = puzzle?.slots.length ?? 0;
  const done = !!puzzle && (progress.lives <= 0 || progress.found.length >= total);
  // Teams stay hidden everywhere until the player asks for them
  const showTeams = progress.hintUsed || teamsAfterGame;
  const foundByIndex = useMemo(
    () => new Map(progress.found.map((f) => [f.index, f])),
    [progress.found]
  );

  // Clock for the countdown, and to roll over to the new puzzle at midnight
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const today = localDate(new Date(now));
  useEffect(() => {
    if (today !== date) setDate(today);
  }, [today, date]);

  useEffect(() => {
    socket.emit("get_player_names", (names) => setAllPlayers(names));
  }, []);

  useEffect(() => {
    let cancelled = false;
    setPuzzle(null);
    setError("");
    setAnswers(null);
    setMessage(null);
    setTeamsAfterGame(false);
    setProgress(loadProgress(date));

    socket.emit("daily_get", { date }, (res) => {
      if (cancelled) return;
      if (res.success) setPuzzle(res);
      else setError(res.error || "Could not load today's challenge.");
    });
    return () => { cancelled = true; };
  }, [date]);

  useEffect(() => {
    if (!done || answers) return;
    socket.emit("daily_reveal", { date }, (res) => {
      if (res.success) setAnswers(res.answers);
    });
  }, [done, answers, date]);

  useEffect(() => {
    if (puzzle && !done) setTimeout(() => inputRef.current?.focus(), 100);
  }, [puzzle, done]);

  const suggestions = useMemo(() => {
    const typed = input.trim().toLowerCase();
    if (!typed) return [];
    const used = new Set([
      puzzle?.player,
      ...progress.found.map((f) => f.name),
      ...progress.wrong,
    ]);
    const matches = allPlayers.filter(
      (p) => !used.has(p) && p.toLowerCase().includes(typed)
    );
    const startsWith = matches.filter((p) => p.toLowerCase().startsWith(typed));
    const rest = matches.filter((p) => !p.toLowerCase().startsWith(typed));
    return [...startsWith, ...rest].slice(0, MAX_SUGGESTIONS);
  }, [input, allPlayers, progress, puzzle]);

  function update(next) {
    setProgress(next);
    saveProgress(date, next);
  }

  function submit(value = input) {
    const guess = value.trim();
    if (!guess || done || pending) return;
    setPending(true);

    socket.emit("daily_guess", { date, guess }, (res) => {
      setPending(false);
      setInput("");
      setHighlight(-1);

      if (!res.success) {
        setMessage({ text: res.error || "Something went wrong." });
      } else if (res.result === "not_found") {
        setMessage({ text: `"${guess}", player not found.` });
      } else if (res.result === "correct") {
        if (foundByIndex.has(res.index)) {
          setMessage({ text: `You already found ${res.name}.` });
        } else {
          update({
            ...progress,
            found: [...progress.found, { index: res.index, name: res.name, teams: res.teams }],
          });
          setMessage({ text: showTeams ? `${res.name} - ${res.teams}` : `${res.name} ✓`, good: true });
        }
      } else if (progress.wrong.includes(res.name)) {
        setMessage({ text: `You already guessed ${res.name}.` });
      } else {
        update({ ...progress, wrong: [...progress.wrong, res.name], lives: progress.lives - 1 });
        setMessage({ text: `${res.name} was not a teammate of ${puzzle.player}.` });
      }
    });
  }

  function handleKey(e) {
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setHighlight((h) => (h + 1) % suggestions.length);
    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
      e.preventDefault();
      setHighlight((h) => (h <= 0 ? suggestions.length - 1 : h - 1));
    } else if (e.key === "Enter") {
      submit(suggestions[highlight] ?? input);
    }
  }

  const score = progress.found.length;
  const shareText = puzzle
    ? `ValoChain Daily #${puzzle.number} - ${score}/${total}${progress.hintUsed ? " 💡" : ""}\n` +
      "🟩".repeat(score) + "🟥".repeat(total - score)
    : "";

  async function share() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied("Copied to clipboard!");
    } catch {
      setCopied("Couldn't copy — select the text above instead.");
    }
  }

  if (error) {
    return (
      <div className="page">
        <p className="error">{error}</p>
        <button className="btn btn-ghost" onClick={onHome}>Main Menu</button>
      </div>
    );
  }

  if (!puzzle) {
    return <div className="page"><p className="subtitle">Loading today's challenge…</p></div>;
  }

  return (
    <div className="page daily-page">
      <div className="daily-header">
        <span className="chain-label">Daily #{puzzle.number}</span>
        <Hearts lives={Math.max(0, progress.lives)} maxLives={MAX_LIVES} />
      </div>

      <div className="current-player-box">
        Name the teammates of <span className="highlight">{puzzle.player}</span>
        <span className="avail-count"> ({score}/{total} found)</span>
      </div>

      {showTeams ? (
        <div className="daily-hint">
          <span className="chain-label">{puzzle.player}'s teams</span>
          <ul className="missed-list">
            {puzzle.teams.map((team) => (
              <li key={team} className="missed-item">{team}</li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          className="btn btn-secondary"
          onClick={() => (done ? setTeamsAfterGame(true) : update({ ...progress, hintUsed: true }))}
        >
          💡 Show teams
        </button>
      )}

      <ul className="daily-grid">
        {puzzle.slots.map((letter, i) => {
          const found = foundByIndex.get(i);
          const missed = done && !found ? answers?.[i] : null;
          return (
            <li key={i} className={`daily-slot ${found ? "found" : ""} ${missed ? "missed" : ""}`}>
              {found || missed ? (
                <>
                  <span className="daily-name">{(found ?? missed).name}</span>
                  {showTeams && <span className="chain-meta">{(found ?? missed).teams}</span>}
                </>
              ) : (
                <span className="daily-letter">{letter}</span>
              )}
            </li>
          );
        })}
      </ul>

      {!done && (
        <>
          <div className="input-row">
            <input
              ref={inputRef}
              className="input game-input"
              type="text"
              placeholder="Type a teammate's name…"
              value={input}
              onChange={(e) => { setInput(e.target.value); setMessage(null); setHighlight(-1); }}
              onKeyDown={handleKey}
            />
            <button className="btn btn-primary" onClick={() => submit()} disabled={pending}>
              Guess
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((name, i) => (
                <li key={name}>
                  <button
                    className={`suggestion ${i === highlight ? "active" : ""}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => submit(name)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {message && (
        <p className={`game-message ${message.good ? "good" : ""}`}>{message.text}</p>
      )}

      {done && (
        <div className="card daily-result">
          <div className={`result-banner ${score === total ? "win" : "lose"}`}>
            {score === total ? "Perfect!" : `${score}/${total}`}
          </div>
          <pre className="share-box">{shareText}</pre>
          <button className="btn btn-primary" onClick={share}>Share result</button>
          {copied && <p className="notice">{copied}</p>}
          <p className="subtitle">Next challenge in {timeUntilMidnight(now)}</p>
        </div>
      )}

      <button className="btn btn-ghost" onClick={onHome}>Main Menu</button>
    </div>
  );
}
