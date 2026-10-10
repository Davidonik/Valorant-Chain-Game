const { PLAYERS } = require("./players");
const { STARTERS } = require("./starters");

for (const [region, names] of Object.entries(STARTERS)) {
  const missing = names.filter((p) => !PLAYERS[p]);
  if (missing.length > 0) {
    console.warn(`Starters for ${region} not found in players.js: ${missing.join(", ")}`);
  }
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

function findPlayer(input) {
  if (typeof input !== "string") return null;

  const n = normalize(input);
  if (!n) return null;

  const all = Object.keys(PLAYERS);

  const exact = all.find((p) => normalize(p) === n);
  if (exact) return exact;

  // Only accept a partial name when it points to exactly one player
  const partial = all.filter((p) => normalize(p).includes(n));
  if (partial.length === 1) return partial[0];

  return null;
}

function getSharedTeams(playerA, playerB) {
  const teams = PLAYERS[playerA]?.teammates?.[playerB];
  if (!teams || teams.length === 0) return null;
  return teams;
}

function getTeammates(playerName) {
  return Object.keys(PLAYERS[playerName]?.teammates ?? {});
}

function getRandomStarter(region) {
  const regionPool = (STARTERS[region] ?? []).filter((p) => PLAYERS[p]);
  if (regionPool.length > 0) {
    return regionPool[Math.floor(Math.random() * regionPool.length)];
  }

  // No region chosen (or its pool is empty) — pick from everyone
  const wellConnected = Object.keys(PLAYERS).filter(
    (p) => getTeammates(p).length >= 4
  );
  const pool = wellConnected.length > 0 ? wellConnected : Object.keys(PLAYERS);
  return pool[Math.floor(Math.random() * pool.length)];
}

function validateSubmission(input, currentPlayer, usedPlayers) {
  const found = findPlayer(input);

  if (!found) {
    return { valid: false, reason: "PLAYER_NOT_FOUND" };
  }

  if (usedPlayers.includes(found)) {
    return { valid: false, reason: "ALREADY_USED" };
  }

  const sharedTeams = getSharedTeams(currentPlayer, found);
  if (!sharedTeams) {
    return { valid: false, reason: "NOT_TEAMMATES" };
  }

  return {
    valid: true,
    canonicalName: found,
    teams: sharedTeams.join(", "),
  };
}

module.exports = {
  findPlayer,
  getSharedTeams,
  getTeammates,
  getRandomStarter,
  validateSubmission,
};
