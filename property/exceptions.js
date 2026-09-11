// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Aug 23 - Sat Sep 5, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (600 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 600/600 joined)
// Pulled: 2026-09-11 (scheduled bi-weekly run)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// NOTE: MP column present this period (c1=ELY c2=TDY c3=LTE c4=UNS c5=ABS c6=MP) — column map re-verified live; MP excluded as always.
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "August 23, 2026", end: "September 5, 2026", payDate: "September 11, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  73, tdy:  23, lte:  180, uns:   55, abs:  34, creep:  253, empWithExc:  57, empWithCreep:  38, totalEmployees: 96, scheduleDataIssue: false,
    top: [
      { id: "1043", ely:  8, tdy:  0, lte:  5, uns:  1, abs:  1 },
      { id: "2335", ely: 10, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "1789", ely:  2, tdy:  3, lte: 10, uns:  0, abs:  0 },
      { id: "2290", ely:  7, tdy:  0, lte:  5, uns:  0, abs:  1 },
      { id: "1993", ely:  4, tdy:  0, lte:  7, uns:  2, abs:  3 },
      { id: "2399", ely:  3, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1774", ely:  4, tdy:  2, lte:  6, uns:  3, abs:  1 },
      { id: "2264", ely:  4, tdy:  1, lte:  6, uns:  1, abs:  0 },
      { id: "407", ely:  0, tdy:  2, lte:  9, uns:  0, abs:  1 },
      { id: "389", ely:  2, tdy:  0, lte:  7, uns:  1, abs:  2 }
    ]},
  CCH: { ely:  11, tdy:   7, lte:   22, uns:  134, abs:  19, creep:   33, empWithExc:  41, empWithCreep:  12, totalEmployees: 110, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  7, tdy:  0, lte:  7, uns:  0, abs:  1 },
      { id: "300", ely:  0, tdy:  2, lte:  7, uns:  1, abs:  0 },
      { id: "1998", ely:  0, tdy:  3, lte:  2, uns:  0, abs:  0 },
      { id: "2381", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "2392", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  4 },
      { id: "2356", ely:  1, tdy:  0, lte:  0, uns:  1, abs:  3 },
      { id: "1762", ely:  0, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "2204", ely:  0, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "1373", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "305", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   4, tdy:   6, lte:   20, uns:  136, abs:  20, creep:   24, empWithExc:  30, empWithCreep:   7, totalEmployees: 42, scheduleDataIssue: false,
    top: [
      { id: "1746", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2193", ely:  2, tdy:  0, lte:  3, uns:  3, abs:  3 },
      { id: "1736", ely:  2, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "681", ely:  0, tdy:  6, lte:  2, uns:  0, abs:  0 },
      { id: "2317", ely:  0, tdy:  0, lte:  2, uns:  4, abs:  1 },
      { id: "683", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "2442", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "698", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1264", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  AGB: { ely:  36, tdy:   9, lte:   77, uns:   73, abs:  20, creep:  113, empWithExc:  34, empWithCreep:  25, totalEmployees: 41, scheduleDataIssue: false,
    top: [
      { id: "74", ely:  2, tdy:  1, lte:  7, uns:  0, abs:  0 },
      { id: "108", ely:  2, tdy:  3, lte:  6, uns:  1, abs:  1 },
      { id: "1872", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "94", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "80", ely:  5, tdy:  1, lte:  2, uns:  0, abs:  0 },
      { id: "111", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1356", ely:  4, tdy:  1, lte:  2, uns:  2, abs:  2 },
      { id: "1981", ely:  3, tdy:  0, lte:  3, uns:  1, abs:  4 },
      { id: "83", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2203", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  1 }
    ]},
  HIL: { ely:  38, tdy:   4, lte:  113, uns:   75, abs:   4, creep:  151, empWithExc:  53, empWithCreep:  38, totalEmployees: 79, scheduleDataIssue: false,
    top: [
      { id: "1549", ely:  9, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1401", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "2367", ely:  0, tdy:  3, lte:  8, uns:  0, abs:  0 },
      { id: "2104", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2098", ely:  7, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "2323", ely:  5, tdy:  0, lte:  1, uns:  1, abs:  0 },
      { id: "810", ely:  1, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "1972", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "851", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2097", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  MAY: { ely:  11, tdy:   5, lte:   27, uns:  222, abs:   9, creep:   38, empWithExc:  43, empWithCreep:   5, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "335", ely:  8, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1124", ely:  3, tdy:  0, lte:  4, uns:  4, abs:  1 },
      { id: "354", ely:  0, tdy:  4, lte:  7, uns:  0, abs:  1 },
      { id: "340", ely:  0, tdy:  0, lte:  7, uns:  1, abs:  3 },
      { id: "489", ely:  0, tdy:  0, lte:  1, uns: 10, abs:  0 },
      { id: "2154", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2165", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1485", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2166", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1996", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  MER: { ely:  11, tdy:  39, lte:   33, uns:  163, abs:  38, creep:   44, empWithExc:  43, empWithCreep:  12, totalEmployees: 53, scheduleDataIssue: false,
    top: [
      { id: "116", ely:  1, tdy:  3, lte:  6, uns:  0, abs:  0 },
      { id: "2140", ely:  2, tdy:  1, lte:  4, uns:  1, abs:  0 },
      { id: "123", ely:  3, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "144", ely:  0, tdy:  4, lte:  5, uns:  1, abs:  0 },
      { id: "2132", ely:  2, tdy:  0, lte:  3, uns:  2, abs:  1 },
      { id: "143", ely:  1, tdy:  3, lte:  3, uns:  2, abs:  0 },
      { id: "115", ely:  0, tdy:  3, lte:  3, uns:  1, abs:  1 },
      { id: "1033", ely:  0, tdy:  1, lte:  3, uns:  3, abs:  0 },
      { id: "2028", ely:  1, tdy:  0, lte:  1, uns:  1, abs:  2 },
      { id: "129", ely:  0, tdy:  4, lte:  1, uns:  4, abs:  2 }
    ]},
  PSL: { ely:   1, tdy:   0, lte:    1, uns:  372, abs:   0, creep:    2, empWithExc:  42, empWithCreep:   2, totalEmployees: 55, scheduleDataIssue: true,
    top: [
      { id: "1152", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "525", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1733", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "523", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1647", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1116", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1784", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  284, abs:   0, creep:    0, empWithExc:  58, empWithCreep:   0, totalEmployees: 81, scheduleDataIssue: true,
    top: [
      { id: "2296", ely:  0, tdy:  0, lte:  0, uns: 14, abs:  0 },
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1828", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "424", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1440", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "432", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "435", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1243", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 }
    ]},
  VAL: { ely:  59, tdy:   3, lte:  136, uns:   86, abs:   8, creep:  195, empWithExc:  62, empWithCreep:  52, totalEmployees: 79, scheduleDataIssue: false,
    top: [
      { id: "184", ely:  6, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1270", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1168", ely:  2, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2262", ely:  3, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "156", ely:  5, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2286", ely:  1, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "164", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "176", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2375", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  74, tdy:  52, lte:  113, uns:  232, abs:  55, creep:  187, empWithExc:  68, empWithCreep:  38, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "250", ely: 10, tdy:  0, lte:  9, uns:  2, abs:  0 },
      { id: "467", ely:  8, tdy:  0, lte:  7, uns:  0, abs:  2 },
      { id: "224", ely:  7, tdy:  0, lte:  6, uns:  0, abs:  2 },
      { id: "216", ely:  0, tdy:  1, lte: 10, uns:  0, abs:  0 },
      { id: "214", ely:  0, tdy:  8, lte:  9, uns:  0, abs:  0 },
      { id: "221", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  2 },
      { id: "210", ely:  8, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "211", ely:  5, tdy:  1, lte:  2, uns:  3, abs:  0 },
      { id: "223", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "254", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  2 }
    ]},
  WDL: { ely:  22, tdy:   5, lte:   82, uns:   38, abs:   6, creep:  104, empWithExc:  37, empWithCreep:  27, totalEmployees: 118, scheduleDataIssue: false,
    top: [
      { id: "503", ely:  7, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  3, lte:  9, uns:  1, abs:  0 },
      { id: "492", ely:  2, tdy:  1, lte:  6, uns:  0, abs:  2 },
      { id: "1638", ely:  4, tdy:  0, lte:  3, uns:  2, abs:  1 },
      { id: "789", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "807", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "780", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "791", ely:  1, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "499", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2358", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 340, tdy: 153, lte: 804, uns: 1870, abs: 213, creep: 1144, empWithExc: 568, empWithCreep: 256 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "Top creep this period: Baldwin Park 253, Valparaiso 195, West Hartford 187.",
  "Above the 50% creep-employee threshold: AGB = 25/41 (61%), VAL = 52/79 (66%).",
  "PSL creep 2 / UNS 372 and RVB creep 0 / UNS 284 — schedules still not loaded in AOD; their exception data is not meaningful.",
  "MAY (creep 38, UNS 222) and GLN (creep 24, UNS 136) still show the partial no-schedule signature — confirm schedule coverage.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
