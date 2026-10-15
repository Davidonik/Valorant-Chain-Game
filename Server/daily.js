const { PLAYERS } = require("./players");
const { findPlayer, getTeammates, getSharedTeams } = require("./gameLogic");

// ---------------------------------------------------------------------------
// DAILY CHALLENGE
// One featured player per calendar day, the same for everyone. The client
// sends its local date ("YYYY-MM-DD") so the puzzle flips at the player's own
// midnight. The answers stay on the server; the client keeps lives/progress.
// ---------------------------------------------------------------------------

const LAUNCH_DATE = "2026-10-15"; // Daily #1
const MIN_TEAMMATES = 5;
const MAX_TEAMMATES = 15;
const DAY_MS = 86_400_000;

// FNV-1a — small, stable string hash
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function daysSinceLaunch(date) {
  return Math.round((Date.parse(date) - Date.parse(LAUNCH_DATE)) / DAY_MS);
}

// Any day since launch, up to today in the furthest-ahead timezone
// (local dates are at most one day ahead of UTC)
function isValidDate(date) {
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const time = Date.parse(date);
  if (Number.isNaN(time) || daysSinceLaunch(date) < 0) return false;
  const todayUtc = Date.parse(new Date().toISOString().slice(0, 10));
  return time - todayUtc <= DAY_MS;
}

// Each player scores hash(date + name) and the lowest score wins the day.
// Adding players to the database only changes a day if the newcomer wins it,
// so past and upcoming puzzles stay put.
function getDailyPlayer(date) {
  let best = null;
  let bestScore = Infinity;
  for (const name of Object.keys(PLAYERS)) {
    const count = getTeammates(name).length;
    if (count < MIN_TEAMMATES || count > MAX_TEAMMATES) continue;
    const score = hash(`${date}|${name}`);
    if (score < bestScore) {
      best = name;
      bestScore = score;
    }
  }
  return best;
}

// "Laz (TH)" -> "Laz": tags added to tell apart players with the same name
function baseName(name) {
  return name.replace(/\s*\([^)]*\)$/, "");
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

function handleDailyEvents(socket) {
  // ── PUZZLE: featured player + first letter of each teammate ──────────────
  socket.on("daily_get", ({ date } = {}, callback) => {
    if (typeof callback !== "function") return;
    if (!isValidDate(date)) return callback({ success: false, error: "Invalid date." });

    const player = getDailyPlayer(date);
    const teammates = getTeammates(player);
    // Every team the featured player shared with a teammate, for the hint
    const teams = [...new Set(teammates.flatMap((t) => getSharedTeams(player, t)))].sort(
      (a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })
    );
    callback({
      success: true,
      date,
      number: daysSinceLaunch(date) + 1,
      player,
      slots: teammates.map((t) => baseName(t).charAt(0).toUpperCase()),
      teams,
    });
  });

  // ── GUESS ────────────────────────────────────────────────────────────────
  socket.on("daily_guess", ({ date, guess } = {}, callback) => {
    if (typeof callback !== "function") return;
    if (!isValidDate(date) || typeof guess !== "string") {
      return callback({ success: false, error: "Invalid guess." });
    }

    const player = getDailyPlayer(date);
    const teammates = getTeammates(player);

    // If several players share the typed name, prefer today's teammate
    const n = normalize(guess);
    const found =
      teammates.find((t) => normalize(t) === n || normalize(baseName(t)) === n) ??
      findPlayer(guess);

    if (!found) return callback({ success: true, result: "not_found" });

    const index = teammates.indexOf(found);
    if (index === -1) return callback({ success: true, result: "wrong", name: found });

    callback({
      success: true,
      result: "correct",
      index,
      name: found,
      teams: getSharedTeams(player, found).join(", "),
    });
  });

  // ── REVEAL: full answer list, shown once the player's game is over ───────
  socket.on("daily_reveal", ({ date } = {}, callback) => {
    if (typeof callback !== "function") return;
    if (!isValidDate(date)) return callback({ success: false, error: "Invalid date." });

    const player = getDailyPlayer(date);
    callback({
      success: true,
      answers: getTeammates(player).map((t) => ({
        name: t,
        teams: getSharedTeams(player, t).join(", "),
      })),
    });
  });
}

module.exports = { handleDailyEvents };
