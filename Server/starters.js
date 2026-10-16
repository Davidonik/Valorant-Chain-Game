// ---------------------------------------------------------------------------
// STARTER POOLS
// Hand-picked players the game can open with, per region.
//
// RULES:
//   - Names must match the spelling in players.js exactly
//   - Names not found in players.js are skipped (a warning is logged on boot)
// ---------------------------------------------------------------------------

const STARTERS = {
  Americas: ["TenZ", "aspas", "Demon1", "yay", "zekken", "Less", "Sacy", "leaf", "johnqt", "Boostio",
            "ShahZaM", "Asuna", "Marved", "FNS", "Victor", "Ethan", "Saadhak", "pANcada", "Zellsis", "C0M", "cauanzin", "bang", "Cryocells"],
  EMEA:     ["ScreaM", "Derke", "Boaster", "Chronicle", "nAts", "cNed", "Alfajer", "Leo", "Jamppi", "Sayf", "crashies", "MiniBoo", "benjyfishy",
            "Shao", "Mistic", "Magnum", "Sheydos", "Zyppan", "mixwell", "ardiis", "Kiles", "Wo0t", "keloqz"],
  Pacific:  ["f0rsakeN", "Jinggg", "something", "MaKo", "Meteor", "t3xture", "d4v41", "Karon", "Munchkin", "Monyet",
            "stax", "Rb", "BuZz", "Zest", "Benkai", "mindfreak", "Laz", "Dep", "SugarZ3ro", "Sayaplayer", "Carpe", "Lakia", "Foxy9"],
  China:    ["ZmjjKK", "nobody", "CHICHOO", "whzy", "Smoggy", "Life", "AAAAY", "Autumn", "BerLIN",
            "S1Mon", "Haodong", "Biank", "Knight", "Yuicaw", "Lysoar", "yosemite", "Flex1n", "Viva", "monk", "coconut", "Abo", "Kai", "LuoK1ng"],
};

module.exports = { STARTERS };
