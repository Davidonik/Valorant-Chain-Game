const { PLAYERS } = require("./players");

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

function findPlayer(input) {
  const n = normalize(input);
  const all = Object.keys(PLAYERS);

  const exact = all.find((p) => normalize(p) === n);
  if (exact) return exact;

  const sub = all.find((p) => normalize(p).includes(n));
  if (sub) return sub;

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

function getRandomStarter() {
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
