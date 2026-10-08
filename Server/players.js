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
      SicK:   ["Sentinels"],
      zombs:  ["Sentinels"],
      dapr:   ["Sentinels"],
      TenZ:   ["Sentinels"],
      mazin:  ["MIBR"],
      Artzin: ["MIBR"],
      Palla:  ["MIBR"],
      rich:   ["MIBR"],
      liazzi: ["MIBR"],
      Pa1nt:  ["MIBR"],
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
      johnqt:  ["Sentinels"],
      Zellsis: ["Sentinels"],
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
      jakee:   ["Cloud9"],
      OXY:     ["Cloud9"],
      wippie:  ["Cloud9"],
      moose:   ["Cloud9"],
      runi:    ["Cloud9"],
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
      vanity:   ["Version1"],
      effys:    ["Version1"],
      Zellsis:  ["Version1", "Cloud9"],
      jammyz:   ["Version1"],
      add3r:    ["FURIA Esports"],
      bdog:     ["FURIA Esports"],
      jakee:    ["FURIA Esports"],
      stellar:  ["FURIA Esports"],
      nAts:     ["Team Liquid"],
      Keiko:    ["Team Liquid"],
      kamo:     ["Team Liquid"],
      paTiTek:  ["Team Liquid"],
      Serial:   ["Team Liquid"],
      AvovA:    ["Apeks"],
      MOLSI:    ["Apeks"],
      batujnax: ["Apeks"],
      OLIZERA:  ["Apeks"],
      OXY:      ["Cloud9"],
      v1c:      ["Cloud9"],
      Xeppaa:   ["Cloud9"],
      Demon1:   ["Cloud9"],
      Jackk:    ["Cloud9"],
      Notexxd:  ["Cloud9"],
    }
  },

  Zellsis: {
    teammates: {
      vanity:      ["Version1", "Cloud9"],
      effys:       ["Version1"],
      penny:       ["Version1", "Cloud9"],
      jammyz:      ["Version1"],
      leaf:        ["Cloud9"],
      Xeppaa:      ["Cloud9"],
      yay:         ["Cloud9"],
      jakee:       ["Cloud9"],
      runi:        ["Cloud9"],
      zekken:      ["Sentinels"],
      Sacy:        ["Sentinels"],
      TenZ:        ["Sentinels"],
      johnqt:      ["Sentinels"],
      bang:        ["Sentinels"],
      N4RRATE:     ["Sentinels"],
      OXY:         ["Cloud9"],
      v1c:         ["Cloud9"],
      Demon1:      ["Cloud9"],
      Jackk:       ["Cloud9"],
      Notexxd:     ["Cloud9"],
      FireBallOps: ["Cloud9"],
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
      GRUBINHO: ["KOI"],
      Sheydos:  ["KOI"],
      Filu:     ["KOI"],
      flyuh:    ["KOI"],
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
      dimasick:  ["Team Liquid"],
      Nivera:    ["Team Liquid"],
      soulcas:   ["Team Liquid"],
      Kryptix:   ["Team Liquid"],
      L1NK:      ["Team Liquid"],
      ScreaM:    ["Team Liquid"],
      Redgar:    ["Team Liquid"],
      nAts:      ["Team Liquid"],
      Sayf:      ["Team Liquid"],
      Harmii:    ["Team Liquid"],
      Enzo:      ["Team Liquid"],
      Keiko:     ["Team Liquid"],
      Mistic:    ["Team Liquid"],
      LeWN:      ["BBL Esports"],
      PROFEK:    ["BBL Esports", "Team Vitality"],
      sociablEE: ["BBL Esports"],
      vakk:      ["BBL Esports"],
      Magnum:    ["BBL Esports"],
      UNFAKE:    ["Team Vitality"],
      Derke:     ["Team Vitality"],
      Chronicle: ["Team Vitality"],
      Sayonara:  ["Team Vitality"],
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
      hiro:      ["Fnatic"],
      kaajak:    ["Fnatic"],
      crashies:  ["Fnatic"],
      Veqaj:     ["Fnatic"],
      CyvOph:    ["Fnatic"],
      Cloud:     ["Fnatic"],
    }
  },

  Doma: {
    teammates: {
      Boaster:   ["Fnatic"],
      Mistic:    ["Fnatic"],
      Derke:     ["Fnatic"],
      Magnum:    ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Chronicle: ["Fnatic"],
      kaajak:    ["Fnatic"],
      crashies:  ["Fnatic"],
    }
  },

  Mistic: {
    teammates: {
      Enzo:    ["Fnatic", "Team Liquid"],
      Alfajer: ["Fnatic"],
      H1ber:   ["Fnatic"],
      Fearoth: ["Fnatic"],
      Boaster: ["Fnatic"],
      Doma:    ["Fnatic"],
      Derke:   ["Fnatic"],
      Magnum:  ["Fnatic"],
      Jamppi:  ["Team Liquid"],
      nAts:    ["Team Liquid"],
      Keiko:   ["Team Liquid"],
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
      Chronicle: ["Fnatic", "Team Vitality"],
      kamyk:     ["Fnatic"],
      hiro:      ["Fnatic"],
      Kicks:     ["Team Vitality"],
      Sayf:      ["Team Vitality"],
      trexx:     ["Team Vitality"],
      Less:      ["Team Vitality"],
      CyvOph:    ["Team Vitality"],
      UNFAKE:    ["Team Vitality"],
      KovaQ:     ["Team Vitality"],
      PROFEK:    ["Team Vitality"],
      Jamppi:    ["Team Vitality"],
      Sayonara:  ["Team Vitality"],
    }
  },

  Magnum: {
    teammates: {
      H1ber:     ["Fnatic"],
      Fearoth:   ["Fnatic"],
      Boaster:   ["Fnatic"],
      Doma:      ["Fnatic"],
      Mistic:    ["Fnatic"],
      Derke:     ["Fnatic"],
      Shin:      ["Karmine Corp"],
      marteen:   ["Karmine Corp"],
      N4RRATE:   ["Karmine Corp"],
      tomaszy:   ["Karmine Corp"],
      LeWN:      ["BBL Esports"],
      Jamppi:    ["BBL Esports"],
      PROFEK:    ["BBL Esports"],
      sociablEE: ["BBL Esports"],
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
      solo:     ["NUTURN Gaming"],
      peri:     ["NUTURN Gaming"],
      allow:    ["NUTURN Gaming"],
      Lakia:    ["NUTURN Gaming"],
      takej:    ["DetonatioN FocusMe"],
      Reita:    ["DetonatioN FocusMe"],
      xnfri:    ["DetonatioN FocusMe"],
      Anthem:   ["DetonatioN FocusMe"],
      Seoldam:  ["DetonatioN FocusMe"],
      t3xture:  ["Gen.G Esports"],
      Karon:    ["Gen.G Esports"],
      Munchkin: ["Gen.G Esports"],
      Foxy9:    ["Gen.G Esports"],
      Ash:      ["Gen.G Esports"],
    }
  },

  Lakia: {
    teammates: {
      stax:     ["Vision Strikers"],
      Rb:       ["Vision Strikers"],
      k1Ng:     ["Vision Strikers"],
      BuZz:     ["Vision Strikers"],
      MaKo:     ["Vision Strikers"],
      solo:     ["NUTURN Gaming"],
      peri:     ["NUTURN Gaming"],
      allow:    ["NUTURN Gaming"],
      Suggest:  ["NUTURN Gaming"],
      Meteor:   ["Gen.G Esports"],
      t3xture:  ["Gen.G Esports"],
      Munchkin: ["Gen.G Esports"],
      Karon:    ["Gen.G Esports"],
      ZynX:     ["Gen.G Esports"],
      Ash:      ["Gen.G Esports"],
      KiTae:    ["Gen.G Esports"],
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
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
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
      pANcada:   ["LOUD"],
      aspas:     ["LOUD"],
      Less:      ["LOUD", "KRÜ Esports"],
      frz:       ["Team Vikings"],
      gtnziN:    ["Team Vikings"],
      Sacy:      ["Team Vikings", "LOUD"],
      sutecas:   ["Team Vikings"],
      cauanzin:  ["LOUD"],
      tuyz:      ["LOUD"],
      qck:       ["LOUD"],
      marteen:   ["Karmine Corp"],
      avez:      ["Karmine Corp"],
      Elite:     ["Karmine Corp"],
      SUYGETSU:  ["Karmine Corp"],
      pyrolll:   ["Karmine Corp"],
      Dantedeu5: ["KRÜ Esports"],
      mwzera:    ["KRÜ Esports"],
      silentzz:  ["KRÜ Esports"],
      heat:      ["KRÜ Esports"],
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
      johnqt:  ["Sentinels"],
      Zellsis: ["Sentinels"],
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
      Shyy:    ["KRÜ Esports"],
      mta:     ["KRÜ Esports"],
      heat:    ["KRÜ Esports"],
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
      Shyy:      ["Leviatán", "KRÜ Esports"],
      Nozwerr:   ["Leviatán"],
      aspas:     ["Leviatán", "MIBR"],
      tex:       ["Leviatán", "MIBR"],
      C0M:       ["Leviatán"],
      Melser:    ["KRÜ Esports"],
      adverso:   ["KRÜ Esports"],
      Dantedeu5: ["KRÜ Esports"],
      Verno:     ["MIBR"],
      zekken:    ["MIBR"],
    }
  },

  NagZ: {
    teammates: {
      keznit:      ["KRÜ Esports"],
      Klaus:       ["KRÜ Esports"],
      Mazino:      ["KRÜ Esports"],
      bnj:         ["KRÜ Esports"],
      delz1k:      ["KRÜ Esports"],
      xand:        ["KRÜ Esports"],
      Daveeys:     ["KRÜ Esports"],
      Melser:      ["KRÜ Esports"],
      axeddy:      ["KRÜ Esports"],
      mta:         ["KRÜ Esports"],
      benG:        ["KRÜ Esports"],
      infiltrator: ["KRÜ Esports"],
      Governor:    ["KRÜ Esports"],
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
      neth:     ["Crazy Raccoon", "DetonatioN FocusMe"],
      Munchkin: ["Crazy Raccoon"],
      Meiy:     ["DetonatioN FocusMe"],
      SSeeS:    ["DetonatioN FocusMe"],
      Anthem:   ["DetonatioN FocusMe"],
    }
  },

  neth: {
    teammates: {
      Bazzi:    ["Crazy Raccoon"],
      ade:      ["Crazy Raccoon"],
      Fisker:   ["Crazy Raccoon"],
      rion:     ["Crazy Raccoon"],
      zepher:   ["Crazy Raccoon"],
      Medusa:   ["Crazy Raccoon", "DetonatioN FocusMe"],
      Munchkin: ["Crazy Raccoon"],
      Meiy:     ["DetonatioN FocusMe"],
      SSeeS:    ["DetonatioN FocusMe"],
      Anthem:   ["DetonatioN FocusMe"],
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
      Meteor:     ["Gen.G Esports", "T1"],
      t3xture:    ["Gen.G Esports"],
      Lakia:      ["Gen.G Esports"],
      Karon:      ["Gen.G Esports"],
      yoman:      ["Gen.G Esports"],
      Foxy9:      ["Gen.G Esports"],
      Ash:        ["Gen.G Esports"],
      Suggest:    ["Gen.G Esports"],
      stax:       ["T1"],
      iZu:        ["T1"],
      BuZz:       ["T1"],
      DH:         ["T1"],
    }
  },

  Crws: {
    teammates: {
      Surf:      ["XERXIA", "TALON"],
      foxz:      ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      sScary:    ["X10 Esports", "X10 CRIT", "XERXIA"],
      sushiboys: ["X10 Esports", "X10 CRIT", "XERXIA", "TALON"],
      Patiphan:  ["X10 Esports", "X10 CRIT"],
      garnetS:   ["TALON"],
      JitboyS:   ["TALON", "FULL SENSE"],
      patt:      ["TALON"],
      ban:       ["TALON"],
      Governor:  ["TALON"],
      lenne:     ["TALON"],
      Primmie:   ["TALON", "FULL SENSE"],
      thyy:      ["TALON"],
      killua:    ["TALON", "FULL SENSE"],
      Leviathan: ["FULL SENSE"],
      seph1roth: ["FULL SENSE"],
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
      Deryeon:   ["Bleed Esports"],
      crazyguy:  ["Bleed Esports"],
      Egoist:    ["Bleed Esports"],
      yay:       ["Bleed Esports"],
      Zest:      ["Bleed Esports"],
      Retla:     ["Bleed Esports"],
      Setrod:    ["FunPlus Phoenix"],
      Life:      ["FunPlus Phoenix"],
      BerLIN:    ["FunPlus Phoenix"],
      AAAAY:     ["FunPlus Phoenix"],
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
      d3ffo:    ["Gambit Esports"],
      nAts:     ["Gambit Esports"],
      Redgar:   ["Gambit Esports"],
      Sheydos:  ["Gambit Esports"],
      Boaster:  ["Fnatic"],
      Derke:    ["Fnatic", "Team Vitality"],
      Alfajer:  ["Fnatic"],
      Leo:      ["Fnatic"],
      kamyk:    ["Fnatic"],
      hiro:     ["Fnatic"],
      kaajak:   ["Fnatic"],
      crashies: ["Fnatic"],
      Doma:     ["Fnatic"],
      UNFAKE:   ["Team Vitality"],
      PROFEK:   ["Team Vitality"],
      Jamppi:   ["Team Vitality"],
      Sayonara: ["Team Vitality"],
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
      Enzo:      ["Team Liquid"],
      Keiko:     ["Team Liquid"],
      Mistic:    ["Team Liquid"],
      kamo:      ["Team Liquid"],
      kamyk:     ["Team Liquid"],
      paTiTek:   ["Team Liquid"],
      Serial:    ["Team Liquid"],
      penny:     ["Team Liquid"],
      trexx:     ["Team Liquid"],
      wayne:     ["Team Liquid"],
      purp0:     ["Team Liquid"],
      MiniBoo:   ["Team Liquid"],
      Kicks:     ["Team Liquid"],
      GSR:       ["Team Liquid"],
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
      Cloud:     ["GIANTX"],
      hoody:     ["GIANTX"],
      nukkye:    ["GIANTX"],
      Fit1nho:   ["GIANTX"],
      purp0:     ["GIANTX"],
      Famsii:    ["GIANTX"],
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
      GRUBINHO:   ["KOI"],
      kamo:       ["KOI"],
      ShadoW:     ["KOI"],
      Filu:       ["KOI"],
      flyuh:      ["KOI"],
      soulcas:    ["KOI"],
      SUYGETSU:   ["Karmine Corp"],
      LeWN:       ["Karmine Corp"],
      dos9:       ["Karmine Corp"],
      avez:       ["Karmine Corp"],
    }
  },

  pAura: {
    teammates: {
      Turko:       ["SuperMassive Blaze"],
      "Russ (TR)": ["SuperMassive Blaze"],
      Izzy:        ["SuperMassive Blaze"],
      Brave:       ["SuperMassive Blaze", "BBL Esports"],
      QutionerX:   ["BBL Esports"],
      Elite:       ["BBL Esports"],
      reazy:       ["BBL Esports"],
    }
  },

  Turko: {
    teammates: {
      pAura:         ["SuperMassive Blaze"],
      "Russ (TR)":   ["SuperMassive Blaze"],
      Izzy:          ["SuperMassive Blaze"],
      Brave:         ["SuperMassive Blaze", "BBL Esports"],
      AsLanM4shadoW: ["BBL Esports"],
      QutionerX:     ["BBL Esports"],
      SouhcNi:       ["BBL Esports"],
    }
  },

  "Russ (TR)": {
    teammates: {
      pAura: ["SuperMassive Blaze"],
      Turko: ["SuperMassive Blaze"],
      Izzy:  ["SuperMassive Blaze"],
      Brave: ["SuperMassive Blaze"],
    }
  },

  Izzy: {
    teammates: {
      pAura:       ["SuperMassive Blaze"],
      Turko:       ["SuperMassive Blaze"],
      "Russ (TR)": ["SuperMassive Blaze"],
      Brave:       ["SuperMassive Blaze"],
      echo:        ["Eternal Fire"],
      nekky:       ["Eternal Fire"],
      audaz:       ["Eternal Fire"],
      Favian:      ["Eternal Fire"],
      Spear:       ["Eternal Fire"],
    }
  },

  Brave: {
    teammates: {
      pAura:         ["SuperMassive Blaze", "BBL Esports"],
      Turko:         ["SuperMassive Blaze", "BBL Esports"],
      "Russ (TR)":   ["SuperMassive Blaze"],
      Izzy:          ["SuperMassive Blaze"],
      AsLanM4shadoW: ["BBL Esports"],
      QutionerX:     ["BBL Esports"],
      SouhcNi:       ["BBL Esports"],
      Elite:         ["BBL Esports"],
      reazy:         ["BBL Esports"],
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
      BONECOLD:     ["Acend"],
      Kiles:        ["Acend"],
      starxo:       ["Acend"],
      zeek:         ["Acend"],
      ANGE1:        ["Natus Vincere"],
      Shao:         ["Natus Vincere"],
      Zyppan:       ["Natus Vincere"],
      SUYGETSU:     ["Natus Vincere"],
      MrFaliN:      ["FUT Esports"],
      qRaxs:        ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      yetujey:      ["FUT Esports"],
      xeus:         ["FUT Esports"],
      seven:        ["PCIFIC Esports"],
      qpert:        ["PCIFIC Esports"],
      NINJA:        ["PCIFIC Esports"],
      al0rante:     ["PCIFIC Esports"],
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
      GRUBINHO:   ["KOI"],
      kamo:       ["KOI"],
      ShadoW:     ["KOI"],
      Minny:      ["Gentle Mates"],
      marteen:    ["Gentle Mates"],
      GLYPH:      ["Gentle Mates"],
      bipo:       ["Gentle Mates"],
      Proxh:      ["Gentle Mates"],
      H1ber:      ["Gentle Mates"],
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
      hoody:      ["G2 Esports", "Giants", "GIANTX"],
      Meddo:      ["G2 Esports"],
      mixwell:    ["G2 Esports"],
      AvovA:      ["G2 Esports"],
      koldamenta: ["G2 Esports"],
      keloqz:     ["G2 Esports"],
      Fit1nho:    ["Giants", "GIANTX"],
      rhyme:      ["Giants"],
      Cloud:      ["Giants", "GIANTX"],
      Redgar:     ["GIANTX"],
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
      hype:       ["Apeks"],
      MOLSI:      ["Apeks"],
      florescent: ["Apeks"],
      batujnax:   ["Apeks"],
      Governor:   ["Apeks"],
      OLIZERA:    ["Apeks"],
      penny:      ["Apeks"],
    }
  },

  koldamenta: {
    teammates: {
      Leo:         ["Guild Esports"],
      Sayf:        ["Guild Esports"],
      "Russ (UK)": ["Guild Esports"],
      trexx:       ["Guild Esports", "KOI"],
      mixwell:     ["G2 Esports"],
      nukkye:      ["G2 Esports"],
      AvovA:       ["G2 Esports"],
      keloqz:      ["G2 Esports"],
      Sheydos:     ["KOI"],
      Wolfen:      ["KOI"],
      starxo:      ["KOI"],
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
      eeiu:      ["100 Thieves"],
      Boostio:   ["100 Thieves"],
      Zander:    ["100 Thieves"],
      Kess:      ["100 Thieves"],
      Timotino:  ["100 Thieves"],
      vora:      ["100 Thieves"],
    }
  },

  Ethan: {
    teammates: {
      Hiko:     ["100 Thieves"],
      nitr0:    ["100 Thieves"],
      steel:    ["100 Thieves"],
      Asuna:    ["100 Thieves"],
      Boostio:  ["Evil Geniuses"],
      jawgemo:  ["Evil Geniuses"],
      C0M:      ["Evil Geniuses"],
      BcJ:      ["Evil Geniuses"],
      Demon1:   ["Evil Geniuses", "NRG"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
      Marved:   ["NRG"],
      FNS:      ["NRG"],
      s0m:      ["NRG"],
      mada:     ["NRG"],
      Verno:    ["NRG"],
      brawk:    ["NRG"],
      skuba:    ["NRG"],
      Keiko:    ["NRG"],
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
      Ethan:    ["NRG"],
      mada:     ["NRG"],
      Verno:    ["NRG"],
      brawk:    ["NRG"],
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
      Deryeon:  ["Bleed Esports"],
      crazyguy: ["Bleed Esports"],
      sScary:   ["Bleed Esports"],
      Egoist:   ["Bleed Esports"],
      Zest:     ["Bleed Esports"],
      Retla:    ["Bleed Esports"],
      Derrek:   ["Evil Geniuses"],
      NaturE:   ["Evil Geniuses"],
      supamen:  ["Evil Geniuses"],
      icy:      ["Evil Geniuses"],
    }
  },

  Victor: {
    teammates: {
      FNS:      ["Team Envy", "OpTic Gaming", "NRG"],
      yay:      ["Team Envy", "OpTic Gaming"],
      crashies: ["Team Envy", "OpTic Gaming", "NRG"],
      Marved:   ["Team Envy", "OpTic Gaming", "NRG"],
      s0m:      ["NRG"],
      ardiis:   ["NRG"],
      Demon1:   ["NRG"],
      Ethan:    ["NRG"],
      cortezia: ["Sentinels"],
      Jerrwin:  ["Sentinels"],
      johnqt:   ["Sentinels"],
      JonahP:   ["Sentinels"],
      reduxx:   ["Sentinels"],
    }
  },

  crashies: {
    teammates: {
      FNS:       ["Team Envy", "OpTic Gaming", "NRG"],
      yay:       ["Team Envy", "OpTic Gaming"],
      Victor:    ["Team Envy", "OpTic Gaming", "NRG"],
      Marved:    ["Team Envy", "OpTic Gaming", "NRG"],
      s0m:       ["NRG"],
      ardiis:    ["NRG"],
      Demon1:    ["NRG"],
      Ethan:     ["NRG"],
      Boaster:   ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Chronicle: ["Fnatic"],
      kaajak:    ["Fnatic"],
      Doma:      ["Fnatic"],
      Veqaj:     ["Fnatic"],
      CyvOph:    ["Fnatic"],
      Cloud:     ["Fnatic"],
    }
  },

  Marved: {
    teammates: {
      FNS:      ["Team Envy", "OpTic Gaming"],
      yay:      ["Team Envy", "OpTic Gaming"],
      Victor:   ["Team Envy", "OpTic Gaming", "NRG"],
      crashies: ["Team Envy", "OpTic Gaming", "NRG"],
      zekken:   ["Sentinels"],
      Sacy:     ["Sentinels"],
      pANcada:  ["Sentinels"],
      TenZ:     ["Sentinels"],
      dephh:    ["Sentinels"],
      Demon1:   ["NRG"],
      Ethan:    ["NRG"],
      reduxx:   ["Sentinels"],
      JonahP:   ["Sentinels"],
      johnqt:   ["Sentinels"],
      Jerrwin:  ["Sentinels"],
      cortezia: ["Sentinels"],
    }
  },

  keznit: {
    teammates: {
      Klaus:     ["KRÜ Esports"],
      Mazino:    ["KRÜ Esports"],
      NagZ:      ["KRÜ Esports"],
      delz1k:    ["KRÜ Esports"],
      Daveeys:   ["KRÜ Esports"],
      Melser:    ["KRÜ Esports"],
      axeddy:    ["KRÜ Esports"],
      Shyy:      ["KRÜ Esports"],
      mta:       ["KRÜ Esports"],
      heat:      ["KRÜ Esports"],
      adverso:   ["KRÜ Esports"],
      Dantedeu5: ["KRÜ Esports"],
      Demon1:    ["ENVY"],
      Eggsterr:  ["ENVY"],
      P0PPIN:    ["ENVY"],
      Rossy:     ["ENVY"],
      inspire:   ["ENVY"],
      nightz:    ["ENVY"],
      GLYPH:     ["ENVY"],
    }
  },

  heat: {
    teammates: {
      mwzera:    ["Keyd Stars", "FURIA Esports", "KRÜ Esports"],
      JhoW:      ["Keyd Stars"],
      v1xen:     ["Keyd Stars"],
      murizzz:   ["Keyd Stars", "MIBR"],
      ntk:       ["Keyd Stars"],
      jzz:       ["MIBR"],
      frz:       ["MIBR"],
      RgLM:      ["MIBR"],
      TxoziN:    ["MIBR"],
      Klaus:     ["KRÜ Esports"],
      Melser:    ["KRÜ Esports"],
      keznit:    ["KRÜ Esports"],
      Shyy:      ["KRÜ Esports"],
      mta:       ["KRÜ Esports"],
      Khalil:    ["FURIA Esports"],
      havoc:     ["FURIA Esports"],
      raafa:     ["FURIA Esports"],
      pryze:     ["FURIA Esports"],
      Palla:     ["FURIA Esports"],
      tuyz:      ["FURIA Esports"],
      Urango:    ["FURIA Esports"],
      adverso:   ["FURIA Esports"],
      Saadhak:   ["KRÜ Esports"],
      Less:      ["KRÜ Esports"],
      Dantedeu5: ["KRÜ Esports"],
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
      myssen:  ["Havan Liberty"],
      shion:   ["Havan Liberty"],
      pleets:  ["Havan Liberty"],
      krain:   ["Havan Liberty"],
      Khalil:  ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
      kon4n:   ["FURIA Esports"],
      havoc:   ["FURIA Esports"],
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
      Palla:   ["MIBR"],
      rich:    ["MIBR"],
      ShahZaM: ["MIBR"],
      Pa1nt:   ["MIBR"],
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
      Lakia:      ["Vision Strikers"],
      Rb:         ["Vision Strikers", "DRX"],
      k1Ng:       ["Vision Strikers"],
      BuZz:       ["Vision Strikers", "DRX", "T1"],
      MaKo:       ["Vision Strikers", "DRX"],
      Zest:       ["DRX"],
      Foxy9:      ["DRX"],
      Flashback:  ["DRX"],
      BeYN:       ["DRX"],
      Sayaplayer: ["T1"],
      xccurate:   ["T1"],
      iZu:        ["T1"],
      Rossy:      ["T1"],
      Carpe:      ["T1"],
      Sylvan:     ["T1"],
      Meteor:     ["T1"],
      DH:         ["T1"],
      Munchkin:   ["T1"],
    }
  },

  Rb: {
    teammates: {
      Lakia:      ["Vision Strikers"],
      stax:       ["Vision Strikers", "DRX"],
      k1Ng:       ["Vision Strikers"],
      BuZz:       ["Vision Strikers", "DRX"],
      MaKo:       ["Vision Strikers", "DRX"],
      Zest:       ["DRX"],
      Foxy9:      ["DRX"],
      kawaii:     ["Titan Esports Club"],
      qiuye:      ["Titan Esports Club"],
      Abo:        ["Titan Esports Club"],
      LockM:      ["Titan Esports Club"],
      AC:         ["Titan Esports Club"],
      B1ack:      ["Titan Esports Club"],
      Haodong:    ["Titan Esports Club"],
      dynamite:   ["Titan Esports Club"],
      CoCo:       ["Titan Esports Club"],
      TvirusLuke: ["Titan Esports Club"],
      Dambi:      ["NS RedForce"],
      Francis:    ["NS RedForce"],
      Ivy:        ["NS RedForce"],
      Persia:     ["NS RedForce"],
      Xross:      ["NS RedForce"],
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
      Lakia:     ["Vision Strikers"],
      stax:      ["Vision Strikers", "DRX", "T1"],
      Rb:        ["Vision Strikers", "DRX"],
      k1Ng:      ["Vision Strikers"],
      MaKo:      ["Vision Strikers", "DRX"],
      Zest:      ["DRX"],
      Foxy9:     ["DRX"],
      Flashback: ["DRX"],
      BeYN:      ["DRX"],
      iZu:       ["T1"],
      Sylvan:    ["T1"],
      Meteor:    ["T1"],
      Carpe:     ["T1"],
      DH:        ["T1"],
      Munchkin:  ["T1"],
    }
  },

  MaKo: {
    teammates: {
      Lakia:     ["Vision Strikers"],
      stax:      ["Vision Strikers", "DRX"],
      Rb:        ["Vision Strikers", "DRX"],
      k1Ng:      ["Vision Strikers"],
      BuZz:      ["Vision Strikers", "DRX"],
      Zest:      ["DRX"],
      Foxy9:     ["DRX"],
      Flashback: ["DRX"],
      BeYN:      ["DRX"],
      free1ng:   ["DRX"],
      HYUNMIN:   ["DRX"],
      Estrella:  ["DRX"],
      Hermes:    ["DRX"],
      Yong:      ["DRX"],
      Flicker:   ["DRX"],
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
      t3xture:   ["Gen.G Esports"],
      RaxcaL:    ["Gen.G Esports"],
      Karon:     ["Gen.G Esports"],
      Ash:       ["Gen.G Esports"],
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
      hiroronn:  ["ZETA DIVISION"],
      Yuran:     ["ZETA DIVISION"],
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
      Jinggg:        ["Paper Rex"],
      d4v41:         ["Paper Rex"],
      f0rsakeN:      ["Paper Rex"],
      mindfreak:     ["Paper Rex"],
      shiba:         ["Paper Rex"],
      something:     ["Paper Rex"],
      CigaretteS:    ["Paper Rex"],
      Lightningfast: ["Global Esports"],
      "Russ (UK)":   ["Global Esports"],
      blaZek1ng:     ["Global Esports"],
      Polvi:         ["Global Esports"],
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
      Monyet:     ["Paper Rex"],
      PatMen:     ["Paper Rex"],
      invy:       ["Paper Rex"],
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
      Monyet:     ["Paper Rex"],
      PatMen:     ["Paper Rex"],
      invy:       ["Paper Rex"],
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
      Monyet:     ["Paper Rex"],
      PatMen:     ["Paper Rex"],
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
      heat:      ["Keyd Stars", "FURIA Esports", "KRÜ Esports"],
      JhoW:      ["Keyd Stars"],
      v1xen:     ["Keyd Stars"],
      murizzz:   ["Keyd Stars"],
      qck:       ["FURIA Esports"],
      Khalil:    ["FURIA Esports"],
      mazin:     ["FURIA Esports"],
      dgzin:     ["FURIA Esports"],
      kon4n:     ["FURIA Esports"],
      liazzi:    ["FURIA Esports"],
      havoc:     ["FURIA Esports"],
      Nozwerr:   ["FURIA Esports"],
      xand:      ["FURIA Esports"],
      raafa:     ["FURIA Esports"],
      Dantedeu5: ["KRÜ Esports"],
      Less:      ["KRÜ Esports"],
      Saadhak:   ["KRÜ Esports"],
      silentzz:  ["KRÜ Esports"],
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
      NDG:       ["Team Secret"],
      "2ge":     ["Team Secret"],
      Wild0reoo: ["Team Secret"],
      kellyS:    ["Team Secret"],
      Nizzy:     ["Team Secret"],
      ZesBeeW:   ["Team Secret"],
      TenTen:    ["Team Secret"],
      Sylvan:    ["Team Secret"],
      BerserX:   ["Team Secret"],
      Rimuru:    ["Team Secret"],
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
      NDG:        ["Team Secret"],
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
      OXY:    ["Cloud9"],
      v1c:    ["Cloud9"],
      neT:    ["Cloud9"],
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
      JonahP:  ["G2 Esports"],
      neT:     ["G2 Esports"],
      trent:   ["G2 Esports"],
      valyn:   ["G2 Esports"],
      icy:     ["G2 Esports"],
      jawgemo: ["G2 Esports"],
      babybay: ["G2 Esports"],
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
      OXY:     ["Cloud9"],
      wippie:  ["Cloud9"],
      moose:   ["Cloud9"],
      v1c:     ["Cloud9"],
      neT:     ["Cloud9"],
      penny:   ["Cloud9"],
      Demon1:  ["Cloud9"],
      Jackk:   ["Cloud9"],
      Notexxd: ["Cloud9"],
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
      mwzera:   ["FURIA Esports"],
      havoc:    ["FURIA Esports"],
    }
  },

  qck: {
    teammates: {
      dgzin:    ["FURIA Esports"],
      xand:     ["FURIA Esports"],
      Khalil:   ["FURIA Esports"],
      Nozwerr:  ["FURIA Esports"],
      mazin:    ["FURIA Esports"],
      mwzera:   ["FURIA Esports"],
      Less:     ["LOUD"],
      Saadhak:  ["LOUD"],
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
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
      kon4n:   ["FURIA Esports"],
      liazzi:  ["FURIA Esports"],
      havoc:   ["FURIA Esports"],
      heat:    ["FURIA Esports"],
      raafa:   ["FURIA Esports"],
      pryze:   ["FURIA Esports"],
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
      mwzera:    ["FURIA Esports"],
      kon4n:     ["FURIA Esports"],
      havoc:     ["FURIA Esports"],
      Artzin:    ["MIBR"],
      xenom:     ["MIBR"],
      cortezia:  ["MIBR"],
      aspas:     ["MIBR"],
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
      jzz:     ["MIBR"],
      frz:     ["MIBR"],
      RgLM:    ["MIBR"],
      Artzin:  ["MIBR"],
      Palla:   ["MIBR"],
      rich:    ["MIBR"],
      liazzi:  ["MIBR"],
      ShahZaM: ["MIBR"],
      Pa1nt:   ["MIBR"],
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
      nukkye:  ["G2 Esports", "Giants", "GIANTX"],
      AvovA:   ["G2 Esports"],
      mixwell: ["G2 Esports"],
      Meddo:   ["G2 Esports"],
      Fit1nho: ["Giants", "GIANTX"],
      rhyme:   ["Giants"],
      Cloud:   ["Giants", "GIANTX"],
      Redgar:  ["GIANTX"],
      purp0:   ["GIANTX"],
      Famsii:  ["GIANTX"],
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
      valyn:      ["The Guard", "G2 Esports"],
      JonahP:     ["The Guard", "G2 Esports"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard", "G2 Esports"],
      leaf:       ["G2 Esports"],
      Xeppaa:     ["Cloud9"],
      OXY:        ["Cloud9"],
      v1c:        ["Cloud9"],
      mitch:      ["Cloud9"],
      westside:   ["GIANTX"],
      Flickless:  ["GIANTX"],
      ara:        ["GIANTX"],
      Jesse:      ["GIANTX"],
    }
  },

  valyn: {
    teammates: {
      neT:        ["The Guard", "G2 Esports"],
      JonahP:     ["The Guard", "G2 Esports"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard", "G2 Esports"],
      leaf:       ["G2 Esports"],
      icy:        ["G2 Esports"],
      jawgemo:    ["G2 Esports"],
      babybay:    ["G2 Esports"],
    }
  },

  JonahP: {
    teammates: {
      neT:        ["The Guard", "G2 Esports"],
      valyn:      ["The Guard", "G2 Esports"],
      Sayaplayer: ["The Guard"],
      trent:      ["The Guard", "G2 Esports"],
      leaf:       ["G2 Esports"],
      icy:        ["G2 Esports"],
      jawgemo:    ["G2 Esports"],
      babybay:    ["G2 Esports"],
      cortezia:   ["Sentinels"],
      Jerrwin:    ["Sentinels"],
      johnqt:     ["Sentinels"],
      reduxx:     ["Sentinels"],
      Victor:     ["Sentinels"],
      Marved:     ["Sentinels"],
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
      xccurate: ["T1"],
      iZu:      ["T1"],
      Rossy:    ["T1"],
      stax:     ["T1"],
    }
  },

  trent: {
    teammates: {
      neT:        ["The Guard", "G2 Esports"],
      valyn:      ["The Guard", "G2 Esports"],
      JonahP:     ["The Guard", "G2 Esports"],
      Sayaplayer: ["The Guard"],
      leaf:       ["G2 Esports"],
      icy:        ["G2 Esports"],
      jawgemo:    ["G2 Esports"],
      babybay:    ["G2 Esports"],
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
      PatMen:     ["Paper Rex"],
      invy:       ["Paper Rex"],
    }
  },

  pANcada: {
    teammates: {
      Sacy:     ["LOUD", "Sentinels"],
      Saadhak:  ["LOUD"],
      aspas:    ["LOUD"],
      Less:     ["LOUD"],
      TenZ:     ["Sentinels"],
      zekken:   ["Sentinels"],
      dephh:    ["Sentinels"],
      Marved:   ["Sentinels"],
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
      dgzin:    ["LOUD"],
      v1nNy:    ["LOUD"],
      lukxo:    ["LOUD"],
      RobbieBk: ["LOUD"],
      Virtyy:   ["LOUD"],
      Darker:   ["LOUD"],
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
      kiNgg:    ["Leviatán"],
      Mazino:   ["Leviatán", "MIBR"],
      tex:      ["Leviatán", "MIBR"],
      C0M:      ["Leviatán"],
      Artzin:   ["MIBR"],
      xenom:    ["MIBR"],
      cortezia: ["MIBR"],
      Nozwerr:  ["MIBR"],
      Verno:    ["MIBR"],
      zekken:   ["MIBR"],
    }
  },

  Less: {
    teammates: {
      pANcada:   ["LOUD"],
      Sacy:      ["LOUD"],
      Saadhak:   ["LOUD", "KRÜ Esports"],
      aspas:     ["LOUD"],
      cauanzin:  ["LOUD"],
      tuyz:      ["LOUD"],
      qck:       ["LOUD"],
      Kicks:     ["Team Vitality"],
      Sayf:      ["Team Vitality"],
      trexx:     ["Team Vitality"],
      Derke:     ["Team Vitality"],
      CyvOph:    ["Team Vitality"],
      UNFAKE:    ["Team Vitality"],
      KovaQ:     ["Team Vitality"],
      Dantedeu5: ["KRÜ Esports"],
      mwzera:    ["KRÜ Esports"],
      silentzz:  ["KRÜ Esports"],
      heat:      ["KRÜ Esports"],
    }
  },

  H1ber: {
    teammates: {
      Boaster: ["Fnatic"],
      Magnum:  ["Fnatic"],
      Mistic:  ["Fnatic"],
      Fearoth: ["Fnatic"],
      starxo:  ["Gentle Mates"],
      Proxh:   ["Gentle Mates"],
      Minny:   ["Gentle Mates"],
      marteen: ["Gentle Mates"],
      bipo:    ["Gentle Mates"],
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
      stax:     ["DRX"],
      Rb:       ["DRX"],
      BuZz:     ["DRX"],
      MaKo:     ["DRX"],
      Foxy9:    ["DRX"],
      Deryeon:  ["Bleed Esports"],
      sScary:   ["Bleed Esports"],
      yay:      ["Bleed Esports"],
      Retla:    ["Bleed Esports"],
      crazyguy: ["Bleed Esports"],
    }
  },

  Surf: {
    teammates: {
      foxz:      ["XERXIA"],
      sushiboys: ["XERXIA"],
      sScary:    ["XERXIA"],
      Crws:      ["XERXIA", "TALON"],
      JitboyS:   ["TALON"],
      ban:       ["TALON"],
      Governor:  ["TALON"],
      lenne:     ["TALON"],
      Primmie:   ["TALON"],
    }
  },

  Dep: {
    teammates: {
      Laz:       ["ZETA DIVISION"],
      crow:      ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      TENNN:     ["ZETA DIVISION"],
      hiroronn:  ["ZETA DIVISION"],
      Yuran:     ["ZETA DIVISION"],
      CLZ:       ["ZETA DIVISION"],
      SyouTa:    ["ZETA DIVISION"],
      Xdll:      ["ZETA DIVISION"],
      TenTen:    ["ZETA DIVISION"],
    }
  },

  SugarZ3ro: {
    teammates: {
      Laz:      ["ZETA DIVISION"],
      crow:     ["ZETA DIVISION"],
      Dep:      ["ZETA DIVISION"],
      TENNN:    ["ZETA DIVISION"],
      hiroronn: ["ZETA DIVISION"],
      Yuran:    ["ZETA DIVISION"],
      CLZ:      ["ZETA DIVISION"],
      SyouTa:   ["ZETA DIVISION"],
      Xdll:     ["ZETA DIVISION"],
      TenTen:   ["ZETA DIVISION"],
      eKo:      ["ZETA DIVISION"],
      Absol:    ["ZETA DIVISION"],
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
      xand:     ["Ninjas in Pyjamas"],
      Jonn:     ["Ninjas in Pyjamas"],
      bnj:      ["Ninjas in Pyjamas"],
      bezn1:    ["Ninjas in Pyjamas"],
      aspas:    ["LOUD"],
      Less:     ["LOUD"],
      Saadhak:  ["LOUD"],
      tuyz:     ["LOUD"],
      qck:      ["LOUD"],
      pANcada:  ["LOUD"],
      dgzin:    ["LOUD"],
      v1nNy:    ["LOUD"],
      lukxo:    ["LOUD"],
      RobbieBk: ["LOUD"],
      Virtyy:   ["LOUD"],
      Darker:   ["LOUD"],
      erde:     ["LOUD"],
    }
  },

  Enzo: {
    teammates: {
      Boaster: ["Fnatic"],
      Mistic:  ["Fnatic", "Team Liquid"],
      Derke:   ["Fnatic"],
      Alfajer: ["Fnatic"],
      Jamppi:  ["Team Liquid"],
      nAts:    ["Team Liquid"],
      Keiko:   ["Team Liquid"],
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
      hiro:      ["Fnatic"],
      kaajak:    ["Fnatic"],
      crashies:  ["Fnatic"],
      Doma:      ["Fnatic"],
      Veqaj:     ["Fnatic"],
      CyvOph:    ["Fnatic"],
      Cloud:     ["Fnatic"],
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
      johnqt:    ["Sentinels"],
      Zellsis:   ["Sentinels"],
      bang:      ["Sentinels"],
      N4RRATE:   ["Sentinels"],
      aspas:     ["MIBR"],
      Mazino:    ["MIBR"],
      tex:       ["MIBR"],
      Verno:     ["MIBR"],
    }
  },

  Cryocells: {
    teammates: {
      AYRIN:    ["XSET"],
      BcJ:      ["XSET"],
      dephh:    ["XSET"],
      zekken:   ["XSET"],
      Asuna:    ["100 Thieves"],
      Derrek:   ["100 Thieves"],
      stellar:  ["100 Thieves"],
      bang:     ["100 Thieves"],
      eeiu:     ["100 Thieves"],
      Boostio:  ["100 Thieves"],
      Zander:   ["100 Thieves"],
      Kess:     ["100 Thieves"],
      Timotino: ["100 Thieves"],
      vora:     ["100 Thieves"],
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
      adverso:   ["Leviatán", "KRÜ Esports"],
      kiNgg:     ["Leviatán"],
      Shyy:      ["Leviatán", "KRÜ Esports"],
      NagZ:      ["KRÜ Esports"],
      xand:      ["KRÜ Esports"],
      Daveeys:   ["KRÜ Esports"],
      axeddy:    ["KRÜ Esports"],
      Klaus:     ["KRÜ Esports"],
      keznit:    ["KRÜ Esports"],
      mta:       ["KRÜ Esports"],
      heat:      ["KRÜ Esports"],
      Mazino:    ["KRÜ Esports"],
      Dantedeu5: ["KRÜ Esports"],
    }
  },

  adverso: {
    teammates: {
      Tacolilla: ["Leviatán"],
      Melser:    ["Leviatán", "KRÜ Esports"],
      kiNgg:     ["Leviatán"],
      Shyy:      ["Leviatán", "KRÜ Esports"],
      keznit:    ["KRÜ Esports"],
      Mazino:    ["KRÜ Esports"],
      heat:      ["FURIA Esports"],
      Palla:     ["FURIA Esports"],
      tuyz:      ["FURIA Esports"],
      Urango:    ["FURIA Esports"],
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
      aspas:     ["Leviatán"],
      tex:       ["Leviatán"],
      C0M:       ["Leviatán"],
      Demon1:    ["Leviatán"],
      nataNk:    ["Leviatán"],
      Rossy:     ["Leviatán"],
      okeanos:   ["Leviatán"],
      Sato:      ["Leviatán"],
      blowz:     ["Leviatán"],
      Neon:      ["Leviatán"],
      spikeziN:  ["Leviatán"],
      PxS:       ["Leviatán"],
    }
  },

  Shyy: {
    teammates: {
      Tacolilla: ["Leviatán"],
      Melser:    ["Leviatán", "KRÜ Esports"],
      adverso:   ["Leviatán", "KRÜ Esports"],
      kiNgg:     ["Leviatán"],
      Nozwerr:   ["Leviatán"],
      Mazino:    ["Leviatán", "KRÜ Esports"],
      mta:       ["KRÜ Esports"],
      keznit:    ["KRÜ Esports"],
      Klaus:     ["KRÜ Esports"],
      heat:      ["KRÜ Esports"],
      Dantedeu5: ["KRÜ Esports"],
      koalanoob: ["FURIA Esports"],
      C0M:       ["FURIA Esports"],
      basic:     ["FURIA Esports"],
      Artzin:    ["FURIA Esports"],
    }
  },

  ANGE1: {
    teammates: {
      Shao:      ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:    ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU:  ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:    ["FunPlus Phoenix", "Natus Vincere"],
      cNed:      ["Natus Vincere"],
      hiro:      ["Natus Vincere"],
      koalanoob: ["Natus Vincere"],
      Ruxic:     ["Natus Vincere"],
      alexiiik:  ["Natus Vincere"],
    }
  },

  Shao: {
    teammates: {
      ANGE1:     ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:    ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU:  ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:    ["FunPlus Phoenix", "Natus Vincere"],
      cNed:      ["Natus Vincere"],
      hiro:      ["Natus Vincere"],
      koalanoob: ["Natus Vincere"],
      Ruxic:     ["Natus Vincere"],
      alexiiik:  ["Natus Vincere"],
      sociablEE: ["Natus Vincere"],
      Filu:      ["Natus Vincere"],
    }
  },

  Zyppan: {
    teammates: {
      ANGE1:    ["FunPlus Phoenix", "Natus Vincere"],
      Shao:     ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU: ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:   ["FunPlus Phoenix", "Natus Vincere"],
      cNed:     ["Natus Vincere"],
      K4DAVRA:  ["Gentle Mates"],
      Click:    ["Gentle Mates"],
      Minny:    ["Gentle Mates"],
      RobbieBk: ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
    }
  },

  SUYGETSU: {
    teammates: {
      ANGE1:   ["FunPlus Phoenix", "Natus Vincere"],
      Shao:    ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:  ["FunPlus Phoenix", "Natus Vincere"],
      ardiis:  ["FunPlus Phoenix", "Natus Vincere"],
      cNed:    ["Natus Vincere"],
      marteen: ["Karmine Corp"],
      avez:    ["Karmine Corp"],
      Elite:   ["Karmine Corp"],
      Saadhak: ["Karmine Corp"],
      pyrolll: ["Karmine Corp"],
      Sheydos: ["Karmine Corp"],
      LeWN:    ["Karmine Corp"],
      dos9:    ["Karmine Corp"],
      N4RRATE: ["Karmine Corp"],
    }
  },

  ardiis: {
    teammates: {
      ANGE1:    ["FunPlus Phoenix", "Natus Vincere"],
      Shao:     ["FunPlus Phoenix", "Natus Vincere"],
      Zyppan:   ["FunPlus Phoenix", "Natus Vincere"],
      SUYGETSU: ["FunPlus Phoenix", "Natus Vincere"],
      s0m:      ["NRG"],
      FNS:      ["NRG"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
    }
  },

  Leo: {
    teammates: {
      Sayf:        ["Guild Esports"],
      koldamenta:  ["Guild Esports"],
      "Russ (UK)": ["Guild Esports"],
      trexx:       ["Guild Esports"],
      Boaster:     ["Fnatic"],
      Derke:       ["Fnatic"],
      Alfajer:     ["Fnatic"],
      Chronicle:   ["Fnatic"],
      kamyk:       ["Fnatic"],
    }
  },

  Sayf: {
    teammates: {
      Leo:         ["Guild Esports"],
      koldamenta:  ["Guild Esports"],
      "Russ (UK)": ["Guild Esports"],
      trexx:       ["Guild Esports", "Team Vitality"],
      soulcas:     ["Team Liquid"],
      Jamppi:      ["Team Liquid"],
      Redgar:      ["Team Liquid"],
      nAts:        ["Team Liquid"],
      Harmii:      ["Team Liquid"],
      ceNder:      ["Team Vitality"],
      runneR:      ["Team Vitality"],
      Kicks:       ["Team Vitality"],
      Destrian:    ["Team Vitality"],
      Less:        ["Team Vitality"],
      Derke:       ["Team Vitality"],
      CyvOph:      ["Team Vitality"],
      UNFAKE:      ["Team Vitality"],
      KovaQ:       ["Team Vitality"],
    }
  },

  "Russ (UK)": {
    teammates: {
      Leo:           ["Guild Esports"],
      Sayf:          ["Guild Esports"],
      koldamenta:    ["Guild Esports"],
      trexx:         ["Guild Esports"],
      Lightningfast: ["Global Esports"],
      blaZek1ng:     ["Global Esports"],
      Polvi:         ["Global Esports"],
      Benkai:        ["Global Esports"],
    }
  },

  trexx: {
    teammates: {
      Leo:         ["Guild Esports"],
      Sayf:        ["Guild Esports", "Team Vitality"],
      koldamenta:  ["Guild Esports", "KOI"],
      "Russ (UK)": ["Guild Esports"],
      Sheydos:     ["KOI"],
      Wolfen:      ["KOI"],
      starxo:      ["KOI"],
      ceNder:      ["Team Vitality"],
      runneR:      ["Team Vitality"],
      Kicks:       ["Team Vitality", "Team Liquid"],
      Less:        ["Team Vitality"],
      Derke:       ["Team Vitality"],
      nAts:        ["Team Liquid"],
      Keiko:       ["Team Liquid"],
      kamo:        ["Team Liquid"],
      paTiTek:     ["Team Liquid"],
      purp0:       ["Team Liquid"],
      GSR:         ["Team Liquid"],
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
      Sylvan:   ["Gen.G Esports", "T1"],
      t3xture:  ["Gen.G Esports"],
      Lakia:    ["Gen.G Esports"],
      Munchkin: ["Gen.G Esports", "T1"],
      Karon:    ["Gen.G Esports"],
      iZu:      ["T1"],
      stax:     ["T1"],
      BuZz:     ["T1"],
      Carpe:    ["T1"],
      DH:       ["T1"],
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
      jawgemo:   ["Evil Geniuses"],
      Apoth:     ["Evil Geniuses"],
      NaturE:    ["Evil Geniuses"],
      supamen:   ["Evil Geniuses"],
      icy:       ["Evil Geniuses"],
      yay:       ["Evil Geniuses"],
    }
  },

  stellar: {
    teammates: {
      Asuna:     ["100 Thieves"],
      Derrek:    ["100 Thieves"],
      Will:      ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      add3r:     ["FURIA Esports"],
      bdog:      ["FURIA Esports"],
      jakee:     ["FURIA Esports"],
      penny:     ["FURIA Esports"],
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
      eeiu:      ["100 Thieves"],
      Boostio:   ["100 Thieves"],
      zekken:    ["Sentinels"],
      johnqt:    ["Sentinels"],
      Zellsis:   ["Sentinels"],
      N4RRATE:   ["Sentinels"],
      Timotino:  ["100 Thieves"],
      vora:      ["100 Thieves"],
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
      qck:       ["FURIA Esports"],
      Khalil:    ["FURIA Esports"],
      Nozwerr:   ["FURIA Esports"],
      mazin:     ["FURIA Esports"],
      mwzera:    ["FURIA Esports"],
      cauanzin:  ["LOUD"],
      tuyz:      ["LOUD"],
      pANcada:   ["LOUD"],
      v1nNy:     ["LOUD"],
      bao:       ["Evil Geniuses"],
      C0M:       ["Evil Geniuses"],
      okeanos:   ["Evil Geniuses"],
      supamen:   ["Evil Geniuses"],
      Paincakes: ["Evil Geniuses"],
      zerona:    ["Evil Geniuses"],
    }
  },

  Haodong: {
    teammates: {
      Life:       ["EDward Gaming"],
      CHICHOO:    ["EDward Gaming"],
      nobody:     ["EDward Gaming"],
      ZmjjKK:     ["EDward Gaming"],
      Smoggy:     ["EDward Gaming"],
      S1Mon:      ["EDward Gaming"],
      B1ack:      ["Titan Esports Club"],
      Abo:        ["Titan Esports Club"],
      Rb:         ["Titan Esports Club"],
      dynamite:   ["Titan Esports Club"],
      CoCo:       ["Titan Esports Club"],
      TvirusLuke: ["Titan Esports Club"],
      lucas:      ["Titan Esports Club"],
      Spitfires:  ["Titan Esports Club"],
      ra1ny:      ["Titan Esports Club"],
    }
  },

  Life: {
    teammates: {
      Haodong:  ["EDward Gaming"],
      CHICHOO:  ["EDward Gaming"],
      nobody:   ["EDward Gaming"],
      ZmjjKK:   ["EDward Gaming"],
      Smoggy:   ["EDward Gaming"],
      monk:     ["Attacking Soul"],
      zjc:      ["Attacking Soul"],
      YHchen:   ["Attacking Soul"],
      Bunt:     ["Attacking Soul"],
      AAAAY:    ["FunPlus Phoenix"],
      BerLIN:   ["FunPlus Phoenix"],
      Lysoar:   ["FunPlus Phoenix"],
      Autumn:   ["FunPlus Phoenix"],
      yosemite: ["FunPlus Phoenix"],
      Shr1mp:   ["FunPlus Phoenix"],
      XII:      ["FunPlus Phoenix"],
      Setrod:   ["FunPlus Phoenix"],
      sScary:   ["FunPlus Phoenix"],
      vo0kashu: ["Dragon Ranger Gaming"],
      Nicc:     ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
      Flex1n:   ["Dragon Ranger Gaming"],
      Verse:    ["Dragon Ranger Gaming"],
    }
  },

  CHICHOO: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
      Jieni7:  ["EDward Gaming"],
      zjc:     ["EDward Gaming"],
      cb:      ["EDward Gaming"],
      stew:    ["EDward Gaming"],
    }
  },

  nobody: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
      Jieni7:  ["EDward Gaming"],
      zjc:     ["EDward Gaming"],
      cb:      ["EDward Gaming"],
      stew:    ["EDward Gaming"],
    }
  },

  ZmjjKK: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
      Jieni7:  ["EDward Gaming"],
      zjc:     ["EDward Gaming"],
      cb:      ["EDward Gaming"],
      stew:    ["EDward Gaming"],
    }
  },

  Smoggy: {
    teammates: {
      Haodong: ["EDward Gaming"],
      Life:    ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
      Jieni7:  ["EDward Gaming"],
      zjc:     ["EDward Gaming"],
      cb:      ["EDward Gaming"],
      stew:    ["EDward Gaming"],
    }
  },

  blaZek1ng: {
    teammates: {
      fl1pzjder:     ["BOOM Esports"],
      BerserX:       ["BOOM Esports"],
      Tehbotol:      ["BOOM Esports"],
      famouz:        ["BOOM Esports"],
      Lightningfast: ["Global Esports"],
      "Russ (UK)":   ["Global Esports"],
      Polvi:         ["Global Esports"],
      Benkai:        ["Global Esports"],
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
      Estrella:  ["Rex Regum Qeon"],
      Jemkin:    ["Rex Regum Qeon"],
    }
  },

  BerserX: {
    teammates: {
      blaZek1ng:  ["BOOM Esports"],
      fl1pzjder:  ["BOOM Esports"],
      Tehbotol:   ["BOOM Esports"],
      famouz:     ["BOOM Esports"],
      Shiro:      ["BOOM Esports"],
      NcSlasher:  ["BOOM Esports"],
      dos9:       ["BOOM Esports"],
      TenTen:     ["Team Secret"],
      Sylvan:     ["Team Secret"],
      kellyS:     ["Team Secret"],
      JessieVash: ["Team Secret"],
      Rimuru:     ["Team Secret"],
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
      Shiro:     ["BOOM Esports"],
      NcSlasher: ["BOOM Esports"],
      dos9:      ["BOOM Esports"],
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
      Elite:         ["BBL Esports"],
      pAura:         ["BBL Esports"],
      reazy:         ["BBL Esports"],
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
      yetujey:      ["FUT Esports"],
      cNed:         ["FUT Esports"],
      xeus:         ["FUT Esports"],
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
      yetujey:      ["FUT Esports"],
      cNed:         ["FUT Esports"],
      xeus:         ["FUT Esports"],
      baha:         ["FUT Esports"],
      KROSTALY:     ["FUT Esports"],
    }
  },

  "ATA KAPTAN": {
    teammates: {
      mojj:    ["FUT Esports"],
      qRaxs:   ["FUT Esports"],
      qw1:     ["FUT Esports"],
      MrFaliN: ["FUT Esports"],
      Muj:     ["FUT Esports"],
      yetujey: ["FUT Esports"],
      cNed:    ["FUT Esports"],
      xeus:    ["FUT Esports"],
    }
  },

  Fit1nho: {
    teammates: {
      hoody:  ["Giants", "GIANTX"],
      nukkye: ["Giants", "GIANTX"],
      rhyme:  ["Giants"],
      Cloud:  ["Giants", "GIANTX"],
      Redgar: ["GIANTX"],
      purp0:  ["GIANTX"],
      Famsii: ["GIANTX"],
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
      Fit1nho:   ["Giants", "GIANTX"],
      hoody:     ["Giants", "GIANTX"],
      nukkye:    ["Giants", "GIANTX"],
      rhyme:     ["Giants"],
      Redgar:    ["GIANTX"],
      purp0:     ["GIANTX"],
      Famsii:    ["GIANTX"],
      runneR:    ["GIANTX"],
      tomaszy:   ["GIANTX"],
      westside:  ["GIANTX"],
      ara:       ["GIANTX"],
      Flickless: ["GIANTX"],
      GRUBINHO:  ["GIANTX"],
      kaajak:    ["Fnatic"],
      crashies:  ["Fnatic"],
      Boaster:   ["Fnatic"],
      Alfajer:   ["Fnatic"],
    }
  },

  Shin: {
    teammates: {
      Newzera: ["Karmine Corp"],
      ScreaM:  ["Karmine Corp"],
      Nivera:  ["Karmine Corp"],
      xms:     ["Karmine Corp"],
      ZE1SH:   ["Karmine Corp"],
      Magnum:  ["Karmine Corp"],
      marteen: ["Karmine Corp"],
      N4RRATE: ["Karmine Corp"],
      tomaszy: ["Karmine Corp"],
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
      keloqz:     ["Team Heretics"],
      mixwell:    ["Team Heretics"],
      zeek:       ["Team Heretics"],
      AvovA:      ["Team Heretics"],
      weber:      ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      paTiTek:    ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
      ComeBack:   ["Team Heretics"],
      koshmaras:  ["Team Heretics"],
    }
  },

  ceNder: {
    teammates: {
      BONECOLD: ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Destrian: ["Team Vitality"],
      Twisten:  ["Team Vitality"],
      runneR:   ["Team Vitality"],
      Kicks:    ["Team Vitality"],
      Sayf:     ["Team Vitality"],
      trexx:    ["Team Vitality"],
    }
  },

  MOLSI: {
    teammates: {
      ceNder:     ["Team Vitality"],
      BONECOLD:   ["Team Vitality"],
      Destrian:   ["Team Vitality"],
      Twisten:    ["Team Vitality"],
      AvovA:      ["Apeks"],
      hype:       ["Apeks"],
      florescent: ["Apeks"],
      batujnax:   ["Apeks"],
      Governor:   ["Apeks"],
      OLIZERA:    ["Apeks"],
      penny:      ["Apeks"],
    }
  },

  Destrian: {
    teammates: {
      ceNder:   ["Team Vitality"],
      BONECOLD: ["Team Vitality"],
      MOLSI:    ["Team Vitality"],
      Twisten:  ["Team Vitality"],
      runneR:   ["Team Vitality"],
      Kicks:    ["Team Vitality"],
      Sayf:     ["Team Vitality"],
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
      Ethan:     ["Evil Geniuses"],
      jawgemo:   ["Evil Geniuses"],
      C0M:       ["Evil Geniuses"],
      BcJ:       ["Evil Geniuses"],
      Demon1:    ["Evil Geniuses"],
      Asuna:     ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      eeiu:      ["100 Thieves"],
      Zander:    ["100 Thieves"],
    }
  },

  jawgemo: {
    teammates: {
      Boostio: ["Evil Geniuses"],
      Ethan:   ["Evil Geniuses"],
      C0M:     ["Evil Geniuses"],
      BcJ:     ["Evil Geniuses"],
      Demon1:  ["Evil Geniuses"],
      Apoth:   ["Evil Geniuses"],
      Derrek:  ["Evil Geniuses"],
      NaturE:  ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
      JonahP:  ["G2 Esports"],
      trent:   ["G2 Esports"],
      valyn:   ["G2 Esports"],
      leaf:    ["G2 Esports"],
      babybay: ["G2 Esports"],
    }
  },

  C0M: {
    teammates: {
      Boostio:   ["Evil Geniuses"],
      Ethan:     ["Evil Geniuses"],
      jawgemo:   ["Evil Geniuses"],
      BcJ:       ["Evil Geniuses"],
      Demon1:    ["Evil Geniuses", "Leviatán"],
      kiNgg:     ["Leviatán"],
      Mazino:    ["Leviatán"],
      aspas:     ["Leviatán"],
      tex:       ["Leviatán"],
      nataNk:    ["Leviatán"],
      Rossy:     ["Leviatán"],
      okeanos:   ["Leviatán", "Evil Geniuses"],
      Sato:      ["Leviatán"],
      bao:       ["Evil Geniuses"],
      dgzin:     ["Evil Geniuses"],
      supamen:   ["Evil Geniuses"],
      Shyy:      ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
      basic:     ["FURIA Esports"],
      Artzin:    ["FURIA Esports"],
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
      qck:      ["LOUD"],
      pANcada:  ["LOUD"],
      dgzin:    ["LOUD"],
      v1nNy:    ["LOUD"],
      heat:     ["FURIA Esports"],
      Palla:    ["FURIA Esports"],
      Urango:   ["FURIA Esports"],
      adverso:  ["FURIA Esports"],
    }
  },

  jzz: {
    teammates: {
      frz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      RgLM:    ["MIBR"],
      TxoziN:  ["MIBR"],
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
    }
  },

  RgLM: {
    teammates: {
      jzz:     ["MIBR"],
      frz:     ["MIBR"],
      heat:    ["MIBR"],
      murizzz: ["MIBR"],
      TxoziN:  ["MIBR"],
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
    }
  },

  s0m: {
    teammates: {
      FNS:      ["NRG"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
      ardiis:   ["NRG"],
      Ethan:    ["NRG"],
      mada:     ["NRG"],
      Verno:    ["NRG"],
      brawk:    ["NRG"],
      skuba:    ["NRG"],
    }
  },

  Anthem: {
    teammates: {
      takej:   ["DetonatioN FocusMe"],
      Reita:   ["DetonatioN FocusMe"],
      xnfri:   ["DetonatioN FocusMe"],
      Suggest: ["DetonatioN FocusMe"],
      Seoldam: ["DetonatioN FocusMe"],
      neth:    ["DetonatioN FocusMe"],
      Meiy:    ["DetonatioN FocusMe"],
      SSeeS:   ["DetonatioN FocusMe"],
      Medusa:  ["DetonatioN FocusMe"],
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
      Meteor:    ["Gen.G Esports"],
      k1Ng:      ["Gen.G Esports"],
      TS:        ["Gen.G Esports"],
      Secret:    ["Gen.G Esports"],
      GodDead:   ["Gen.G Esports"],
      Sylvan:    ["Gen.G Esports"],
      Xdll:      ["ZETA DIVISION"],
      SyouTa:    ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      Absol:     ["ZETA DIVISION"],
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
      Meteor:        ["Gen.G Esports"],
      Lakia:         ["Gen.G Esports"],
      Munchkin:      ["Gen.G Esports"],
      Karon:         ["Gen.G Esports"],
      yoman:         ["Gen.G Esports"],
      Foxy9:         ["Gen.G Esports"],
      Ash:           ["Gen.G Esports"],
      Suggest:       ["Gen.G Esports"],
      ZynX:          ["Gen.G Esports"],
      KiTae:         ["Gen.G Esports"],
      RaxcaL:        ["Gen.G Esports"],
      Efina:         ["Gen.G Esports"],
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
      mindfreak:     ["Paper Rex"],
      f0rsakeN:      ["Paper Rex"],
      d4v41:         ["Paper Rex"],
      something:     ["Paper Rex"],
      xffero:        ["Rex Regum Qeon"],
      Lmemore:       ["Rex Regum Qeon"],
      Estrella:      ["Rex Regum Qeon"],
      Jemkin:        ["Rex Regum Qeon"],
      Kushy:         ["Rex Regum Qeon"],
      crazyguy:      ["Rex Regum Qeon"],
      xan:           ["Rex Regum Qeon"],
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
      Estrella:  ["Rex Regum Qeon"],
      Jemkin:    ["Rex Regum Qeon"],
      Monyet:    ["Rex Regum Qeon"],
    }
  },

  "2ge": {
    teammates: {
      Emman:      ["Rex Regum Qeon"],
      EJAY:       ["Rex Regum Qeon"],
      Tehbotol:   ["Rex Regum Qeon"],
      fl1pzjder:  ["Rex Regum Qeon"],
      Lmemore:    ["Rex Regum Qeon"],
      xffero:     ["Rex Regum Qeon"],
      Estrella:   ["Rex Regum Qeon"],
      Jemkin:     ["Rex Regum Qeon"],
      JessieVash: ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
    }
  },

  ban: {
    teammates: {
      xeta:       ["T1"],
      Munchkin:   ["T1"],
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      iNTRO:      ["T1"],
      Crws:       ["TALON"],
      JitboyS:    ["TALON"],
      Governor:   ["TALON"],
      lenne:      ["TALON"],
      Surf:       ["TALON"],
      Primmie:    ["TALON"],
      Kr1stal:    ["Global Esports"],
      PapiChulo:  ["Global Esports"],
      UdoTan:     ["Global Esports"],
      yoman:      ["Global Esports"],
    }
  },

  Carpe: {
    teammates: {
      xeta:       ["T1"],
      Munchkin:   ["T1"],
      ban:        ["T1"],
      Sayaplayer: ["T1"],
      iNTRO:      ["T1"],
      xccurate:   ["T1"],
      iZu:        ["T1"],
      Rossy:      ["T1"],
      stax:       ["T1"],
      Sylvan:     ["T1"],
      Meteor:     ["T1"],
      BuZz:       ["T1"],
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
      Crws:      ["TALON", "FULL SENSE"],
      foxz:      ["TALON"],
      sushiboys: ["TALON"],
      garnetS:   ["TALON"],
      patt:      ["TALON"],
      ban:       ["TALON"],
      Governor:  ["TALON"],
      lenne:     ["TALON"],
      Surf:      ["TALON"],
      Primmie:   ["TALON", "FULL SENSE"],
      thyy:      ["TALON", "FULL SENSE"],
      killua:    ["TALON", "FULL SENSE"],
      Leviathan: ["FULL SENSE"],
      seph1roth: ["FULL SENSE"],
    }
  },

  Jremy: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      invy:       ["Team Secret"],
      lenne:      ["Team Secret"],
      NDG:        ["Team Secret"],
      "2ge":      ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
    }
  },

  invy: {
    teammates: {
      JessieVash: ["Team Secret"],
      DubsteP:    ["Team Secret"],
      BORKUM:     ["Team Secret"],
      Jremy:      ["Team Secret"],
      lenne:      ["Team Secret"],
      NDG:        ["Team Secret"],
      "2ge":      ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
      kellyS:     ["Team Secret"],
      Nizzy:      ["Team Secret"],
      ZesBeeW:    ["Team Secret"],
      something:  ["Paper Rex"],
      Jinggg:     ["Paper Rex"],
      f0rsakeN:   ["Paper Rex"],
      d4v41:      ["Paper Rex"],
    }
  },

  AAAAY: {
    teammates: {
      BerLIN:     ["FunPlus Phoenix"],
      TZH:        ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
      Yuicaw:     ["FunPlus Phoenix"],
      Lysoar:     ["FunPlus Phoenix"],
      Autumn:     ["FunPlus Phoenix"],
      Life:       ["FunPlus Phoenix"],
      yosemite:   ["FunPlus Phoenix"],
      Shr1mp:     ["FunPlus Phoenix"],
      XII:        ["FunPlus Phoenix"],
      Setrod:     ["FunPlus Phoenix"],
      sScary:     ["FunPlus Phoenix"],
      KovaQ:      ["FunPlus Phoenix"],
      Ben1Ley:    ["FunPlus Phoenix"],
      coconut:    ["FunPlus Phoenix"],
      Xlele:      ["FunPlus Phoenix"],
    }
  },

  BerLIN: {
    teammates: {
      AAAAY:       ["FunPlus Phoenix"],
      TZH:         ["FunPlus Phoenix"],
      WudiYuChEn:  ["FunPlus Phoenix"],
      Yuicaw:      ["FunPlus Phoenix", "JD Gaming"],
      Lysoar:      ["FunPlus Phoenix"],
      Autumn:      ["FunPlus Phoenix"],
      Life:        ["FunPlus Phoenix"],
      yosemite:    ["FunPlus Phoenix"],
      Setrod:      ["FunPlus Phoenix"],
      sScary:      ["FunPlus Phoenix"],
      KovaQ:       ["FunPlus Phoenix"],
      Ben1Ley:     ["FunPlus Phoenix"],
      zhe:         ["JD Gaming"],
      crownfisher: ["JD Gaming"],
      jkuro:       ["JD Gaming"],
    }
  },

  TZH: {
    teammates: {
      AAAAY:      ["FunPlus Phoenix"],
      BerLIN:     ["FunPlus Phoenix"],
      WudiYuChEn: ["FunPlus Phoenix"],
      Yuicaw:     ["FunPlus Phoenix"],
      Lysoar:     ["FunPlus Phoenix"],
      TvirusLuke: ["Dragon Ranger Gaming"],
      Nicc:       ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      Dingwei:    ["Dragon Ranger Gaming"],
      Shion7:     ["Dragon Ranger Gaming"],
      deLb:       ["All Gamers"],
      monk:       ["All Gamers"],
      K1ra:       ["All Gamers"],
      Lsn:        ["All Gamers"],
      Bunt:       ["All Gamers"],
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
      AAAAY:       ["FunPlus Phoenix"],
      BerLIN:      ["FunPlus Phoenix", "JD Gaming"],
      TZH:         ["FunPlus Phoenix"],
      WudiYuChEn:  ["FunPlus Phoenix"],
      Lysoar:      ["FunPlus Phoenix", "Wolves Esports"],
      aluba:       ["Wolves Esports"],
      COLDFISH:    ["Wolves Esports"],
      pl1xx:       ["Wolves Esports"],
      Spring:      ["Wolves Esports"],
      SiuFatBB:    ["Wolves Esports"],
      juicy:       ["Wolves Esports"],
      zhe:         ["JD Gaming"],
      stew:        ["JD Gaming"],
      jkuro:       ["JD Gaming"],
      coconut:     ["JD Gaming"],
      crownfisher: ["JD Gaming"],
    }
  },

  Foxy9: {
    teammates: {
      stax:         ["DRX"],
      Rb:           ["DRX"],
      BuZz:         ["DRX"],
      MaKo:         ["DRX"],
      Zest:         ["DRX"],
      Flashback:    ["DRX"],
      BeYN:         ["DRX"],
      t3xture:      ["Gen.G Esports"],
      Karon:        ["Gen.G Esports"],
      Munchkin:     ["Gen.G Esports"],
      yoman:        ["Gen.G Esports"],
      Ash:          ["Gen.G Esports"],
      Suggest:      ["Gen.G Esports"],
      ZynX:         ["Gen.G Esports"],
      zexy:         ["VARREL"],
      XuNa:         ["VARREL"],
      oonzmlp:      ["VARREL"],
      C1ndeR:       ["VARREL"],
      "Klaus (KR)": ["VARREL"],
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
      Meteor:     ["Gen.G Esports", "T1"],
      k1Ng:       ["Gen.G Esports"],
      TS:         ["Gen.G Esports"],
      GodDead:    ["Gen.G Esports"],
      eKo:        ["Gen.G Esports"],
      iZu:        ["T1"],
      stax:       ["T1"],
      BuZz:       ["T1"],
      Carpe:      ["T1"],
      TenTen:     ["Team Secret"],
      kellyS:     ["Team Secret"],
      JessieVash: ["Team Secret"],
      BerserX:    ["Team Secret"],
      Rimuru:     ["Team Secret"],
      Zeus:       ["Team Secret"],
      STYRON:     ["Team Secret"],
      naTz:       ["Team Secret"],
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
      SkRossi:     ["Global Esports"],
      AYRIN:       ["Global Esports"],
      t3xture:     ["Global Esports"],
      Monyet:      ["Global Esports"],
      Bazzi:       ["Global Esports"],
      WRONSKI:     ["Global Esports"],
      "Russ (UK)": ["Global Esports"],
      blaZek1ng:   ["Global Esports"],
      Polvi:       ["Global Esports"],
      Benkai:      ["Global Esports"],
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
      Monyet:     ["Paper Rex"],
      PatMen:     ["Paper Rex"],
      invy:       ["Paper Rex"],
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
      Estrella:  ["Rex Regum Qeon"],
      Jemkin:    ["Rex Regum Qeon"],
      Monyet:    ["Rex Regum Qeon"],
      Kushy:     ["Rex Regum Qeon"],
      crazyguy:  ["Rex Regum Qeon"],
      xan:       ["Rex Regum Qeon"],
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
      Crws:       ["TALON"],
      JitboyS:    ["TALON"],
      ban:        ["TALON"],
      Governor:   ["TALON"],
      Surf:       ["TALON"],
    }
  },

  kamyk: {
    teammates: {
      Boaster:   ["Fnatic"],
      Derke:     ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Leo:       ["Fnatic"],
      Chronicle: ["Fnatic"],
      nAts:      ["Team Liquid"],
      Keiko:     ["Team Liquid"],
      kamo:      ["Team Liquid"],
      paTiTek:   ["Team Liquid"],
      K4DAVRA:   ["Gentle Mates"],
      Click:     ["Gentle Mates"],
      Minny:     ["Gentle Mates"],
      Zyppan:    ["Gentle Mates"],
      Veqaj:     ["Gentle Mates"],
      Proxh:     ["Gentle Mates"],
      ComeBack:  ["Gentle Mates"],
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
      OXY:     ["Cloud9"],
      vanity:  ["Cloud9"],
      wippie:  ["Cloud9"],
      add3r:   ["FURIA Esports"],
      bdog:    ["FURIA Esports"],
      penny:   ["FURIA Esports"],
      stellar: ["FURIA Esports"],
    }
  },

  runi: {
    teammates: {
      leaf:    ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      jakee:   ["Cloud9"],
      OXY:     ["Cloud9"],
      vanity:  ["Cloud9"],
      moose:   ["Cloud9"],
    }
  },

  Demon1: {
    teammates: {
      Boostio:  ["Evil Geniuses"],
      Ethan:    ["Evil Geniuses", "NRG"],
      jawgemo:  ["Evil Geniuses"],
      C0M:      ["Evil Geniuses", "Leviatán"],
      BcJ:      ["Evil Geniuses"],
      crashies: ["NRG"],
      Victor:   ["NRG"],
      Marved:   ["NRG"],
      kiNgg:    ["Leviatán"],
      tex:      ["Leviatán"],
      nataNk:   ["Leviatán"],
      Rossy:    ["Leviatán", "ENVY"],
      Nicc:     ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
      Flex1n:   ["Dragon Ranger Gaming"],
      Akeman:   ["Dragon Ranger Gaming"],
      Eggsterr: ["ENVY"],
      keznit:   ["ENVY"],
      P0PPIN:   ["ENVY"],
      OXY:      ["Cloud9"],
      penny:    ["Cloud9"],
      v1c:      ["Cloud9"],
      Xeppaa:   ["Cloud9"],
      Zellsis:  ["Cloud9"],
      inspire:  ["ENVY"],
      nightz:   ["ENVY"],
      GLYPH:    ["ENVY"],
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
      zjc:       ["Attacking Soul"],
      YHchen:    ["Attacking Soul"],
      Bunt:      ["Attacking Soul", "All Gamers"],
      Life:      ["Attacking Soul"],
      deLb:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      sword9:    ["All Gamers"],
      K1ra:      ["All Gamers"],
      Lsn:       ["All Gamers"],
      TZH:       ["All Gamers"],
      cb:        ["Nova Esports"],
      GuanG:     ["Nova Esports"],
      Swerl:     ["Nova Esports"],
      Ezeir:     ["Nova Esports"],
      o0o0o:     ["Nova Esports"],
    }
  },

  zjc: {
    teammates: {
      monk:     ["Attacking Soul"],
      YHchen:   ["Attacking Soul"],
      Bunt:     ["Attacking Soul"],
      Life:     ["Attacking Soul"],
      LuoK1ng:  ["TYLOO"],
      Ninebody: ["TYLOO"],
      AAK:      ["TYLOO"],
      ICEKING:  ["TYLOO"],
      Eren:     ["TYLOO"],
      Flex1n:   ["TYLOO"],
      COLDFISH: ["TYLOO"],
      Scales:   ["TYLOO"],
      slowly:   ["TYLOO"],
      "5CM":    ["TYLOO"],
      waituu:   ["TYLOO"],
      CHICHOO:  ["EDward Gaming"],
      nobody:   ["EDward Gaming"],
      ZmjjKK:   ["EDward Gaming"],
      Smoggy:   ["EDward Gaming"],
      Jieni7:   ["EDward Gaming"],
    }
  },

  YHchen: {
    teammates: {
      monk:   ["Attacking Soul"],
      zjc:    ["Attacking Soul"],
      Bunt:   ["Attacking Soul"],
      Life:   ["Attacking Soul"],
      YiHao:  ["JD Gaming"],
      Viva:   ["JD Gaming"],
      MarT1n: ["JD Gaming"],
      stew:   ["JD Gaming"],
      jkuro:  ["JD Gaming"],
      Z1Yan:  ["JD Gaming"],
    }
  },

  Bunt: {
    teammates: {
      monk:      ["Attacking Soul", "All Gamers"],
      zjc:       ["Attacking Soul"],
      YHchen:    ["Attacking Soul"],
      Life:      ["Attacking Soul"],
      deLb:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      sword9:    ["All Gamers"],
      K1ra:      ["All Gamers"],
      Lsn:       ["All Gamers"],
      TZH:       ["All Gamers"],
    }
  },

  Biank: {
    teammates: {
      whzy:     ["Bilibili Gaming"],
      rin:      ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      B3Ar:     ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
      FengF:    ["Trace Esports"],
      HeiB:     ["Trace Esports"],
      Kai:      ["Trace Esports"],
      LuoK1ng:  ["Trace Esports"],
      midi:     ["Trace Esports"],
      MarT1n:   ["Trace Esports"],
      rushia:   ["Bilibili Gaming"],
      nephh:    ["Bilibili Gaming"],
      bud:      ["Bilibili Gaming"],
    }
  },

  whzy: {
    teammates: {
      Biank:    ["Bilibili Gaming"],
      rin:      ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      B3Ar:     ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
      nephh:    ["Bilibili Gaming"],
      Flex1n:   ["Bilibili Gaming"],
      rushia:   ["Bilibili Gaming"],
      bud:      ["Bilibili Gaming"],
      yilai:    ["Bilibili Gaming"],
      FT:       ["Bilibili Gaming"],
    }
  },

  rin: {
    teammates: {
      Biank:    ["Bilibili Gaming"],
      whzy:     ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
    }
  },

  Knight: {
    teammates: {
      Biank:    ["Bilibili Gaming"],
      whzy:     ["Bilibili Gaming"],
      rin:      ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      B3Ar:     ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
      nephh:    ["Bilibili Gaming"],
      Flex1n:   ["Bilibili Gaming"],
      rushia:   ["Bilibili Gaming"],
      bud:      ["Bilibili Gaming"],
      yilai:    ["Bilibili Gaming"],
      FT:       ["Bilibili Gaming"],
    }
  },

  yosemite: {
    teammates: {
      Biank:    ["Bilibili Gaming"],
      whzy:     ["Bilibili Gaming"],
      rin:      ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      B3Ar:     ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
      nephh:    ["Bilibili Gaming"],
      Flex1n:   ["Bilibili Gaming"],
      AAAAY:    ["FunPlus Phoenix"],
      BerLIN:   ["FunPlus Phoenix"],
      Autumn:   ["FunPlus Phoenix"],
      Life:     ["FunPlus Phoenix"],
      Shr1mp:   ["FunPlus Phoenix"],
      XII:      ["FunPlus Phoenix"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      qiutiaN:  ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
      R1ckLee:  ["Wolves Esports"],
      aluba:    ["Wolves Esports"],
      Deryeon:  ["Wolves Esports"],
    }
  },

  Lysoar: {
    teammates: {
      AAAAY:    ["FunPlus Phoenix"],
      BerLIN:   ["FunPlus Phoenix"],
      Yuicaw:   ["FunPlus Phoenix", "Wolves Esports"],
      TZH:      ["FunPlus Phoenix"],
      Autumn:   ["FunPlus Phoenix"],
      Life:     ["FunPlus Phoenix"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      juicy:    ["Wolves Esports"],
      WsLeo:    ["XLG Esports"],
      Rarga:    ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      Sharks:   ["XLG Esports"],
    }
  },

  Meiy: {
    teammates: {
      neth:     ["DetonatioN FocusMe"],
      SSeeS:    ["DetonatioN FocusMe", "DetonatioN FM"],
      Anthem:   ["DetonatioN FocusMe"],
      Medusa:   ["DetonatioN FocusMe"],
      akame:    ["DetonatioN FocusMe", "DetonatioN FM"],
      Art:      ["DetonatioN FocusMe"],
      gyen:     ["DetonatioN FocusMe"],
      Jinboong: ["DetonatioN FocusMe"],
      yatsuka:  ["DetonatioN FM"],
      Caedye:   ["DetonatioN FM"],
    }
  },

  SSeeS: {
    teammates: {
      neth:     ["DetonatioN FocusMe"],
      Meiy:     ["DetonatioN FocusMe", "DetonatioN FM"],
      Anthem:   ["DetonatioN FocusMe"],
      Medusa:   ["DetonatioN FocusMe"],
      akame:    ["DetonatioN FocusMe", "DetonatioN FM"],
      gyen:     ["DetonatioN FocusMe"],
      Jinboong: ["DetonatioN FocusMe"],
      yatsuka:  ["DetonatioN FM"],
      Caedye:   ["DetonatioN FM"],
    }
  },

  Flashback: {
    teammates: {
      stax:     ["DRX"],
      BuZz:     ["DRX"],
      MaKo:     ["DRX"],
      Foxy9:    ["DRX"],
      BeYN:     ["DRX"],
      free1ng:  ["DRX"],
      HYUNMIN:  ["DRX"],
      Estrella: ["DRX"],
    }
  },

  Karon: {
    teammates: {
      Meteor:   ["Gen.G Esports"],
      t3xture:  ["Gen.G Esports"],
      Lakia:    ["Gen.G Esports"],
      Munchkin: ["Gen.G Esports"],
      yoman:    ["Gen.G Esports"],
      Foxy9:    ["Gen.G Esports"],
      Ash:      ["Gen.G Esports"],
      Suggest:  ["Gen.G Esports"],
      ZynX:     ["Gen.G Esports"],
      KiTae:    ["Gen.G Esports"],
      RaxcaL:   ["Gen.G Esports"],
      Efina:    ["Gen.G Esports"],
    }
  },

  Polvi: {
    teammates: {
      Lightningfast: ["Global Esports"],
      "Russ (UK)":   ["Global Esports"],
      blaZek1ng:     ["Global Esports"],
      Benkai:        ["Global Esports"],
    }
  },

  Estrella: {
    teammates: {
      xffero:    ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      Jemkin:    ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      Monyet:    ["Rex Regum Qeon"],
      Kushy:     ["Rex Regum Qeon"],
      MaKo:      ["DRX"],
      free1ng:   ["DRX"],
      HYUNMIN:   ["DRX"],
      BeYN:      ["DRX"],
      Flashback: ["DRX"],
    }
  },

  Jemkin: {
    teammates: {
      xffero:    ["Rex Regum Qeon"],
      fl1pzjder: ["Rex Regum Qeon"],
      Lmemore:   ["Rex Regum Qeon"],
      Estrella:  ["Rex Regum Qeon"],
      "2ge":     ["Rex Regum Qeon"],
      Monyet:    ["Rex Regum Qeon"],
      Kushy:     ["Rex Regum Qeon"],
      crazyguy:  ["Rex Regum Qeon"],
      xan:       ["Rex Regum Qeon"],
    }
  },

  xccurate: {
    teammates: {
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      iZu:        ["T1"],
      Rossy:      ["T1"],
      stax:       ["T1"],
    }
  },

  iZu: {
    teammates: {
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      xccurate:   ["T1"],
      Rossy:      ["T1"],
      stax:       ["T1"],
      Sylvan:     ["T1"],
      Meteor:     ["T1"],
      BuZz:       ["T1"],
      DH:         ["T1"],
      Munchkin:   ["T1"],
    }
  },

  Rossy: {
    teammates: {
      Sayaplayer: ["T1"],
      Carpe:      ["T1"],
      xccurate:   ["T1"],
      iZu:        ["T1"],
      stax:       ["T1"],
      kiNgg:      ["Leviatán"],
      tex:        ["Leviatán"],
      C0M:        ["Leviatán"],
      Demon1:     ["Leviatán", "ENVY"],
      Eggsterr:   ["ENVY"],
      keznit:     ["ENVY"],
      P0PPIN:     ["ENVY"],
      inspire:    ["ENVY"],
      nightz:     ["ENVY"],
      GLYPH:      ["ENVY"],
    }
  },

  Governor: {
    teammates: {
      Crws:        ["TALON"],
      JitboyS:     ["TALON"],
      ban:         ["TALON"],
      lenne:       ["TALON"],
      Surf:        ["TALON"],
      Primmie:     ["TALON"],
      AvovA:       ["Apeks"],
      MOLSI:       ["Apeks"],
      florescent:  ["Apeks"],
      batujnax:    ["Apeks"],
      NagZ:        ["KRÜ Esports"],
      mta:         ["KRÜ Esports"],
      benG:        ["KRÜ Esports"],
      infiltrator: ["KRÜ Esports"],
    }
  },

  NDG: {
    teammates: {
      BORKUM:     ["Team Secret"],
      JessieVash: ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
    }
  },

  hiroronn: {
    teammates: {
      Laz:       ["ZETA DIVISION"],
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      Yuran:     ["ZETA DIVISION"],
    }
  },

  Yuran: {
    teammates: {
      Laz:       ["ZETA DIVISION"],
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      hiroronn:  ["ZETA DIVISION"],
    }
  },

  Deryeon: {
    teammates: {
      crazyguy:   ["Bleed Esports"],
      sScary:     ["Bleed Esports"],
      Egoist:     ["Bleed Esports"],
      yay:        ["Bleed Esports"],
      Zest:       ["Bleed Esports"],
      Retla:      ["Bleed Esports"],
      kellyS:     ["Global Esports"],
      Kr1stal:    ["Global Esports"],
      PapiChulo:  ["Global Esports"],
      UdoTan:     ["Global Esports"],
      patrickWHO: ["Global Esports"],
      xavi8k:     ["Global Esports"],
      PatMen:     ["Global Esports"],
      Autumn:     ["Global Esports"],
      Spring:     ["Wolves Esports"],
      yosemite:   ["Wolves Esports"],
      aluba:      ["Wolves Esports"],
      glacier:    ["Wolves Esports"],
    }
  },

  crazyguy: {
    teammates: {
      Deryeon: ["Bleed Esports"],
      sScary:  ["Bleed Esports"],
      Egoist:  ["Bleed Esports"],
      yay:     ["Bleed Esports"],
      Zest:    ["Bleed Esports"],
      Retla:   ["Bleed Esports"],
      xffero:  ["Rex Regum Qeon"],
      Jemkin:  ["Rex Regum Qeon"],
      Monyet:  ["Rex Regum Qeon"],
      Kushy:   ["Rex Regum Qeon"],
      xan:     ["Rex Regum Qeon"],
    }
  },

  Egoist: {
    teammates: {
      Deryeon:  ["Bleed Esports"],
      crazyguy: ["Bleed Esports"],
      sScary:   ["Bleed Esports"],
      yay:      ["Bleed Esports"],
    }
  },

  Elite: {
    teammates: {
      QutionerX: ["BBL Esports"],
      Brave:     ["BBL Esports"],
      pAura:     ["BBL Esports"],
      reazy:     ["BBL Esports"],
      marteen:   ["Karmine Corp"],
      avez:      ["Karmine Corp"],
      SUYGETSU:  ["Karmine Corp"],
      Saadhak:   ["Karmine Corp"],
      pyrolll:   ["Karmine Corp"],
    }
  },

  reazy: {
    teammates: {
      QutionerX: ["BBL Esports"],
      Brave:     ["BBL Esports"],
      Elite:     ["BBL Esports"],
      pAura:     ["BBL Esports"],
    }
  },

  yetujey: {
    teammates: {
      MrFaliN:      ["FUT Esports"],
      qRaxs:        ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      cNed:         ["FUT Esports"],
      xeus:         ["FUT Esports"],
      baha:         ["FUT Esports"],
      KROSTALY:     ["FUT Esports"],
      s0pp:         ["FUT Esports"],
      sociablEE:    ["FUT Esports"],
    }
  },

  marteen: {
    teammates: {
      Shin:     ["Karmine Corp"],
      Magnum:   ["Karmine Corp"],
      N4RRATE:  ["Karmine Corp"],
      tomaszy:  ["Karmine Corp"],
      avez:     ["Karmine Corp"],
      Elite:    ["Karmine Corp"],
      SUYGETSU: ["Karmine Corp"],
      Saadhak:  ["Karmine Corp"],
      pyrolll:  ["Karmine Corp"],
      starxo:   ["Gentle Mates"],
      Minny:    ["Gentle Mates"],
      GLYPH:    ["Gentle Mates"],
      bipo:     ["Gentle Mates"],
      Proxh:    ["Gentle Mates"],
      H1ber:    ["Gentle Mates"],
    }
  },

  N4RRATE: {
    teammates: {
      Shin:     ["Karmine Corp"],
      Magnum:   ["Karmine Corp"],
      marteen:  ["Karmine Corp"],
      tomaszy:  ["Karmine Corp"],
      zekken:   ["Sentinels"],
      johnqt:   ["Sentinels"],
      Zellsis:  ["Sentinels"],
      bang:     ["Sentinels"],
      cortezia: ["Sentinels"],
      Kyu:      ["Sentinels"],
      reduxx:   ["Sentinels"],
      avez:     ["Karmine Corp"],
      SUYGETSU: ["Karmine Corp"],
      dos9:     ["Karmine Corp"],
      LeWN:     ["Karmine Corp"],
    }
  },

  tomaszy: {
    teammates: {
      Shin:     ["Karmine Corp"],
      Magnum:   ["Karmine Corp"],
      marteen:  ["Karmine Corp"],
      N4RRATE:  ["Karmine Corp"],
      Cloud:    ["GIANTX"],
      purp0:    ["GIANTX"],
      runneR:   ["GIANTX"],
      westside: ["GIANTX"],
    }
  },

  GRUBINHO: {
    teammates: {
      Sheydos:   ["KOI"],
      starxo:    ["KOI"],
      kamo:      ["KOI"],
      ShadoW:    ["KOI"],
      Filu:      ["KOI"],
      flyuh:     ["KOI"],
      soulcas:   ["KOI"],
      Cloud:     ["GIANTX"],
      westside:  ["GIANTX"],
      Flickless: ["GIANTX"],
      ara:       ["GIANTX"],
    }
  },

  kamo: {
    teammates: {
      Sheydos:  ["KOI"],
      starxo:   ["KOI"],
      GRUBINHO: ["KOI"],
      ShadoW:   ["KOI"],
      nAts:     ["Team Liquid"],
      Keiko:    ["Team Liquid"],
      kamyk:    ["Team Liquid"],
      paTiTek:  ["Team Liquid"],
      Serial:   ["Team Liquid"],
      penny:    ["Team Liquid"],
      trexx:    ["Team Liquid"],
      wayne:    ["Team Liquid"],
      purp0:    ["Team Liquid"],
      MiniBoo:  ["Team Liquid"],
      Kicks:    ["Team Liquid"],
      GSR:      ["Team Liquid"],
    }
  },

  ShadoW: {
    teammates: {
      Sheydos:  ["KOI"],
      starxo:   ["KOI"],
      GRUBINHO: ["KOI"],
      kamo:     ["KOI"],
    }
  },

  benjyfishy: {
    teammates: {
      Boo:       ["Team Heretics"],
      MiniBoo:   ["Team Heretics"],
      RieNs:     ["Team Heretics"],
      paTiTek:   ["Team Heretics"],
      Wo0t:      ["Team Heretics"],
      ComeBack:  ["Team Heretics"],
      koshmaras: ["Team Heretics"],
    }
  },

  MiniBoo: {
    teammates: {
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      paTiTek:    ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
      wayne:      ["Team Liquid"],
      purp0:      ["Team Liquid"],
      nAts:       ["Team Liquid"],
      kamo:       ["Team Liquid"],
      Kicks:      ["Team Liquid"],
    }
  },

  RieNs: {
    teammates: {
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      paTiTek:    ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
      ComeBack:   ["Team Heretics"],
      koshmaras:  ["Team Heretics"],
    }
  },

  paTiTek: {
    teammates: {
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
      nAts:       ["Team Liquid"],
      Keiko:      ["Team Liquid"],
      kamo:       ["Team Liquid"],
      kamyk:      ["Team Liquid"],
      Serial:     ["Team Liquid"],
      penny:      ["Team Liquid"],
      trexx:      ["Team Liquid"],
    }
  },

  Keiko: {
    teammates: {
      Jamppi:  ["Team Liquid"],
      nAts:    ["Team Liquid"],
      Enzo:    ["Team Liquid"],
      Mistic:  ["Team Liquid"],
      kamo:    ["Team Liquid"],
      kamyk:   ["Team Liquid"],
      paTiTek: ["Team Liquid"],
      Serial:  ["Team Liquid"],
      penny:   ["Team Liquid"],
      trexx:   ["Team Liquid"],
      brawk:   ["NRG"],
      Ethan:   ["NRG"],
      mada:    ["NRG"],
      skuba:   ["NRG"],
    }
  },

  runneR: {
    teammates: {
      ceNder:    ["Team Vitality"],
      Kicks:     ["Team Vitality"],
      Sayf:      ["Team Vitality"],
      Destrian:  ["Team Vitality"],
      trexx:     ["Team Vitality"],
      Cloud:     ["GIANTX"],
      purp0:     ["GIANTX"],
      tomaszy:   ["GIANTX"],
      westside:  ["GIANTX"],
      ara:       ["GIANTX"],
      Flickless: ["GIANTX"],
    }
  },

  Kicks: {
    teammates: {
      ceNder:   ["Team Vitality"],
      runneR:   ["Team Vitality"],
      Sayf:     ["Team Vitality"],
      Destrian: ["Team Vitality"],
      trexx:    ["Team Vitality", "Team Liquid"],
      Less:     ["Team Vitality"],
      Derke:    ["Team Vitality"],
      CyvOph:   ["Team Vitality"],
      UNFAKE:   ["Team Vitality"],
      KovaQ:    ["Team Vitality"],
      wayne:    ["Team Liquid"],
      purp0:    ["Team Liquid"],
      nAts:     ["Team Liquid"],
      MiniBoo:  ["Team Liquid"],
      kamo:     ["Team Liquid"],
      GSR:      ["Team Liquid"],
    }
  },

  beyAz: {
    teammates: {
      nataNk:  ["Gentle Mates"],
      logaN:   ["Gentle Mates"],
      TakaS:   ["Gentle Mates"],
      Wailers: ["Gentle Mates"],
      K4DAVRA: ["Gentle Mates"],
    }
  },

  nataNk: {
    teammates: {
      beyAz:     ["Gentle Mates"],
      logaN:     ["Gentle Mates"],
      TakaS:     ["Gentle Mates"],
      Wailers:   ["Gentle Mates"],
      K4DAVRA:   ["Gentle Mates"],
      kiNgg:     ["Leviatán"],
      tex:       ["Leviatán"],
      C0M:       ["Leviatán"],
      Demon1:    ["Leviatán"],
      Filu:      ["KOI"],
      flyuh:     ["KOI"],
      baddyG:    ["KOI"],
      MONSTEERR: ["KOI"],
    }
  },

  logaN: {
    teammates: {
      beyAz:   ["Gentle Mates"],
      nataNk:  ["Gentle Mates"],
      TakaS:   ["Gentle Mates"],
      Wailers: ["Gentle Mates"],
    }
  },

  TakaS: {
    teammates: {
      beyAz:   ["Gentle Mates"],
      nataNk:  ["Gentle Mates"],
      logaN:   ["Gentle Mates"],
      Wailers: ["Gentle Mates"],
      K4DAVRA: ["Gentle Mates"],
    }
  },

  Wailers: {
    teammates: {
      beyAz:   ["Gentle Mates"],
      nataNk:  ["Gentle Mates"],
      logaN:   ["Gentle Mates"],
      TakaS:   ["Gentle Mates"],
      K4DAVRA: ["Gentle Mates"],
    }
  },

  deLb: {
    teammates: {
      Bunt:      ["All Gamers"],
      monk:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      sword9:    ["All Gamers"],
      K1ra:      ["All Gamers"],
      Lsn:       ["All Gamers"],
      TZH:       ["All Gamers"],
      "player":  ["All Gamers"],
      Hanche:    ["All Gamers"],
      Bai:       ["All Gamers"],
      Shr1mp:    ["All Gamers"],
      XiYiji:    ["All Gamers"],
      Viva:      ["Trace Esports"],
      LuoK1ng:   ["Trace Esports"],
      Kai:       ["Trace Esports"],
      FengF:     ["Trace Esports"],
      Abo:       ["Trace Esports"],
      Xlele:     ["Trace Esports"],
      FKEY:      ["Trace Esports"],
    }
  },

  Spitfires: {
    teammates: {
      Bunt:     ["All Gamers"],
      deLb:     ["All Gamers"],
      monk:     ["All Gamers"],
      sword9:   ["All Gamers"],
      K1ra:     ["All Gamers"],
      Hanche:   ["All Gamers"],
      Shr1mp:   ["All Gamers"],
      XiYiji:   ["All Gamers"],
      dynamite: ["Titan Esports Club"],
      Haodong:  ["Titan Esports Club"],
      CoCo:     ["Titan Esports Club"],
      lucas:    ["Titan Esports Club"],
      ra1ny:    ["Titan Esports Club"],
    }
  },

  sword9: {
    teammates: {
      Bunt:      ["All Gamers"],
      deLb:      ["All Gamers"],
      monk:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      Ninebody:  ["TYLOO"],
      slowly:    ["TYLOO"],
      Scales:    ["TYLOO"],
      Yoyo:      ["TYLOO"],
      Splash:    ["TYLOO"],
      Erv:       ["TYLOO"],
    }
  },

  B3Ar: {
    teammates: {
      whzy:     ["Bilibili Gaming"],
      Biank:    ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
    }
  },

  Autumn: {
    teammates: {
      AAAAY:    ["FunPlus Phoenix"],
      BerLIN:   ["FunPlus Phoenix"],
      Lysoar:   ["FunPlus Phoenix"],
      Life:     ["FunPlus Phoenix"],
      yosemite: ["FunPlus Phoenix"],
      Shr1mp:   ["FunPlus Phoenix"],
      XII:      ["FunPlus Phoenix"],
      xavi8k:   ["Global Esports"],
      UdoTan:   ["Global Esports"],
      PatMen:   ["Global Esports"],
      Kr1stal:  ["Global Esports"],
      Deryeon:  ["Global Esports"],
    }
  },

  YiHao: {
    teammates: {
      Viva:   ["JD Gaming"],
      MarT1n: ["JD Gaming"],
      stew:   ["JD Gaming"],
      jkuro:  ["JD Gaming"],
      YHchen: ["JD Gaming"],
    }
  },

  Viva: {
    teammates: {
      YiHao:    ["JD Gaming"],
      MarT1n:   ["JD Gaming"],
      stew:     ["JD Gaming"],
      jkuro:    ["JD Gaming"],
      YHchen:   ["JD Gaming"],
      Z1Yan:    ["JD Gaming"],
      Rarga:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      YoU:      ["XLG Esports"],
      coconut:  ["XLG Esports"],
      midi:     ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      LuoK1ng:  ["Trace Esports"],
      Kai:      ["Trace Esports"],
      FengF:    ["Trace Esports"],
      deLb:     ["Trace Esports"],
      Abo:      ["Trace Esports"],
      Xlele:    ["Trace Esports"],
    }
  },

  MarT1n: {
    teammates: {
      YiHao:   ["JD Gaming"],
      Viva:    ["JD Gaming"],
      stew:    ["JD Gaming"],
      jkuro:   ["JD Gaming"],
      YHchen:  ["JD Gaming"],
      Z1Yan:   ["JD Gaming"],
      FengF:   ["Trace Esports"],
      Kai:     ["Trace Esports"],
      LuoK1ng: ["Trace Esports"],
      Biank:   ["Trace Esports"],
    }
  },

  stew: {
    teammates: {
      YiHao:    ["JD Gaming"],
      Viva:     ["JD Gaming"],
      MarT1n:   ["JD Gaming"],
      jkuro:    ["JD Gaming"],
      YHchen:   ["JD Gaming"],
      Z1Yan:    ["JD Gaming"],
      Babyblue: ["JD Gaming"],
      MrCANI:   ["JD Gaming"],
      kklin:    ["JD Gaming"],
      zhe:      ["JD Gaming"],
      Yuicaw:   ["JD Gaming"],
      coconut:  ["JD Gaming"],
      CHICHOO:  ["EDward Gaming"],
      nobody:   ["EDward Gaming"],
      ZmjjKK:   ["EDward Gaming"],
      Smoggy:   ["EDward Gaming"],
    }
  },

  jkuro: {
    teammates: {
      YiHao:       ["JD Gaming"],
      Viva:        ["JD Gaming"],
      MarT1n:      ["JD Gaming"],
      stew:        ["JD Gaming"],
      YHchen:      ["JD Gaming"],
      Z1Yan:       ["JD Gaming"],
      Babyblue:    ["JD Gaming"],
      MrCANI:      ["JD Gaming"],
      kklin:       ["JD Gaming"],
      zhe:         ["JD Gaming"],
      Yuicaw:      ["JD Gaming"],
      coconut:     ["JD Gaming"],
      BerLIN:      ["JD Gaming"],
      crownfisher: ["JD Gaming"],
    }
  },

  o0o0o: {
    teammates: {
      OBONE: ["Nova Esports"],
      PangH: ["Nova Esports"],
      cb:    ["Nova Esports"],
      GuanG: ["Nova Esports"],
      Swerl: ["Nova Esports"],
      Ezeir: ["Nova Esports"],
      monk:  ["Nova Esports"],
    }
  },

  OBONE: {
    teammates: {
      o0o0o:  ["Nova Esports"],
      PangH:  ["Nova Esports"],
      cb:     ["Nova Esports"],
      GuanG:  ["Nova Esports"],
      Swerl:  ["Nova Esports"],
      Ezeir:  ["Nova Esports"],
      heybay: ["Nova Esports"],
      Green:  ["Nova Esports"],
    }
  },

  PangH: {
    teammates: {
      o0o0o: ["Nova Esports"],
      OBONE: ["Nova Esports"],
      cb:    ["Nova Esports"],
      GuanG: ["Nova Esports"],
      Swerl: ["Nova Esports"],
    }
  },

  cb: {
    teammates: {
      o0o0o:   ["Nova Esports"],
      OBONE:   ["Nova Esports"],
      PangH:   ["Nova Esports"],
      GuanG:   ["Nova Esports"],
      Swerl:   ["Nova Esports"],
      Ezeir:   ["Nova Esports"],
      monk:    ["Nova Esports"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      qiutiaN: ["Nova Esports"],
      swagzor: ["Nova Esports"],
    }
  },

  GuanG: {
    teammates: {
      o0o0o:   ["Nova Esports"],
      OBONE:   ["Nova Esports"],
      PangH:   ["Nova Esports"],
      cb:      ["Nova Esports"],
      Swerl:   ["Nova Esports"],
      Ezeir:   ["Nova Esports"],
      monk:    ["Nova Esports"],
      heybay:  ["Nova Esports"],
      Green:   ["Nova Esports"],
      qiutiaN: ["Nova Esports"],
      swagzor: ["Nova Esports"],
    }
  },

  LuoK1ng: {
    teammates: {
      Ninebody: ["TYLOO"],
      AAK:      ["TYLOO"],
      ICEKING:  ["TYLOO"],
      zjc:      ["TYLOO"],
      FengF:    ["Trace Esports"],
      HeiB:     ["Trace Esports"],
      YoU:      ["Trace Esports"],
      Kai:      ["Trace Esports"],
      Biank:    ["Trace Esports"],
      midi:     ["Trace Esports"],
      MarT1n:   ["Trace Esports"],
      Viva:     ["Trace Esports"],
      deLb:     ["Trace Esports"],
      FKEY:     ["Trace Esports"],
    }
  },

  Ninebody: {
    teammates: {
      LuoK1ng:  ["TYLOO"],
      AAK:      ["TYLOO"],
      ICEKING:  ["TYLOO"],
      zjc:      ["TYLOO"],
      COLDFISH: ["TYLOO"],
      Scales:   ["TYLOO"],
      Eren:     ["TYLOO"],
      slowly:   ["TYLOO"],
      "5CM":    ["TYLOO"],
      waituu:   ["TYLOO"],
      sword9:   ["TYLOO"],
      Yoyo:     ["TYLOO"],
    }
  },

  AAK: {
    teammates: {
      LuoK1ng:  ["TYLOO"],
      Ninebody: ["TYLOO"],
      ICEKING:  ["TYLOO"],
      zjc:      ["TYLOO"],
      Eren:     ["TYLOO"],
      Flex1n:   ["TYLOO"],
      COLDFISH: ["TYLOO"],
      Scales:   ["TYLOO"],
    }
  },

  ICEKING: {
    teammates: {
      LuoK1ng:  ["TYLOO"],
      Ninebody: ["TYLOO"],
      AAK:      ["TYLOO"],
      zjc:      ["TYLOO"],
      Eren:     ["TYLOO"],
      Flex1n:   ["TYLOO"],
    }
  },

  kawaii: {
    teammates: {
      qiuye: ["Titan Esports Club"],
      Abo:   ["Titan Esports Club"],
      LockM: ["Titan Esports Club"],
      Rb:    ["Titan Esports Club"],
      AC:    ["Titan Esports Club"],
      B1ack: ["Titan Esports Club"],
    }
  },

  qiuye: {
    teammates: {
      kawaii: ["Titan Esports Club"],
      Abo:    ["Titan Esports Club"],
      LockM:  ["Titan Esports Club"],
      Rb:     ["Titan Esports Club"],
    }
  },

  Abo: {
    teammates: {
      kawaii:     ["Titan Esports Club"],
      qiuye:      ["Titan Esports Club"],
      LockM:      ["Titan Esports Club"],
      Rb:         ["Titan Esports Club"],
      AC:         ["Titan Esports Club"],
      B1ack:      ["Titan Esports Club"],
      Haodong:    ["Titan Esports Club"],
      dynamite:   ["Titan Esports Club"],
      CoCo:       ["Titan Esports Club"],
      TvirusLuke: ["Titan Esports Club"],
      lucas:      ["Titan Esports Club"],
      Kai:        ["Trace Esports"],
      Viva:       ["Trace Esports"],
      Xlele:      ["Trace Esports"],
      deLb:       ["Trace Esports"],
    }
  },

  LockM: {
    teammates: {
      kawaii: ["Titan Esports Club"],
      qiuye:  ["Titan Esports Club"],
      Abo:    ["Titan Esports Club"],
      Rb:     ["Titan Esports Club"],
      AC:     ["Titan Esports Club"],
      B1ack:  ["Titan Esports Club"],
    }
  },

  FengF: {
    teammates: {
      Flex1n:  ["Trace Esports"],
      HeiB:    ["Trace Esports"],
      YoU:     ["Trace Esports"],
      Kai:     ["Trace Esports"],
      LuoK1ng: ["Trace Esports"],
      Biank:   ["Trace Esports"],
      midi:    ["Trace Esports"],
      MarT1n:  ["Trace Esports"],
      Viva:    ["Trace Esports"],
      deLb:    ["Trace Esports"],
      FKEY:    ["Trace Esports"],
    }
  },

  Flex1n: {
    teammates: {
      FengF:      ["Trace Esports"],
      HeiB:       ["Trace Esports"],
      YoU:        ["Trace Esports"],
      Kai:        ["Trace Esports"],
      AAK:        ["TYLOO"],
      ICEKING:    ["TYLOO"],
      zjc:        ["TYLOO"],
      Eren:       ["TYLOO"],
      whzy:       ["Bilibili Gaming"],
      Knight:     ["Bilibili Gaming"],
      yosemite:   ["Bilibili Gaming"],
      nephh:      ["Bilibili Gaming"],
      Nicc:       ["Dragon Ranger Gaming"],
      TvirusLuke: ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      SpiritZ1:   ["Dragon Ranger Gaming"],
      Cangshu:    ["Dragon Ranger Gaming"],
      Akeman:     ["Dragon Ranger Gaming"],
      Demon1:     ["Dragon Ranger Gaming"],
      Life:       ["Dragon Ranger Gaming"],
    }
  },

  HeiB: {
    teammates: {
      FengF:   ["Trace Esports"],
      Flex1n:  ["Trace Esports"],
      YoU:     ["Trace Esports"],
      Kai:     ["Trace Esports"],
      LuoK1ng: ["Trace Esports"],
      Biank:   ["Trace Esports"],
      midi:    ["Trace Esports"],
    }
  },

  YoU: {
    teammates: {
      FengF:    ["Trace Esports"],
      Flex1n:   ["Trace Esports"],
      HeiB:     ["Trace Esports"],
      Kai:      ["Trace Esports"],
      LuoK1ng:  ["Trace Esports"],
      Rarga:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      coconut:  ["XLG Esports"],
      Viva:     ["XLG Esports"],
    }
  },

  Kai: {
    teammates: {
      FengF:   ["Trace Esports"],
      Flex1n:  ["Trace Esports"],
      HeiB:    ["Trace Esports"],
      YoU:     ["Trace Esports"],
      LuoK1ng: ["Trace Esports"],
      Biank:   ["Trace Esports"],
      midi:    ["Trace Esports"],
      MarT1n:  ["Trace Esports"],
      Viva:    ["Trace Esports"],
      deLb:    ["Trace Esports"],
      Abo:     ["Trace Esports"],
      Xlele:   ["Trace Esports"],
      FKEY:    ["Trace Esports"],
    }
  },

  aluba: {
    teammates: {
      COLDFISH: ["Wolves Esports"],
      pl1xx:    ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      yosemite: ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
      Deryeon:  ["Wolves Esports"],
    }
  },

  COLDFISH: {
    teammates: {
      aluba:    ["Wolves Esports"],
      pl1xx:    ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      Ninebody: ["TYLOO"],
      zjc:      ["TYLOO"],
      Scales:   ["TYLOO"],
      Eren:     ["TYLOO"],
      AAK:      ["TYLOO"],
    }
  },

  pl1xx: {
    teammates: {
      aluba:    ["Wolves Esports"],
      COLDFISH: ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
    }
  },

  Spring: {
    teammates: {
      aluba:    ["Wolves Esports"],
      COLDFISH: ["Wolves Esports"],
      pl1xx:    ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      Lysoar:   ["Wolves Esports"],
      juicy:    ["Wolves Esports"],
      yosemite: ["Wolves Esports"],
      qiutiaN:  ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
      R1ckLee:  ["Wolves Esports"],
      Deryeon:  ["Wolves Esports"],
    }
  },

  TvirusLuke: {
    teammates: {
      Nicc:     ["Dragon Ranger Gaming"],
      vo0kashu: ["Dragon Ranger Gaming"],
      Dingwei:  ["Dragon Ranger Gaming"],
      TZH:      ["Dragon Ranger Gaming"],
      Shion7:   ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
      Flex1n:   ["Dragon Ranger Gaming"],
      Abo:      ["Titan Esports Club"],
      Rb:       ["Titan Esports Club"],
      Haodong:  ["Titan Esports Club"],
      CoCo:     ["Titan Esports Club"],
      lucas:    ["Titan Esports Club"],
    }
  },

  Nicc: {
    teammates: {
      TvirusLuke: ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      Dingwei:    ["Dragon Ranger Gaming"],
      TZH:        ["Dragon Ranger Gaming"],
      Shion7:     ["Dragon Ranger Gaming"],
      SpiritZ1:   ["Dragon Ranger Gaming"],
      Flex1n:     ["Dragon Ranger Gaming"],
      Cangshu:    ["Dragon Ranger Gaming"],
      Akeman:     ["Dragon Ranger Gaming"],
      Demon1:     ["Dragon Ranger Gaming"],
      Life:       ["Dragon Ranger Gaming"],
      Verse:      ["Dragon Ranger Gaming"],
    }
  },

  vo0kashu: {
    teammates: {
      TvirusLuke: ["Dragon Ranger Gaming"],
      Nicc:       ["Dragon Ranger Gaming"],
      Dingwei:    ["Dragon Ranger Gaming"],
      TZH:        ["Dragon Ranger Gaming"],
      Shion7:     ["Dragon Ranger Gaming"],
      SpiritZ1:   ["Dragon Ranger Gaming"],
      Flex1n:     ["Dragon Ranger Gaming"],
      Cangshu:    ["Dragon Ranger Gaming"],
      Akeman:     ["Dragon Ranger Gaming"],
      Life:       ["Dragon Ranger Gaming"],
      Verse:      ["Dragon Ranger Gaming"],
    }
  },

  Dingwei: {
    teammates: {
      TvirusLuke: ["Dragon Ranger Gaming"],
      Nicc:       ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      TZH:        ["Dragon Ranger Gaming"],
    }
  },

  Apoth: {
    teammates: {
      jawgemo: ["Evil Geniuses"],
      Derrek:  ["Evil Geniuses"],
      NaturE:  ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
    }
  },

  NaturE: {
    teammates: {
      jawgemo: ["Evil Geniuses"],
      Apoth:   ["Evil Geniuses"],
      Derrek:  ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
      icy:     ["Evil Geniuses"],
      yay:     ["Evil Geniuses"],
    }
  },

  supamen: {
    teammates: {
      jawgemo:   ["Evil Geniuses"],
      Apoth:     ["Evil Geniuses"],
      Derrek:    ["Evil Geniuses"],
      NaturE:    ["Evil Geniuses"],
      icy:       ["Evil Geniuses"],
      yay:       ["Evil Geniuses"],
      bao:       ["Evil Geniuses"],
      C0M:       ["Evil Geniuses"],
      dgzin:     ["Evil Geniuses"],
      okeanos:   ["Evil Geniuses"],
      Paincakes: ["Evil Geniuses"],
      zerona:    ["Evil Geniuses"],
    }
  },

  OXY: {
    teammates: {
      jakee:       ["Cloud9"],
      Xeppaa:      ["Cloud9"],
      vanity:      ["Cloud9"],
      wippie:      ["Cloud9"],
      moose:       ["Cloud9"],
      runi:        ["Cloud9"],
      v1c:         ["Cloud9"],
      mitch:       ["Cloud9"],
      neT:         ["Cloud9"],
      penny:       ["Cloud9"],
      Zellsis:     ["Cloud9"],
      Demon1:      ["Cloud9"],
      Jackk:       ["Cloud9"],
      Notexxd:     ["Cloud9"],
      FireBallOps: ["Cloud9"],
    }
  },

  wippie: {
    teammates: {
      jakee:  ["Cloud9"],
      Xeppaa: ["Cloud9"],
      OXY:    ["Cloud9"],
      vanity: ["Cloud9"],
    }
  },

  tex: {
    teammates: {
      kiNgg:   ["Leviatán"],
      Mazino:  ["Leviatán", "MIBR"],
      aspas:   ["Leviatán", "MIBR"],
      C0M:     ["Leviatán"],
      Demon1:  ["Leviatán"],
      nataNk:  ["Leviatán"],
      Rossy:   ["Leviatán"],
      okeanos: ["Leviatán"],
      Sato:    ["Leviatán"],
      Verno:   ["MIBR"],
      zekken:  ["MIBR"],
    }
  },

  kon4n: {
    teammates: {
      Khalil:  ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
      liazzi:  ["FURIA Esports"],
      havoc:   ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
    }
  },

  havoc: {
    teammates: {
      Khalil:  ["FURIA Esports"],
      mwzera:  ["FURIA Esports"],
      kon4n:   ["FURIA Esports"],
      liazzi:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
      xand:    ["FURIA Esports"],
      heat:    ["FURIA Esports"],
      raafa:   ["FURIA Esports"],
      pryze:   ["FURIA Esports"],
    }
  },

  johnqt: {
    teammates: {
      zekken:   ["Sentinels"],
      Sacy:     ["Sentinels"],
      TenZ:     ["Sentinels"],
      Zellsis:  ["Sentinels"],
      bang:     ["Sentinels"],
      N4RRATE:  ["Sentinels"],
      cortezia: ["Sentinels"],
      Kyu:      ["Sentinels"],
      reduxx:   ["Sentinels"],
      Jerrwin:  ["Sentinels"],
      JonahP:   ["Sentinels"],
      Victor:   ["Sentinels"],
      Marved:   ["Sentinels"],
    }
  },

  eeiu: {
    teammates: {
      Asuna:     ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      Boostio:   ["100 Thieves"],
      Zander:    ["100 Thieves"],
      Kess:      ["100 Thieves"],
      alym:      ["FURIA Esports"],
      Artzin:    ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
      nerve:     ["FURIA Esports"],
    }
  },

  Artzin: {
    teammates: {
      jzz:       ["MIBR"],
      frz:       ["MIBR"],
      RgLM:      ["MIBR"],
      mazin:     ["MIBR"],
      Palla:     ["MIBR"],
      rich:      ["MIBR"],
      liazzi:    ["MIBR"],
      ShahZaM:   ["MIBR"],
      Pa1nt:     ["MIBR"],
      xenom:     ["MIBR"],
      cortezia:  ["MIBR"],
      Nozwerr:   ["MIBR"],
      aspas:     ["MIBR"],
      Verno:     ["MIBR"],
      alym:      ["FURIA Esports"],
      eeiu:      ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
      nerve:     ["FURIA Esports"],
      Shyy:      ["FURIA Esports"],
      C0M:       ["FURIA Esports"],
      basic:     ["FURIA Esports"],
    }
  },

  mta: {
    teammates: {
      Melser:      ["KRÜ Esports"],
      Shyy:        ["KRÜ Esports"],
      keznit:      ["KRÜ Esports"],
      Klaus:       ["KRÜ Esports"],
      heat:        ["KRÜ Esports"],
      NagZ:        ["KRÜ Esports"],
      benG:        ["KRÜ Esports"],
      infiltrator: ["KRÜ Esports"],
      Governor:    ["KRÜ Esports"],
    }
  },

  Wo0t: {
    teammates: {
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      paTiTek:    ["Team Heretics"],
      ComeBack:   ["Team Heretics"],
      koshmaras:  ["Team Heretics"],
    }
  },

  purp0: {
    teammates: {
      Cloud:     ["GIANTX"],
      hoody:     ["GIANTX"],
      Fit1nho:   ["GIANTX"],
      Redgar:    ["GIANTX"],
      Famsii:    ["GIANTX"],
      runneR:    ["GIANTX"],
      tomaszy:   ["GIANTX"],
      westside:  ["GIANTX"],
      ara:       ["GIANTX"],
      Flickless: ["GIANTX"],
      wayne:     ["Team Liquid"],
      nAts:      ["Team Liquid"],
      MiniBoo:   ["Team Liquid"],
      kamo:      ["Team Liquid"],
      Kicks:     ["Team Liquid"],
      trexx:     ["Team Liquid"],
    }
  },

  Shion7: {
    teammates: {
      TvirusLuke: ["Dragon Ranger Gaming"],
      Nicc:       ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      TZH:        ["Dragon Ranger Gaming"],
    }
  },

  AC: {
    teammates: {
      kawaii: ["Titan Esports Club"],
      Abo:    ["Titan Esports Club"],
      LockM:  ["Titan Esports Club"],
      Rb:     ["Titan Esports Club"],
      B1ack:  ["Titan Esports Club"],
    }
  },

  Swerl: {
    teammates: {
      o0o0o: ["Nova Esports"],
      OBONE: ["Nova Esports"],
      cb:    ["Nova Esports"],
      GuanG: ["Nova Esports"],
      PangH: ["Nova Esports"],
      Ezeir: ["Nova Esports"],
      monk:  ["Nova Esports"],
    }
  },

  Eren: {
    teammates: {
      AAK:      ["TYLOO"],
      ICEKING:  ["TYLOO"],
      zjc:      ["TYLOO"],
      Flex1n:   ["TYLOO"],
      Ninebody: ["TYLOO"],
      COLDFISH: ["TYLOO"],
      Scales:   ["TYLOO"],
      slowly:   ["TYLOO"],
      "5CM":    ["TYLOO"],
    }
  },

  Levius: {
    teammates: {
      whzy:     ["Bilibili Gaming"],
      Biank:    ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      B3Ar:     ["Bilibili Gaming"],
      nephh:    ["Bilibili Gaming"],
      rushia:   ["Bilibili Gaming"],
    }
  },

  BeYN: {
    teammates: {
      stax:      ["DRX"],
      BuZz:      ["DRX"],
      MaKo:      ["DRX"],
      Foxy9:     ["DRX"],
      Flashback: ["DRX"],
      free1ng:   ["DRX"],
      HYUNMIN:   ["DRX"],
      Estrella:  ["DRX"],
      Hermes:    ["DRX"],
      Yong:      ["DRX"],
      Flicker:   ["DRX"],
    }
  },

  Retla: {
    teammates: {
      Deryeon:  ["Bleed Esports"],
      sScary:   ["Bleed Esports"],
      yay:      ["Bleed Esports"],
      Zest:     ["Bleed Esports"],
      crazyguy: ["Bleed Esports"],
    }
  },

  icy: {
    teammates: {
      JonahP:  ["G2 Esports"],
      trent:   ["G2 Esports"],
      valyn:   ["G2 Esports"],
      leaf:    ["G2 Esports"],
      Derrek:  ["Evil Geniuses"],
      NaturE:  ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
      yay:     ["Evil Geniuses"],
    }
  },

  moose: {
    teammates: {
      Xeppaa: ["Cloud9"],
      OXY:    ["Cloud9"],
      vanity: ["Cloud9"],
      runi:   ["Cloud9"],
    }
  },

  S1Mon: {
    teammates: {
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      Haodong: ["EDward Gaming"],
      Jieni7:  ["EDward Gaming"],
    }
  },

  Ezeir: {
    teammates: {
      o0o0o:   ["Nova Esports"],
      cb:      ["Nova Esports"],
      GuanG:   ["Nova Esports"],
      Swerl:   ["Nova Esports"],
      OBONE:   ["Nova Esports"],
      monk:    ["Nova Esports"],
      heybay:  ["Nova Esports"],
      Green:   ["Nova Esports"],
      qiutiaN: ["Nova Esports"],
      swagzor: ["Nova Esports"],
    }
  },

  nephh: {
    teammates: {
      whzy:     ["Bilibili Gaming"],
      Knight:   ["Bilibili Gaming"],
      yosemite: ["Bilibili Gaming"],
      Flex1n:   ["Bilibili Gaming"],
      Levius:   ["Bilibili Gaming"],
      rushia:   ["Bilibili Gaming"],
      bud:      ["Bilibili Gaming"],
      Biank:    ["Bilibili Gaming"],
      yilai:    ["Bilibili Gaming"],
      FT:       ["Bilibili Gaming"],
    }
  },

  Scales: {
    teammates: {
      Ninebody: ["TYLOO"],
      zjc:      ["TYLOO"],
      COLDFISH: ["TYLOO"],
      Eren:     ["TYLOO"],
      AAK:      ["TYLOO"],
      slowly:   ["TYLOO"],
      "5CM":    ["TYLOO"],
      waituu:   ["TYLOO"],
      sword9:   ["TYLOO"],
      Yoyo:     ["TYLOO"],
      Splash:   ["TYLOO"],
      Erv:      ["TYLOO"],
      SiuFatBB: ["TYLOO"],
    }
  },

  SiuFatBB: {
    teammates: {
      aluba:    ["Wolves Esports"],
      pl1xx:    ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      Lysoar:   ["Wolves Esports"],
      juicy:    ["Wolves Esports"],
      yosemite: ["Wolves Esports"],
      qiutiaN:  ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
      R1ckLee:  ["Wolves Esports"],
      slowly:   ["TYLOO"],
      Erv:      ["TYLOO"],
      Splash:   ["TYLOO"],
      Scales:   ["TYLOO"],
    }
  },

  B1ack: {
    teammates: {
      Abo:      ["Titan Esports Club"],
      LockM:    ["Titan Esports Club"],
      Rb:       ["Titan Esports Club"],
      AC:       ["Titan Esports Club"],
      kawaii:   ["Titan Esports Club"],
      Haodong:  ["Titan Esports Club"],
      dynamite: ["Titan Esports Club"],
    }
  },

  Z1Yan: {
    teammates: {
      Viva:     ["JD Gaming"],
      stew:     ["JD Gaming"],
      jkuro:    ["JD Gaming"],
      YHchen:   ["JD Gaming"],
      MarT1n:   ["JD Gaming"],
      Babyblue: ["JD Gaming"],
      MrCANI:   ["JD Gaming"],
      kklin:    ["JD Gaming"],
    }
  },

  hiro: {
    teammates: {
      Boaster:   ["Fnatic"],
      Derke:     ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Chronicle: ["Fnatic"],
      ANGE1:     ["Natus Vincere"],
      Shao:      ["Natus Vincere"],
      koalanoob: ["Natus Vincere"],
      Ruxic:     ["Natus Vincere"],
      alexiiik:  ["Natus Vincere"],
      sociablEE: ["Natus Vincere"],
      Filu:      ["Natus Vincere"],
      chloric:   ["Natus Vincere"],
      Kolosha:   ["Natus Vincere"],
      ComeBack:  ["Natus Vincere"],
      ExiT:      ["Natus Vincere"],
      CyvOph:    ["Natus Vincere"],
    }
  },

  K4DAVRA: {
    teammates: {
      beyAz:    ["Gentle Mates"],
      nataNk:   ["Gentle Mates"],
      TakaS:    ["Gentle Mates"],
      Wailers:  ["Gentle Mates"],
      Click:    ["Gentle Mates"],
      Minny:    ["Gentle Mates"],
      RobbieBk: ["Gentle Mates"],
      Zyppan:   ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
    }
  },

  Famsii: {
    teammates: {
      Cloud:   ["GIANTX"],
      hoody:   ["GIANTX"],
      Fit1nho: ["GIANTX"],
      purp0:   ["GIANTX"],
      Redgar:  ["GIANTX"],
    }
  },

  Wild0reoo: {
    teammates: {
      JessieVash: ["Team Secret"],
      Jremy:      ["Team Secret"],
      invy:       ["Team Secret"],
      "2ge":      ["Team Secret"],
      kellyS:     ["Team Secret"],
      Nizzy:      ["Team Secret"],
      ZesBeeW:    ["Team Secret"],
    }
  },

  Primmie: {
    teammates: {
      Crws:      ["TALON", "FULL SENSE"],
      JitboyS:   ["TALON", "FULL SENSE"],
      ban:       ["TALON"],
      Governor:  ["TALON"],
      Surf:      ["TALON"],
      thyy:      ["TALON", "FULL SENSE"],
      killua:    ["TALON", "FULL SENSE"],
      Leviathan: ["FULL SENSE"],
      seph1roth: ["FULL SENSE"],
    }
  },

  Palla: {
    teammates: {
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
      rich:    ["MIBR"],
      liazzi:  ["MIBR"],
      ShahZaM: ["MIBR"],
      Pa1nt:   ["MIBR"],
      heat:    ["FURIA Esports"],
      tuyz:    ["FURIA Esports"],
      Urango:  ["FURIA Esports"],
      adverso: ["FURIA Esports"],
    }
  },

  rich: {
    teammates: {
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
      Palla:   ["MIBR"],
      liazzi:  ["MIBR"],
      ShahZaM: ["MIBR"],
      Pa1nt:   ["MIBR"],
    }
  },

  Pa1nt: {
    teammates: {
      mazin:   ["MIBR"],
      Artzin:  ["MIBR"],
      Palla:   ["MIBR"],
      rich:    ["MIBR"],
      liazzi:  ["MIBR"],
      ShahZaM: ["MIBR"],
    }
  },

  K1ra: {
    teammates: {
      deLb:      ["All Gamers"],
      monk:      ["All Gamers"],
      Lsn:       ["All Gamers"],
      TZH:       ["All Gamers"],
      Bunt:      ["All Gamers"],
      "player":  ["All Gamers"],
      Hanche:    ["All Gamers"],
      Bai:       ["All Gamers"],
      Spitfires: ["All Gamers"],
      Shr1mp:    ["All Gamers"],
      XiYiji:    ["All Gamers"],
      iamgrq:    ["All Gamers"],
      f4ngeer:   ["All Gamers"],
      Au1:       ["All Gamers"],
      Septem7:   ["All Gamers"],
      Youze:     ["All Gamers"],
    }
  },

  Lsn: {
    teammates: {
      deLb:     ["All Gamers"],
      monk:     ["All Gamers"],
      K1ra:     ["All Gamers"],
      TZH:      ["All Gamers"],
      Bunt:     ["All Gamers"],
      "player": ["All Gamers"],
      Hanche:   ["All Gamers"],
      Bai:      ["All Gamers"],
    }
  },

  rushia: {
    teammates: {
      whzy:   ["Bilibili Gaming"],
      Knight: ["Bilibili Gaming"],
      Levius: ["Bilibili Gaming"],
      nephh:  ["Bilibili Gaming"],
      bud:    ["Bilibili Gaming"],
      Biank:  ["Bilibili Gaming"],
      yilai:  ["Bilibili Gaming"],
      FT:     ["Bilibili Gaming"],
    }
  },

  Babyblue: {
    teammates: {
      jkuro:  ["JD Gaming"],
      stew:   ["JD Gaming"],
      Z1Yan:  ["JD Gaming"],
      MrCANI: ["JD Gaming"],
      kklin:  ["JD Gaming"],
    }
  },

  MrCANI: {
    teammates: {
      jkuro:    ["JD Gaming"],
      stew:     ["JD Gaming"],
      Z1Yan:    ["JD Gaming"],
      Babyblue: ["JD Gaming"],
    }
  },

  dynamite: {
    teammates: {
      B1ack:     ["Titan Esports Club"],
      Abo:       ["Titan Esports Club"],
      Rb:        ["Titan Esports Club"],
      Haodong:   ["Titan Esports Club"],
      lucas:     ["Titan Esports Club"],
      CoCo:      ["Titan Esports Club"],
      Spitfires: ["Titan Esports Club"],
      ra1ny:     ["Titan Esports Club"],
    }
  },

  slowly: {
    teammates: {
      Ninebody: ["TYLOO"],
      zjc:      ["TYLOO"],
      Eren:     ["TYLOO"],
      "5CM":    ["TYLOO"],
      waituu:   ["TYLOO"],
      Scales:   ["TYLOO"],
      sword9:   ["TYLOO"],
      Yoyo:     ["TYLOO"],
      Splash:   ["TYLOO"],
      Erv:      ["TYLOO"],
      SiuFatBB: ["TYLOO"],
    }
  },

  "5CM": {
    teammates: {
      Ninebody: ["TYLOO"],
      zjc:      ["TYLOO"],
      Eren:     ["TYLOO"],
      slowly:   ["TYLOO"],
      waituu:   ["TYLOO"],
      Scales:   ["TYLOO"],
    }
  },

  juicy: {
    teammates: {
      Spring:   ["Wolves Esports"],
      Yuicaw:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      Lysoar:   ["Wolves Esports"],
    }
  },

  SpiritZ1: {
    teammates: {
      Nicc:       ["Dragon Ranger Gaming"],
      TvirusLuke: ["Dragon Ranger Gaming"],
      vo0kashu:   ["Dragon Ranger Gaming"],
      Flex1n:     ["Dragon Ranger Gaming"],
      Cangshu:    ["Dragon Ranger Gaming"],
      Akeman:     ["Dragon Ranger Gaming"],
      Demon1:     ["Dragon Ranger Gaming"],
      Life:       ["Dragon Ranger Gaming"],
      Verse:      ["Dragon Ranger Gaming"],
    }
  },

  Rarga: {
    teammates: {
      happywei: ["XLG Esports"],
      YoU:      ["XLG Esports"],
      coconut:  ["XLG Esports"],
      Viva:     ["XLG Esports"],
      midi:     ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      WsLeo:    ["XLG Esports"],
      Lysoar:   ["XLG Esports"],
      Sharks:   ["XLG Esports"],
    }
  },

  happywei: {
    teammates: {
      Rarga:   ["XLG Esports"],
      YoU:     ["XLG Esports"],
      coconut: ["XLG Esports"],
      Viva:    ["XLG Esports"],
      midi:    ["XLG Esports"],
      NoMan:   ["XLG Esports"],
      WsLeo:   ["XLG Esports"],
      Lysoar:  ["XLG Esports"],
      Sharks:  ["XLG Esports"],
    }
  },

  coconut: {
    teammates: {
      Rarga:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      YoU:      ["XLG Esports"],
      Viva:     ["XLG Esports"],
      midi:     ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      zhe:      ["JD Gaming"],
      Yuicaw:   ["JD Gaming"],
      stew:     ["JD Gaming"],
      jkuro:    ["JD Gaming"],
      AAAAY:    ["FunPlus Phoenix"],
      KovaQ:    ["FunPlus Phoenix"],
      Setrod:   ["FunPlus Phoenix"],
      Xlele:    ["FunPlus Phoenix"],
    }
  },

  Zander: {
    teammates: {
      Asuna:     ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      eeiu:      ["100 Thieves"],
      Boostio:   ["100 Thieves"],
      Kess:      ["100 Thieves"],
    }
  },

  v1c: {
    teammates: {
      Xeppaa:      ["Cloud9"],
      OXY:         ["Cloud9"],
      mitch:       ["Cloud9"],
      neT:         ["Cloud9"],
      penny:       ["Cloud9"],
      Zellsis:     ["Cloud9"],
      Demon1:      ["Cloud9"],
      Jackk:       ["Cloud9"],
      Notexxd:     ["Cloud9"],
      FireBallOps: ["Cloud9"],
    }
  },

  raafa: {
    teammates: {
      Khalil: ["FURIA Esports"],
      mwzera: ["FURIA Esports"],
      havoc:  ["FURIA Esports"],
      heat:   ["FURIA Esports"],
      pryze:  ["FURIA Esports"],
    }
  },

  add3r: {
    teammates: {
      bdog:    ["FURIA Esports"],
      jakee:   ["FURIA Esports"],
      penny:   ["FURIA Esports"],
      stellar: ["FURIA Esports"],
    }
  },

  bdog: {
    teammates: {
      add3r:   ["FURIA Esports"],
      jakee:   ["FURIA Esports"],
      penny:   ["FURIA Esports"],
      stellar: ["FURIA Esports"],
    }
  },

  v1nNy: {
    teammates: {
      cauanzin: ["LOUD"],
      tuyz:     ["LOUD"],
      pANcada:  ["LOUD"],
      dgzin:    ["LOUD"],
    }
  },

  xenom: {
    teammates: {
      Artzin:   ["MIBR"],
      cortezia: ["MIBR"],
      Nozwerr:  ["MIBR"],
      aspas:    ["MIBR"],
      Verno:    ["MIBR"],
    }
  },

  cortezia: {
    teammates: {
      Artzin:  ["MIBR"],
      xenom:   ["MIBR"],
      Nozwerr: ["MIBR"],
      aspas:   ["MIBR"],
      Verno:   ["MIBR"],
      N4RRATE: ["Sentinels"],
      Kyu:     ["Sentinels"],
      johnqt:  ["Sentinels"],
      reduxx:  ["Sentinels"],
      Jerrwin: ["Sentinels"],
      JonahP:  ["Sentinels"],
      Victor:  ["Sentinels"],
      Marved:  ["Sentinels"],
    }
  },

  mada: {
    teammates: {
      Ethan: ["NRG"],
      FNS:   ["NRG"],
      s0m:   ["NRG"],
      Verno: ["NRG"],
      brawk: ["NRG"],
      skuba: ["NRG"],
      Keiko: ["NRG"],
    }
  },

  Verno: {
    teammates: {
      Ethan:    ["NRG"],
      FNS:      ["NRG"],
      s0m:      ["NRG"],
      mada:     ["NRG"],
      Artzin:   ["MIBR"],
      xenom:    ["MIBR"],
      cortezia: ["MIBR"],
      aspas:    ["MIBR"],
      Mazino:   ["MIBR"],
      tex:      ["MIBR"],
      zekken:   ["MIBR"],
    }
  },

  lz: {
    teammates: {
      pryze:    ["2GAME"],
      silentzz: ["2GAME"],
      zap:      ["2GAME"],
      gobera:   ["2GAME"],
      Askia:    ["2GAME"],
      PxS:      ["2GAME"],
      spikeziN: ["2GAME"],
    }
  },

  pryze: {
    teammates: {
      lz:       ["2GAME"],
      silentzz: ["2GAME"],
      zap:      ["2GAME"],
      gobera:   ["2GAME"],
      Khalil:   ["FURIA Esports"],
      havoc:    ["FURIA Esports"],
      heat:     ["FURIA Esports"],
      raafa:    ["FURIA Esports"],
      spikeziN: ["2GAME"],
    }
  },

  silentzz: {
    teammates: {
      lz:        ["2GAME"],
      pryze:     ["2GAME"],
      zap:       ["2GAME"],
      gobera:    ["2GAME"],
      Askia:     ["2GAME"],
      PxS:       ["2GAME"],
      spikeziN:  ["2GAME"],
      Dantedeu5: ["KRÜ Esports"],
      Less:      ["KRÜ Esports"],
      mwzera:    ["KRÜ Esports"],
      Saadhak:   ["KRÜ Esports"],
    }
  },

  zap: {
    teammates: {
      lz:       ["2GAME"],
      pryze:    ["2GAME"],
      silentzz: ["2GAME"],
      gobera:   ["2GAME"],
      Askia:    ["2GAME"],
      PxS:      ["2GAME"],
    }
  },

  gobera: {
    teammates: {
      lz:       ["2GAME"],
      pryze:    ["2GAME"],
      silentzz: ["2GAME"],
      zap:      ["2GAME"],
      Askia:    ["2GAME"],
      PxS:      ["2GAME"],
      spikeziN: ["2GAME"],
    }
  },

  LeWN: {
    teammates: {
      Jamppi:    ["BBL Esports"],
      PROFEK:    ["BBL Esports"],
      sociablEE: ["BBL Esports"],
      vakk:      ["BBL Esports"],
      Magnum:    ["BBL Esports"],
      Sheydos:   ["Karmine Corp"],
      SUYGETSU:  ["Karmine Corp"],
      dos9:      ["Karmine Corp"],
      avez:      ["Karmine Corp"],
      N4RRATE:   ["Karmine Corp"],
    }
  },

  PROFEK: {
    teammates: {
      LeWN:      ["BBL Esports"],
      Jamppi:    ["BBL Esports", "Team Vitality"],
      sociablEE: ["BBL Esports"],
      vakk:      ["BBL Esports"],
      Magnum:    ["BBL Esports"],
      UNFAKE:    ["Team Vitality"],
      Derke:     ["Team Vitality"],
      Chronicle: ["Team Vitality"],
      Sayonara:  ["Team Vitality"],
    }
  },

  sociablEE: {
    teammates: {
      LeWN:     ["BBL Esports"],
      Jamppi:   ["BBL Esports"],
      PROFEK:   ["BBL Esports"],
      vakk:     ["BBL Esports"],
      Magnum:   ["BBL Esports"],
      Shao:     ["Natus Vincere"],
      Ruxic:    ["Natus Vincere"],
      hiro:     ["Natus Vincere"],
      Filu:     ["Natus Vincere"],
      yetujey:  ["FUT Esports"],
      xeus:     ["FUT Esports"],
      KROSTALY: ["FUT Esports"],
      s0pp:     ["FUT Esports"],
    }
  },

  vakk: {
    teammates: {
      LeWN:      ["BBL Esports"],
      Jamppi:    ["BBL Esports"],
      PROFEK:    ["BBL Esports"],
      sociablEE: ["BBL Esports"],
    }
  },

  kaajak: {
    teammates: {
      Boaster:   ["Fnatic"],
      Alfajer:   ["Fnatic"],
      Chronicle: ["Fnatic"],
      crashies:  ["Fnatic"],
      Doma:      ["Fnatic"],
      Veqaj:     ["Fnatic"],
      CyvOph:    ["Fnatic"],
      Cloud:     ["Fnatic"],
    }
  },

  xeus: {
    teammates: {
      qRaxs:        ["FUT Esports"],
      MrFaliN:      ["FUT Esports"],
      "ATA KAPTAN": ["FUT Esports"],
      yetujey:      ["FUT Esports"],
      cNed:         ["FUT Esports"],
      baha:         ["FUT Esports"],
      KROSTALY:     ["FUT Esports"],
      s0pp:         ["FUT Esports"],
      sociablEE:    ["FUT Esports"],
    }
  },

  westside: {
    teammates: {
      Cloud:     ["GIANTX"],
      purp0:     ["GIANTX"],
      runneR:    ["GIANTX"],
      tomaszy:   ["GIANTX"],
      ara:       ["GIANTX"],
      Flickless: ["GIANTX"],
      GRUBINHO:  ["GIANTX"],
      neT:       ["GIANTX"],
      Jesse:     ["GIANTX"],
    }
  },

  avez: {
    teammates: {
      marteen:  ["Karmine Corp"],
      Elite:    ["Karmine Corp"],
      SUYGETSU: ["Karmine Corp"],
      Saadhak:  ["Karmine Corp"],
      pyrolll:  ["Karmine Corp"],
      Sheydos:  ["Karmine Corp"],
      LeWN:     ["Karmine Corp"],
      dos9:     ["Karmine Corp"],
      N4RRATE:  ["Karmine Corp"],
    }
  },

  Filu: {
    teammates: {
      GRUBINHO:  ["KOI"],
      Sheydos:   ["KOI"],
      flyuh:     ["KOI"],
      soulcas:   ["KOI"],
      baddyG:    ["KOI"],
      MONSTEERR: ["KOI"],
      nataNk:    ["KOI"],
      sociablEE: ["Natus Vincere"],
      Shao:      ["Natus Vincere"],
      Ruxic:     ["Natus Vincere"],
      hiro:      ["Natus Vincere"],
      chloric:   ["Natus Vincere"],
      Kolosha:   ["Natus Vincere"],
      ComeBack:  ["Natus Vincere"],
    }
  },

  flyuh: {
    teammates: {
      GRUBINHO:  ["KOI"],
      Sheydos:   ["KOI"],
      Filu:      ["KOI"],
      soulcas:   ["KOI"],
      baddyG:    ["KOI"],
      MONSTEERR: ["KOI"],
      nataNk:    ["KOI"],
    }
  },

  koalanoob: {
    teammates: {
      ANGE1:  ["Natus Vincere"],
      Shao:   ["Natus Vincere"],
      hiro:   ["Natus Vincere"],
      Ruxic:  ["Natus Vincere"],
      alym:   ["FURIA Esports"],
      Artzin: ["FURIA Esports"],
      eeiu:   ["FURIA Esports"],
      nerve:  ["FURIA Esports"],
      Shyy:   ["FURIA Esports"],
      C0M:    ["FURIA Esports"],
      basic:  ["FURIA Esports"],
    }
  },

  Ruxic: {
    teammates: {
      ANGE1:     ["Natus Vincere"],
      Shao:      ["Natus Vincere"],
      hiro:      ["Natus Vincere"],
      koalanoob: ["Natus Vincere"],
      alexiiik:  ["Natus Vincere"],
      sociablEE: ["Natus Vincere"],
      Filu:      ["Natus Vincere"],
      chloric:   ["Natus Vincere"],
      Kolosha:   ["Natus Vincere"],
      ComeBack:  ["Natus Vincere"],
      ExiT:      ["Natus Vincere"],
      CyvOph:    ["Natus Vincere"],
    }
  },

  Click: {
    teammates: {
      K4DAVRA:  ["Gentle Mates"],
      Minny:    ["Gentle Mates"],
      RobbieBk: ["Gentle Mates"],
      Zyppan:   ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
    }
  },

  Minny: {
    teammates: {
      K4DAVRA:  ["Gentle Mates"],
      Click:    ["Gentle Mates"],
      RobbieBk: ["Gentle Mates"],
      Zyppan:   ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
      Veqaj:    ["Gentle Mates"],
      Proxh:    ["Gentle Mates"],
      ComeBack: ["Gentle Mates"],
      starxo:   ["Gentle Mates"],
      marteen:  ["Gentle Mates"],
      GLYPH:    ["Gentle Mates"],
      bipo:     ["Gentle Mates"],
      H1ber:    ["Gentle Mates"],
    }
  },

  RobbieBk: {
    teammates: {
      K4DAVRA:  ["Gentle Mates"],
      Click:    ["Gentle Mates"],
      Minny:    ["Gentle Mates"],
      Zyppan:   ["Gentle Mates"],
      cauanzin: ["LOUD"],
      pANcada:  ["LOUD"],
      lukxo:    ["LOUD"],
      Virtyy:   ["LOUD"],
    }
  },

  hype: {
    teammates: {
      AvovA:      ["Apeks"],
      MOLSI:      ["Apeks"],
      florescent: ["Apeks"],
      batujnax:   ["Apeks"],
    }
  },

  florescent: {
    teammates: {
      AvovA:    ["Apeks"],
      hype:     ["Apeks"],
      MOLSI:    ["Apeks"],
      batujnax: ["Apeks"],
      Governor: ["Apeks"],
    }
  },

  batujnax: {
    teammates: {
      AvovA:      ["Apeks"],
      hype:       ["Apeks"],
      MOLSI:      ["Apeks"],
      florescent: ["Apeks"],
      Governor:   ["Apeks"],
      OLIZERA:    ["Apeks"],
      penny:      ["Apeks"],
    }
  },

  akame: {
    teammates: {
      Meiy:     ["DetonatioN FocusMe", "DetonatioN FM"],
      Art:      ["DetonatioN FocusMe"],
      gyen:     ["DetonatioN FocusMe"],
      Jinboong: ["DetonatioN FocusMe"],
      SSeeS:    ["DetonatioN FocusMe", "DetonatioN FM"],
      yatsuka:  ["DetonatioN FM"],
      Caedye:   ["DetonatioN FM"],
    }
  },

  Art: {
    teammates: {
      Meiy:     ["DetonatioN FocusMe"],
      akame:    ["DetonatioN FocusMe"],
      gyen:     ["DetonatioN FocusMe"],
      Jinboong: ["DetonatioN FocusMe"],
    }
  },

  gyen: {
    teammates: {
      Meiy:     ["DetonatioN FocusMe"],
      akame:    ["DetonatioN FocusMe"],
      Art:      ["DetonatioN FocusMe"],
      Jinboong: ["DetonatioN FocusMe"],
      SSeeS:    ["DetonatioN FocusMe"],
    }
  },

  Jinboong: {
    teammates: {
      Meiy:  ["DetonatioN FocusMe"],
      akame: ["DetonatioN FocusMe"],
      Art:   ["DetonatioN FocusMe"],
      gyen:  ["DetonatioN FocusMe"],
      SSeeS: ["DetonatioN FocusMe"],
    }
  },

  free1ng: {
    teammates: {
      MaKo:      ["DRX"],
      Flashback: ["DRX"],
      HYUNMIN:   ["DRX"],
      BeYN:      ["DRX"],
      Estrella:  ["DRX"],
      Hermes:    ["DRX"],
      Yong:      ["DRX"],
      Flicker:   ["DRX"],
    }
  },

  HYUNMIN: {
    teammates: {
      MaKo:      ["DRX"],
      Flashback: ["DRX"],
      free1ng:   ["DRX"],
      BeYN:      ["DRX"],
      Estrella:  ["DRX"],
      Hermes:    ["DRX"],
      Yong:      ["DRX"],
      Flicker:   ["DRX"],
    }
  },

  yoman: {
    teammates: {
      t3xture:   ["Gen.G Esports"],
      Karon:     ["Gen.G Esports"],
      Munchkin:  ["Gen.G Esports"],
      Foxy9:     ["Gen.G Esports"],
      Kr1stal:   ["Global Esports"],
      PapiChulo: ["Global Esports"],
      UdoTan:    ["Global Esports"],
      ban:       ["Global Esports"],
    }
  },

  kellyS: {
    teammates: {
      Kr1stal:    ["Global Esports"],
      PapiChulo:  ["Global Esports"],
      UdoTan:     ["Global Esports"],
      Deryeon:    ["Global Esports"],
      patrickWHO: ["Global Esports"],
      invy:       ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
      Nizzy:      ["Team Secret"],
      ZesBeeW:    ["Team Secret"],
      JessieVash: ["Team Secret"],
      TenTen:     ["Team Secret"],
      Sylvan:     ["Team Secret"],
      BerserX:    ["Team Secret"],
      Rimuru:     ["Team Secret"],
      Zeus:       ["Team Secret"],
      STYRON:     ["Team Secret"],
      naTz:       ["Team Secret"],
    }
  },

  Kr1stal: {
    teammates: {
      kellyS:     ["Global Esports"],
      PapiChulo:  ["Global Esports"],
      UdoTan:     ["Global Esports"],
      Deryeon:    ["Global Esports"],
      patrickWHO: ["Global Esports"],
      ban:        ["Global Esports"],
      yoman:      ["Global Esports"],
      xavi8k:     ["Global Esports"],
      PatMen:     ["Global Esports"],
      Autumn:     ["Global Esports"],
    }
  },

  PapiChulo: {
    teammates: {
      kellyS:     ["Global Esports"],
      Kr1stal:    ["Global Esports"],
      UdoTan:     ["Global Esports"],
      Deryeon:    ["Global Esports"],
      patrickWHO: ["Global Esports"],
      ban:        ["Global Esports"],
      yoman:      ["Global Esports"],
    }
  },

  UdoTan: {
    teammates: {
      kellyS:     ["Global Esports"],
      Kr1stal:    ["Global Esports"],
      PapiChulo:  ["Global Esports"],
      Deryeon:    ["Global Esports"],
      patrickWHO: ["Global Esports"],
      ban:        ["Global Esports"],
      yoman:      ["Global Esports"],
      xavi8k:     ["Global Esports"],
      PatMen:     ["Global Esports"],
      Autumn:     ["Global Esports"],
    }
  },

  Kushy: {
    teammates: {
      xffero:   ["Rex Regum Qeon"],
      Estrella: ["Rex Regum Qeon"],
      Jemkin:   ["Rex Regum Qeon"],
      Monyet:   ["Rex Regum Qeon"],
      crazyguy: ["Rex Regum Qeon"],
      xan:      ["Rex Regum Qeon"],
    }
  },

  CLZ: {
    teammates: {
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      SyouTa:    ["ZETA DIVISION"],
      Xdll:      ["ZETA DIVISION"],
      TenTen:    ["ZETA DIVISION"],
    }
  },

  SyouTa: {
    teammates: {
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      CLZ:       ["ZETA DIVISION"],
      Xdll:      ["ZETA DIVISION"],
      TenTen:    ["ZETA DIVISION"],
      eKo:       ["ZETA DIVISION"],
      Absol:     ["ZETA DIVISION"],
    }
  },

  Xdll: {
    teammates: {
      Dep:       ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      CLZ:       ["ZETA DIVISION"],
      SyouTa:    ["ZETA DIVISION"],
      TenTen:    ["ZETA DIVISION"],
      eKo:       ["ZETA DIVISION"],
      Absol:     ["ZETA DIVISION"],
    }
  },

  Dambi: {
    teammates: {
      Francis:  ["NS RedForce"],
      Ivy:      ["NS RedForce"],
      margaret: ["NS RedForce"],
      Persia:   ["NS RedForce"],
      Rb:       ["NS RedForce"],
      Xross:    ["NS RedForce"],
    }
  },

  Francis: {
    teammates: {
      Dambi:    ["NS RedForce"],
      Ivy:      ["NS RedForce"],
      margaret: ["NS RedForce"],
      Persia:   ["NS RedForce"],
      Rb:       ["NS RedForce"],
      Xross:    ["NS RedForce"],
    }
  },

  Ivy: {
    teammates: {
      Dambi:    ["NS RedForce"],
      Francis:  ["NS RedForce"],
      margaret: ["NS RedForce"],
      Persia:   ["NS RedForce"],
      Rb:       ["NS RedForce"],
      Xross:    ["NS RedForce"],
    }
  },

  margaret: {
    teammates: {
      Dambi:   ["NS RedForce"],
      Francis: ["NS RedForce"],
      Ivy:     ["NS RedForce"],
      Persia:  ["NS RedForce"],
    }
  },

  Persia: {
    teammates: {
      Dambi:    ["NS RedForce"],
      Francis:  ["NS RedForce"],
      Ivy:      ["NS RedForce"],
      margaret: ["NS RedForce"],
      Rb:       ["NS RedForce"],
    }
  },

  Shiro: {
    teammates: {
      BerserX:   ["BOOM Esports"],
      famouz:    ["BOOM Esports"],
      NcSlasher: ["BOOM Esports"],
      dos9:      ["BOOM Esports"],
    }
  },

  NcSlasher: {
    teammates: {
      BerserX: ["BOOM Esports"],
      famouz:  ["BOOM Esports"],
      Shiro:   ["BOOM Esports"],
      dos9:    ["BOOM Esports"],
    }
  },

  dos9: {
    teammates: {
      BerserX:   ["BOOM Esports"],
      famouz:    ["BOOM Esports"],
      Shiro:     ["BOOM Esports"],
      NcSlasher: ["BOOM Esports"],
      Sheydos:   ["Karmine Corp"],
      SUYGETSU:  ["Karmine Corp"],
      LeWN:      ["Karmine Corp"],
      avez:      ["Karmine Corp"],
      N4RRATE:   ["Karmine Corp"],
    }
  },

  Jieni7: {
    teammates: {
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      ZmjjKK:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
      zjc:     ["EDward Gaming"],
    }
  },

  midi: {
    teammates: {
      FengF:    ["Trace Esports"],
      HeiB:     ["Trace Esports"],
      Kai:      ["Trace Esports"],
      LuoK1ng:  ["Trace Esports"],
      Biank:    ["Trace Esports"],
      Rarga:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      coconut:  ["XLG Esports"],
      Viva:     ["XLG Esports"],
    }
  },

  Cangshu: {
    teammates: {
      Nicc:     ["Dragon Ranger Gaming"],
      vo0kashu: ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
      Flex1n:   ["Dragon Ranger Gaming"],
    }
  },

  Shr1mp: {
    teammates: {
      AAAAY:     ["FunPlus Phoenix"],
      Autumn:    ["FunPlus Phoenix"],
      Life:      ["FunPlus Phoenix"],
      yosemite:  ["FunPlus Phoenix"],
      XII:       ["FunPlus Phoenix"],
      deLb:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      K1ra:      ["All Gamers"],
      Hanche:    ["All Gamers"],
      XiYiji:    ["All Gamers"],
      iamgrq:    ["All Gamers"],
      f4ngeer:   ["All Gamers"],
      Au1:       ["All Gamers"],
      Septem7:   ["All Gamers"],
      Youze:     ["All Gamers"],
      Bai:       ["All Gamers"],
    }
  },

  XII: {
    teammates: {
      AAAAY:    ["FunPlus Phoenix"],
      Autumn:   ["FunPlus Phoenix"],
      Life:     ["FunPlus Phoenix"],
      yosemite: ["FunPlus Phoenix"],
      Shr1mp:   ["FunPlus Phoenix"],
    }
  },

  waituu: {
    teammates: {
      Ninebody: ["TYLOO"],
      zjc:      ["TYLOO"],
      slowly:   ["TYLOO"],
      "5CM":    ["TYLOO"],
      Scales:   ["TYLOO"],
    }
  },

  CoCo: {
    teammates: {
      Abo:        ["Titan Esports Club"],
      Rb:         ["Titan Esports Club"],
      Haodong:    ["Titan Esports Club"],
      TvirusLuke: ["Titan Esports Club"],
      lucas:      ["Titan Esports Club"],
      dynamite:   ["Titan Esports Club"],
      Spitfires:  ["Titan Esports Club"],
      ra1ny:      ["Titan Esports Club"],
    }
  },

  "player": {
    teammates: {
      deLb:   ["All Gamers"],
      K1ra:   ["All Gamers"],
      Lsn:    ["All Gamers"],
      Hanche: ["All Gamers"],
      Bai:    ["All Gamers"],
    }
  },

  Hanche: {
    teammates: {
      deLb:      ["All Gamers"],
      K1ra:      ["All Gamers"],
      "player":  ["All Gamers"],
      Lsn:       ["All Gamers"],
      Bai:       ["All Gamers"],
      Spitfires: ["All Gamers"],
      Shr1mp:    ["All Gamers"],
      XiYiji:    ["All Gamers"],
    }
  },

  Bai: {
    teammates: {
      deLb:     ["All Gamers"],
      K1ra:     ["All Gamers"],
      "player": ["All Gamers"],
      Lsn:      ["All Gamers"],
      Hanche:   ["All Gamers"],
      Shr1mp:   ["All Gamers"],
      Septem7:  ["All Gamers"],
      f4ngeer:  ["All Gamers"],
      iamgrq:   ["All Gamers"],
      Youze:    ["All Gamers"],
    }
  },

  brawk: {
    teammates: {
      Ethan: ["NRG"],
      FNS:   ["NRG"],
      s0m:   ["NRG"],
      mada:  ["NRG"],
      skuba: ["NRG"],
      Keiko: ["NRG"],
    }
  },

  Askia: {
    teammates: {
      lz:       ["2GAME"],
      silentzz: ["2GAME"],
      gobera:   ["2GAME"],
      PxS:      ["2GAME"],
      zap:      ["2GAME"],
    }
  },

  PxS: {
    teammates: {
      lz:       ["2GAME"],
      silentzz: ["2GAME"],
      gobera:   ["2GAME"],
      Askia:    ["2GAME"],
      zap:      ["2GAME"],
      blowz:    ["Leviatán"],
      kiNgg:    ["Leviatán"],
      Neon:     ["Leviatán"],
      Sato:     ["Leviatán"],
      spikeziN: ["Leviatán"],
    }
  },

  Ash: {
    teammates: {
      t3xture:  ["Gen.G Esports"],
      Karon:    ["Gen.G Esports"],
      Munchkin: ["Gen.G Esports"],
      Foxy9:    ["Gen.G Esports"],
      Suggest:  ["Gen.G Esports"],
      ZynX:     ["Gen.G Esports"],
      Lakia:    ["Gen.G Esports"],
      KiTae:    ["Gen.G Esports"],
      RaxcaL:   ["Gen.G Esports"],
      Efina:    ["Gen.G Esports"],
    }
  },

  thyy: {
    teammates: {
      Crws:      ["TALON"],
      JitboyS:   ["TALON", "FULL SENSE"],
      Primmie:   ["TALON", "FULL SENSE"],
      killua:    ["TALON", "FULL SENSE"],
      Leviathan: ["FULL SENSE"],
    }
  },

  killua: {
    teammates: {
      Crws:      ["TALON", "FULL SENSE"],
      JitboyS:   ["TALON", "FULL SENSE"],
      Primmie:   ["TALON", "FULL SENSE"],
      thyy:      ["TALON", "FULL SENSE"],
      Leviathan: ["FULL SENSE"],
      seph1roth: ["FULL SENSE"],
    }
  },

  PatMen: {
    teammates: {
      d4v41:     ["Paper Rex"],
      f0rsakeN:  ["Paper Rex"],
      mindfreak: ["Paper Rex"],
      Jinggg:    ["Paper Rex"],
      something: ["Paper Rex"],
      xavi8k:    ["Global Esports"],
      UdoTan:    ["Global Esports"],
      Kr1stal:   ["Global Esports"],
      Deryeon:   ["Global Esports"],
      Autumn:    ["Global Esports"],
    }
  },

  patrickWHO: {
    teammates: {
      kellyS:    ["Global Esports"],
      Kr1stal:   ["Global Esports"],
      PapiChulo: ["Global Esports"],
      UdoTan:    ["Global Esports"],
      Deryeon:   ["Global Esports"],
    }
  },

  TenTen: {
    teammates: {
      SugarZ3ro:  ["ZETA DIVISION"],
      CLZ:        ["ZETA DIVISION"],
      SyouTa:     ["ZETA DIVISION"],
      Xdll:       ["ZETA DIVISION"],
      Dep:        ["ZETA DIVISION"],
      Sylvan:     ["Team Secret"],
      kellyS:     ["Team Secret"],
      JessieVash: ["Team Secret"],
      BerserX:    ["Team Secret"],
    }
  },

  CyvOph: {
    teammates: {
      Kicks:    ["Team Vitality"],
      Sayf:     ["Team Vitality"],
      Less:     ["Team Vitality"],
      Derke:    ["Team Vitality"],
      Boaster:  ["Fnatic"],
      Alfajer:  ["Fnatic"],
      kaajak:   ["Fnatic"],
      crashies: ["Fnatic"],
      Veqaj:    ["Fnatic"],
      Ruxic:    ["Natus Vincere"],
      hiro:     ["Natus Vincere"],
      ExiT:     ["Natus Vincere"],
      chloric:  ["Natus Vincere"],
      Kolosha:  ["Natus Vincere"],
    }
  },

  Serial: {
    teammates: {
      nAts:    ["Team Liquid"],
      Keiko:   ["Team Liquid"],
      kamo:    ["Team Liquid"],
      paTiTek: ["Team Liquid"],
      penny:   ["Team Liquid"],
    }
  },

  ara: {
    teammates: {
      Cloud:     ["GIANTX"],
      purp0:     ["GIANTX"],
      westside:  ["GIANTX"],
      Flickless: ["GIANTX"],
      runneR:    ["GIANTX"],
      GRUBINHO:  ["GIANTX"],
      neT:       ["GIANTX"],
      Jesse:     ["GIANTX"],
    }
  },

  Flickless: {
    teammates: {
      Cloud:    ["GIANTX"],
      purp0:    ["GIANTX"],
      westside: ["GIANTX"],
      ara:      ["GIANTX"],
      runneR:   ["GIANTX"],
      GRUBINHO: ["GIANTX"],
      neT:      ["GIANTX"],
      Jesse:    ["GIANTX"],
    }
  },

  NoMan: {
    teammates: {
      Rarga:    ["XLG Esports"],
      happywei: ["XLG Esports"],
      coconut:  ["XLG Esports"],
      Viva:     ["XLG Esports"],
      WsLeo:    ["XLG Esports"],
      Lysoar:   ["XLG Esports"],
      Sharks:   ["XLG Esports"],
    }
  },

  Akeman: {
    teammates: {
      Nicc:     ["Dragon Ranger Gaming"],
      vo0kashu: ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
      Flex1n:   ["Dragon Ranger Gaming"],
      Demon1:   ["Dragon Ranger Gaming"],
    }
  },

  lucas: {
    teammates: {
      Abo:        ["Titan Esports Club"],
      Haodong:    ["Titan Esports Club"],
      CoCo:       ["Titan Esports Club"],
      TvirusLuke: ["Titan Esports Club"],
      dynamite:   ["Titan Esports Club"],
      Spitfires:  ["Titan Esports Club"],
      ra1ny:      ["Titan Esports Club"],
    }
  },

  kklin: {
    teammates: {
      jkuro:    ["JD Gaming"],
      stew:     ["JD Gaming"],
      Z1Yan:    ["JD Gaming"],
      Babyblue: ["JD Gaming"],
    }
  },

  Yoyo: {
    teammates: {
      Ninebody: ["TYLOO"],
      slowly:   ["TYLOO"],
      sword9:   ["TYLOO"],
      Scales:   ["TYLOO"],
      Splash:   ["TYLOO"],
      Erv:      ["TYLOO"],
    }
  },

  XiYiji: {
    teammates: {
      deLb:      ["All Gamers"],
      Spitfires: ["All Gamers"],
      K1ra:      ["All Gamers"],
      Hanche:    ["All Gamers"],
      Shr1mp:    ["All Gamers"],
    }
  },

  DH: {
    teammates: {
      iZu:      ["T1"],
      stax:     ["T1"],
      Meteor:   ["T1"],
      BuZz:     ["T1"],
      Munchkin: ["T1"],
    }
  },

  Nizzy: {
    teammates: {
      invy:       ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
      kellyS:     ["Team Secret"],
      ZesBeeW:    ["Team Secret"],
      JessieVash: ["Team Secret"],
    }
  },

  ZesBeeW: {
    teammates: {
      invy:       ["Team Secret"],
      Wild0reoo:  ["Team Secret"],
      kellyS:     ["Team Secret"],
      Nizzy:      ["Team Secret"],
      JessieVash: ["Team Secret"],
    }
  },

  alexiiik: {
    teammates: {
      ANGE1: ["Natus Vincere"],
      Shao:  ["Natus Vincere"],
      hiro:  ["Natus Vincere"],
      Ruxic: ["Natus Vincere"],
    }
  },

  pyrolll: {
    teammates: {
      marteen:  ["Karmine Corp"],
      avez:     ["Karmine Corp"],
      SUYGETSU: ["Karmine Corp"],
      Saadhak:  ["Karmine Corp"],
      Elite:    ["Karmine Corp"],
    }
  },

  UNFAKE: {
    teammates: {
      Kicks:     ["Team Vitality"],
      Less:      ["Team Vitality"],
      Derke:     ["Team Vitality"],
      KovaQ:     ["Team Vitality"],
      Sayf:      ["Team Vitality"],
      PROFEK:    ["Team Vitality"],
      Jamppi:    ["Team Vitality"],
      Chronicle: ["Team Vitality"],
    }
  },

  KovaQ: {
    teammates: {
      Kicks:   ["Team Vitality"],
      Less:    ["Team Vitality"],
      Derke:   ["Team Vitality"],
      UNFAKE:  ["Team Vitality"],
      Sayf:    ["Team Vitality"],
      AAAAY:   ["FunPlus Phoenix"],
      BerLIN:  ["FunPlus Phoenix"],
      Ben1Ley: ["FunPlus Phoenix"],
      Setrod:  ["FunPlus Phoenix"],
      coconut: ["FunPlus Phoenix"],
      Xlele:   ["FunPlus Phoenix"],
    }
  },

  baddyG: {
    teammates: {
      Filu:      ["KOI"],
      flyuh:     ["KOI"],
      MONSTEERR: ["KOI"],
      nataNk:    ["KOI"],
    }
  },

  MONSTEERR: {
    teammates: {
      Filu:   ["KOI"],
      flyuh:  ["KOI"],
      baddyG: ["KOI"],
      nataNk: ["KOI"],
    }
  },

  Veqaj: {
    teammates: {
      Minny:    ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
      Proxh:    ["Gentle Mates"],
      ComeBack: ["Gentle Mates"],
      kaajak:   ["Fnatic"],
      crashies: ["Fnatic"],
      Boaster:  ["Fnatic"],
      Alfajer:  ["Fnatic"],
      CyvOph:   ["Fnatic"],
    }
  },

  Proxh: {
    teammates: {
      Minny:    ["Gentle Mates"],
      kamyk:    ["Gentle Mates"],
      Veqaj:    ["Gentle Mates"],
      ComeBack: ["Gentle Mates"],
      starxo:   ["Gentle Mates"],
      marteen:  ["Gentle Mates"],
      H1ber:    ["Gentle Mates"],
      bipo:     ["Gentle Mates"],
    }
  },

  ComeBack: {
    teammates: {
      Minny:      ["Gentle Mates"],
      kamyk:      ["Gentle Mates"],
      Veqaj:      ["Gentle Mates"],
      Proxh:      ["Gentle Mates"],
      Wo0t:       ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      Filu:       ["Natus Vincere"],
      hiro:       ["Natus Vincere"],
      Ruxic:      ["Natus Vincere"],
      chloric:    ["Natus Vincere"],
      Kolosha:    ["Natus Vincere"],
      koshmaras:  ["Team Heretics"],
    }
  },

  OLIZERA: {
    teammates: {
      AvovA:    ["Apeks"],
      MOLSI:    ["Apeks"],
      batujnax: ["Apeks"],
      penny:    ["Apeks"],
    }
  },

  Kess: {
    teammates: {
      Asuna:     ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      eeiu:      ["100 Thieves"],
      Zander:    ["100 Thieves"],
    }
  },

  Dantedeu5: {
    teammates: {
      Melser:   ["KRÜ Esports"],
      keznit:   ["KRÜ Esports"],
      Shyy:     ["KRÜ Esports"],
      Mazino:   ["KRÜ Esports"],
      Less:     ["KRÜ Esports"],
      mwzera:   ["KRÜ Esports"],
      Saadhak:  ["KRÜ Esports"],
      silentzz: ["KRÜ Esports"],
      heat:     ["KRÜ Esports"],
    }
  },

  skuba: {
    teammates: {
      Ethan: ["NRG"],
      s0m:   ["NRG"],
      mada:  ["NRG"],
      brawk: ["NRG"],
      Keiko: ["NRG"],
    }
  },

  spikeziN: {
    teammates: {
      lz:       ["2GAME"],
      silentzz: ["2GAME"],
      gobera:   ["2GAME"],
      pryze:    ["2GAME"],
      blowz:    ["Leviatán"],
      kiNgg:    ["Leviatán"],
      Neon:     ["Leviatán"],
      Sato:     ["Leviatán"],
      PxS:      ["Leviatán"],
    }
  },

  okeanos: {
    teammates: {
      kiNgg:   ["Leviatán"],
      tex:     ["Leviatán"],
      C0M:     ["Leviatán", "Evil Geniuses"],
      Sato:    ["Leviatán"],
      bao:     ["Evil Geniuses"],
      dgzin:   ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
    }
  },

  Sato: {
    teammates: {
      kiNgg:    ["Leviatán"],
      tex:      ["Leviatán"],
      C0M:      ["Leviatán"],
      okeanos:  ["Leviatán"],
      blowz:    ["Leviatán"],
      Neon:     ["Leviatán"],
      spikeziN: ["Leviatán"],
      PxS:      ["Leviatán"],
    }
  },

  lukxo: {
    teammates: {
      cauanzin: ["LOUD"],
      pANcada:  ["LOUD"],
      RobbieBk: ["LOUD"],
      Virtyy:   ["LOUD"],
      Darker:   ["LOUD"],
      erde:     ["LOUD"],
      tkzin:    ["LOUD"],
      DaviH:    ["LOUD"],
    }
  },

  Virtyy: {
    teammates: {
      cauanzin: ["LOUD"],
      pANcada:  ["LOUD"],
      lukxo:    ["LOUD"],
      RobbieBk: ["LOUD"],
      Darker:   ["LOUD"],
      erde:     ["LOUD"],
    }
  },

  Urango: {
    teammates: {
      heat:    ["FURIA Esports"],
      Palla:   ["FURIA Esports"],
      tuyz:    ["FURIA Esports"],
      adverso: ["FURIA Esports"],
    }
  },

  babybay: {
    teammates: {
      JonahP:  ["G2 Esports"],
      trent:   ["G2 Esports"],
      valyn:   ["G2 Esports"],
      jawgemo: ["G2 Esports"],
      leaf:    ["G2 Esports"],
    }
  },

  iamgrq: {
    teammates: {
      Shr1mp:  ["All Gamers"],
      K1ra:    ["All Gamers"],
      f4ngeer: ["All Gamers"],
      Au1:     ["All Gamers"],
      Septem7: ["All Gamers"],
      Youze:   ["All Gamers"],
      Bai:     ["All Gamers"],
    }
  },

  f4ngeer: {
    teammates: {
      Shr1mp:  ["All Gamers"],
      K1ra:    ["All Gamers"],
      iamgrq:  ["All Gamers"],
      Au1:     ["All Gamers"],
      Septem7: ["All Gamers"],
      Youze:   ["All Gamers"],
      Bai:     ["All Gamers"],
    }
  },

  Au1: {
    teammates: {
      Shr1mp:  ["All Gamers"],
      K1ra:    ["All Gamers"],
      iamgrq:  ["All Gamers"],
      f4ngeer: ["All Gamers"],
    }
  },

  bud: {
    teammates: {
      whzy:   ["Bilibili Gaming"],
      rushia: ["Bilibili Gaming"],
      nephh:  ["Bilibili Gaming"],
      Knight: ["Bilibili Gaming"],
      Biank:  ["Bilibili Gaming"],
    }
  },

  Setrod: {
    teammates: {
      sScary:  ["FunPlus Phoenix"],
      Life:    ["FunPlus Phoenix"],
      BerLIN:  ["FunPlus Phoenix"],
      AAAAY:   ["FunPlus Phoenix"],
      KovaQ:   ["FunPlus Phoenix"],
      Ben1Ley: ["FunPlus Phoenix"],
      coconut: ["FunPlus Phoenix"],
      Xlele:   ["FunPlus Phoenix"],
    }
  },

  zhe: {
    teammates: {
      Yuicaw:      ["JD Gaming"],
      stew:        ["JD Gaming"],
      jkuro:       ["JD Gaming"],
      coconut:     ["JD Gaming"],
      BerLIN:      ["JD Gaming"],
      crownfisher: ["JD Gaming"],
    }
  },

  heybay: {
    teammates: {
      OBONE: ["Nova Esports"],
      GuanG: ["Nova Esports"],
      Green: ["Nova Esports"],
      Ezeir: ["Nova Esports"],
    }
  },

  Green: {
    teammates: {
      OBONE:   ["Nova Esports"],
      heybay:  ["Nova Esports"],
      GuanG:   ["Nova Esports"],
      Ezeir:   ["Nova Esports"],
      qiutiaN: ["Nova Esports"],
      swagzor: ["Nova Esports"],
    }
  },

  Splash: {
    teammates: {
      sword9:   ["TYLOO"],
      slowly:   ["TYLOO"],
      Scales:   ["TYLOO"],
      Erv:      ["TYLOO"],
      Yoyo:     ["TYLOO"],
      SiuFatBB: ["TYLOO"],
    }
  },

  Erv: {
    teammates: {
      sword9:   ["TYLOO"],
      Splash:   ["TYLOO"],
      slowly:   ["TYLOO"],
      Scales:   ["TYLOO"],
      Yoyo:     ["TYLOO"],
      SiuFatBB: ["TYLOO"],
    }
  },

  qiutiaN: {
    teammates: {
      yosemite: ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      Ezeir:    ["Nova Esports"],
      GuanG:    ["Nova Esports"],
      swagzor:  ["Nova Esports"],
      Green:    ["Nova Esports"],
      cb:       ["Nova Esports"],
    }
  },

  jowa: {
    teammates: {
      yosemite: ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      qiutiaN:  ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
      R1ckLee:  ["Wolves Esports"],
    }
  },

  WsLeo: {
    teammates: {
      Rarga:    ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      Lysoar:   ["XLG Esports"],
      happywei: ["XLG Esports"],
      Sharks:   ["XLG Esports"],
    }
  },

  Timotino: {
    teammates: {
      Asuna:     ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      vora:      ["100 Thieves"],
    }
  },

  vora: {
    teammates: {
      Asuna:     ["100 Thieves"],
      bang:      ["100 Thieves"],
      Cryocells: ["100 Thieves"],
      Timotino:  ["100 Thieves"],
    }
  },

  bao: {
    teammates: {
      C0M:       ["Evil Geniuses"],
      dgzin:     ["Evil Geniuses"],
      okeanos:   ["Evil Geniuses"],
      supamen:   ["Evil Geniuses"],
      Paincakes: ["Evil Geniuses"],
      zerona:    ["Evil Geniuses"],
    }
  },

  alym: {
    teammates: {
      Artzin:    ["FURIA Esports"],
      eeiu:      ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
      nerve:     ["FURIA Esports"],
    }
  },

  nerve: {
    teammates: {
      alym:      ["FURIA Esports"],
      Artzin:    ["FURIA Esports"],
      eeiu:      ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
    }
  },

  benG: {
    teammates: {
      NagZ:        ["KRÜ Esports"],
      mta:         ["KRÜ Esports"],
      infiltrator: ["KRÜ Esports"],
      Governor:    ["KRÜ Esports"],
    }
  },

  infiltrator: {
    teammates: {
      NagZ:     ["KRÜ Esports"],
      mta:      ["KRÜ Esports"],
      benG:     ["KRÜ Esports"],
      Governor: ["KRÜ Esports"],
    }
  },

  blowz: {
    teammates: {
      kiNgg:    ["Leviatán"],
      Neon:     ["Leviatán"],
      Sato:     ["Leviatán"],
      spikeziN: ["Leviatán"],
      PxS:      ["Leviatán"],
    }
  },

  Neon: {
    teammates: {
      blowz:    ["Leviatán"],
      kiNgg:    ["Leviatán"],
      Sato:     ["Leviatán"],
      spikeziN: ["Leviatán"],
      PxS:      ["Leviatán"],
    }
  },

  Darker: {
    teammates: {
      cauanzin: ["LOUD"],
      lukxo:    ["LOUD"],
      pANcada:  ["LOUD"],
      Virtyy:   ["LOUD"],
      erde:     ["LOUD"],
      tkzin:    ["LOUD"],
      DaviH:    ["LOUD"],
    }
  },

  Kyu: {
    teammates: {
      cortezia: ["Sentinels"],
      N4RRATE:  ["Sentinels"],
      johnqt:   ["Sentinels"],
      reduxx:   ["Sentinels"],
    }
  },

  reduxx: {
    teammates: {
      cortezia: ["Sentinels"],
      N4RRATE:  ["Sentinels"],
      Kyu:      ["Sentinels"],
      johnqt:   ["Sentinels"],
      Jerrwin:  ["Sentinels"],
      JonahP:   ["Sentinels"],
      Victor:   ["Sentinels"],
      Marved:   ["Sentinels"],
    }
  },

  Eggsterr: {
    teammates: {
      Demon1:  ["ENVY"],
      keznit:  ["ENVY"],
      P0PPIN:  ["ENVY"],
      Rossy:   ["ENVY"],
      inspire: ["ENVY"],
    }
  },

  P0PPIN: {
    teammates: {
      Demon1:   ["ENVY"],
      Eggsterr: ["ENVY"],
      keznit:   ["ENVY"],
      Rossy:    ["ENVY"],
      inspire:  ["ENVY"],
    }
  },

  inspire: {
    teammates: {
      Demon1:   ["ENVY"],
      Eggsterr: ["ENVY"],
      keznit:   ["ENVY"],
      P0PPIN:   ["ENVY"],
      Rossy:    ["ENVY"],
    }
  },

  Rose: {
    teammates: {
      "lovers rock": ["BBL Esports"],
      Loita:         ["BBL Esports"],
      Lar0k:         ["BBL Esports"],
      Crewen:        ["BBL Esports"],
    }
  },

  "lovers rock": {
    teammates: {
      Rose:   ["BBL Esports"],
      Loita:  ["BBL Esports"],
      Lar0k:  ["BBL Esports"],
      Crewen: ["BBL Esports"],
    }
  },

  Loita: {
    teammates: {
      Rose:          ["BBL Esports"],
      "lovers rock": ["BBL Esports"],
      Lar0k:         ["BBL Esports"],
      Crewen:        ["BBL Esports"],
    }
  },

  Lar0k: {
    teammates: {
      Rose:          ["BBL Esports"],
      "lovers rock": ["BBL Esports"],
      Loita:         ["BBL Esports"],
      Crewen:        ["BBL Esports"],
    }
  },

  Crewen: {
    teammates: {
      Rose:          ["BBL Esports"],
      "lovers rock": ["BBL Esports"],
      Loita:         ["BBL Esports"],
      Lar0k:         ["BBL Esports"],
    }
  },

  baha: {
    teammates: {
      MrFaliN:  ["FUT Esports"],
      yetujey:  ["FUT Esports"],
      xeus:     ["FUT Esports"],
      KROSTALY: ["FUT Esports"],
    }
  },

  KROSTALY: {
    teammates: {
      baha:      ["FUT Esports"],
      MrFaliN:   ["FUT Esports"],
      yetujey:   ["FUT Esports"],
      xeus:      ["FUT Esports"],
      s0pp:      ["FUT Esports"],
      sociablEE: ["FUT Esports"],
    }
  },

  GLYPH: {
    teammates: {
      starxo:  ["Gentle Mates"],
      Minny:   ["Gentle Mates"],
      marteen: ["Gentle Mates"],
      bipo:    ["Gentle Mates"],
      Rossy:   ["ENVY"],
      nightz:  ["ENVY"],
      keznit:  ["ENVY"],
      Demon1:  ["ENVY"],
    }
  },

  bipo: {
    teammates: {
      starxo:  ["Gentle Mates"],
      Minny:   ["Gentle Mates"],
      marteen: ["Gentle Mates"],
      GLYPH:   ["Gentle Mates"],
      Proxh:   ["Gentle Mates"],
      H1ber:   ["Gentle Mates"],
    }
  },

  wayne: {
    teammates: {
      purp0:   ["Team Liquid"],
      nAts:    ["Team Liquid"],
      MiniBoo: ["Team Liquid"],
      kamo:    ["Team Liquid"],
      Kicks:   ["Team Liquid"],
    }
  },

  seven: {
    teammates: {
      qpert:    ["PCIFIC Esports"],
      NINJA:    ["PCIFIC Esports"],
      cNed:     ["PCIFIC Esports"],
      al0rante: ["PCIFIC Esports"],
      waddle:   ["PCIFIC Esports"],
    }
  },

  qpert: {
    teammates: {
      seven:    ["PCIFIC Esports"],
      NINJA:    ["PCIFIC Esports"],
      cNed:     ["PCIFIC Esports"],
      al0rante: ["PCIFIC Esports"],
      waddle:   ["PCIFIC Esports"],
    }
  },

  NINJA: {
    teammates: {
      seven:    ["PCIFIC Esports"],
      qpert:    ["PCIFIC Esports"],
      cNed:     ["PCIFIC Esports"],
      al0rante: ["PCIFIC Esports"],
      waddle:   ["PCIFIC Esports"],
    }
  },

  al0rante: {
    teammates: {
      seven:  ["PCIFIC Esports"],
      qpert:  ["PCIFIC Esports"],
      NINJA:  ["PCIFIC Esports"],
      cNed:   ["PCIFIC Esports"],
      waddle: ["PCIFIC Esports"],
    }
  },

  nekky: {
    teammates: {
      Favian: ["ULF Esports", "Eternal Fire"],
      audaz:  ["ULF Esports", "Eternal Fire"],
      d3mur:  ["ULF Esports"],
      sturNN: ["ULF Esports"],
      Izzy:   ["Eternal Fire"],
      echo:   ["Eternal Fire"],
      Spear:  ["Eternal Fire"],
    }
  },

  Favian: {
    teammates: {
      nekky:  ["ULF Esports", "Eternal Fire"],
      audaz:  ["ULF Esports", "Eternal Fire"],
      d3mur:  ["ULF Esports"],
      sturNN: ["ULF Esports"],
      Izzy:   ["Eternal Fire"],
      echo:   ["Eternal Fire"],
      Spear:  ["Eternal Fire"],
    }
  },

  audaz: {
    teammates: {
      nekky:  ["ULF Esports", "Eternal Fire"],
      Favian: ["ULF Esports", "Eternal Fire"],
      d3mur:  ["ULF Esports"],
      sturNN: ["ULF Esports"],
      Izzy:   ["Eternal Fire"],
      echo:   ["Eternal Fire"],
      Spear:  ["Eternal Fire"],
    }
  },

  d3mur: {
    teammates: {
      nekky:  ["ULF Esports"],
      Favian: ["ULF Esports"],
      audaz:  ["ULF Esports"],
      sturNN: ["ULF Esports"],
    }
  },

  sturNN: {
    teammates: {
      nekky:  ["ULF Esports"],
      Favian: ["ULF Esports"],
      audaz:  ["ULF Esports"],
      d3mur:  ["ULF Esports"],
    }
  },

  yatsuka: {
    teammates: {
      SSeeS:  ["DetonatioN FM"],
      Meiy:   ["DetonatioN FM"],
      Caedye: ["DetonatioN FM"],
      akame:  ["DetonatioN FM"],
    }
  },

  Caedye: {
    teammates: {
      yatsuka: ["DetonatioN FM"],
      SSeeS:   ["DetonatioN FM"],
      Meiy:    ["DetonatioN FM"],
      akame:   ["DetonatioN FM"],
    }
  },

  Hermes: {
    teammates: {
      MaKo:    ["DRX"],
      HYUNMIN: ["DRX"],
      free1ng: ["DRX"],
      BeYN:    ["DRX"],
      Yong:    ["DRX"],
    }
  },

  Leviathan: {
    teammates: {
      thyy:    ["FULL SENSE"],
      Primmie: ["FULL SENSE"],
      killua:  ["FULL SENSE"],
      JitboyS: ["FULL SENSE"],
      Crws:    ["FULL SENSE"],
    }
  },

  ZynX: {
    teammates: {
      t3xture: ["Gen.G Esports"],
      Lakia:   ["Gen.G Esports"],
      Karon:   ["Gen.G Esports"],
      Ash:     ["Gen.G Esports"],
      KiTae:   ["Gen.G Esports"],
      Foxy9:   ["Gen.G Esports"],
    }
  },

  xavi8k: {
    teammates: {
      UdoTan:  ["Global Esports"],
      PatMen:  ["Global Esports"],
      Kr1stal: ["Global Esports"],
      Deryeon: ["Global Esports"],
      Autumn:  ["Global Esports"],
    }
  },

  Absol: {
    teammates: {
      Xdll:      ["ZETA DIVISION"],
      SyouTa:    ["ZETA DIVISION"],
      SugarZ3ro: ["ZETA DIVISION"],
      eKo:       ["ZETA DIVISION"],
    }
  },

  zexy: {
    teammates: {
      XuNa:         ["VARREL"],
      oonzmlp:      ["VARREL"],
      C1ndeR:       ["VARREL"],
      "Klaus (KR)": ["VARREL"],
      Foxy9:        ["VARREL"],
    }
  },

  XuNa: {
    teammates: {
      zexy:         ["VARREL"],
      oonzmlp:      ["VARREL"],
      C1ndeR:       ["VARREL"],
      "Klaus (KR)": ["VARREL"],
      Foxy9:        ["VARREL"],
    }
  },

  oonzmlp: {
    teammates: {
      zexy:         ["VARREL"],
      XuNa:         ["VARREL"],
      C1ndeR:       ["VARREL"],
      "Klaus (KR)": ["VARREL"],
      Foxy9:        ["VARREL"],
    }
  },

  C1ndeR: {
    teammates: {
      zexy:         ["VARREL"],
      XuNa:         ["VARREL"],
      oonzmlp:      ["VARREL"],
      "Klaus (KR)": ["VARREL"],
      Foxy9:        ["VARREL"],
    }
  },

  Xross: {
    teammates: {
      Rb:      ["NS RedForce"],
      Ivy:     ["NS RedForce"],
      Francis: ["NS RedForce"],
      Dambi:   ["NS RedForce"],
    }
  },

  Septem7: {
    teammates: {
      K1ra:    ["All Gamers"],
      Shr1mp:  ["All Gamers"],
      f4ngeer: ["All Gamers"],
      iamgrq:  ["All Gamers"],
      Youze:   ["All Gamers"],
      Bai:     ["All Gamers"],
    }
  },

  Youze: {
    teammates: {
      K1ra:    ["All Gamers"],
      Shr1mp:  ["All Gamers"],
      Septem7: ["All Gamers"],
      f4ngeer: ["All Gamers"],
      iamgrq:  ["All Gamers"],
      Bai:     ["All Gamers"],
    }
  },

  yilai: {
    teammates: {
      rushia: ["Bilibili Gaming"],
      Knight: ["Bilibili Gaming"],
      nephh:  ["Bilibili Gaming"],
      whzy:   ["Bilibili Gaming"],
    }
  },

  Ben1Ley: {
    teammates: {
      AAAAY:  ["FunPlus Phoenix"],
      BerLIN: ["FunPlus Phoenix"],
      KovaQ:  ["FunPlus Phoenix"],
      Setrod: ["FunPlus Phoenix"],
    }
  },

  swagzor: {
    teammates: {
      Ezeir:   ["Nova Esports"],
      GuanG:   ["Nova Esports"],
      qiutiaN: ["Nova Esports"],
      Green:   ["Nova Esports"],
      cb:      ["Nova Esports"],
    }
  },

  Xlele: {
    teammates: {
      Abo:     ["Trace Esports"],
      Kai:     ["Trace Esports"],
      Viva:    ["Trace Esports"],
      deLb:    ["Trace Esports"],
      AAAAY:   ["FunPlus Phoenix"],
      coconut: ["FunPlus Phoenix"],
      KovaQ:   ["FunPlus Phoenix"],
      Setrod:  ["FunPlus Phoenix"],
    }
  },

  glacier: {
    teammates: {
      yosemite: ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      R1ckLee:  ["Wolves Esports"],
      aluba:    ["Wolves Esports"],
      Deryeon:  ["Wolves Esports"],
    }
  },

  R1ckLee: {
    teammates: {
      yosemite: ["Wolves Esports"],
      Spring:   ["Wolves Esports"],
      SiuFatBB: ["Wolves Esports"],
      jowa:     ["Wolves Esports"],
      glacier:  ["Wolves Esports"],
    }
  },

  s0pp: {
    teammates: {
      yetujey:   ["FUT Esports"],
      xeus:      ["FUT Esports"],
      KROSTALY:  ["FUT Esports"],
      sociablEE: ["FUT Esports"],
    }
  },

  chloric: {
    teammates: {
      Filu:     ["Natus Vincere"],
      hiro:     ["Natus Vincere"],
      Ruxic:    ["Natus Vincere"],
      Kolosha:  ["Natus Vincere"],
      ComeBack: ["Natus Vincere"],
      ExiT:     ["Natus Vincere"],
      CyvOph:   ["Natus Vincere"],
    }
  },

  Kolosha: {
    teammates: {
      Filu:     ["Natus Vincere"],
      hiro:     ["Natus Vincere"],
      Ruxic:    ["Natus Vincere"],
      chloric:  ["Natus Vincere"],
      ComeBack: ["Natus Vincere"],
      ExiT:     ["Natus Vincere"],
      CyvOph:   ["Natus Vincere"],
    }
  },

  koshmaras: {
    teammates: {
      Wo0t:       ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      Boo:        ["Team Heretics"],
      benjyfishy: ["Team Heretics"],
      ComeBack:   ["Team Heretics"],
    }
  },

  Sayonara: {
    teammates: {
      PROFEK:    ["Team Vitality"],
      Jamppi:    ["Team Vitality"],
      Derke:     ["Team Vitality"],
      Chronicle: ["Team Vitality"],
    }
  },

  echo: {
    teammates: {
      Izzy:   ["Eternal Fire"],
      nekky:  ["Eternal Fire"],
      audaz:  ["Eternal Fire"],
      Favian: ["Eternal Fire"],
      Spear:  ["Eternal Fire"],
    }
  },

  Yong: {
    teammates: {
      MaKo:    ["DRX"],
      Hermes:  ["DRX"],
      HYUNMIN: ["DRX"],
      free1ng: ["DRX"],
      BeYN:    ["DRX"],
      Flicker: ["DRX"],
    }
  },

  KiTae: {
    teammates: {
      Ash:     ["Gen.G Esports"],
      Karon:   ["Gen.G Esports"],
      t3xture: ["Gen.G Esports"],
      Lakia:   ["Gen.G Esports"],
      ZynX:    ["Gen.G Esports"],
    }
  },

  Rimuru: {
    teammates: {
      Sylvan:     ["Team Secret"],
      kellyS:     ["Team Secret"],
      JessieVash: ["Team Secret"],
      BerserX:    ["Team Secret"],
    }
  },

  "Klaus (KR)": {
    teammates: {
      zexy:    ["VARREL"],
      XuNa:    ["VARREL"],
      oonzmlp: ["VARREL"],
      C1ndeR:  ["VARREL"],
      Foxy9:   ["VARREL"],
    }
  },

  Jackk: {
    teammates: {
      OXY:         ["Cloud9"],
      Xeppaa:      ["Cloud9"],
      Zellsis:     ["Cloud9"],
      Notexxd:     ["Cloud9"],
      penny:       ["Cloud9"],
      v1c:         ["Cloud9"],
      FireBallOps: ["Cloud9"],
    }
  },

  Notexxd: {
    teammates: {
      OXY:     ["Cloud9"],
      Xeppaa:  ["Cloud9"],
      Zellsis: ["Cloud9"],
      Jackk:   ["Cloud9"],
      penny:   ["Cloud9"],
      v1c:     ["Cloud9"],
    }
  },

  Paincakes: {
    teammates: {
      bao:     ["Evil Geniuses"],
      dgzin:   ["Evil Geniuses"],
      supamen: ["Evil Geniuses"],
      zerona:  ["Evil Geniuses"],
    }
  },

  zerona: {
    teammates: {
      bao:       ["Evil Geniuses"],
      dgzin:     ["Evil Geniuses"],
      supamen:   ["Evil Geniuses"],
      Paincakes: ["Evil Geniuses"],
    }
  },

  erde: {
    teammates: {
      cauanzin: ["LOUD"],
      Darker:   ["LOUD"],
      lukxo:    ["LOUD"],
      Virtyy:   ["LOUD"],
      tkzin:    ["LOUD"],
      DaviH:    ["LOUD"],
    }
  },

  Jerrwin: {
    teammates: {
      cortezia: ["Sentinels"],
      johnqt:   ["Sentinels"],
      JonahP:   ["Sentinels"],
      reduxx:   ["Sentinels"],
      Victor:   ["Sentinels"],
      Marved:   ["Sentinels"],
    }
  },

  FT: {
    teammates: {
      whzy:   ["Bilibili Gaming"],
      Knight: ["Bilibili Gaming"],
      nephh:  ["Bilibili Gaming"],
      rushia: ["Bilibili Gaming"],
    }
  },

  crownfisher: {
    teammates: {
      zhe:    ["JD Gaming"],
      Yuicaw: ["JD Gaming"],
      BerLIN: ["JD Gaming"],
      jkuro:  ["JD Gaming"],
    }
  },

  ra1ny: {
    teammates: {
      Spitfires: ["Titan Esports Club"],
      CoCo:      ["Titan Esports Club"],
      dynamite:  ["Titan Esports Club"],
      Haodong:   ["Titan Esports Club"],
      lucas:     ["Titan Esports Club"],
    }
  },

  FKEY: {
    teammates: {
      Kai:     ["Trace Esports"],
      deLb:    ["Trace Esports"],
      FengF:   ["Trace Esports"],
      LuoK1ng: ["Trace Esports"],
    }
  },

  Sharks: {
    teammates: {
      happywei: ["XLG Esports"],
      Rarga:    ["XLG Esports"],
      NoMan:    ["XLG Esports"],
      Lysoar:   ["XLG Esports"],
      WsLeo:    ["XLG Esports"],
    }
  },

  Verse: {
    teammates: {
      vo0kashu: ["Dragon Ranger Gaming"],
      Life:     ["Dragon Ranger Gaming"],
      Nicc:     ["Dragon Ranger Gaming"],
      SpiritZ1: ["Dragon Ranger Gaming"],
    }
  },

  Jesse: {
    teammates: {
      westside:  ["GIANTX"],
      Flickless: ["GIANTX"],
      ara:       ["GIANTX"],
      neT:       ["GIANTX"],
    }
  },

  ExiT: {
    teammates: {
      Ruxic:   ["Natus Vincere"],
      hiro:    ["Natus Vincere"],
      CyvOph:  ["Natus Vincere"],
      chloric: ["Natus Vincere"],
      Kolosha: ["Natus Vincere"],
    }
  },

  waddle: {
    teammates: {
      seven:    ["PCIFIC Esports"],
      qpert:    ["PCIFIC Esports"],
      NINJA:    ["PCIFIC Esports"],
      al0rante: ["PCIFIC Esports"],
    }
  },

  Spear: {
    teammates: {
      echo:   ["Eternal Fire"],
      nekky:  ["Eternal Fire"],
      audaz:  ["Eternal Fire"],
      Favian: ["Eternal Fire"],
      Izzy:   ["Eternal Fire"],
    }
  },

  FireBallOps: {
    teammates: {
      OXY:     ["Cloud9"],
      Zellsis: ["Cloud9"],
      Jackk:   ["Cloud9"],
      v1c:     ["Cloud9"],
    }
  },

  basic: {
    teammates: {
      Shyy:      ["FURIA Esports"],
      koalanoob: ["FURIA Esports"],
      C0M:       ["FURIA Esports"],
      Artzin:    ["FURIA Esports"],
    }
  },

  tkzin: {
    teammates: {
      lukxo:  ["LOUD"],
      erde:   ["LOUD"],
      DaviH:  ["LOUD"],
      Darker: ["LOUD"],
    }
  },

  DaviH: {
    teammates: {
      tkzin:  ["LOUD"],
      lukxo:  ["LOUD"],
      erde:   ["LOUD"],
      Darker: ["LOUD"],
    }
  },

  nightz: {
    teammates: {
      Rossy:  ["ENVY"],
      keznit: ["ENVY"],
      GLYPH:  ["ENVY"],
      Demon1: ["ENVY"],
    }
  },

  Flicker: {
    teammates: {
      MaKo:    ["DRX"],
      HYUNMIN: ["DRX"],
      free1ng: ["DRX"],
      BeYN:    ["DRX"],
      Yong:    ["DRX"],
    }
  },

  seph1roth: {
    teammates: {
      Primmie: ["FULL SENSE"],
      killua:  ["FULL SENSE"],
      JitboyS: ["FULL SENSE"],
      Crws:    ["FULL SENSE"],
    }
  },

  RaxcaL: {
    teammates: {
      t3xture: ["Gen.G Esports"],
      Karon:   ["Gen.G Esports"],
      Efina:   ["Gen.G Esports"],
      Ash:     ["Gen.G Esports"],
    }
  },

  xan: {
    teammates: {
      xffero:   ["Rex Regum Qeon"],
      Monyet:   ["Rex Regum Qeon"],
      Kushy:    ["Rex Regum Qeon"],
      Jemkin:   ["Rex Regum Qeon"],
      crazyguy: ["Rex Regum Qeon"],
    }
  },

  Zeus: {
    teammates: {
      Sylvan: ["Team Secret"],
      STYRON: ["Team Secret"],
      naTz:   ["Team Secret"],
      kellyS: ["Team Secret"],
    }
  },

  STYRON: {
    teammates: {
      Zeus:   ["Team Secret"],
      Sylvan: ["Team Secret"],
      naTz:   ["Team Secret"],
      kellyS: ["Team Secret"],
    }
  },

  naTz: {
    teammates: {
      Zeus:   ["Team Secret"],
      Sylvan: ["Team Secret"],
      STYRON: ["Team Secret"],
      kellyS: ["Team Secret"],
    }
  },

  GSR: {
    teammates: {
      nAts:  ["Team Liquid"],
      kamo:  ["Team Liquid"],
      Kicks: ["Team Liquid"],
      trexx: ["Team Liquid"],
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
