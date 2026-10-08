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

  "1kuzohh": {
    teammates: {
      andreewchi: ["Kaos Latin Gamers"],
      kraizzzz:   ["Kaos Latin Gamers"],
      Neto:       ["Kaos Latin Gamers"],
      Hideent:    ["Kaos Latin Gamers"],
    }
  },
 
  "8nfinity": {
    teammates: {
      Aimless: ["Ryze Gaming"],
      iAndy:   ["Ryze Gaming"],
      Kay:     ["Ryze Gaming"],
      Zorro:   ["Ryze Gaming"],
    }
  },

  ANDROID: {
    teammates: {
      yay:      ["Andbox"],
      b0i:      ["Andbox"],
      seb:      ["Andbox"],
      POACH:    ["Andbox"],
    }
  },
 
  AdAdaption: {
    teammates: {
      Jahir:  ["Janus Esports"],
      Daiki:  ["Janus Esports"],
      wondy:  ["Janus Esports"],
      ezznap: ["Janus Esports"],
    }
  },
 
  adverso: {
    teammates: {
      Closer:    ["Australs"],
      kiNgg:     ["Australs"],
      Melser:    ["Australs"],
      Tacolilla: ["Australs"],
    }
  },
 
  Aimless: {
    teammates: {
      "8nfinity": ["Ryze Gaming"],
      iAndy:      ["Ryze Gaming"],
      Kay:        ["Ryze Gaming"],
      Zorro:      ["Ryze Gaming"],
    }
  },
 
  akz: {
    teammates: {
      Leobas: ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      Mazino: ["KRÜ Esports"],
      Nagz:   ["KRÜ Esports"],
    }
  },
 
  Alejo: {
    teammates: {
      RAINMAKER: ["Infinity Esports"],
      sickLy:    ["Infinity Esports"],
      jfoeN:     ["Infinity Esports"],
      nolaN:     ["Infinity Esports"],
    }
  },
 
  andreewchi: {
    teammates: {
      "1kuzohh": ["Kaos Latin Gamers"],
      kraizzzz:  ["Kaos Latin Gamers"],
      Neto:      ["Kaos Latin Gamers"],
      Hideent:   ["Kaos Latin Gamers"],
    }
  },

  aproto: {
    teammates: {
      stellar: ["Luminosity Gaming"],
      thief:   ["Luminosity Gaming"],
      YaBoiDre:  ["Luminosity Gaming"],
      moose:   ["Luminosity Gaming"],
    }
  },
 
  Ar4n: {
    teammates: {
      l4cer:      ["9z Team"],
      UNNSTO:     ["9z Team"],
      Exterminia: ["9z Team"],
      mizu:       ["9z Team"],
    }
  },
 
  AsrocK: {
    teammates: {
      FroxeKzz: ["Pro Hub Gaming"],
      BREKK:    ["Pro Hub Gaming"],
      Ryufox:   ["Pro Hub Gaming"],
      xZowi:    ["Pro Hub Gaming"],
    }
  },

  AYRIN: {
    teammates: {
      thwifo: ["XSET"],
      BcJ:    ["XSET"],
      PureR:  ["XSET"],
      Wedid: ["XSET"],
    }
  },

  b0i: {
    teammates: {
      yay:     ["Andbox"],
      ANDROID: ["Andbox"],
      seb:     ["Andbox"],
      POACH:   ["Andbox"],
    }
  },

  BcJ: {
    teammates: {
      thwifo: ["XSET"],
      AYRIN:  ["XSET"],
      PureR:  ["XSET"],
      Wedid: ["XSET"],
    }
  },
 
  BEAST: {
    teammates: {
      Danielesflo: ["LDM Esports"],
      Clarenz:     ["LDM Esports"],
      Sh0ckwave:   ["LDM Esports"],
      Xander:      ["LDM Esports"],
    }
  },

  Biscoit1n: {
    teammates: {
      rsT:       ["Imperial Esports"],
      Evilkyk:   ["Imperial Esports"],
      tuyz:      ["Imperial Esports"],
      gustt1nha: ["Imperial Esports"],
    }
  },

  BLD: {
    teammates: {
      DiMAS:  ["SLICK"],
      Hastad: ["SLICK"],
      mNdS:   ["SLICK"],
      ntk:    ["SLICK"],
    }
  },



 
  BREKK: {
    teammates: {
      FroxeKzz: ["Pro Hub Gaming"],
      AsrocK:   ["Pro Hub Gaming"],
      Ryufox:   ["Pro Hub Gaming"],
      xZowi:    ["Pro Hub Gaming"],
    }
  },
  
  BRNWOWZK1: {
    teammates: {
      FLUYR:    ["DELIRAWOWZK"],
      heat:     ["DELIRAWOWZK"],
      rhamurti: ["DELIRAWOWZK"],
      zam:      ["DELIRAWOWZK"],
    }
  },

  BuZz: {
    teammates: {
      Harry:      ["BearClaw Gaming"],
      "10X":      ["BearClaw Gaming"],
      GANA:       ["BearClaw Gaming"],
      iNTRO:      ["BearClaw Gaming"],
      // stax:       ["DRX"],
      // MaKo:       ["DRX"],
      // Rb:         ["DRX"],
      // Lakia:      ["DRX", "T1"],
      // Zest:       ["DRX"],
      // Meteor:     ["T1"],
      // t3xture:    ["T1"],
      // Carpe:      ["T1"],
      // Sayaplayer: ["T1"],
    }
  },
 
  byrf: {
    teammates: {
      kenzit: ["Wydgers Argentina"],
      SUTHER: ["Wydgers Argentina"],
      WKN:    ["Wydgers Argentina"],
      zakreN: ["Wydgers Argentina"],
    }
  },
 
  
 

 

 

 
  Caz: {
    teammates: {
      Daveys:   ["LazerKlan"],
      Nous:     ["LazerKlan"],
      HellFull: ["LazerKlan"],
      Dobsha:   ["LazerKlan"],
    }
  },
 
  
 
 
 


  
 
  Clarenz: {
    teammates: {
      Danielesflo: ["LDM Esports"],
      BEAST:       ["LDM Esports"],
      Sh0ckwave:   ["LDM Esports"],
      Xander:      ["LDM Esports"],
    }
  },
 
  Closer: {
    teammates: {
      adverso:   ["Australs"],
      kiNgg:     ["Australs"],
      Melser:    ["Australs"],
      Tacolilla: ["Australs"],
    }
  },
 
 
  crashies: {
    teammates: {
      // yay:    ["OpTic Gaming"],
      FNS:    ["OpTic Gaming", "NRG", "ENVY"],
      // Victor: ["OpTic Gaming", "NRG"],
      // Marved: ["OpTic Gaming", "NRG"],
      // s0m:    ["NRG"],
      // Demon1: ["NRG"],
      // Ethan:  ["NRG"],
      food:   ["ENVY"],
      mummAy:  ["ENVY"],
      kaboose: ["ENVY"],
    }
  },
 
 

 
  Daiki: {
    teammates: {
      AdAdaption: ["Janus Esports"],
      Jahir:      ["Janus Esports"],
      wondy:      ["Janus Esports"],
      ezznap:     ["Janus Esports"],
    }
  },
 
  Danielesflo: {
    teammates: {
      BEAST:     ["LDM Esports"],
      Clarenz:   ["LDM Esports"],
      Sh0ckwave: ["LDM Esports"],
      Xander:    ["LDM Esports"],
    }
  },
  
  dapr: {
    teammates: {
      sinatraa: ["Sentinels"],
      ShahZaM:  ["Sentinels"],
      SicK:     ["Sentinels"],
      zombs:    ["Sentinels"],
      // TenZ:     ["Sentinels"],
      // Zellsis:  ["Sentinels"],
      // Kanpeki:  ["Sentinels"],
      // shroud:   ["Sentinels"],
    }
  },

  daps: {
    teammates: {
      s0m:      ["NRG"],
      eeiu:     ["NRG"],
      Shanks:   ["NRG"],
      Infinite: ["NRG"],
    }
  },

  
  DeNaro: {
    teammates: {
      fooX:   ["Squad5"],
      fra:    ["Squad5"],
      gaabx:  ["Squad5"],
      prozin: ["Squad5"],
    }
  },

  Daveys: {
    teammates: {
      Nous:     ["LazerKlan"],
      HellFull: ["LazerKlan"],
      Dobsha:   ["LazerKlan"],
      Caz:      ["LazerKlan"],
    }
  },

  delevingne: {
    teammates: {
      krain:     ["Vorax"],
      fzkk:      ["Vorax"],
      v1xen:     ["Vorax"],
      dragonite: ["Vorax"],
    }
  },
 
  debout: {
    teammates: {
      Tio:    ["Furious Gaming"],
      rochet: ["Furious Gaming"],
      Klauss: ["Furious Gaming"],
      D1E:    ["Furious Gaming"],
    }
  },
 
  delus1on: {
    teammates: {
      olzerr:  ["Stampede Gaming"],
      delz1k:  ["Stampede Gaming"],
      wait:    ["Stampede Gaming"],
      gessito: ["Stampede Gaming"],
    }
  },
 
  delz1k: {
    teammates: {
      olzerr:   ["Stampede Gaming"],
      delus1on: ["Stampede Gaming"],
      wait:     ["Stampede Gaming"],
      gessito:  ["Stampede Gaming"],
    }
  },
 
 
 
  D1E: {
    teammates: {
      Tio:    ["Furious Gaming"],
      rochet: ["Furious Gaming"],
      debout: ["Furious Gaming"],
      Klauss: ["Furious Gaming"],
    }
  },

  DiMAS: {
    teammates: {
      BLD:    ["SLICK"],
      Hastad: ["SLICK"],
      mNdS:   ["SLICK"],
      ntk:    ["SLICK"],
    }
  },
 
  Dobsha: {
    teammates: {
      Daveys:   ["LazerKlan"],
      Nous:     ["LazerKlan"],
      HellFull: ["LazerKlan"],
      Caz:      ["LazerKlan"],
    }
  },
 
  duMb0: {
    teammates: {
      Maka:      ["Akave Esports"],
      Gonnak:    ["Akave Esports"],
      zhOMpiRAz: ["Akave Esports"],
      sancho:    ["Akave Esports"],
    }
  },

  eeiu: {
    teammates: {
      daps:      ["NRG"],
      s0m:       ["NRG"],
      Shanks:    ["NRG"],
      Infinite:  ["NRG"],
    }
  },
 
  ERMAAAK: {
    teammates: {
      pakal: ["TYPHOON"],
      GXN:   ["TYPHOON"],
      tala:  ["TYPHOON"],
      viNT:  ["TYPHOON"],
    }
  },
 

  Evilkyk: {
    teammates: {
      Biscoit1n: ["Imperial Esports"],
      rsT:       ["Imperial Esports"],
      tuyz:      ["Imperial Esports"],
      gustt1nha: ["Imperial Esports"],
    }
  },
 
  Exterminia: {
    teammates: {
      l4cer:  ["9z Team"],
      UNNSTO: ["9z Team"],
      Ar4n:   ["9z Team"],
      mizu:   ["9z Team"],
    }
  },
 
  ezznap: {
    teammates: {
      AdAdaption: ["Janus Esports"],
      Jahir:      ["Janus Esports"],
      Daiki:      ["Janus Esports"],
      wondy:      ["Janus Esports"],
    }
  },
  

  FNS: {
    teammates: {
      // yay:      ["OpTic Gaming"],
      crashies: ["OpTic Gaming", "NRG", "ENVY"],
      // Victor:   ["OpTic Gaming", "NRG"],
      // Marved:   ["OpTic Gaming", "NRG"],
      // s0m:      ["NRG"],
      // Demon1:   ["NRG"],
      // Ethan:    ["NRG"],
      food:     ["ENVY"],
      mummAy:   ["ENVY"],
      kaboose:  ["ENVY"],
    }
  },

  FLUYR: {
    teammates: {
      BRNWOWZK1: ["DELIRAWOWZK"],
      heat:      ["DELIRAWOWZK"],
      rhamurti:  ["DELIRAWOWZK"],
      zam:       ["DELIRAWOWZK"],
    }
  },

  food: {
    teammates: {
      crashies: ["ENVY"],
      mummAy:   ["ENVY"],
      kaboose:  ["ENVY"],
      FNS:      ["ENVY"],
    }
  },

  fooX: {
    teammates: {
      DeNaro: ["Squad5"],
      fra:    ["Squad5"],
      gaabx:  ["Squad5"],
      prozin: ["Squad5"],
    }
  },
  
 
  fra: {
    teammates: {
      DeNaro: ["Squad5"],
      fooX:   ["Squad5"],
      gaabx:  ["Squad5"],
      prozin: ["Squad5"],
    }
  },
 
  FroxeKzz: {
    teammates: {
      BREKK:  ["Pro Hub Gaming"],
      AsrocK: ["Pro Hub Gaming"],
      Ryufox: ["Pro Hub Gaming"],
      xZowi:  ["Pro Hub Gaming"],
    }
  },

  frz: {
    teammates: {
      sutecas: ["Team Vikings"],
      Sacy:    ["Team Vikings"],
      gtnziN:  ["Team Vikings"],
      Saadhak: ["Team Vikings"],
    }
  },

  fzkk: {
    teammates: {
      krain:     ["Vorax"],
      v1xen:     ["Vorax"],
      dragonite: ["Vorax"],
      delevingne: ["Vorax"],
    }
  },
  
  gaabx: {
    teammates: {
      DeNaro: ["Squad5"],
      fooX:   ["Squad5"],
      fra:    ["Squad5"],
      prozin: ["Squad5"],
    }
  },

  Gengshta: {
    teammates: {
      jcStani: ["Immortals"],
      ShoT_UP:  ["Immortals"],
      NaturE:  ["Immortals"],
      Kehmicals: ["Immortals"],
    }
  },

  gessito: {
    teammates: {
      olzerr:   ["Stampede Gaming"],
      delus1on: ["Stampede Gaming"],
      delz1k:   ["Stampede Gaming"],
      wait:     ["Stampede Gaming"],
    }
  },

  gMd: {
    teammates: {
      huynh: ["Gen.G Esports"],
      MkaeL: ["Gen.G Esports"],
      Shawn: ["Gen.G Esports"],
      koosta: ["Gen.G Esports"],
    }
  },
 
  Gonnak: {
    teammates: {
      Maka:      ["Akave Esports"],
      duMb0:     ["Akave Esports"],
      zhOMpiRAz: ["Akave Esports"],
      sancho:    ["Akave Esports"],
    }
  },

  gtnziN: {
    teammates: {
      sutecas: ["Team Vikings"],
      frz:     ["Team Vikings"],
      Sacy:    ["Team Vikings"],
      Saadhak: ["Team Vikings"],
    }
  },

  gustt1nha: {
    teammates: {
      Biscoit1n: ["Imperial Esports"],
      rsT:       ["Imperial Esports"],
      Evilkyk:   ["Imperial Esports"],
      tuyz:      ["Imperial Esports"],
    }
  },
 
  Gwasa: {
    teammates: {
      JDRelax: ["Kaizen Esports"],
      SkuLLL:  ["Kaizen Esports"],
      Porky:   ["Kaizen Esports"],
      vapess:  ["Kaizen Esports"],
    }
  },
 
  GXN: {
    teammates: {
      pakal:   ["TYPHOON"],
      ERMAAAK: ["TYPHOON"],
      tala:    ["TYPHOON"],
      viNT:    ["TYPHOON"],
    }
  },

  Hastad: {
    teammates: {
      BLD:   ["SLICK"],
      DiMAS: ["SLICK"],
      mNdS:  ["SLICK"],
      ntk:   ["SLICK"],
    }
  },

  heat: {
    teammates: {
      BRNWOWZK1: ["DELIRAWOWZK"],
      FLUYR:     ["DELIRAWOWZK"],
      rhamurti:  ["DELIRAWOWZK"],
      zam:       ["DELIRAWOWZK"],
    }
  },
 
  HellFull: {
    teammates: {
      Daveys: ["LazerKlan"],
      Nous:   ["LazerKlan"],
      Dobsha: ["LazerKlan"],
      Caz:    ["LazerKlan"],
    }
  },
 
  Hideent: {
    teammates: {
      "1kuzohh":  ["Kaos Latin Gamers"],
      andreewchi: ["Kaos Latin Gamers"],
      kraizzzz:   ["Kaos Latin Gamers"],
      Neto:       ["Kaos Latin Gamers"],
    }
  },
 

  huynh: {
    teammates: {
      gMd:    ["Gen.G Esports"],
      MkaeL:  ["Gen.G Esports"],
      Shawn:  ["Gen.G Esports"],
      koosta: ["Gen.G Esports"],
    }
  },
 
  iAndy: {
    teammates: {
      Aimless:    ["Ryze Gaming"],
      "8nfinity": ["Ryze Gaming"],
      Kay:        ["Ryze Gaming"],
      Zorro:      ["Ryze Gaming"],
    }
  },
 

 
  Jahir: {
    teammates: {
      AdAdaption: ["Janus Esports"],
      Daiki:      ["Janus Esports"],
      wondy:      ["Janus Esports"],
      ezznap:     ["Janus Esports"],
    }
  },
 


  jcStani: {
    teammates: {
      Gengshta: ["Immortals"],
      ShoT_UP:  ["Immortals"],
      NaturE:  ["Immortals"],
      Kehmicals: ["Immortals"],
    }
  },
 
  JDRelax: {
    teammates: {
      Gwasa:  ["Kaizen Esports"],
      SkuLLL: ["Kaizen Esports"],
      Porky:  ["Kaizen Esports"],
      vapess: ["Kaizen Esports"],
    }
  },
 
  jfoeN: {
    teammates: {
      RAINMAKER: ["Infinity Esports"],
      sickLy:    ["Infinity Esports"],
      Alejo:     ["Infinity Esports"],
      nolaN:     ["Infinity Esports"],
    }
  },
 
 

 


  kaboose: {
    teammates: {
      crashies: ["ENVY"],
      FNS:      ["ENVY"],
      food:     ["ENVY"],
      mummAy:   ["ENVY"],
    }
  },
 
 

 
  Kay: {
    teammates: {
      Aimless:    ["Ryze Gaming"],
      "8nfinity": ["Ryze Gaming"],
      iAndy:      ["Ryze Gaming"],
      Zorro:      ["Ryze Gaming"],
    }
  },

  Kehmicals: {
    teammates: {
      Gengshta: ["Immortals"],
      jcStani:  ["Immortals"],
      ShoT_UP:  ["Immortals"],
      NaturE:  ["Immortals"],
    }
  },
 
  kenzit: {
    teammates: {
      byrf:   ["Wydgers Argentina"],
      SUTHER: ["Wydgers Argentina"],
      WKN:    ["Wydgers Argentina"],
      zakreN: ["Wydgers Argentina"],
    }
  },

  Khalil: {
    teammates: {
      xand:    ["FURIA Esports"],
      qck:     ["FURIA Esports"],
      Txddy1:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
    }
  },
 
 
 
  kiNgg: {
    teammates: {
      adverso:   ["Australs"],
      Closer:    ["Australs"],
      Melser:    ["Australs"],
      Tacolilla: ["Australs"],
    }
  },
 
  Klaus: {
    teammates: {
      akz:    ["KRÜ Esports"],
      Leobas: ["KRÜ Esports"],
      Mazino: ["KRÜ Esports"],
      Nagz:   ["KRÜ Esports"],
    }
  },
 
  Klauss: {
    teammates: {
      Tio:    ["Furious Gaming"],
      rochet: ["Furious Gaming"],
      debout: ["Furious Gaming"],
      D1E:    ["Furious Gaming"],
    }
  },

  koosta: {
    teammates: {
      huynh: ["Gen.G Esports"],
      gMd:   ["Gen.G Esports"],
      MkaeL: ["Gen.G Esports"],
      Shawn: ["Gen.G Esports"],
    }
  },
  
  krain: {
    teammates: {
      fzkk:      ["Vorax"],
      v1xen:     ["Vorax"],
      dragonite: ["Vorax"],
      delevingne: ["Vorax"],
    }
  },

  kraizzzz: {
    teammates: {
      "1kuzohh":  ["Kaos Latin Gamers"],
      andreewchi: ["Kaos Latin Gamers"],
      Neto:       ["Kaos Latin Gamers"],
      Hideent:    ["Kaos Latin Gamers"],
    }
  },
 
  l4cer: {
    teammates: {
      UNNSTO:     ["9z Team"],
      Exterminia: ["9z Team"],
      Ar4n:       ["9z Team"],
      mizu:       ["9z Team"],
    }
  },
 
 
 
 
  Leobas: {
    teammates: {
      akz:    ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      Mazino: ["KRÜ Esports"],
      Nagz:   ["KRÜ Esports"],
    }
  },
 
 
 

 
  Maka: {
    teammates: {
      duMb0:     ["Akave Esports"],
      Gonnak:    ["Akave Esports"],
      zhOMpiRAz: ["Akave Esports"],
      sancho:    ["Akave Esports"],
    }
  },
 

 
  Mazino: {
    teammates: {
      akz:    ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      Leobas: ["KRÜ Esports"],
      Nagz:   ["KRÜ Esports"],
    }
  },
 
  Melser: {
    teammates: {
      adverso:   ["Australs"],
      Closer:    ["Australs"],
      kiNgg:     ["Australs"],
      Tacolilla: ["Australs"],
    }
  },

 
  MiniBoo: {
    teammates: {
      benjyfishy: ["Team Heretics"],
      Boo:        ["Team Heretics"],
      RieNs:      ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
    }
  },
 
  mizu: {
    teammates: {
      l4cer:      ["9z Team"],
      UNNSTO:     ["9z Team"],
      Ar4n:       ["9z Team"],
      Exterminia: ["9z Team"],
    }
  },

  MkaeL: {
    teammates: {
      huynh: ["Gen.G Esports"],
      gMd:   ["Gen.G Esports"],
      Shawn: ["Gen.G Esports"],
      koosta: ["Gen.G Esports"],
    }
  },

  mNdS: {
    teammates: {
      BLD:    ["SLICK"],
      DiMAS:  ["SLICK"],
      Hastad: ["SLICK"],
      ntk:    ["SLICK"],
    }
  },
 
 

  moose: {
    teammates: {
      aproto: ["Luminosity Gaming"],
      stellar: ["Luminosity Gaming"],
      thief:  ["Luminosity Gaming"],
      YaBoiDre: ["Luminosity Gaming"],
    }
  },

  mummAy: {
    teammates: {
      crashies: ["ENVY"],
      FNS:      ["ENVY"],
      food:     ["ENVY"],
      kaboose:  ["ENVY"],
    }
  },
 

 
  Nagz: {
    teammates: {
      akz:    ["KRÜ Esports"],
      Klaus:  ["KRÜ Esports"],
      Leobas: ["KRÜ Esports"],
      Mazino: ["KRÜ Esports"],
    }
  },
 


  NaturE: {
    teammates: {
      Gengshta: ["Immortals"],
      jcStani:  ["Immortals"],
      ShoT_UP:  ["Immortals"],
      Kehmicals: ["Immortals"],
    }
  },
 
  Neto: {
    teammates: {
      "1kuzohh":  ["Kaos Latin Gamers"],
      andreewchi: ["Kaos Latin Gamers"],
      kraizzzz:   ["Kaos Latin Gamers"],
      Hideent:    ["Kaos Latin Gamers"],
    }
  },
 

 
  nolaN: {
    teammates: {
      RAINMAKER: ["Infinity Esports"],
      sickLy:    ["Infinity Esports"],
      Alejo:     ["Infinity Esports"],
      jfoeN:     ["Infinity Esports"],
    }
  },
 
  Nous: {
    teammates: {
      Daveys:   ["LazerKlan"],
      HellFull: ["LazerKlan"],
      Dobsha:   ["LazerKlan"],
      Caz:      ["LazerKlan"],
    }
  },

  Nozwerr: {
    teammates: {
      xand:   ["FURIA Esports"],
      qck:    ["FURIA Esports"],
      Txddy1: ["FURIA Esports"],
      Khalil: ["FURIA Esports"],
    }
  },

  ntk: {
    teammates: {
      BLD:    ["SLICK"],
      DiMAS:  ["SLICK"],
      Hastad: ["SLICK"],
      mNdS:   ["SLICK"],
    }
  },
 
  olzerr: {
    teammates: {
      delus1on: ["Stampede Gaming"],
      delz1k:   ["Stampede Gaming"],
      wait:     ["Stampede Gaming"],
      gessito:  ["Stampede Gaming"],
    }
  },
 
  pakal: {
    teammates: {
      ERMAAAK: ["TYPHOON"],
      GXN:     ["TYPHOON"],
      tala:    ["TYPHOON"],
      viNT:    ["TYPHOON"],
    }
  },
 


  POACH: {
    teammates: {
      ANDROID:  ["Andbox"],
      yay:      ["Andbox"],
      b0i:      ["Andbox"],
      seb:      ["Andbox"],
    }
  },
 
  Porky: {
    teammates: {
      Gwasa:   ["Kaizen Esports"],
      JDRelax: ["Kaizen Esports"],
      SkuLLL:  ["Kaizen Esports"],
      vapess:  ["Kaizen Esports"],
    }
  },

  prozin: {
    teammates: {
      DeNaro: ["Squad5"],
      fooX:   ["Squad5"],
      fra:    ["Squad5"],
      gaabx:  ["Squad5"],
    }
  },

  PureR: {
    teammates: {
      thwifo: ["XSET"],
      AYRIN:  ["XSET"],
      BcJ:    ["XSET"],
      Wedid: ["XSET"],
    }
  },

 
  qck: {
    teammates: {
      Khalil:   ["FURIA Esports"],
      xand:     ["FURIA Esports"],
      Txddy1:   ["FURIA Esports"],
      Nozwerr:  ["FURIA Esports"],
    }
  },
 
  RAINMAKER: {
    teammates: {
      sickLy: ["Infinity Esports"],
      Alejo:  ["Infinity Esports"],
      jfoeN:  ["Infinity Esports"],
      nolaN:  ["Infinity Esports"],
    }
  },
 
  Rb: {
    teammates: {
      stax:  ["Vision Strikers"],
      Zest:  ["Vision Strikers"],
      glow:  ["Vision Strikers"],
      k1Ng:  ["Vision Strikers"],
    }
  },
 
  REDGAR: {
    teammates: {
      Shao:     ["Gambit"],
      ANGE1:    ["Gambit"],
      SUYGETSU: ["Gambit"],
      nAts:     ["Gambit"],
      Sheydos:  ["Gambit"],
    }
  },

  rhamurti: {
    teammates: {
      BRNWOWZK1: ["DELIRAWOWZK"],
      FLUYR:     ["DELIRAWOWZK"],
      heat:      ["DELIRAWOWZK"],
      zam:       ["DELIRAWOWZK"],
    }
  },
 
  RieNs: {
    teammates: {
      benjyfishy: ["Team Heretics"],
      Boo:        ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      Wo0t:       ["Team Heretics"],
    }
  },
 
  rochet: {
    teammates: {
      Tio:    ["Furious Gaming"],
      Klauss: ["Furious Gaming"],
      debout: ["Furious Gaming"],
      D1E:    ["Furious Gaming"],
    }
  },

  rsT: {
    teammates: {
      Biscoit1n: ["Imperial Esports"],
      Evilkyk:   ["Imperial Esports"],
      tuyz:      ["Imperial Esports"],
      gustt1nha: ["Imperial Esports"],
    }
  },
 
  runneR: {
    teammates: {
      Kicks:  ["Team Vitality"],
      ceNder: ["Team Vitality"],
      Sayf:   ["Team Vitality"],
      trexx:  ["Team Vitality"],
    }
  },
 
  Ryufox: {
    teammates: {
      FroxeKzz: ["Pro Hub Gaming"],
      BREKK:    ["Pro Hub Gaming"],
      AsrocK:   ["Pro Hub Gaming"],
      xZowi:    ["Pro Hub Gaming"],
    }
  },

  RyZzi: {
    teammates: {
      Secret:   ["DAMWON Gaming"],
      Hate:     ["DAMWON Gaming"],
      t3xture:  ["DAMWON Gaming"],
      Eugene:   ["DAMWON Gaming"],
    }
  },

  s0m: {
    teammates: {
      daps:      ["NRG"],
      eeiu:      ["NRG"],
      Shanks:    ["NRG"],
      Infinite:  ["NRG"],
      // FNS:      ["NRG"],
      // crashies: ["NRG"],
      // Victor:   ["NRG"],
      // Marved:   ["NRG"],
      // Demon1:   ["NRG"],
      // Ethan:    ["NRG"],
    }
  },

  S1Mon: {
    teammates: {
      ZmjjKK:  ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      Smoggy:  ["EDward Gaming"],
    }
  },
 
  Saadhak: {
    teammates: {
      Sacy:     ["Team Vikings"],
      sutecas:  ["Team Vikings"],
      frz:      ["Team Vikings"],
      gtnziN:   ["Team Vikings"],
    }
  },
 
  Sacy: {
    teammates: {
      Saadhak: ["Team Vikings"],
      sutecas: ["Team Vikings"],
      frz:     ["Team Vikings"],
      gtnziN:  ["Team Vikings"],
    }
  },
 
  sancho: {
    teammates: {
      Maka:      ["Akave Esports"],
      duMb0:     ["Akave Esports"],
      Gonnak:    ["Akave Esports"],
      zhOMpiRAz: ["Akave Esports"],
    }
  },
 

 


  seb: {
    teammates: {
      ANDROID:  ["Andbox"],
      yay:      ["Andbox"],
      b0i:      ["Andbox"],
      POACH:    ["Andbox"],
    }
  },

  Secret: {
    teammates: {
      RyZzi:    ["DAMWON Gaming"],
      Hate:     ["DAMWON Gaming"],
      t3xture:  ["DAMWON Gaming"],
      Eugene:   ["DAMWON Gaming"],
    }
  },

  Sh0ckwave: {
    teammates: {
      Danielesflo: ["LDM Esports"],
      BEAST:       ["LDM Esports"],
      Clarenz:     ["LDM Esports"],
      Xander:      ["LDM Esports"],
    }
  },
 
  ShahZaM: {
    teammates: {
      sinatraa: ["Sentinels"],
      SicK:     ["Sentinels"],
      dapr:     ["Sentinels"],
      zombs:    ["Sentinels"],
      // TenZ:     ["Sentinels"],  
      // Zellsis:  ["Sentinels"],
      // Kanpeki:  ["Sentinels"],
      // shroud:   ["Sentinels"],
    }
  },

  Shanks: {
    teammates: {
      daps:      ["NRG"],
      eeiu:      ["NRG"],
      Infinite:  ["NRG"],
      s0m:       ["NRG"],
    }
  },



  Shawn: {
    teammates: {
      huynh:  ["Gen.G Esports"],
      gMd:    ["Gen.G Esports"],
      MkaeL:  ["Gen.G Esports"],
      koosta: ["Gen.G Esports"],
    }
  },


  ShoT_UP: {
    teammates: {
      Gengshta: ["Immortals"],
      jcStani:  ["Immortals"],
      NaturE:  ["Immortals"],
      Kehmicals: ["Immortals"],
    }
  },
 
 
  SicK: {
    teammates: {
      sinatraa: ["Sentinels"],
      ShahZaM:  ["Sentinels"],
      dapr:     ["Sentinels"],
      zombs:    ["Sentinels"],
      // TenZ:     ["Sentinels"],
      // Zellsis:  ["Sentinels"],
      // Kanpeki:  ["Sentinels"],
      // shroud:   ["Sentinels"],
    }
  },
 
  sickLy: {
    teammates: {
      RAINMAKER: ["Infinity Esports"],
      Alejo:     ["Infinity Esports"],
      jfoeN:     ["Infinity Esports"],
      nolaN:     ["Infinity Esports"],
    }
  },
 
  sinatraa: {
    teammates: {
      ShahZaM: ["Sentinels"],
      SicK:    ["Sentinels"],
      dapr:    ["Sentinels"],
      zombs:   ["Sentinels"],
    }
  },
 
  SkuLLL: {
    teammates: {
      Gwasa:   ["Kaizen Esports"],
      JDRelax: ["Kaizen Esports"],
      Porky:   ["Kaizen Esports"],
      vapess:  ["Kaizen Esports"],
    }
  },
 
  
 
  Smoggy: {
    teammates: {
      ZmjjKK:  ["EDward Gaming"],
      CHICHOO: ["EDward Gaming"],
      nobody:  ["EDward Gaming"],
      S1Mon:   ["EDward Gaming"],
    }
  },
 
 
  stax: {
    teammates: {
      Rb:    ["Vision Strikers"],
      Zest:  ["Vision Strikers"],
      glow:  ["Vision Strikers"],
      k1Ng:  ["Vision Strikers"],
    }
  },

  stellar: {
    teammates: {
      aproto: ["Luminosity Gaming"],
      thief:  ["Luminosity Gaming"],
      YaBoiDre: ["Luminosity Gaming"],
      moose:   ["Luminosity Gaming"],
    }
  },

  sutecas: {
    teammates: {
      frz:     ["Team Vikings"],
      Sacy:    ["Team Vikings"],
      gtnziN:  ["Team Vikings"],
      Saadhak: ["Team Vikings"],
    }
  },
 
  SUTHER: {
    teammates: {
      byrf:   ["Wydgers Argentina"],
      kenzit: ["Wydgers Argentina"],
      WKN:    ["Wydgers Argentina"],
      zakreN: ["Wydgers Argentina"],
    }
  },
 

  t3xture: {
    teammates: {
      // Meteor:     ["Gen  .G", "T1"],
      // Lakia:      ["Gen.G", "T1"],
      // Munchkin:   ["Gen.G"],
      // karon:      ["Gen.G"],
      // allow:      ["Gen.G"],
      // Zest:       ["Gen.G"],
      // BuZz:       ["T1"],
      // Carpe:      ["T1"],
      // Sayaplayer: ["T1"],
      RyZzi:  ["DAMWON Gaming"],
      Secret: ["DAMWON Gaming"],
      Hate:   ["DAMWON Gaming"],
      Eugene: ["DAMWON Gaming"],
    }
  },
 
  Tacolilla: {
    teammates: {
      adverso: ["Australs"],
      Closer:  ["Australs"],
      kiNgg:   ["Australs"],
      Melser:  ["Australs"],
    }
  },
 
  tala: {
    teammates: {
      pakal:   ["TYPHOON"],
      ERMAAAK: ["TYPHOON"],
      GXN:     ["TYPHOON"],
      viNT:    ["TYPHOON"],
    }
  },
 
 


  thief: {
    teammates: {
      aproto:   ["Luminosity Gaming"],
      stellar:  ["Luminosity Gaming"],
      YaBoiDre: ["Luminosity Gaming"],
      moose:    ["Luminosity Gaming"],
    }
  },

  thwifo: {
    teammates: {
      AYRIN: ["XSET"],
      BcJ:   ["XSET"],
      PureR: ["XSET"],
      Wedid: ["XSET"],
    }
  },

 
  Tio: {
    teammates: {
      Klauss: ["Furious Gaming"],
      rochet: ["Furious Gaming"],
      debout: ["Furious Gaming"],
      D1E:    ["Furious Gaming"],
    }
  },
 

 
 
  tuyz: {
    teammates: {
      Biscoit1n: ["Imperial Esports"],
      Evilkyk:   ["Imperial Esports"],
      rsT:       ["Imperial Esports"],
      gustt1nha: ["Imperial Esports"],
    }
  },

  Txddy1: {
    teammates: {
      xand:    ["FURIA Esports"],
      qck:     ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
    }
  },
 
  UNNSTO: {
    teammates: {
      l4cer:      ["9z Team"],
      Exterminia: ["9z Team"],
      Ar4n:       ["9z Team"],
      mizu:       ["9z Team"],
    }
  },

  v1xen: {
    teammates: {
      krain:     ["Vorax"],
      fzkk:      ["Vorax"],
      dragonite: ["Vorax"],
      delevingne: ["Vorax"],
    }
  },
 
  valyn: {
    teammates: {
      icy:    ["G2 Esports"],
      JonahP: ["G2 Esports"],
      leaf:   ["G2 Esports"],
      trent:  ["G2 Esports"],
    }
  },
 
  vapess: {
    teammates: {
      Gwasa:   ["Kaizen Esports"],
      JDRelax: ["Kaizen Esports"],
      SkuLLL:  ["Kaizen Esports"],
      Porky:   ["Kaizen Esports"],
    }
  },
 
 
  viNT: {
    teammates: {
      pakal:   ["TYPHOON"],
      ERMAAAK: ["TYPHOON"],
      GXN:     ["TYPHOON"],
      tala:    ["TYPHOON"],
    }
  },
 
  wait: {
    teammates: {
      olzerr:   ["Stampede Gaming"],
      delus1on: ["Stampede Gaming"],
      delz1k:   ["Stampede Gaming"],
      gessito:  ["Stampede Gaming"],
    }
  },

  Wedid: {
    teammates: {
      thwifo: ["XSET"],
      AYRIN:  ["XSET"],
      BcJ:    ["XSET"],
      PureR:  ["XSET"],
    }
  },

  WKN: {
    teammates: {
      byrf:   ["Wydgers Argentina"],
      kenzit: ["Wydgers Argentina"],
      SUTHER: ["Wydgers Argentina"],
      zakreN: ["Wydgers Argentina"],
    }
  },
 
  Wo0t: {
    teammates: {
      benjyfishy: ["Team Heretics"],
      Boo:        ["Team Heretics"],
      MiniBoo:    ["Team Heretics"],
      RieNs:      ["Team Heretics"],
    }
  },
 
  wondy: {
    teammates: {
      AdAdaption: ["Janus Esports"],
      Jahir:      ["Janus Esports"],
      Daiki:      ["Janus Esports"],
      ezznap:     ["Janus Esports"],
    }
  },

  xand: {
    teammates: {
      qck:     ["FURIA Esports"],
      Txddy1:  ["FURIA Esports"],
      Khalil:  ["FURIA Esports"],
      Nozwerr: ["FURIA Esports"],
    }
  },
 
  Xander: {
    teammates: {
      Danielesflo: ["LDM Esports"],
      BEAST:       ["LDM Esports"],
      Clarenz:     ["LDM Esports"],
      Sh0ckwave:   ["LDM Esports"],
    }
  },
 
 
  xZowi: {
    teammates: {
      FroxeKzz: ["Pro Hub Gaming"],
      BREKK:    ["Pro Hub Gaming"],
      AsrocK:   ["Pro Hub Gaming"],
      Ryufox:   ["Pro Hub Gaming"],
    }
  },

  YaBoiDre: {
    teammates: {
      aproto:   ["Luminosity Gaming"],
      thief:    ["Luminosity Gaming"],
      stellar:  ["Luminosity Gaming"],
      moose:    ["Luminosity Gaming"],
    }
  },
 
  yay: {
    teammates: {
      // FNS:      ["OpTic Gaming"],
      // crashies: ["OpTic Gaming"],
      // Victor:   ["OpTic Gaming"],
      // Marved:   ["OpTic Gaming"],
      ANDROID:  ["Andbox"],
      b0i:      ["Andbox"],
      seb:      ["Andbox"],
      POACH:    ["Andbox"],
    }
  },
 
  zakreN: {
    teammates: {
      byrf:     ["Wydgers Argentina"],
      kenzit:   ["Wydgers Argentina"],
      SUTHER:   ["Wydgers Argentina"],
      WKN:      ["Wydgers Argentina"],
    }
  },

  zam: {
    teammates: {
      BRNWOWZK1:  ["DELIRAWOWZK"],
      FLUYR:      ["DELIRAWOWZK"],
      heat:       ["DELIRAWOWZK"],
      rhamurti:   ["DELIRAWOWZK"],
    }
  },
 

 

 
  Zest: {
    teammates: {
      stax:     ["Vision Strikers"],
      glow:     ["Vision Strikers"],
      k1Ng:     ["Vision Strikers"],
      // BuZz:     ["DRX"],
      // MaKo:     ["DRX"],
      Rb:       ["Vision Strikers"],
      // Lakia:    ["DRX"],
      // Meteor:   ["Gen.G"],
      // t3xture:  ["Gen.G"],
      // karon:    ["Gen.G"],
      // Munchkin: ["Gen.G"],
      // allow:    ["Gen.G"],
    }
  },
 
  zhOMpiRAz: {
    teammates: {
      Maka:   ["Akave Esports"],
      duMb0:  ["Akave Esports"],
      Gonnak: ["Akave Esports"],
      sancho: ["Akave Esports"],
    }
  },
 

 
  zombs: {
    teammates: {
      sinatraa: ["Sentinels"],
      ShahZaM:  ["Sentinels"],
      SicK:     ["Sentinels"],
      dapr:     ["Sentinels"],
      // TenZ:     ["Sentinels"],
    }
  },
 
  Zorro: {
    teammates: {
      Aimless:    ["Ryze Gaming"],
      "8nfinity": ["Ryze Gaming"],
      iAndy:      ["Ryze Gaming"],
      Kay:        ["Ryze Gaming"],
    }
  },

  Hate: {
    teammates: {
      RyZzi:    ["DAMWON Gaming"],
      Secret:   ["DAMWON Gaming"],
      t3xture:  ["DAMWON Gaming"],
      Eugene:   ["DAMWON Gaming"],
    }
  },

  Eugene: {
    teammates: {
      RyZzi:    ["DAMWON Gaming"],
      Secret:   ["DAMWON Gaming"],
      Hate:     ["DAMWON Gaming"],
      t3xture:  ["DAMWON Gaming"],
    }
  },

  GODLIKE: {
    teammates: {
      TS:    ["TNL Esports"],
      exy:   ["TNL Esports"],
      Efina: ["TNL Esports"],
      eKo:   ["TNL Esports"],
    }
  },

  exy: {
    teammates: {
      TS:      ["TNL Esports"],
      GODLIKE: ["TNL Esports"],
      Efina:   ["TNL Esports"],
      eKo:     ["TNL Esports"],
    }
  },

  Efina: {
    teammates: {
      TS:      ["TNL Esports"],
      GODLIKE: ["TNL Esports"],
      exy:     ["TNL Esports"],
      eKo:     ["TNL Esports"],
    }
  },

  eKo: {
    teammates: {
      TS:      ["TNL Esports"],
      GODLIKE: ["TNL Esports"],
      exy:     ["TNL Esports"],
      Efina:   ["TNL Esports"],
    }
  },

  INPA: {
    teammates: {
      C1nder:  ["Hamtori ZunDeJinx"],
      zunba:   ["Hamtori ZunDeJinx"],
      Jinx:    ["Hamtori ZunDeJinx"],
      GodDead: ["Hamtori ZunDeJinx"],
    }
  },

  C1nder: {
    teammates: {
      INPA:    ["Hamtori ZunDeJinx"],
      zunba:   ["Hamtori ZunDeJinx"],
      Jinx:    ["Hamtori ZunDeJinx"],
      GodDead: ["Hamtori ZunDeJinx"],
    }
  },

  zunba: {
    teammates: {
      INPA:    ["Hamtori ZunDeJinx"],
      C1nder:  ["Hamtori ZunDeJinx"],
      Jinx:    ["Hamtori ZunDeJinx"],
      GodDead: ["Hamtori ZunDeJinx"],
    }
  },

  Jinx: {
    teammates: {
      INPA:    ["Hamtori ZunDeJinx"],
      C1nder:  ["Hamtori ZunDeJinx"],
      zunba:   ["Hamtori ZunDeJinx"],
      GodDead: ["Hamtori ZunDeJinx"],
    }
  },

  GodDead: {
    teammates: {
      INPA:   ["Hamtori ZunDeJinx"],
      C1nder: ["Hamtori ZunDeJinx"],
      zunba:  ["Hamtori ZunDeJinx"],
      Jinx:   ["Hamtori ZunDeJinx"],
    }
  },

  Harry: {
    teammates: {
      "10X": ["BearClaw Gaming"],
      GANA:  ["BearClaw Gaming"],
      iNTRO: ["BearClaw Gaming"],
      BuZz:  ["BearClaw Gaming"],
    }
  },

  "10X": {
    teammates: {
      Harry: ["BearClaw Gaming"],
      GANA:  ["BearClaw Gaming"],
      iNTRO: ["BearClaw Gaming"],
      BuZz:  ["BearClaw Gaming"],
    }
  },

  GANA: {
    teammates: {
      Harry: ["BearClaw Gaming"],
      "10X": ["BearClaw Gaming"],
      iNTRO: ["BearClaw Gaming"],
      BuZz:  ["BearClaw Gaming"],
    }
  },

  iNTRO: {
    teammates: {
      Harry: ["BearClaw Gaming"],
      "10X": ["BearClaw Gaming"],
      GANA:  ["BearClaw Gaming"],
      BuZz:  ["BearClaw Gaming"],
    }
  },

  iRdy: {
    teammates: {
      JinboongE: ["World Game Star"],
      HANN:      ["World Game Star"],
      Xpp:       ["World Game Star"],
      Has1ra14:  ["World Game Star"],
    }
  },

  JinboongE: {
    teammates: {
      iRdy:     ["World Game Star"],
      HANN:     ["World Game Star"],
      Xpp:      ["World Game Star"],
      Has1ra14: ["World Game Star"],
    }
  },

  HANN: {
    teammates: {
      iRdy:      ["World Game Star"],
      JinboongE: ["World Game Star"],
      Xpp:       ["World Game Star"],
      Has1ra14:  ["World Game Star"],
    }
  },

  Xpp: {
    teammates: {
      iRdy:      ["World Game Star"],
      JinboongE: ["World Game Star"],
      HANN:      ["World Game Star"],
      Has1ra14:  ["World Game Star"],
    }
  },

  Has1ra14: {
    teammates: {
      iRdy:      ["World Game Star"],
      JinboongE: ["World Game Star"],
      HANN:      ["World Game Star"],
      Xpp:       ["World Game Star"],
    }
  },

  glow: {
    teammates: {
      stax: ["Vision Strikers"],
      k1Ng: ["Vision Strikers"],
      Zest: ["Vision Strikers"],
      Rb:   ["Vision Strikers"],
    }
  },

  k1Ng: {
    teammates: {
      glow: ["Vision Strikers"],
      stax: ["Vision Strikers"],
      Zest: ["Vision Strikers"],
      Rb:   ["Vision Strikers"],
    }
  },

  REV1: {
    teammates: {
      Supply: ["GOMA"],
      Sunny:  ["GOMA"],
      Podz:   ["GOMA"],
      nEzz:   ["GOMA"],
    }
  },

  Supply: {
    teammates: {
      REV1:  ["GOMA"],
      Sunny: ["GOMA"],
      Podz:  ["GOMA"],
      nEzz:  ["GOMA"],
    }
  },

  Sunny: {
    teammates: {
      REV1:   ["GOMA"],
      Supply: ["GOMA"],
      Podz:   ["GOMA"],
      nEzz:   ["GOMA"],
    }
  },

  Podz: {
    teammates: {
      REV1:   ["GOMA"],
      Supply: ["GOMA"],
      Sunny:  ["GOMA"],
      nEzz:   ["GOMA"],
    }
  },

  nEzz: {
    teammates: {
      REV1:   ["GOMA"],
      Supply: ["GOMA"],
      Sunny:  ["GOMA"],
      Podz:   ["GOMA"],
    }
  },

  Sunday: {
    teammates: {
      TRY:      ["ZFGaming"],
      LuZ:      ["ZFGaming"],
      Sylvan:   ["ZFGaming"],
      "9room":  ["ZFGaming"],
    }
  },

  TRY: {
    teammates: {
      Sunday:   ["ZFGaming"],
      LuZ:      ["ZFGaming"],
      Sylvan:   ["ZFGaming"],
      "9room":  ["ZFGaming"],
    }
  },

  LuZ: {
    teammates: {
      Sunday:   ["ZFGaming"],
      TRY:      ["ZFGaming"],
      Sylvan:   ["ZFGaming"],
      "9room":  ["ZFGaming"],
    }
  },

  Sylvan: {
    teammates: {
      Sunday:   ["ZFGaming"],
      TRY:      ["ZFGaming"],
      LuZ:      ["ZFGaming"],
      "9room":  ["ZFGaming"],
    }
  },

  "9room": {
    teammates: {
      Sunday: ["ZFGaming"],
      TRY:    ["ZFGaming"],
      LuZ:    ["ZFGaming"],
      Sylvan: ["ZFGaming"],
    }
  },

  Rainy: {
    teammates: {
      Iyo:  ["CBT Gaming"],
      Milk: ["CBT Gaming"],
      Kant: ["CBT Gaming"],
      Tin:  ["CBT Gaming"],
    }
  },

  Iyo: {
    teammates: {
      Rainy: ["CBT Gaming"],
      Milk:  ["CBT Gaming"],
      Kant:  ["CBT Gaming"],
      Tin:   ["CBT Gaming"],
    }
  },

  Milk: {
    teammates: {
      Rainy: ["CBT Gaming"],
      Iyo:   ["CBT Gaming"],
      Kant:  ["CBT Gaming"],
      Tin:   ["CBT Gaming"],
    }
  },

  Kant: {
    teammates: {
      Rainy: ["CBT Gaming"],
      Iyo:   ["CBT Gaming"],
      Milk:  ["CBT Gaming"],
      Tin:   ["CBT Gaming"],
    }
  },

  Tin: {
    teammates: {
      Rainy: ["CBT Gaming"],
      Iyo:   ["CBT Gaming"],
      Milk:  ["CBT Gaming"],
      Kant:  ["CBT Gaming"],
    }
  },

  "兩倍的愛是愛愛": {
    teammates: {
      "虎尾科技大學夜間部槍男": ["色狗幫"],
      YHchen:       ["色狗幫"],
      ToydragonTTV: ["色狗幫"],
      PeterPan:     ["色狗幫"],
      NickPan:      ["色狗幫"],
    }
  },

  "虎尾科技大學夜間部槍男": {
    teammates: {
      "兩倍的愛是愛愛": ["色狗幫"],
      YHchen:       ["色狗幫"],
      ToydragonTTV: ["色狗幫"],
      PeterPan:     ["色狗幫"],
      NickPan:      ["色狗幫"],
    }
  },

  YHchen: {
    teammates: {
      "兩倍的愛是愛愛": ["色狗幫"],
      "虎尾科技大學夜間部槍男": ["色狗幫"],
      ToydragonTTV: ["色狗幫"],
      PeterPan:     ["色狗幫"],
      NickPan:      ["色狗幫"],
    }
  },

  ToydragonTTV: {
    teammates: {
      "兩倍的愛是愛愛": ["色狗幫"],
      "虎尾科技大學夜間部槍男": ["色狗幫"],
      YHchen:   ["色狗幫"],
      PeterPan: ["色狗幫"],
      NickPan:  ["色狗幫"],
    }
  },

  PeterPan: {
    teammates: {
      "兩倍的愛是愛愛": ["色狗幫"],
      "虎尾科技大學夜間部槍男": ["色狗幫"],
      YHchen:       ["色狗幫"],
      ToydragonTTV: ["色狗幫"],
      NickPan:      ["色狗幫"],
    }
  },

  NickPan: {
    teammates: {
      "兩倍的愛是愛愛": ["色狗幫"],
      "虎尾科技大學夜間部槍男": ["色狗幫"],
      YHchen:       ["色狗幫"],
      ToydragonTTV: ["色狗幫"],
      PeterPan:     ["色狗幫"],
    }
  },

  PPDBJ: {
    teammates: {
      W1nner:   ["Looking For Sponsor"],
      PAULTATO: ["Looking For Sponsor"],
      BerLIN:   ["Looking For Sponsor"],
      Ci:       ["Looking For Sponsor"],
      kkobx:    ["Looking For Sponsor"],
    }
  },

  W1nner: {
    teammates: {
      PPDBJ:    ["Looking For Sponsor"],
      PAULTATO: ["Looking For Sponsor"],
      BerLIN:   ["Looking For Sponsor"],
      Ci:       ["Looking For Sponsor"],
      kkobx:    ["Looking For Sponsor"],
    }
  },

  PAULTATO: {
    teammates: {
      PPDBJ:  ["Looking For Sponsor"],
      W1nner: ["Looking For Sponsor"],
      BerLIN: ["Looking For Sponsor"],
      Ci:     ["Looking For Sponsor"],
      kkobx:  ["Looking For Sponsor"],
    }
  },

  BerLIN: {
    teammates: {
      PPDBJ:    ["Looking For Sponsor"],
      W1nner:   ["Looking For Sponsor"],
      PAULTATO: ["Looking For Sponsor"],
      Ci:       ["Looking For Sponsor"],
      kkobx:    ["Looking For Sponsor"],
    }
  },

  Ci: {
    teammates: {
      PPDBJ:    ["Looking For Sponsor"],
      W1nner:   ["Looking For Sponsor"],
      PAULTATO: ["Looking For Sponsor"],
      BerLIN:   ["Looking For Sponsor"],
      kkobx:    ["Looking For Sponsor"],
    }
  },

  kkobx: {
    teammates: {
      PPDBJ:    ["Looking For Sponsor"],
      W1nner:   ["Looking For Sponsor"],
      PAULTATO: ["Looking For Sponsor"],
      BerLIN:   ["Looking For Sponsor"],
      Ci:       ["Looking For Sponsor"],
    }
  },

  Hukz: {
    teammates: {
      iamAlan:  ["Griffin E-Sports"],
      Ace:      ["Griffin E-Sports"],
      SiuFatBB: ["Griffin E-Sports"],
      Fung3:    ["Griffin E-Sports"],
    }
  },

  iamAlan: {
    teammates: {
      Hukz:     ["Griffin E-Sports"],
      Ace:      ["Griffin E-Sports"],
      SiuFatBB: ["Griffin E-Sports"],
      Fung3:    ["Griffin E-Sports"],
    }
  },

  Ace: {
    teammates: {
      Hukz:     ["Griffin E-Sports"],
      iamAlan:  ["Griffin E-Sports"],
      SiuFatBB: ["Griffin E-Sports"],
      Fung3:    ["Griffin E-Sports"],
    }
  },

  SiuFatBB: {
    teammates: {
      Hukz:    ["Griffin E-Sports"],
      iamAlan: ["Griffin E-Sports"],
      Ace:     ["Griffin E-Sports"],
      Fung3:   ["Griffin E-Sports"],
    }
  },

  Fung3: {
    teammates: {
      Hukz:     ["Griffin E-Sports"],
      iamAlan:  ["Griffin E-Sports"],
      Ace:      ["Griffin E-Sports"],
      SiuFatBB: ["Griffin E-Sports"],
    }
  },

  Paxton: {
    teammates: {
      Aclx:      ["LJG"],
      "0n1y":    ["LJG"],
      popoman4Q: ["LJG"],
      "艾德文":   ["LJG"],
    }
  },

  Aclx: {
    teammates: {
      Paxton:    ["LJG"],
      "0n1y":    ["LJG"],
      popoman4Q: ["LJG"],
      "艾德文":   ["LJG"],
    }
  },

  "0n1y": {
    teammates: {
      Paxton:    ["LJG"],
      Aclx:      ["LJG"],
      popoman4Q: ["LJG"],
      "艾德文":   ["LJG"],
    }
  },

  popoman4Q: {
    teammates: {
      Paxton:  ["LJG"],
      Aclx:    ["LJG"],
      "0n1y":  ["LJG"],
      "艾德文": ["LJG"],
    }
  },

  "艾德文": {
    teammates: {
      Paxton:    ["LJG"],
      Aclx:      ["LJG"],
      "0n1y":    ["LJG"],
      popoman4Q: ["LJG"],
    }
  },

  FLoydQ: {
    teammates: {
      Sing:        ["Only One Word"],
      Senhoachic:  ["Only One Word"],
      trinity:     ["Only One Word"],
      Akame:       ["Only One Word"],
      Christoffer: ["Only One Word"],
    }
  },

  Sing: {
    teammates: {
      FLoydQ:      ["Only One Word"],
      Senhoachic:  ["Only One Word"],
      trinity:     ["Only One Word"],
      Akame:       ["Only One Word"],
      Christoffer: ["Only One Word"],
    }
  },

  Senhoachic: {
    teammates: {
      FLoydQ:      ["Only One Word"],
      Sing:        ["Only One Word"],
      trinity:     ["Only One Word"],
      Akame:       ["Only One Word"],
      Christoffer: ["Only One Word"],
    }
  },

  trinity: {
    teammates: {
      FLoydQ:      ["Only One Word"],
      Sing:        ["Only One Word"],
      Senhoachic:  ["Only One Word"],
      Akame:       ["Only One Word"],
      Christoffer: ["Only One Word"],
    }
  },

  Akame: {
    teammates: {
      FLoydQ:      ["Only One Word"],
      Sing:        ["Only One Word"],
      Senhoachic:  ["Only One Word"],
      trinity:     ["Only One Word"],
      Christoffer: ["Only One Word"],
    }
  },

  Christoffer: {
    teammates: {
      FLoydQ:     ["Only One Word"],
      Sing:       ["Only One Word"],
      Senhoachic: ["Only One Word"],
      trinity:    ["Only One Word"],
      Akame:      ["Only One Word"],
    }
  },

  yzaK: {
    teammates: {
      Flotaqq:  ["Five Ace e-Sports"],
      YRSelect: ["Five Ace e-Sports"],
      Amenhola: ["Five Ace e-Sports"],
      Bea2:     ["Five Ace e-Sports"],
    }
  },

  Flotaqq: {
    teammates: {
      yzaK:     ["Five Ace e-Sports"],
      YRSelect: ["Five Ace e-Sports"],
      Amenhola: ["Five Ace e-Sports"],
      Bea2:     ["Five Ace e-Sports"],
    }
  },

  YRSelect: {
    teammates: {
      yzaK:     ["Five Ace e-Sports"],
      Flotaqq:  ["Five Ace e-Sports"],
      Amenhola: ["Five Ace e-Sports"],
      Bea2:     ["Five Ace e-Sports"],
    }
  },

  Amenhola: {
    teammates: {
      yzaK:     ["Five Ace e-Sports"],
      Flotaqq:  ["Five Ace e-Sports"],
      YRSelect: ["Five Ace e-Sports"],
      Bea2:     ["Five Ace e-Sports"],
    }
  },

  Bea2: {
    teammates: {
      yzaK:     ["Five Ace e-Sports"],
      Flotaqq:  ["Five Ace e-Sports"],
      YRSelect: ["Five Ace e-Sports"],
      Amenhola: ["Five Ace e-Sports"],
    }
  },

  Mao: {
    teammates: {
      ZoNE:      ["TRAITORS"],
      Martyz:    ["TRAITORS"],
      bibiwater: ["TRAITORS"],
      SecreTzzZ: ["TRAITORS"],
    }
  },

  ZoNE: {
    teammates: {
      Mao:       ["TRAITORS"],
      Martyz:    ["TRAITORS"],
      bibiwater: ["TRAITORS"],
      SecreTzzZ: ["TRAITORS"],
    }
  },

  Martyz: {
    teammates: {
      Mao:       ["TRAITORS"],
      ZoNE:      ["TRAITORS"],
      bibiwater: ["TRAITORS"],
      SecreTzzZ: ["TRAITORS"],
    }
  },

  bibiwater: {
    teammates: {
      Mao:       ["TRAITORS"],
      ZoNE:      ["TRAITORS"],
      Martyz:    ["TRAITORS"],
      SecreTzzZ: ["TRAITORS"],
    }
  },

  SecreTzzZ: {
    teammates: {
      Mao:       ["TRAITORS"],
      ZoNE:      ["TRAITORS"],
      Martyz:    ["TRAITORS"],
      bibiwater: ["TRAITORS"],
    }
  },

  Kairo: {
    teammates: {
      Liquid: ["Timing Monster Gaming"],
      MSR:    ["Timing Monster Gaming"],
      niqo:   ["Timing Monster Gaming"],
      pzkid:  ["Timing Monster Gaming"],
    }
  },

  Liquid: {
    teammates: {
      Kairo: ["Timing Monster Gaming"],
      MSR:   ["Timing Monster Gaming"],
      niqo:  ["Timing Monster Gaming"],
      pzkid: ["Timing Monster Gaming"],
    }
  },

  MSR: {
    teammates: {
      Kairo:  ["Timing Monster Gaming"],
      Liquid: ["Timing Monster Gaming"],
      niqo:   ["Timing Monster Gaming"],
      pzkid:  ["Timing Monster Gaming"],
    }
  },

  niqo: {
    teammates: {
      Kairo:  ["Timing Monster Gaming"],
      Liquid: ["Timing Monster Gaming"],
      MSR:    ["Timing Monster Gaming"],
      pzkid:  ["Timing Monster Gaming"],
    }
  },

  pzkid: {
    teammates: {
      Kairo:  ["Timing Monster Gaming"],
      Liquid: ["Timing Monster Gaming"],
      MSR:    ["Timing Monster Gaming"],
      niqo:   ["Timing Monster Gaming"],
    }
  },

  Egoist: {
    teammates: {
      falfalfal: ["Team SMG"],
      JdFaker:   ["Team SMG"],
      LEXY:      ["Team SMG"],
      ZesBeeW:   ["Team SMG"],
    }
  },

  falfalfal: {
    teammates: {
      Egoist:  ["Team SMG"],
      JdFaker: ["Team SMG"],
      LEXY:    ["Team SMG"],
      ZesBeeW: ["Team SMG"],
    }
  },

  JdFaker: {
    teammates: {
      Egoist:    ["Team SMG"],
      falfalfal: ["Team SMG"],
      LEXY:      ["Team SMG"],
      ZesBeeW:   ["Team SMG"],
    }
  },

  LEXY: {
    teammates: {
      Egoist:    ["Team SMG"],
      falfalfal: ["Team SMG"],
      JdFaker:   ["Team SMG"],
      ZesBeeW:   ["Team SMG"],
    }
  },

  ZesBeeW: {
    teammates: {
      Egoist:    ["Team SMG"],
      falfalfal: ["Team SMG"],
      JdFaker:   ["Team SMG"],
      LEXY:      ["Team SMG"],
    }
  },

  "1van": {
    teammates: {
      Justa: ["Kingsmen"],
      nomfu: ["Kingsmen"],
      Riza:  ["Kingsmen"],
      zeeq:  ["Kingsmen"],
    }
  },

  Justa: {
    teammates: {
      "1van": ["Kingsmen"],
      nomfu:  ["Kingsmen"],
      Riza:   ["Kingsmen"],
      zeeq:   ["Kingsmen"],
    }
  },

  nomfu: {
    teammates: {
      "1van": ["Kingsmen"],
      Justa:  ["Kingsmen"],
      Riza:   ["Kingsmen"],
      zeeq:   ["Kingsmen"],
    }
  },

  Riza: {
    teammates: {
      "1van": ["Kingsmen"],
      Justa:  ["Kingsmen"],
      nomfu:  ["Kingsmen"],
      zeeq:   ["Kingsmen"],
    }
  },

  zeeq: {
    teammates: {
      "1van": ["Kingsmen"],
      Justa:  ["Kingsmen"],
      nomfu:  ["Kingsmen"],
      Riza:   ["Kingsmen"],
    }
  },

  bbalto0o: {
    teammates: {
      SENNA:      ["Todak"],
      adukaaaa:   ["Todak"],
      subbey:     ["Todak"],
      theDoctorr: ["Todak"],
    }
  },

  SENNA: {
    teammates: {
      bbalto0o:   ["Todak"],
      adukaaaa:   ["Todak"],
      subbey:     ["Todak"],
      theDoctorr: ["Todak"],
    }
  },

  adukaaaa: {
    teammates: {
      bbalto0o:   ["Todak"],
      SENNA:      ["Todak"],
      subbey:     ["Todak"],
      theDoctorr: ["Todak"],
    }
  },

  subbey: {
    teammates: {
      bbalto0o:   ["Todak"],
      SENNA:      ["Todak"],
      adukaaaa:   ["Todak"],
      theDoctorr: ["Todak"],
    }
  },

  theDoctorr: {
    teammates: {
      bbalto0o: ["Todak"],
      SENNA:    ["Todak"],
      adukaaaa: ["Todak"],
      subbey:   ["Todak"],
    }
  },

  spyko: {
    teammates: {
      artn:      ["Reality Rift"],
      Freyr:     ["Reality Rift"],
      Jinggg:    ["Reality Rift"],
      Salvestro: ["Reality Rift"],
    }
  },

  artn: {
    teammates: {
      spyko:     ["Reality Rift"],
      Freyr:     ["Reality Rift"],
      Jinggg:    ["Reality Rift"],
      Salvestro: ["Reality Rift"],
    }
  },

  Freyr: {
    teammates: {
      spyko:     ["Reality Rift"],
      artn:      ["Reality Rift"],
      Jinggg:    ["Reality Rift"],
      Salvestro: ["Reality Rift"],
    }
  },

  Jinggg: {
    teammates: {
      spyko:     ["Reality Rift"],
      artn:      ["Reality Rift"],
      Freyr:     ["Reality Rift"],
      Salvestro: ["Reality Rift"],
    }
  },

  Salvestro: {
    teammates: {
      spyko:  ["Reality Rift"],
      artn:   ["Reality Rift"],
      Freyr:  ["Reality Rift"],
      Jinggg: ["Reality Rift"],
    }
  },

  DarknessOfLove: {
    teammates: {
      FrostyZ:        ["Looking For Org"],
      "Orange Panda": ["Looking For Org"],
      SAGE:           ["Looking For Org"],
      Teng:           ["Looking For Org"],
    }
  },

  FrostyZ: {
    teammates: {
      DarknessOfLove: ["Looking For Org"],
      "Orange Panda": ["Looking For Org"],
      SAGE:           ["Looking For Org"],
      Teng:           ["Looking For Org"],
    }
  },

  "Orange Panda": {
    teammates: {
      DarknessOfLove: ["Looking For Org"],
      FrostyZ:        ["Looking For Org"],
      SAGE:           ["Looking For Org"],
      Teng:           ["Looking For Org"],
    }
  },

  SAGE: {
    teammates: {
      DarknessOfLove: ["Looking For Org"],
      FrostyZ:        ["Looking For Org"],
      "Orange Panda": ["Looking For Org"],
      Teng:           ["Looking For Org"],
    }
  },

  Teng: {
    teammates: {
      DarknessOfLove: ["Looking For Org"],
      FrostyZ:        ["Looking For Org"],
      "Orange Panda": ["Looking For Org"],
      SAGE:           ["Looking For Org"],
    }
  },

  AiShou: {
    teammates: {
      Deryeon: ["XIAO"],
      Legend:  ["XIAO"],
      skyeSG:  ["XIAO"],
      ZenS:    ["XIAO"],
    }
  },

  Deryeon: {
    teammates: {
      AiShou: ["XIAO"],
      Legend: ["XIAO"],
      skyeSG: ["XIAO"],
      ZenS:   ["XIAO"],
    }
  },

  Legend: {
    teammates: {
      AiShou:  ["XIAO"],
      Deryeon: ["XIAO"],
      skyeSG:  ["XIAO"],
      ZenS:    ["XIAO"],
    }
  },

  skyeSG: {
    teammates: {
      AiShou:  ["XIAO"],
      Deryeon: ["XIAO"],
      Legend:  ["XIAO"],
      ZenS:    ["XIAO"],
    }
  },

  ZenS: {
    teammates: {
      AiShou:  ["XIAO"],
      Deryeon: ["XIAO"],
      Legend:  ["XIAO"],
      skyeSG:  ["XIAO"],
    }
  },

  bryce: {
    teammates: {
      Haise:    ["Louvre"],
      joshh:    ["Louvre"],
      RedKoh:   ["Louvre"],
      S1Eugene: ["Louvre"],
    }
  },

  Haise: {
    teammates: {
      bryce:    ["Louvre"],
      joshh:    ["Louvre"],
      RedKoh:   ["Louvre"],
      S1Eugene: ["Louvre"],
    }
  },

  joshh: {
    teammates: {
      bryce:    ["Louvre"],
      Haise:    ["Louvre"],
      RedKoh:   ["Louvre"],
      S1Eugene: ["Louvre"],
    }
  },

  RedKoh: {
    teammates: {
      bryce:    ["Louvre"],
      Haise:    ["Louvre"],
      joshh:    ["Louvre"],
      S1Eugene: ["Louvre"],
    }
  },

  S1Eugene: {
    teammates: {
      bryce:  ["Louvre"],
      Haise:  ["Louvre"],
      joshh:  ["Louvre"],
      RedKoh: ["Louvre"],
    }
  },

  TS: {
    teammates: {
      GODLIKE: ["TNL Esports"],
      exy:     ["TNL Esports"],
      Efina:   ["TNL Esports"],
      eKo:     ["TNL Esports"],
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
