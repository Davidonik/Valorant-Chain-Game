// ---------------------------------------------------------------------------
// STARTER POOLS
// Hand-picked players the game can open with, per region.
//
// RULES:
//   - Names must match the spelling in players.js exactly
//   - Names not found in players.js are skipped (a warning is logged on boot)
// ---------------------------------------------------------------------------

const STARTERS = {
  Americas: ["TenZ", "aspas", "Demon1", "yay", "zekken", "Less", "Sacy", "leaf", "johnqt", "Boostio"],
  EMEA:     ["Derke", "Boaster", "Chronicle", "Alfajer", "nAts", "cNed", "Leo", "Shao", "MiniBoo", "benjyfishy"],
  APAC:     ["f0rsakeN", "Jinggg", "something", "MaKo", "Meteor", "t3xture", "d4v41", "Karon", "Munchkin", "Monyet"],
  China:    ["ZmjjKK", "nobody", "CHICHOO", "whzy", "Smoggy", "Life", "AAAAY", "Autumn", "BerLIN"],
};

module.exports = { STARTERS };
