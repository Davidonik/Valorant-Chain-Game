// ---------------------------------------------------------------------------
// PLAYER DATABASE
// Each player lists their teammates and what team(s) they shared with them.
//
// FORMAT:
//   PlayerName: {
//     teammates: {
//       TeammateName: ["Team1"],           // one team
//       TeammateName: ["Team1", "Team2"],  // multiple teams together
//     }
//   }
//
// RULES:
//   - Relationship must exist on BOTH sides (A lists B, B lists A)
//   - Names must be spelled consistently across all entries
//   - Include anyone who was on the same org roster at the same time
// ---------------------------------------------------------------------------

function sortObjectKeys(obj = {}) {
  return Object.fromEntries(
    Object.entries(obj).sort(([left], [right]) =>
      left.localeCompare(right, undefined, { sensitivity: "base" })
    )
  );
}

const PLAYERS = sortObjectKeys({

  ShahZaM: {
    teammates: {
      SicK:  ["Sentinels"],
      zombs: ["Sentinels"],
      dapr:  ["Sentinels"],
      TenZ:  ["Sentinels"],
    }
  },

  SicK: {
    teammates: {
      ShahZaM: ["Sentinels"],
      zombs:   ["Sentinels"],
      dapr:    ["Sentinels"],
      TenZ:    ["Sentinels"],
    }
  },

  zombs: {
    teammates: {
      ShahZaM: ["Sentinels"],
      SicK:    ["Sentinels"],
      dapr:    ["Sentinels"],
      TenZ:    ["Sentinels"],
    }
  },

  dapr: {
    teammates: {
      ShahZaM: ["Sentinels"],
      SicK:    ["Sentinels"],
      zombs:   ["Sentinels"],
      TenZ:    ["Sentinels"],
    }
  },

  TenZ: {
    teammates: {
      ShahZaM: ["Sentinels"],
      SicK:    ["Sentinels"],
      zombs:   ["Sentinels"],
      dapr:    ["Sentinels"],
      zekken:  ["Sentinels"],
      Sacy:    ["Sentinels"],
      pANcada: ["Sentinels"],
      dephh:   ["Sentinels"],
      Marved:  ["Sentinels"],
    }
  },

  vanity: {
    teammates: {
      mitch:   ["Cloud9"],
      leaf:    ["Cloud9"],
      xeta:    ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      effys:   ["Version1"],
      penny:   ["Version1"],
      Zellsis: ["Version1", "Cloud9"],
      jammyz:  ["Version1"],
      yay:     ["Cloud9"],
    }
  },

  effys: {
    teammates: {
      vanity:  ["Version1"],
      penny:   ["Version1"],
      Zellsis: ["Version1"],
      jammyz:  ["Version1"],
    }
  },

  penny: {
    teammates: {
      vanity:  ["Version1"],
      effys:   ["Version1"],
      Zellsis: ["Version1"],
      jammyz:  ["Version1"],
    }
  },

  Zellsis: {
    teammates: {
      vanity: ["Version1", "Cloud9"],
      effys:  ["Version1"],
      penny:  ["Version1"],
      jammyz: ["Version1"],
      leaf:   ["Cloud9"],
      Xeppaa: ["Cloud9"],
      yay:    ["Cloud9"],
      jakee:  ["Cloud9"],
      runi:   ["Cloud9"],
    }
  },

  jammyz: {
    teammates: {
      vanity:  ["Version1"],
      effys:   ["Version1"],
      penny:   ["Version1"],
      Zellsis: ["Version1"],
    }
  },

  soulcas: {
    teammates: {
      dimasick: ["Team Liquid"],
      Nivera:   ["Team Liquid"],
      Kryptix:  ["Team Liquid"],
      L1NK:     ["Team Liquid"],
      ScreaM:   ["Team Liquid"],
      Jamppi:   ["Team Liquid"],
      Redgar:   ["Team Liquid"],
      nAts:     ["Team Liquid"],
      Sayf:     ["Team Liquid"],
      Harmii:   ["Team Liquid"],
    }
  },

  Kryptix: {
    teammates: {
      soulcas: ["Team Liquid"],
      L1NK:    ["Team Liquid"],
      ScreaM:  ["Team Liquid"],
      Jamppi:  ["Team Liquid"],
    }
  },

  L1NK: {
    teammates: {
      Nivera:  ["Team Liquid"],
      soulcas: ["Team Liquid"],
      Kryptix: ["Team Liquid"],
      ScreaM:  ["Team Liquid"],
      Jamppi:  ["Team Liquid"],
    }
  },

  ScreaM: {
    teammates: {
      dimasick: ["Team Liquid"],
      Nivera:   ["Team Liquid", "Karmine Corp"],
      soulcas:  ["Team Liquid"],
      Kryptix:  ["Team Liquid"],
      L1NK:     ["Team Liquid"],
      Jamppi:   ["Team Liquid"],
      Shin:     ["Karmine Corp"],
      Newzera:  ["Karmine Corp"],
      xms:      ["Karmine Corp"],
      ZE1SH:    ["Karmine Corp"],
    }
  },

  Jamppi: {
    teammates: {
      dimasick: ["Team Liquid"],
      Nivera:   ["Team Liquid"],
      soulcas:  ["Team Liquid"],
      Kryptix:  ["Team Liquid"],
      L1NK:     ["Team Liquid"],
      ScreaM:   ["Team Liquid"],
      Redgar:   ["Team Liquid"],
      nAts:     ["Team Liquid"],
      Sayf:     ["Team Liquid"],
      Harmii:   ["Team Liquid"],
    }
  },

  Boaster: {
    teammates: {
      Enzo:      ["Fnatic"],
      Alfajer:   ["Fnatic"],
      H1ber:     ["Fnatic"],
      Fearoth:   ["Fnatic"],
      Doma:      ["Fnatic"],
      Mistic:    ["Fnatic"],
      Derke:     ["Fnatic"],
      Magnum:    ["Fnatic"],
      Leo:       ["Fnatic"],
      Chronicle: ["Fnatic"],
      kamyk:     ["Fnatic"],
    }
  },

  Doma: {
    teammates: {
      Boaster: ["Fnatic"],
      Mistic:  ["Fnatic"],
      Derke:   ["Fnatic"],
      Magnum:  ["Fnatic"],
    }
  },

  Mistic: {
    teammates: {
      Enzo:    ["Fnatic"],
      Alfajer: ["Fnatic"],
      H1ber:   ["Fnatic"],
      Fearoth: ["Fnatic"],
      Boaster: ["Fnatic"],
      Doma:    ["Fnatic"],
      Derke:   ["Fnatic"],
      Magnum:  ["Fnatic"],
    }
  },

  Derke: {
    teammates: {
      Enzo:      ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Boaster:   ["Fnatic"],
      Doma:      ["Fnatic"],
      Mistic:    ["Fnatic"],
      Magnum:    ["Fnatic"],
      Leo:       ["Fnatic"],
      Chronicle: ["Fnatic"],
      kamyk:     ["Fnatic"],
    }
  },

  Magnum: {
    teammates: {
      H1ber:   ["Fnatic"],
      Fearoth: ["Fnatic"],
      Boaster: ["Fnatic"],
      Doma:    ["Fnatic"],
      Mistic:  ["Fnatic"],
      Derke:   ["Fnatic"],
    }
  },

  solo: {
    teammates: {
      peri:    ["NUTURN Gaming"],
      allow:   ["NUTURN Gaming"],
      Suggest: ["NUTURN Gaming"],
      Lakia:   ["NUTURN Gaming"],
    }
  },

  peri: {
    teammates: {
      solo:    ["NUTURN Gaming"],
      allow:   ["NUTURN Gaming"],
      Suggest: ["NUTURN Gaming"],
      Lakia:   ["NUTURN Gaming"],
    }
  },

  allow: {
    teammates: {
      solo:    ["NUTURN Gaming"],
      peri:    ["NUTURN Gaming"],
      Suggest: ["NUTURN Gaming"],
      Lakia:   ["NUTURN Gaming"],
    }
  },

  Suggest: {
    teammates: {
      solo:    ["NUTURN Gaming"],
      peri:    ["NUTURN Gaming"],
      allow:   ["NUTURN Gaming"],
      Lakia:   ["NUTURN Gaming"],
      takej:   ["DetonatioN FocusMe"],
      Reita:   ["DetonatioN FocusMe"],
      xnfri:   ["DetonatioN FocusMe"],
      Anthem:  ["DetonatioN FocusMe"],
      Seoldam: ["DetonatioN FocusMe"],
    }
  },

  Lakia: {
    teammates: {
      stax:    ["Vision Strikers"],
      Rb:      ["Vision Strikers"],
      k1Ng:    ["Vision Strikers"],
      BuZz:    ["Vision Strikers"],
      MaKo:    ["Vision Strikers"],
      solo:    ["NUTURN Gaming"],
      peri:    ["NUTURN Gaming"],
      allow:   ["NUTURN Gaming"],
      Suggest: ["NUTURN Gaming"],
    }
  },

  frz: {
    teammates: {
      gtnziN:  ["Team Vikings"],
      Saadhak: ["Team Vikings"],
      Sacy:    ["Team Vikings"],
      sutecas: ["Team Vikings"],
      jzz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      RgLM:    ["MIBR"],
      TxoziN:  ["MIBR"],
    }
  },

  gtnziN: {
    teammates: {
      frz:     ["Team Vikings"],
      Saadhak: ["Team Vikings"],
      Sacy:    ["Team Vikings"],
      sutecas: ["Team Vikings"],
    }
  },

  Saadhak: {
    teammates: {
      pANcada:  ["LOUD"],
      aspas:    ["LOUD"],
      Less:     ["LOUD"],
      frz:      ["Team Vikings"],
      gtnziN:   ["Team Vikings"],
      Sacy:     ["Team Vikings", "LOUD"],
      sutecas:  ["Team Vikings"],
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
    }
  },

  Sacy: {
    teammates: {
      pANcada: ["LOUD", "Sentinels"],
      aspas:   ["LOUD"],
      Less:    ["LOUD"],
      frz:     ["Team Vikings"],
      gtnziN:  ["Team Vikings"],
      Saadhak: ["Team Vikings", "LOUD"],
      sutecas: ["Team Vikings"],
      TenZ:    ["Sentinels"],
      zekken:  ["Sentinels"],
      dephh:   ["Sentinels"],
      Marved:  ["Sentinels"],
    }
  },

  sutecas: {
    teammates: {
      frz:     ["Team Vikings"],
      gtnziN:  ["Team Vikings"],
      Saadhak: ["Team Vikings"],
      Sacy:    ["Team Vikings"],
    }
  },

  DeNaro: {
    teammates: {
      fra:    ["Sharks Esports"],
      light:  ["Sharks Esports"],
      gaabxx: ["Sharks Esports"],
      prozin: ["Sharks Esports"],
    }
  },

  fra: {
    teammates: {
      DeNaro: ["Sharks Esports"],
      light:  ["Sharks Esports"],
      gaabxx: ["Sharks Esports"],
      prozin: ["Sharks Esports"],
    }
  },

  light: {
    teammates: {
      DeNaro: ["Sharks Esports"],
      fra:    ["Sharks Esports"],
      gaabxx: ["Sharks Esports"],
      prozin: ["Sharks Esports"],
    }
  },

  gaabxx: {
    teammates: {
      DeNaro: ["Sharks Esports"],
      fra:    ["Sharks Esports"],
      light:  ["Sharks Esports"],
      prozin: ["Sharks Esports"],
    }
  },

  prozin: {
    teammates: {
      DeNaro: ["Sharks Esports"],
      fra:    ["Sharks Esports"],
      light:  ["Sharks Esports"],
      gaabxx: ["Sharks Esports"],
    }
  },

  Klaus: {
    teammates: {
      keznit:  ["KRÜ Esports"],
      Mazino:  ["KRÜ Esports"],
      NagZ:    ["KRÜ Esports"],
      bnj:     ["KRÜ Esports"],
      delz1k:  ["KRÜ Esports"],
      Daveeys: ["KRÜ Esports"],
      Melser:  ["KRÜ Esports"],
      axeddy:  ["KRÜ Esports"],
    }
  },

  Mazino: {
    teammates: {
      keznit:    ["KRÜ Esports"],
      Klaus:     ["KRÜ Esports"],
      NagZ:      ["KRÜ Esports"],
      bnj:       ["KRÜ Esports"],
      delz1k:    ["KRÜ Esports"],
      kiNgg:     ["Leviatán"],
      Tacolilla: ["Leviatán"],
      Shyy:      ["Leviatán"],
      Nozwerr:   ["Leviatán"],
    }
  },

  NagZ: {
    teammates: {
      keznit:  ["KRÜ Esports"],
      Klaus:   ["KRÜ Esports"],
      Mazino:  ["KRÜ Esports"],
      bnj:     ["KRÜ Esports"],
      delz1k:  ["KRÜ Esports"],
      xand:    ["KRÜ Esports"],
      Daveeys: ["KRÜ Esports"],
      Melser:  ["KRÜ Esports"],
      axeddy:  ["KRÜ Esports"],
    }
  },

  bnj: {
    teammates: {
      xand:     ["Ninjas in Pyjamas"],
      Jonn:     ["Ninjas in Pyjamas"],
      bezn1:    ["Ninjas in Pyjamas"],
      cauanzin: ["Ninjas in Pyjamas"],
      Klaus:    ["KRÜ Esports"],
      Mazino:   ["KRÜ Esports"],
      NagZ:     ["KRÜ Esports"],
      delz1k:   ["KRÜ Esports"],
    }
  },

  delz1k: {
    teammates: {
      keznit: ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      Mazino: ["KRÜ Esports"],
      NagZ:   ["KRÜ Esports"],
      bnj:    ["KRÜ Esports"],
    }
  },

  rion: {
    teammates: {
      zepher:   ["Crazy Raccoon"],
      Medusa:   ["Crazy Raccoon"],
      neth:     ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
    }
  },

  zepher: {
    teammates: {
      rion:     ["Crazy Raccoon"],
      Medusa:   ["Crazy Raccoon"],
      neth:     ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
    }
  },

  Medusa: {
    teammates: {
      Bazzi:    ["Crazy Raccoon"],
      ade:      ["Crazy Raccoon"],
      Fisker:   ["Crazy Raccoon"],
      rion:     ["Crazy Raccoon"],
      zepher:   ["Crazy Raccoon"],
      neth:     ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
    }
  },

  neth: {
    teammates: {
      Bazzi:    ["Crazy Raccoon"],
      ade:      ["Crazy Raccoon"],
      Fisker:   ["Crazy Raccoon"],
      rion:     ["Crazy Raccoon"],
      zepher:   ["Crazy Raccoon"],
      Medusa:   ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
    }
  },

  Munchkin: {
    teammates: {
      Bazzi:      ["Crazy Raccoon"],
      ade:        ["Crazy Raccoon"],
      Fisker:     ["Crazy Raccoon"],
      rion:       ["Crazy Raccoon"],
      zepher:     ["Crazy Raccoon"],
      Medusa:     ["Crazy Raccoon"],
      neth:       ["Crazy Raccoon"],
      xeta:       ["T1"],
      ban:        ["T1"],
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      iNTRO:      ["T1"],
    }
  },

  Crws: {
    teammates: {
      Surf:      ["XERXIA"],
      foxz:      ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      sScary:    ["X10 Esports", "X10 CRIT", "XERXIA"],
      sushiboys: ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      Patiphan:  ["X10 Esports", "X10 CRIT"],
      garnetS:   ["TALON"],
      JitboyS:   ["TALON"],
      patt:      ["TALON"],
    }
  },

  foxz: {
    teammates: {
      Surf:      ["XERXIA"],
      Crws:      ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      sScary:    ["X10 Esports", "X10 CRIT", "XERXIA"],
      sushiboys: ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      Patiphan:  ["X10 Esports", "X10 CRIT"],
      garnetS:   ["TALON"],
      JitboyS:   ["TALON"],
      patt:      ["TALON"],
    }
  },

  sScary: {
    teammates: {
      Surf:      ["XERXIA"],
      Crws:      ["X10 Esports", "X10 CRIT", "XERXIA"],
      foxz:      ["X10 Esports", "X10 CRIT", "XERXIA"],
      sushiboys: ["X10 Esports", "X10 CRIT", "XERXIA"],
      Patiphan:  ["X10 Esports", "X10 CRIT"],
    }
  },

  sushiboys: {
    teammates: {
      Surf:     ["XERXIA"],
      Crws:     ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      foxz:     ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      sScary:   ["X10 Esports", "X10 CRIT", "XERXIA"],
      Patiphan: ["X10 Esports", "X10 CRIT"],
      garnetS:  ["TALON"],
      JitboyS:  ["TALON"],
      patt:     ["TALON"],
    }
  },

  Patiphan: {
    teammates: {
      Crws:      ["X10 Esports", "X10 CRIT"],
      foxz:      ["X10 Esports", "X10 CRIT"],
      sScary:    ["X10 Esports", "X10 CRIT"],
      sushiboys: ["X10 Esports", "X10 CRIT"],
    }
  },

  d3ffo: {
    teammates: {
      Chronicle: ["Gambit Esports"],
      nAts:      ["Gambit Esports"],
      Redgar:    ["Gambit Esports"],
      Sheydos:   ["Gambit Esports"],
    }
  },

  Chronicle: {
    teammates: {
      d3ffo:   ["Gambit Esports"],
      nAts:    ["Gambit Esports"],
      Redgar:  ["Gambit Esports"],
      Sheydos: ["Gambit Esports"],
      Boaster: ["Fnatic"],
      Derke:   ["Fnatic"],
      Alfajer: ["Fnatic"],
      Leo:     ["Fnatic"],
      kamyk:   ["Fnatic"],
    }
  },

  nAts: {
    teammates: {
      d3ffo:     ["Gambit Esports"],
      Chronicle: ["Gambit Esports"],
      Redgar:    ["Gambit Esports", "Team Liquid"],
      Sheydos:   ["Gambit Esports"],
      soulcas:   ["Team Liquid"],
      Jamppi:    ["Team Liquid"],
      Sayf:      ["Team Liquid"],
      Harmii:    ["Team Liquid"],
    }
  },

  Redgar: {
    teammates: {
      d3ffo:     ["Gambit Esports"],
      Chronicle: ["Gambit Esports"],
      nAts:      ["Gambit Esports", "Team Liquid"],
      Sheydos:   ["Gambit Esports"],
      soulcas:   ["Team Liquid"],
      Jamppi:    ["Team Liquid"],
      Sayf:      ["Team Liquid"],
      Harmii:    ["Team Liquid"],
    }
  },

  Sheydos: {
    teammates: {
      d3ffo:      ["Gambit Esports"],
      Chronicle:  ["Gambit Esports"],
      nAts:       ["Gambit Esports"],
      Redgar:     ["Gambit Esports"],
      koldamenta: ["KOI"],
      trexx:      ["KOI"],
      Wolfen:     ["KOI"],
      starxo:     ["KOI"],
    }
  },

  pAura: {
    teammates: {
      Turko: ["SuperMassive Blaze"],
      russ:  ["SuperMassive Blaze"],
      Izzy:  ["SuperMassive Blaze"],
      Brave: ["SuperMassive Blaze"],
    }
  },

  Turko: {
    teammates: {
      pAura:         ["SuperMassive Blaze"],
      russ:          ["SuperMassive Blaze"],
      Izzy:          ["SuperMassive Blaze"],
      Brave:         ["SuperMassive Blaze", "BBL Esports"],
      AsLanM4shadoW: ["BBL Esports"],
      QutionerX:     ["BBL Esports"],
      SouhcNi:       ["BBL Esports"],
    }
  },

  russ: {
    teammates: {
      pAura: ["SuperMassive Blaze"],
      Turko: ["SuperMassive Blaze"],
      Izzy:  ["SuperMassive Blaze"],
      Brave: ["SuperMassive Blaze"],
    }
  },

  Izzy: {
    teammates: {
      pAura: ["SuperMassive Blaze"],
      Turko: ["SuperMassive Blaze"],
      russ:  ["SuperMassive Blaze"],
      Brave: ["SuperMassive Blaze"],
    }
  },

  Brave: {
    teammates: {
      pAura:         ["SuperMassive Blaze"],
      Turko:         ["SuperMassive Blaze", "BBL Esports"],
      russ:          ["SuperMassive Blaze"],
      Izzy:          ["SuperMassive Blaze"],
      AsLanM4shadoW: ["BBL Esports"],
      QutionerX:     ["BBL Esports"],
      SouhcNi:       ["BBL Esports"],
    }
  },

  BONECOLD: {
    teammates: {
      cNed:     ["Acend"],
      Kiles:    ["Acend"],
      starxo:   ["Acend"],
      zeek:     ["Acend"],
      ceNder:   ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Destrian: ["Team Vitality"],
      Twisten:  ["Team Vitality"],
    }
  },

  cNed: {
    teammates: {
      BONECOLD: ["Acend"],
      Kiles:    ["Acend"],
      starxo:   ["Acend"],
      zeek:     ["Acend"],
      ANGE1:    ["Natus Vincere"],
      Shao:     ["Natus Vincere"],
      Zyppan:   ["Natus Vincere"],
      SUYGETSU: ["Natus Vincere"],
    }
  },

  Kiles: {
    teammates: {
      BONECOLD: ["Acend"],
      cNed:     ["Acend"],
      starxo:   ["Acend"],
      zeek:     ["Acend"],
    }
  },

  starxo: {
    teammates: {
      BONECOLD:   ["Acend"],
      cNed:       ["Acend"],
      Kiles:      ["Acend"],
      zeek:       ["Acend"],
      koldamenta: ["KOI"],
      Sheydos:    ["KOI"],
      trexx:      ["KOI"],
      Wolfen:     ["KOI"],
    }
  },

  zeek: {
    teammates: {
      BONECOLD: ["Acend"],
      cNed:     ["Acend"],
      Kiles:    ["Acend"],
      starxo:   ["Acend"],
      keloqz:   ["Team Heretics"],
      mixwell:  ["Team Heretics"],
      Boo:      ["Team Heretics"],
      AvovA:    ["Team Heretics"],
      weber:    ["Team Heretics"],
    }
  },

  mixwell: {
    teammates: {
      hoody:      ["G2 Esports"],
      Meddo:      ["G2 Esports"],
      nukkye:     ["G2 Esports"],
      AvovA:      ["G2 Esports", "Team Heretics"],
      koldamenta: ["G2 Esports"],
      keloqz:     ["G2 Esports", "Team Heretics"],
      zeek:       ["Team Heretics"],
      Boo:        ["Team Heretics"],
      weber:      ["Team Heretics"],
    }
  },

  nukkye: {
    teammates: {
      hoody:      ["G2 Esports", "Giants"],
      Meddo:      ["G2 Esports"],
      mixwell:    ["G2 Esports"],
      AvovA:      ["G2 Esports"],
      koldamenta: ["G2 Esports"],
      keloqz:     ["G2 Esports"],
      Fit1nho:    ["Giants"],
      rhyme:      ["Giants"],
      Cloud:      ["Giants"],
    }
  },

  AvovA: {
    teammates: {
      hoody:      ["G2 Esports"],
      Meddo:      ["G2 Esports"],
      mixwell:    ["G2 Esports", "Team Heretics"],
      nukkye:     ["G2 Esports"],
      koldamenta: ["G2 Esports"],
      keloqz:     ["G2 Esports", "Team Heretics"],
      zeek:       ["Team Heretics"],
      Boo:        ["Team Heretics"],
      weber:      ["Team Heretics"],
    }
  },

  koldamenta: {
    teammates: {
      Leo:     ["Guild Esports"],
      Sayf:    ["Guild Esports"],
      Russ:    ["Guild Esports"],
      trexx:   ["Guild Esports", "KOI"],
      mixwell: ["G2 Esports"],
      nukkye:  ["G2 Esports"],
      AvovA:   ["G2 Esports"],
      keloqz:  ["G2 Esports"],
      Sheydos: ["KOI"],
      Wolfen:  ["KOI"],
      starxo:  ["KOI"],
    }
  },

  keloqz: {
    teammates: {
      mixwell:    ["G2 Esports", "Team Heretics"],
      nukkye:     ["G2 Esports"],
      AvovA:      ["G2 Esports", "Team Heretics"],
      koldamenta: ["G2 Esports"],
      zeek:       ["Team Heretics"],
      Boo:        ["Team Heretics"],
      weber:      ["Team Heretics"],
    }
  },

  Hiko: {
    teammates: {
      nitr0: ["100 Thieves"],
      steel: ["100 Thieves"],
      Asuna: ["100 Thieves"],
      Ethan: ["100 Thieves"],
    }
  },

  nitr0: {
    teammates: {
      Hiko:  ["100 Thieves"],
      steel: ["100 Thieves"],
      Asuna: ["100 Thieves"],
      Ethan: ["100 Thieves"],
    }
  },

  steel: {
    teammates: {
      Hiko:  ["100 Thieves"],
      nitr0: ["100 Thieves"],
      Asuna: ["100 Thieves"],
      Ethan: ["100 Thieves"],
    }
  },

  Asuna: {
    teammates: {
      Derrek:    ["100 Thieves"],
      stellar:   ["100 Thieves"],
      Will:      ["100 Thieves"],
      bang:      ["100 Thieves"],
      Hiko:      ["100 Thieves"],
      nitr0:     ["100 Thieves"],
      steel:     ["100 Thieves"],
      Ethan:     ["100 Thieves"],
      Cryocells: ["100 Thieves"],
    }
  },

  Ethan: {
    teammates: {
      Hiko:    ["100 Thieves"],
      nitr0:   ["100 Thieves"],
      steel:   ["100 Thieves"],
      Asuna:   ["100 Thieves"],
      Boostio: ["Evil Geniuses"],
      jawgemo: ["Evil Geniuses"],
      C0M:     ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
      Demon1:  ["Evil Geniuses"],
    }
  },

  FNS: {
    teammates: {
      yay:      ["Team Envy", "OpTic Gaming"],
      Victor:   ["Team Envy", "OpTic Gaming", "NRG"],
      crashies: ["Team Envy", "OpTic Gaming", "NRG"],
      Marved:   ["Team Envy", "OpTic Gaming"],
      s0m:      ["NRG"],
      ardiis:   ["NRG"],
    }
  },

  yay: {
    teammates: {
      FNS:      ["Team Envy", "OpTic Gaming"],
      Victor:   ["Team Envy", "OpTic Gaming"],
      crashies: ["Team Envy", "OpTic Gaming"],
      Marved:   ["Team Envy", "OpTic Gaming"],
      leaf:     ["Cloud9"],
      Xeppaa:   ["Cloud9"],
      vanity:   ["Cloud9"],
      Zellsis:  ["Cloud9"],
    }
  },

  Victor: {
    teammates: {
      FNS:      ["Team Envy", "OpTic Gaming", "NRG"],
      yay:      ["Team Envy", "OpTic Gaming"],
      crashies: ["Team Envy", "OpTic Gaming", "NRG"],
      Marved:   ["Team Envy", "OpTic Gaming"],
      s0m:      ["NRG"],
      ardiis:   ["NRG"],
    }
  },

  crashies: {
    teammates: {
      FNS:    ["Team Envy", "OpTic Gaming", "NRG"],
      yay:    ["Team Envy", "OpTic Gaming"],
      Victor: ["Team Envy", "OpTic Gaming", "NRG"],
      Marved: ["Team Envy", "OpTic Gaming"],
      s0m:    ["NRG"],
      ardiis: ["NRG"],
    }
  },

  Marved: {
    teammates: {
      FNS:      ["Team Envy", "OpTic Gaming"],
      yay:      ["Team Envy", "OpTic Gaming"],
      Victor:   ["Team Envy", "OpTic Gaming"],
      crashies: ["Team Envy", "OpTic Gaming"],
      zekken:   ["Sentinels"],
      Sacy:     ["Sentinels"],
      pANcada:  ["Sentinels"],
      TenZ:     ["Sentinels"],
      dephh:    ["Sentinels"],
    }
  },

  keznit: {
    teammates: {
      Klaus:   ["KRÜ Esports"],
      Mazino:  ["KRÜ Esports"],
      NagZ:    ["KRÜ Esports"],
      delz1k:  ["KRÜ Esports"],
      Daveeys: ["KRÜ Esports"],
      Melser:  ["KRÜ Esports"],
      axeddy:  ["KRÜ Esports"],
    }
  },

  heat: {
    teammates: {
      mwzera:  ["Keyd Stars"],
      JhoW:    ["Keyd Stars"],
      v1xen:   ["Keyd Stars"],
      murizzz: ["Keyd Stars", "MIBR"],
      ntk:     ["Keyd Stars"],
      jzz:     ["MIBR"],
      frz:     ["MIBR"],
      RgLM:    ["MIBR"],
      TxoziN:  ["MIBR"],
    }
  },

  JhoW: {
    teammates: {
      mwzera:  ["Keyd Stars"],
      heat:    ["Keyd Stars"],
      v1xen:   ["Keyd Stars"],
      murizzz: ["Keyd Stars"],
      ntk:     ["Keyd Stars"],
    }
  },

  v1xen: {
    teammates: {
      mwzera:  ["Keyd Stars"],
      heat:    ["Keyd Stars"],
      JhoW:    ["Keyd Stars"],
      murizzz: ["Keyd Stars"],
      ntk:     ["Keyd Stars"],
    }
  },

  murizzz: {
    teammates: {
      mwzera: ["Keyd Stars"],
      heat:   ["Keyd Stars", "MIBR"],
      JhoW:   ["Keyd Stars"],
      v1xen:  ["Keyd Stars"],
      ntk:    ["Keyd Stars"],
      jzz:    ["MIBR"],
      frz:    ["MIBR"],
      RgLM:   ["MIBR"],
      TxoziN: ["MIBR"],
    }
  },

  ntk: {
    teammates: {
      heat:    ["Keyd Stars"],
      JhoW:    ["Keyd Stars"],
      v1xen:   ["Keyd Stars"],
      murizzz: ["Keyd Stars"],
    }
  },

  myssen: {
    teammates: {
      shion:  ["Havan Liberty"],
      pleets: ["Havan Liberty"],
      liazzi: ["Havan Liberty"],
      krain:  ["Havan Liberty"],
    }
  },

  shion: {
    teammates: {
      myssen: ["Havan Liberty"],
      pleets: ["Havan Liberty"],
      liazzi: ["Havan Liberty"],
      krain:  ["Havan Liberty"],
    }
  },

  pleets: {
    teammates: {
      myssen: ["Havan Liberty"],
      shion:  ["Havan Liberty"],
      liazzi: ["Havan Liberty"],
      krain:  ["Havan Liberty"],
    }
  },

  liazzi: {
    teammates: {
      myssen: ["Havan Liberty"],
      shion:  ["Havan Liberty"],
      pleets: ["Havan Liberty"],
      krain:  ["Havan Liberty"],
    }
  },

  krain: {
    teammates: {
      myssen: ["Havan Liberty"],
      shion:  ["Havan Liberty"],
      pleets: ["Havan Liberty"],
      liazzi: ["Havan Liberty"],
    }
  },

  stax: {
    teammates: {
      Lakia: ["Vision Strikers"],
      Rb:    ["Vision Strikers", "DRX"],
      k1Ng:  ["Vision Strikers"],
      BuZz:  ["Vision Strikers", "DRX"],
      MaKo:  ["Vision Strikers", "DRX"],
      Zest:  ["DRX"],
      Foxy9: ["DRX"],
    }
  },

  Rb: {
    teammates: {
      Lakia: ["Vision Strikers"],
      stax:  ["Vision Strikers", "DRX"],
      k1Ng:  ["Vision Strikers"],
      BuZz:  ["Vision Strikers", "DRX"],
      MaKo:  ["Vision Strikers", "DRX"],
      Zest:  ["DRX"],
      Foxy9: ["DRX"],
    }
  },

  k1Ng: {
    teammates: {
      Lakia:   ["Vision Strikers"],
      stax:    ["Vision Strikers"],
      Rb:      ["Vision Strikers"],
      BuZz:    ["Vision Strikers"],
      MaKo:    ["Vision Strikers"],
      Meteor:  ["Gen.G Esports"],
      TS:      ["Gen.G Esports"],
      eKo:     ["Gen.G Esports"],
      Secret:  ["Gen.G Esports"],
      GodDead: ["Gen.G Esports"],
      Sylvan:  ["Gen.G Esports"],
    }
  },

  BuZz: {
    teammates: {
      Lakia: ["Vision Strikers"],
      stax:  ["Vision Strikers", "DRX"],
      Rb:    ["Vision Strikers", "DRX"],
      k1Ng:  ["Vision Strikers"],
      MaKo:  ["Vision Strikers", "DRX"],
      Zest:  ["DRX"],
      Foxy9: ["DRX"],
    }
  },

  MaKo: {
    teammates: {
      Lakia: ["Vision Strikers"],
      stax:  ["Vision Strikers", "DRX"],
      Rb:    ["Vision Strikers", "DRX"],
      k1Ng:  ["Vision Strikers"],
      BuZz:  ["Vision Strikers", "DRX"],
      Zest:  ["DRX"],
      Foxy9: ["DRX"],
    }
  },

  FiveK: {
    teammates: {
      Bunny:     ["F4Q"],
      Efina:     ["F4Q"],
      zunba:     ["F4Q"],
      Esperanza: ["F4Q"],
    }
  },

  Bunny: {
    teammates: {
      FiveK:     ["F4Q"],
      Efina:     ["F4Q"],
      zunba:     ["F4Q"],
      Esperanza: ["F4Q"],
    }
  },

  Efina: {
    teammates: {
      FiveK:     ["F4Q"],
      Bunny:     ["F4Q"],
      zunba:     ["F4Q"],
      Esperanza: ["F4Q"],
    }
  },

  zunba: {
    teammates: {
      FiveK:     ["F4Q"],
      Bunny:     ["F4Q"],
      Efina:     ["F4Q"],
      Esperanza: ["F4Q"],
    }
  },

  Esperanza: {
    teammates: {
      FiveK: ["F4Q"],
      Bunny: ["F4Q"],
      Efina: ["F4Q"],
      zunba: ["F4Q"],
    }
  },

  Laz: {
    teammates: {
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      TENNN:     ["ZETA DIVISION"],
      makiba:    ["ZETA DIVISION"],
      crow:      ["ZETA DIVISION"],
      takej:     ["ZETA DIVISION"],
      Reita:     ["ZETA DIVISION"],
      barce:     ["ZETA DIVISION"],
    }
  },

  crow: {
    teammates: {
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      TENNN:     ["ZETA DIVISION"],
      makiba:    ["ZETA DIVISION"],
      Laz:       ["ZETA DIVISION"],
      takej:     ["ZETA DIVISION"],
      Reita:     ["ZETA DIVISION"],
      barce:     ["ZETA DIVISION"],
    }
  },

  takej: {
    teammates: {
      makiba:  ["ZETA DIVISION"],
      Laz:     ["ZETA DIVISION"],
      crow:    ["ZETA DIVISION"],
      Reita:   ["ZETA DIVISION", "DetonatioN FocusMe"],
      barce:   ["ZETA DIVISION"],
      xnfri:   ["DetonatioN FocusMe"],
      Anthem:  ["DetonatioN FocusMe"],
      Suggest: ["DetonatioN FocusMe"],
      Seoldam: ["DetonatioN FocusMe"],
    }
  },

  Reita: {
    teammates: {
      makiba:  ["ZETA DIVISION"],
      Laz:     ["ZETA DIVISION"],
      crow:    ["ZETA DIVISION"],
      takej:   ["ZETA DIVISION", "DetonatioN FocusMe"],
      barce:   ["ZETA DIVISION"],
      xnfri:   ["DetonatioN FocusMe"],
      Anthem:  ["DetonatioN FocusMe"],
      Suggest: ["DetonatioN FocusMe"],
      Seoldam: ["DetonatioN FocusMe"],
    }
  },

  barce: {
    teammates: {
      makiba: ["ZETA DIVISION"],
      Laz:    ["ZETA DIVISION"],
      crow:   ["ZETA DIVISION"],
      takej:  ["ZETA DIVISION"],
      Reita:  ["ZETA DIVISION"],
    }
  },

  makiba: {
    teammates: {
      Laz:   ["ZETA DIVISION"],
      crow:  ["ZETA DIVISION"],
      takej: ["ZETA DIVISION"],
      Reita: ["ZETA DIVISION"],
      barce: ["ZETA DIVISION"],
    }
  },

  Bazzi: {
    teammates: {
      Medusa:        ["Crazy Raccoon"],
      ade:           ["Crazy Raccoon"],
      Fisker:        ["Crazy Raccoon"],
      Munchkin:      ["Crazy Raccoon"],
      neth:          ["Crazy Raccoon"],
      SkRossi:       ["Global Esports"],
      AYRIN:         ["Global Esports"],
      t3xture:       ["Global Esports"],
      Monyet:        ["Global Esports"],
      WRONSKI:       ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  ade: {
    teammates: {
      Medusa:   ["Crazy Raccoon"],
      Bazzi:    ["Crazy Raccoon"],
      Fisker:   ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
      neth:     ["Crazy Raccoon"],
    }
  },

  Fisker: {
    teammates: {
      Medusa:   ["Crazy Raccoon"],
      Bazzi:    ["Crazy Raccoon"],
      ade:      ["Crazy Raccoon"],
      Munchkin: ["Crazy Raccoon"],
      neth:     ["Crazy Raccoon"],
    }
  },

  Benkai: {
    teammates: {
      Jinggg:     ["Paper Rex"],
      d4v41:      ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      mindfreak:  ["Paper Rex"],
      shiba:      ["Paper Rex"],
      something:  ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  d4v41: {
    teammates: {
      Jinggg:     ["Paper Rex"],
      Benkai:     ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      mindfreak:  ["Paper Rex"],
      shiba:      ["Paper Rex"],
      something:  ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  f0rsakeN: {
    teammates: {
      Jinggg:     ["Paper Rex"],
      Benkai:     ["Paper Rex"],
      d4v41:      ["Paper Rex"],
      mindfreak:  ["Paper Rex"],
      shiba:      ["Paper Rex"],
      something:  ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  mindfreak: {
    teammates: {
      Jinggg:     ["Paper Rex"],
      Benkai:     ["Paper Rex"],
      d4v41:      ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      shiba:      ["Paper Rex"],
      something:  ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  shiba: {
    teammates: {
      Benkai:    ["Paper Rex"],
      d4v41:     ["Paper Rex"],
      f0rsakeN:  ["Paper Rex"],
      mindfreak: ["Paper Rex"],
    }
  },

  mwzera: {
    teammates: {
      heat:    ["Keyd Stars"],
      JhoW:    ["Keyd Stars"],
      v1xen:   ["Keyd Stars"],
      murizzz: ["Keyd Stars"],
      qck:     ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      mazin:   ["FURIA Esports"],
      dgzin:   ["FURIA Esports"],
    }
  },

  Nivera: {
    teammates: {
      dimasick: ["Team Liquid"],
      soulcas:  ["Team Liquid"],
      L1NK:     ["Team Liquid"],
      ScreaM:   ["Team Liquid", "Karmine Corp"],
      Jamppi:   ["Team Liquid"],
      Shin:     ["Karmine Corp"],
      Newzera:  ["Karmine Corp"],
      xms:      ["Karmine Corp"],
      ZE1SH:    ["Karmine Corp"],
    }
  },

  JessieVash: {
    teammates: {
      DubsteP:   ["Team Secret"],
      BORKUM:    ["Team Secret"],
      Dispenser: ["Team Secret"],
      witz:      ["Team Secret"],
      Jremy:     ["Team Secret"],
      invy:      ["Team Secret"],
      lenne:     ["Team Secret"],
    }
  },

  DubsteP: {
    teammates: {
      JessieVash: ["Team Secret"],
      BORKUM:     ["Team Secret"],
      Dispenser:  ["Team Secret"],
      witz:       ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
      lenne:      ["Team Secret"],
    }
  },

  BORKUM: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      Dispenser:  ["Team Secret"],
      witz:       ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
      lenne:      ["Team Secret"],
    }
  },

  Dispenser: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      witz:       ["Team Secret"],
    }
  },

  witz: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      Dispenser:  ["Team Secret"],
    }
  },

  mitch: {
    teammates: {
      leaf:   ["Cloud9"],
      xeta:   ["Cloud9"],
      Xeppaa: ["Cloud9"],
      vanity: ["Cloud9"],
    }
  },

  leaf: {
    teammates: {
      mitch:   ["Cloud9"],
      xeta:    ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      vanity:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      yay:     ["Cloud9"],
      jakee:   ["Cloud9"],
      runi:    ["Cloud9"],
    }
  },

  xeta: {
    teammates: {
      mitch:      ["Cloud9"],
      leaf:       ["Cloud9"],
      Xeppaa:     ["Cloud9"],
      vanity:     ["Cloud9"],
      Munchkin:   ["T1"],
      ban:        ["T1"],
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      iNTRO:      ["T1"],
    }
  },

  Xeppaa: {
    teammates: {
      mitch:   ["Cloud9"],
      leaf:    ["Cloud9"],
      xeta:    ["Cloud9"],
      vanity:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      yay:     ["Cloud9"],
      jakee:   ["Cloud9"],
      runi:    ["Cloud9"],
    }
  },

  xand: {
    teammates: {
      Jonn:     ["Ninjas in Pyjamas"],
      bnj:      ["Ninjas in Pyjamas"],
      bezn1:    ["Ninjas in Pyjamas"],
      cauanzin: ["Ninjas in Pyjamas"],
      qck:      ["FURIA Esports"],
      Khalil:   ["FURIA Esports"],
      Nozwerr:  ["FURIA Esports"],
      mazin:    ["FURIA Esports"],
      NagZ:     ["KRÜ Esports"],
      Daveeys:  ["KRÜ Esports"],
      Melser:   ["KRÜ Esports"],
      axeddy:   ["KRÜ Esports"],
    }
  },

  qck: {
    teammates: {
      dgzin:   ["FURIA Esports"],
      xand:    ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
      mazin:   ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
    }
  },

  Khalil: {
    teammates: {
      dgzin:   ["FURIA Esports"],
      xand:    ["FURIA Esports"],
      qck:     ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
      mazin:   ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
    }
  },

  Nozwerr: {
    teammates: {
      dgzin:     ["FURIA Esports"],
      xand:      ["FURIA Esports"],
      qck:       ["FURIA Esports"],
      Khalil:    ["FURIA Esports"],
      mazin:     ["FURIA Esports"],
      kiNgg:     ["Leviatán"],
      Tacolilla: ["Leviatán"],
      Shyy:      ["Leviatán"],
      Mazino:    ["Leviatán"],
    }
  },

  mazin: {
    teammates: {
      dgzin:   ["FURIA Esports"],
      xand:    ["FURIA Esports"],
      qck:     ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
    }
  },

  ChAlalala: {
    teammates: {
      JohnOlsen: ["FULL SENSE"],
      LAMMYSNAX: ["FULL SENSE"],
      PTC:       ["FULL SENSE"],
      SuperBusS: ["FULL SENSE"],
    }
  },

  JohnOlsen: {
    teammates: {
      ChAlalala: ["FULL SENSE"],
      LAMMYSNAX: ["FULL SENSE"],
      PTC:       ["FULL SENSE"],
      SuperBusS: ["FULL SENSE"],
    }
  },

  LAMMYSNAX: {
    teammates: {
      ChAlalala: ["FULL SENSE"],
      JohnOlsen: ["FULL SENSE"],
      PTC:       ["FULL SENSE"],
      SuperBusS: ["FULL SENSE"],
    }
  },

  PTC: {
    teammates: {
      ChAlalala: ["FULL SENSE"],
      JohnOlsen: ["FULL SENSE"],
      LAMMYSNAX: ["FULL SENSE"],
      SuperBusS: ["FULL SENSE"],
    }
  },

  SuperBusS: {
    teammates: {
      ChAlalala: ["FULL SENSE"],
      JohnOlsen: ["FULL SENSE"],
      LAMMYSNAX: ["FULL SENSE"],
      PTC:       ["FULL SENSE"],
    }
  },

  hoody: {
    teammates: {
      nukkye:  ["G2 Esports", "Giants"],
      AvovA:   ["G2 Esports"],
      mixwell: ["G2 Esports"],
      Meddo:   ["G2 Esports"],
      Fit1nho: ["Giants"],
      rhyme:   ["Giants"],
      Cloud:   ["Giants"],
    }
  },

  Meddo: {
    teammates: {
      nukkye:  ["G2 Esports"],
      AvovA:   ["G2 Esports"],
      mixwell: ["G2 Esports"],
      hoody:   ["G2 Esports"],
    }
  },

  neT: {
    teammates: {
      valyn:      ["The Guard"],
      JonahP:     ["The Guard"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard"],
    }
  },

  valyn: {
    teammates: {
      neT:        ["The Guard"],
      JonahP:     ["The Guard"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard"],
    }
  },

  JonahP: {
    teammates: {
      neT:        ["The Guard"],
      valyn:      ["The Guard"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard"],
    }
  },

  Sayaplayer: {
    teammates: {
      neT:      ["The Guard"],
      valyn:    ["The Guard"],
      JonahP:   ["The Guard"],
      trent:    ["The Guard"],
      xeta:     ["T1"],
      Munchkin: ["T1"],
      ban:      ["T1"],
      Carpe:    ["T1"],
      iNTRO:    ["T1"],
    }
  },

  trent: {
    teammates: {
      neT:        ["The Guard"],
      valyn:      ["The Guard"],
      JonahP:     ["The Guard"],
      Sayaplayer: ["The Guard"],
    }
  },

  Jinggg: {
    teammates: {
      mindfreak:  ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      Benkai:     ["Paper Rex"],
      d4v41:      ["Paper Rex"],
      something:  ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  pANcada: {
    teammates: {
      Sacy:    ["LOUD", "Sentinels"],
      Saadhak: ["LOUD"],
      aspas:   ["LOUD"],
      Less:    ["LOUD"],
      TenZ:    ["Sentinels"],
      zekken:  ["Sentinels"],
      dephh:   ["Sentinels"],
      Marved:  ["Sentinels"],
    }
  },

  aspas: {
    teammates: {
      pANcada:  ["LOUD"],
      Sacy:     ["LOUD"],
      Saadhak:  ["LOUD"],
      Less:     ["LOUD"],
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
    }
  },

  Less: {
    teammates: {
      pANcada:  ["LOUD"],
      Sacy:     ["LOUD"],
      Saadhak:  ["LOUD"],
      aspas:    ["LOUD"],
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
    }
  },

  H1ber: {
    teammates: {
      Boaster: ["Fnatic"],
      Magnum:  ["Fnatic"],
      Mistic:  ["Fnatic"],
      Fearoth: ["Fnatic"],
    }
  },

  Fearoth: {
    teammates: {
      Boaster: ["Fnatic"],
      Magnum:  ["Fnatic"],
      Mistic:  ["Fnatic"],
      H1ber:   ["Fnatic"],
    }
  },

  Zest: {
    teammates: {
      stax:  ["DRX"],
      Rb:    ["DRX"],
      BuZz:  ["DRX"],
      MaKo:  ["DRX"],
      Foxy9: ["DRX"],
    }
  },

  Surf: {
    teammates: {
      foxz:      ["XERXIA"],
      sushiboys: ["XERXIA"],
      sScary:    ["XERXIA"],
      Crws:      ["XERXIA"],
    }
  },

  Dep: {
    teammates: {
      Laz:       ["ZETA DIVISION"],
      crow:      ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      TENNN:     ["ZETA DIVISION"],
    }
  },

  SugarZ3ro: {
    teammates: {
      Laz:   ["ZETA DIVISION"],
      crow:  ["ZETA DIVISION"],
      Dep:   ["ZETA DIVISION"],
      TENNN: ["ZETA DIVISION"],
    }
  },

  TENNN: {
    teammates: {
      Laz:       ["ZETA DIVISION"],
      crow:      ["ZETA DIVISION"],
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
    }
  },

  Jonn: {
    teammates: {
      xand:     ["Ninjas in Pyjamas"],
      bnj:      ["Ninjas in Pyjamas"],
      bezn1:    ["Ninjas in Pyjamas"],
      cauanzin: ["Ninjas in Pyjamas"],
    }
  },

  bezn1: {
    teammates: {
      xand:     ["Ninjas in Pyjamas"],
      Jonn:     ["Ninjas in Pyjamas"],
      bnj:      ["Ninjas in Pyjamas"],
      cauanzin: ["Ninjas in Pyjamas"],
    }
  },

  cauanzin: {
    teammates: {
      xand:    ["Ninjas in Pyjamas"],
      Jonn:    ["Ninjas in Pyjamas"],
      bnj:     ["Ninjas in Pyjamas"],
      bezn1:   ["Ninjas in Pyjamas"],
      aspas:   ["LOUD"],
      Less:    ["LOUD"],
      Saadhak: ["LOUD"],
      tuyz:    ["LOUD"],
    }
  },

  Enzo: {
    teammates: {
      Boaster: ["Fnatic"],
      Mistic:  ["Fnatic"],
      Derke:   ["Fnatic"],
      Alfajer: ["Fnatic"],
    }
  },

  Alfajer: {
    teammates: {
      Boaster:   ["Fnatic"],
      Mistic:    ["Fnatic"],
      Derke:     ["Fnatic"],
      Enzo:      ["Fnatic"],
      Leo:       ["Fnatic"],
      Chronicle: ["Fnatic"],
      kamyk:     ["Fnatic"],
    }
  },

  AYRIN: {
    teammates: {
      BcJ:           ["XSET"],
      dephh:         ["XSET"],
      zekken:        ["XSET"],
      Cryocells:     ["XSET"],
      SkRossi:       ["Global Esports"],
      t3xture:       ["Global Esports"],
      Monyet:        ["Global Esports"],
      Bazzi:         ["Global Esports"],
      WRONSKI:       ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  BcJ: {
    teammates: {
      AYRIN:     ["XSET"],
      dephh:     ["XSET"],
      zekken:    ["XSET"],
      Cryocells: ["XSET"],
      Boostio:   ["Evil Geniuses"],
      Ethan:     ["Evil Geniuses"],
      jawgemo:   ["Evil Geniuses"],
      C0M:       ["Evil Geniuses"],
      Demon1:    ["Evil Geniuses"],
    }
  },

  dephh: {
    teammates: {
      AYRIN:     ["XSET"],
      BcJ:       ["XSET"],
      zekken:    ["XSET", "Sentinels"],
      Cryocells: ["XSET"],
      TenZ:      ["Sentinels"],
      Sacy:      ["Sentinels"],
      pANcada:   ["Sentinels"],
      Marved:    ["Sentinels"],
    }
  },

  zekken: {
    teammates: {
      AYRIN:     ["XSET"],
      BcJ:       ["XSET"],
      dephh:     ["XSET", "Sentinels"],
      Cryocells: ["XSET"],
      TenZ:      ["Sentinels"],
      Sacy:      ["Sentinels"],
      pANcada:   ["Sentinels"],
      Marved:    ["Sentinels"],
    }
  },

  Cryocells: {
    teammates: {
      AYRIN:   ["XSET"],
      BcJ:     ["XSET"],
      dephh:   ["XSET"],
      zekken:  ["XSET"],
      Asuna:   ["100 Thieves"],
      Derrek:  ["100 Thieves"],
      stellar: ["100 Thieves"],
      bang:    ["100 Thieves"],
    }
  },

  Tacolilla: {
    teammates: {
      Melser:  ["Leviatán"],
      adverso: ["Leviatán"],
      kiNgg:   ["Leviatán"],
      Shyy:    ["Leviatán"],
      Nozwerr: ["Leviatán"],
      Mazino:  ["Leviatán"],
    }
  },

  Melser: {
    teammates: {
      Tacolilla: ["Leviatán"],
      adverso:   ["Leviatán"],
      kiNgg:     ["Leviatán"],
      Shyy:      ["Leviatán"],
      NagZ:      ["KRÜ Esports"],
      xand:      ["KRÜ Esports"],
      Daveeys:   ["KRÜ Esports"],
      axeddy:    ["KRÜ Esports"],
      Klaus:     ["KRÜ Esports"],
      keznit:    ["KRÜ Esports"],
    }
  },

  adverso: {
    teammates: {
      Tacolilla: ["Leviatán"],
      Melser:    ["Leviatán"],
      kiNgg:     ["Leviatán"],
      Shyy:      ["Leviatán"],
    }
  },

  kiNgg: {
    teammates: {
      Tacolilla: ["Leviatán"],
      Melser:    ["Leviatán"],
      adverso:   ["Leviatán"],
      Shyy:      ["Leviatán"],
      Nozwerr:   ["Leviatán"],
      Mazino:    ["Leviatán"],
    }
  },

  Shyy: {
    teammates: {
      Tacolilla: ["Leviatán"],
      Melser:    ["Leviatán"],
      adverso:   ["Leviatán"],
      kiNgg:     ["Leviatán"],
      Nozwerr:   ["Leviatán"],
      Mazino:    ["Leviatán"],
    }
  },

  ANGE1: {
    teammates: {
      Shao:     ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:   ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU: ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:   ["FunPlus Phoenix"],
      cNed:     ["Natus Vincere"],
    }
  },

  Shao: {
    teammates: {
      ANGE1:    ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:   ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU: ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:   ["FunPlus Phoenix"],
      cNed:     ["Natus Vincere"],
    }
  },

  Zyppan: {
    teammates: {
      ANGE1:    ["FunPlus Phoenix", "Natus Vincere"],
      Shao:     ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU: ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:   ["FunPlus Phoenix"],
      cNed:     ["Natus Vincere"],
    }
  },

  SUYGETSU: {
    teammates: {
      ANGE1:  ["FunPlus Phoenix", "Natus Vincere"],
      Shao:   ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan: ["FunPlus Phoenix", "Natus Vincere"],
      ardiis: ["FunPlus Phoenix"],
      cNed:   ["Natus Vincere"],
    }
  },

  ardiis: {
    teammates: {
      ANGE1:    ["FunPlus Phoenix"],
      Shao:     ["FunPlus Phoenix"],
      Zyppan:   ["FunPlus Phoenix"],
      SUYGETSU: ["FunPlus Phoenix"],
      s0m:      ["NRG"],
      FNS:      ["NRG"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
    }
  },

  Leo: {
    teammates: {
      Sayf:       ["Guild Esports"],
      koldamenta: ["Guild Esports"],
      Russ:       ["Guild Esports"],
      trexx:      ["Guild Esports"],
      Boaster:    ["Fnatic"],
      Derke:      ["Fnatic"],
      Alfajer:    ["Fnatic"],
      Chronicle:  ["Fnatic"],
      kamyk:      ["Fnatic"],
    }
  },

  Sayf: {
    teammates: {
      Leo:        ["Guild Esports"],
      koldamenta: ["Guild Esports"],
      Russ:       ["Guild Esports"],
      trexx:      ["Guild Esports"],
      soulcas:    ["Team Liquid"],
      Jamppi:     ["Team Liquid"],
      Redgar:     ["Team Liquid"],
      nAts:       ["Team Liquid"],
      Harmii:     ["Team Liquid"],
    }
  },

  Russ: {
    teammates: {
      Leo:        ["Guild Esports"],
      Sayf:       ["Guild Esports"],
      koldamenta: ["Guild Esports"],
      trexx:      ["Guild Esports"],
    }
  },

  trexx: {
    teammates: {
      Leo:        ["Guild Esports"],
      Sayf:       ["Guild Esports"],
      koldamenta: ["Guild Esports", "KOI"],
      Russ:       ["Guild Esports"],
      Sheydos:    ["KOI"],
      Wolfen:     ["KOI"],
      starxo:     ["KOI"],
    }
  },

  Derialy: {
    teammates: {
      Meteor:   ["Northeption"],
      BlackWiz: ["Northeption"],
      xnfri:    ["Northeption"],
      JoXJo:    ["Northeption"],
    }
  },

  Meteor: {
    teammates: {
      Derialy:  ["Northeption"],
      BlackWiz: ["Northeption"],
      xnfri:    ["Northeption"],
      JoXJo:    ["Northeption"],
      k1Ng:     ["Gen.G Esports"],
      TS:       ["Gen.G Esports"],
      eKo:      ["Gen.G Esports"],
      Secret:   ["Gen.G Esports"],
      GodDead:  ["Gen.G Esports"],
      Sylvan:   ["Gen.G Esports"],
    }
  },

  BlackWiz: {
    teammates: {
      Derialy: ["Northeption"],
      Meteor:  ["Northeption"],
      xnfri:   ["Northeption"],
      JoXJo:   ["Northeption"],
    }
  },

  xnfri: {
    teammates: {
      Derialy:  ["Northeption"],
      Meteor:   ["Northeption"],
      BlackWiz: ["Northeption"],
      JoXJo:    ["Northeption"],
      takej:    ["DetonatioN FocusMe"],
      Reita:    ["DetonatioN FocusMe"],
      Anthem:   ["DetonatioN FocusMe"],
      Suggest:  ["DetonatioN FocusMe"],
      Seoldam:  ["DetonatioN FocusMe"],
    }
  },

  JoXJo: {
    teammates: {
      Derialy:  ["Northeption"],
      Meteor:   ["Northeption"],
      BlackWiz: ["Northeption"],
      xnfri:    ["Northeption"],
    }
  },

  Derrek: {
    teammates: {
      Asuna:     ["100 Thieves"],
      stellar:   ["100 Thieves"],
      Will:      ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
    }
  },

  stellar: {
    teammates: {
      Asuna:     ["100 Thieves"],
      Derrek:    ["100 Thieves"],
      Will:      ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
    }
  },

  Will: {
    teammates: {
      Asuna:   ["100 Thieves"],
      Derrek:  ["100 Thieves"],
      stellar: ["100 Thieves"],
      bang:    ["100 Thieves"],
    }
  },

  bang: {
    teammates: {
      Asuna:     ["100 Thieves"],
      Derrek:    ["100 Thieves"],
      stellar:   ["100 Thieves"],
      Will:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
    }
  },

  dimasick: {
    teammates: {
      soulcas: ["Team Liquid"],
      ScreaM:  ["Team Liquid"],
      Jamppi:  ["Team Liquid"],
      Nivera:  ["Team Liquid"],
    }
  },

  dgzin: {
    teammates: {
      qck:     ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
      mazin:   ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
    }
  },

  Haodong: {
    teammates: {
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
    }
  },

  Life: {
    teammates: {
      Haodong: ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      monk:    ["Attacking Soul"],
      zjc:     ["Attacking Soul"],
      YHchen:  ["Attacking Soul"],
      Bunt:    ["Attacking Soul"],
    }
  },

  CHICHOO: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
    }
  },

  nobody: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
    }
  },

  ZmjjKK: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
    }
  },

  Smoggy: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
    }
  },

  blaZek1ng: {
    teammates: {
      fl1pzjder: ["BOOM Esports"],
      BerserX:   ["BOOM Esports"],
      Tehbotol:  ["BOOM Esports"],
      famouz:    ["BOOM Esports"],
    }
  },

  fl1pzjder: {
    teammates: {
      blaZek1ng: ["BOOM Esports"],
      BerserX:   ["BOOM Esports"],
      Tehbotol:  ["BOOM Esports", "Rex Regum Qeon"],
      famouz:    ["BOOM Esports"],
      Emman:     ["Rex Regum Qeon"],
      EJAY:      ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      xffero:    ["Rex Regum Qeon"],
    }
  },

  BerserX: {
    teammates: {
      blaZek1ng: ["BOOM Esports"],
      fl1pzjder: ["BOOM Esports"],
      Tehbotol:  ["BOOM Esports"],
      famouz:    ["BOOM Esports"],
    }
  },

  Tehbotol: {
    teammates: {
      blaZek1ng: ["BOOM Esports"],
      fl1pzjder: ["BOOM Esports", "Rex Regum Qeon"],
      BerserX:   ["BOOM Esports"],
      famouz:    ["BOOM Esports"],
      Emman:     ["Rex Regum Qeon"],
      EJAY:      ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
    }
  },

  famouz: {
    teammates: {
      blaZek1ng: ["BOOM Esports"],
      fl1pzjder: ["BOOM Esports"],
      BerserX:   ["BOOM Esports"],
      Tehbotol:  ["BOOM Esports"],
    }
  },

  AsLanM4shadoW: {
    teammates: {
      QutionerX: ["BBL Esports"],
      Turko:     ["BBL Esports"],
      Brave:     ["BBL Esports"],
      SouhcNi:   ["BBL Esports"],
    }
  },

  QutionerX: {
    teammates: {
      AsLanM4shadoW: ["BBL Esports"],
      Turko:         ["BBL Esports"],
      Brave:         ["BBL Esports"],
      SouhcNi:       ["BBL Esports"],
    }
  },

  SouhcNi: {
    teammates: {
      AsLanM4shadoW: ["BBL Esports"],
      QutionerX:     ["BBL Esports"],
      Turko:         ["BBL Esports"],
      Brave:         ["BBL Esports"],
    }
  },

  mojj: {
    teammates: {
      qRaxs:        ["FUT Esports"],
      qw1:          ["FUT Esports"],
      MrFaliN:      ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      Muj:          ["FUT Esports"],
    }
  },

  qRaxs: {
    teammates: {
      mojj:         ["FUT Esports"],
      qw1:          ["FUT Esports"],
      MrFaliN:      ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      Muj:          ["FUT Esports"],
    }
  },

  qw1: {
    teammates: {
      mojj:         ["FUT Esports"],
      qRaxs:        ["FUT Esports"],
      MrFaliN:      ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      Muj:          ["FUT Esports"],
    }
  },

  MrFaliN: {
    teammates: {
      mojj:         ["FUT Esports"],
      qRaxs:        ["FUT Esports"],
      qw1:          ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      Muj:          ["FUT Esports"],
    }
  },

  "ATA KAPTAN": {
    teammates: {
      mojj:    ["FUT Esports"],
      qRaxs:   ["FUT Esports"],
      qw1:     ["FUT Esports"],
      MrFaliN: ["FUT Esports"],
      Muj:     ["FUT Esports"],
    }
  },

  Fit1nho: {
    teammates: {
      hoody:  ["Giants"],
      nukkye: ["Giants"],
      rhyme:  ["Giants"],
      Cloud:  ["Giants"],
    }
  },

  rhyme: {
    teammates: {
      Fit1nho: ["Giants"],
      hoody:   ["Giants"],
      nukkye:  ["Giants"],
      Cloud:   ["Giants"],
    }
  },

  Cloud: {
    teammates: {
      Fit1nho: ["Giants"],
      hoody:   ["Giants"],
      nukkye:  ["Giants"],
      rhyme:   ["Giants"],
    }
  },

  Shin: {
    teammates: {
      Newzera: ["Karmine Corp"],
      ScreaM:  ["Karmine Corp"],
      Nivera:  ["Karmine Corp"],
      xms:     ["Karmine Corp"],
      ZE1SH:   ["Karmine Corp"],
    }
  },

  Newzera: {
    teammates: {
      Shin:   ["Karmine Corp"],
      ScreaM: ["Karmine Corp"],
      Nivera: ["Karmine Corp"],
      xms:    ["Karmine Corp"],
      ZE1SH:  ["Karmine Corp"],
    }
  },

  xms: {
    teammates: {
      Shin:    ["Karmine Corp"],
      Newzera: ["Karmine Corp"],
      ScreaM:  ["Karmine Corp"],
      Nivera:  ["Karmine Corp"],
      ZE1SH:   ["Karmine Corp"],
    }
  },

  Wolfen: {
    teammates: {
      koldamenta: ["KOI"],
      Sheydos:    ["KOI"],
      trexx:      ["KOI"],
      starxo:     ["KOI"],
    }
  },

  Boo: {
    teammates: {
      keloqz:  ["Team Heretics"],
      mixwell: ["Team Heretics"],
      zeek:    ["Team Heretics"],
      AvovA:   ["Team Heretics"],
      weber:   ["Team Heretics"],
    }
  },

  ceNder: {
    teammates: {
      BONECOLD: ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Destrian: ["Team Vitality"],
      Twisten:  ["Team Vitality"],
    }
  },

  MOLSI: {
    teammates: {
      ceNder:   ["Team Vitality"],
      BONECOLD: ["Team Vitality"],
      Destrian: ["Team Vitality"],
      Twisten:  ["Team Vitality"],
    }
  },

  Destrian: {
    teammates: {
      ceNder:   ["Team Vitality"],
      BONECOLD: ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Twisten:  ["Team Vitality"],
    }
  },

  Twisten: {
    teammates: {
      ceNder:   ["Team Vitality"],
      BONECOLD: ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Destrian: ["Team Vitality"],
    }
  },

  Boostio: {
    teammates: {
      Ethan:   ["Evil Geniuses"],
      jawgemo: ["Evil Geniuses"],
      C0M:     ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
      Demon1:  ["Evil Geniuses"],
    }
  },

  jawgemo: {
    teammates: {
      Boostio: ["Evil Geniuses"],
      Ethan:   ["Evil Geniuses"],
      C0M:     ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
      Demon1:  ["Evil Geniuses"],
    }
  },

  C0M: {
    teammates: {
      Boostio: ["Evil Geniuses"],
      Ethan:   ["Evil Geniuses"],
      jawgemo: ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
      Demon1:  ["Evil Geniuses"],
    }
  },

  Daveeys: {
    teammates: {
      NagZ:   ["KRÜ Esports"],
      xand:   ["KRÜ Esports"],
      Melser: ["KRÜ Esports"],
      axeddy: ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      keznit: ["KRÜ Esports"],
    }
  },

  axeddy: {
    teammates: {
      NagZ:    ["KRÜ Esports"],
      xand:    ["KRÜ Esports"],
      Daveeys: ["KRÜ Esports"],
      Melser:  ["KRÜ Esports"],
      Klaus:   ["KRÜ Esports"],
      keznit:  ["KRÜ Esports"],
    }
  },

  tuyz: {
    teammates: {
      aspas:    ["LOUD"],
      Less:     ["LOUD"],
      Saadhak:  ["LOUD"],
      cauanzin: ["LOUD"],
    }
  },

  jzz: {
    teammates: {
      frz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      RgLM:    ["MIBR"],
      TxoziN:  ["MIBR"],
    }
  },

  RgLM: {
    teammates: {
      jzz:     ["MIBR"],
      frz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      TxoziN:  ["MIBR"],
    }
  },

  s0m: {
    teammates: {
      FNS:      ["NRG"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
      ardiis:   ["NRG"],
    }
  },

  Anthem: {
    teammates: {
      takej:   ["DetonatioN FocusMe"],
      Reita:   ["DetonatioN FocusMe"],
      xnfri:   ["DetonatioN FocusMe"],
      Suggest: ["DetonatioN FocusMe"],
      Seoldam: ["DetonatioN FocusMe"],
    }
  },

  Seoldam: {
    teammates: {
      takej:   ["DetonatioN FocusMe"],
      Reita:   ["DetonatioN FocusMe"],
      xnfri:   ["DetonatioN FocusMe"],
      Anthem:  ["DetonatioN FocusMe"],
      Suggest: ["DetonatioN FocusMe"],
    }
  },

  TS: {
    teammates: {
      Meteor:  ["Gen.G Esports"],
      k1Ng:    ["Gen.G Esports"],
      eKo:     ["Gen.G Esports"],
      Secret:  ["Gen.G Esports"],
      GodDead: ["Gen.G Esports"],
      Sylvan:  ["Gen.G Esports"],
    }
  },

  eKo: {
    teammates: {
      Meteor:  ["Gen.G Esports"],
      k1Ng:    ["Gen.G Esports"],
      TS:      ["Gen.G Esports"],
      Secret:  ["Gen.G Esports"],
      GodDead: ["Gen.G Esports"],
      Sylvan:  ["Gen.G Esports"],
    }
  },

  Secret: {
    teammates: {
      Meteor: ["Gen.G Esports"],
      k1Ng:   ["Gen.G Esports"],
      TS:     ["Gen.G Esports"],
      eKo:    ["Gen.G Esports"],
    }
  },

  SkRossi: {
    teammates: {
      AYRIN:         ["Global Esports"],
      t3xture:       ["Global Esports"],
      Monyet:        ["Global Esports"],
      Bazzi:         ["Global Esports"],
      WRONSKI:       ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  t3xture: {
    teammates: {
      SkRossi:       ["Global Esports"],
      AYRIN:         ["Global Esports"],
      Monyet:        ["Global Esports"],
      Bazzi:         ["Global Esports"],
      WRONSKI:       ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  Monyet: {
    teammates: {
      SkRossi:       ["Global Esports"],
      AYRIN:         ["Global Esports"],
      t3xture:       ["Global Esports"],
      Bazzi:         ["Global Esports"],
      WRONSKI:       ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  Emman: {
    teammates: {
      EJAY:      ["Rex Regum Qeon"],
      Tehbotol:  ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      xffero:    ["Rex Regum Qeon"],
    }
  },

  EJAY: {
    teammates: {
      Emman:     ["Rex Regum Qeon"],
      Tehbotol:  ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      xffero:    ["Rex Regum Qeon"],
    }
  },

  Lmemore: {
    teammates: {
      Emman:     ["Rex Regum Qeon"],
      EJAY:      ["Rex Regum Qeon"],
      Tehbotol:  ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      xffero:    ["Rex Regum Qeon"],
    }
  },

  "2ge": {
    teammates: {
      Emman:     ["Rex Regum Qeon"],
      EJAY:      ["Rex Regum Qeon"],
      Tehbotol:  ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      xffero:    ["Rex Regum Qeon"],
    }
  },

  ban: {
    teammates: {
      xeta:       ["T1"],
      Munchkin:   ["T1"],
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      iNTRO:      ["T1"],
    }
  },

  Carpe: {
    teammates: {
      xeta:       ["T1"],
      Munchkin:   ["T1"],
      ban:        ["T1"],
      Sayaplayer: ["T1"],
      iNTRO:      ["T1"],
    }
  },

  garnetS: {
    teammates: {
      Crws:      ["TALON"],
      foxz:      ["TALON"],
      sushiboys: ["TALON"],
      JitboyS:   ["TALON"],
      patt:      ["TALON"],
    }
  },

  JitboyS: {
    teammates: {
      Crws:      ["TALON"],
      foxz:      ["TALON"],
      sushiboys: ["TALON"],
      garnetS:   ["TALON"],
      patt:      ["TALON"],
    }
  },

  Jremy: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      invy:       ["Team Secret"],
      lenne:      ["Team Secret"],
    }
  },

  invy: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      Jremy:      ["Team Secret"],
      lenne:      ["Team Secret"],
    }
  },

  AAAAY: {
    teammates: {
      BerLIN:     ["FunPlus Phoenix"],
      TZH:        ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
      Yuicaw:     ["FunPlus Phoenix"],
    }
  },

  BerLIN: {
    teammates: {
      AAAAY:      ["FunPlus Phoenix"],
      TZH:        ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
      Yuicaw:     ["FunPlus Phoenix"],
    }
  },

  TZH: {
    teammates: {
      AAAAY:      ["FunPlus Phoenix"],
      BerLIN:     ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
      Yuicaw:     ["FunPlus Phoenix"],
    }
  },

  WudiYuChEn: {
    teammates: {
      AAAAY:  ["FunPlus Phoenix"],
      BerLIN: ["FunPlus Phoenix"],
      TZH:    ["FunPlus Phoenix"],
      Yuicaw: ["FunPlus Phoenix"],
    }
  },

  Yuicaw: {
    teammates: {
      AAAAY:      ["FunPlus Phoenix"],
      BerLIN:     ["FunPlus Phoenix"],
      TZH:        ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
    }
  },

  Foxy9: {
    teammates: {
      stax: ["DRX"],
      Rb:   ["DRX"],
      BuZz: ["DRX"],
      MaKo: ["DRX"],
      Zest: ["DRX"],
    }
  },

  GodDead: {
    teammates: {
      Meteor: ["Gen.G Esports"],
      k1Ng:   ["Gen.G Esports"],
      TS:     ["Gen.G Esports"],
      Sylvan: ["Gen.G Esports"],
      eKo:    ["Gen.G Esports"],
    }
  },

  Sylvan: {
    teammates: {
      Meteor:  ["Gen.G Esports"],
      k1Ng:    ["Gen.G Esports"],
      TS:      ["Gen.G Esports"],
      GodDead: ["Gen.G Esports"],
      eKo:     ["Gen.G Esports"],
    }
  },

  WRONSKI: {
    teammates: {
      SkRossi:       ["Global Esports"],
      AYRIN:         ["Global Esports"],
      t3xture:       ["Global Esports"],
      Monyet:        ["Global Esports"],
      Bazzi:         ["Global Esports"],
      Lightningfast: ["Global Esports"],
    }
  },

  Lightningfast: {
    teammates: {
      SkRossi: ["Global Esports"],
      AYRIN:   ["Global Esports"],
      t3xture: ["Global Esports"],
      Monyet:  ["Global Esports"],
      Bazzi:   ["Global Esports"],
      WRONSKI: ["Global Esports"],
    }
  },

  something: {
    teammates: {
      mindfreak:  ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      Benkai:     ["Paper Rex"],
      d4v41:      ["Paper Rex"],
      Jinggg:     ["Paper Rex"],
      CigaretteS: ["Paper Rex"],
    }
  },

  CigaretteS: {
    teammates: {
      mindfreak: ["Paper Rex"],
      f0rsakeN:  ["Paper Rex"],
      Benkai:    ["Paper Rex"],
      d4v41:     ["Paper Rex"],
      Jinggg:    ["Paper Rex"],
      something: ["Paper Rex"],
    }
  },

  xffero: {
    teammates: {
      EJAY:      ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      Emman:     ["Rex Regum Qeon"],
    }
  },

  iNTRO: {
    teammates: {
      xeta:       ["T1"],
      Munchkin:   ["T1"],
      ban:        ["T1"],
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
    }
  },

  patt: {
    teammates: {
      Crws:      ["TALON"],
      foxz:      ["TALON"],
      sushiboys: ["TALON"],
      garnetS:   ["TALON"],
      JitboyS:   ["TALON"],
    }
  },

  lenne: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
    }
  },

  kamyk: {
    teammates: {
      Boaster:   ["Fnatic"],
      Derke:     ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Leo:       ["Fnatic"],
      Chronicle: ["Fnatic"],
    }
  },

  Muj: {
    teammates: {
      mojj:         ["FUT Esports"],
      qRaxs:        ["FUT Esports"],
      qw1:          ["FUT Esports"],
      MrFaliN:      ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
    }
  },

  ZE1SH: {
    teammates: {
      Shin:    ["Karmine Corp"],
      ScreaM:  ["Karmine Corp"],
      Nivera:  ["Karmine Corp"],
      xms:     ["Karmine Corp"],
      Newzera: ["Karmine Corp"],
    }
  },

  weber: {
    teammates: {
      keloqz:  ["Team Heretics"],
      mixwell: ["Team Heretics"],
      Boo:     ["Team Heretics"],
      AvovA:   ["Team Heretics"],
      zeek:    ["Team Heretics"],
    }
  },

  Harmii: {
    teammates: {
      soulcas: ["Team Liquid"],
      Jamppi:  ["Team Liquid"],
      Redgar:  ["Team Liquid"],
      nAts:    ["Team Liquid"],
      Sayf:    ["Team Liquid"],
    }
  },

  jakee: {
    teammates: {
      leaf:    ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      runi:    ["Cloud9"],
    }
  },

  runi: {
    teammates: {
      leaf:    ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      jakee:   ["Cloud9"],
    }
  },

  Demon1: {
    teammates: {
      Boostio: ["Evil Geniuses"],
      Ethan:   ["Evil Geniuses"],
      jawgemo: ["Evil Geniuses"],
      C0M:     ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
    }
  },

  TxoziN: {
    teammates: {
      jzz:     ["MIBR"],
      frz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      RgLM:    ["MIBR"],
    }
  },

  monk: {
    teammates: {
      zjc:    ["Attacking Soul"],
      YHchen: ["Attacking Soul"],
      Bunt:   ["Attacking Soul"],
      Life:   ["Attacking Soul"],
    }
  },

  zjc: {
    teammates: {
      monk:   ["Attacking Soul"],
      YHchen: ["Attacking Soul"],
      Bunt:   ["Attacking Soul"],
      Life:   ["Attacking Soul"],
    }
  },

  YHchen: {
    teammates: {
      monk: ["Attacking Soul"],
      zjc:  ["Attacking Soul"],
      Bunt: ["Attacking Soul"],
      Life: ["Attacking Soul"],
    }
  },

  Bunt: {
    teammates: {
      monk:   ["Attacking Soul"],
      zjc:    ["Attacking Soul"],
      YHchen: ["Attacking Soul"],
      Life:   ["Attacking Soul"],
    }
  },

});

const SORTED_PLAYERS = Object.fromEntries(
  Object.entries(PLAYERS).map(([playerName, playerData]) => [
    playerName,
    {
      ...playerData,
      teammates: sortObjectKeys(playerData.teammates || {}),
    },
  ])
);

module.exports = { PLAYERS: SORTED_PLAYERS };
