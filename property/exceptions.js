// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Sep 6 - Sat Sep 19, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (587 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 556/556 community-joined, 920 total community employees)
// Pulled: 2026-09-25 (scheduled bi-weekly run; pays Fri Sep 25)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// Column map this run: c0=Employee, c1=ELY, c2=TDY, c3=LTE, c4=UNS, c5=ABS, c6=MP, c7=Totals — verified live before extract.
// Sum-check: joined totals (ely 335, tdy 176, lte 812, uns 1850, abs 186) vs. enterprise report totals (343, 178, 814, 2000, 187) — delta is non-community employees (31).
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "September 6, 2026", end: "September 19, 2026", payDate: "September 25, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  70, tdy:  32, lte:  206, uns:   59, abs:   8, creep:  276, empWithExc:  56, empWithCreep:  38, totalEmployees: 96, scheduleDataIssue: false,
    top: [
      { id: "1043", ely:  9, tdy:  1, lte:  8, uns:  0, abs:  0 },
      { id: "389", ely:  5, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "2290", ely:  7, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2335", ely:  7, tdy:  1, lte:  6, uns:  0, abs:  0 },
      { id: "1993", ely:  5, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "397", ely:  1, tdy:  9, lte: 11, uns:  0, abs:  0 },
      { id: "2205", ely:  4, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "2298", ely:  3, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "407", ely:  1, tdy:  4, lte:  9, uns:  1, abs:  0 },
      { id: "395", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 }
    ]},
  CCH: { ely:   3, tdy:   1, lte:    7, uns:  119, abs:  12, creep:   10, empWithExc:  22, empWithCreep:   2, totalEmployees: 115, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  3, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "300", ely:  0, tdy:  1, lte:  2, uns:  0, abs:  0 },
      { id: "324", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2395", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "271", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "320", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2355", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "313", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2293", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1450", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 }
    ]},
  GLN: { ely:  11, tdy:  14, lte:   52, uns:  109, abs:  30, creep:   63, empWithExc:  32, empWithCreep:  18, totalEmployees: 43, scheduleDataIssue: false,
    top: [
      { id: "2073", ely:  3, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "1736", ely:  2, tdy:  0, lte:  4, uns:  1, abs:  1 },
      { id: "2193", ely:  3, tdy:  0, lte:  3, uns:  1, abs:  2 },
      { id: "2255", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "2317", ely:  0, tdy:  2, lte:  5, uns:  1, abs:  0 },
      { id: "1746", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "680", ely:  0, tdy:  0, lte:  4, uns:  2, abs:  2 },
      { id: "2092", ely:  1, tdy:  1, lte:  3, uns:  2, abs:  4 },
      { id: "2390", ely:  0, tdy:  0, lte:  3, uns:  3, abs:  0 },
      { id: "2089", ely:  0, tdy:  2, lte:  3, uns:  2, abs:  2 }
    ]},
  AGB: { ely:  53, tdy:   6, lte:   64, uns:   78, abs:  17, creep:  117, empWithExc:  35, empWithCreep:  22, totalEmployees: 43, scheduleDataIssue: false,
    top: [
      { id: "94", ely:  5, tdy:  1, lte:  7, uns:  0, abs:  0 },
      { id: "1981", ely:  8, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "108", ely:  2, tdy:  2, lte:  7, uns:  0, abs:  0 },
      { id: "80", ely:  8, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "1872", ely:  1, tdy:  0, lte:  6, uns:  2, abs:  0 },
      { id: "1356", ely:  6, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "411", ely:  5, tdy:  1, lte:  2, uns:  2, abs:  2 },
      { id: "1408", ely:  4, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "74", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "87", ely:  0, tdy:  0, lte:  5, uns:  2, abs:  3 }
    ]},
  HIL: { ely:  40, tdy:   3, lte:  135, uns:   85, abs:   7, creep:  175, empWithExc:  58, empWithCreep:  47, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "2104", ely:  2, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "1401", ely:  3, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "1549", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "851", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "2098", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "2323", ely:  7, tdy:  0, lte:  0, uns:  0, abs:  1 },
      { id: "1406", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1972", ely:  1, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "2097", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  MAY: { ely:  16, tdy:  16, lte:   27, uns:  188, abs:  23, creep:   43, empWithExc:  43, empWithCreep:   8, totalEmployees: 76, scheduleDataIssue: false,
    top: [
      { id: "335", ely:  7, tdy:  0, lte:  6, uns:  1, abs:  3 },
      { id: "2318", ely:  3, tdy:  0, lte:  4, uns:  3, abs:  0 },
      { id: "354", ely:  0, tdy:  7, lte:  7, uns:  0, abs:  2 },
      { id: "340", ely:  0, tdy:  0, lte:  6, uns:  3, abs:  3 },
      { id: "1711", ely:  5, tdy:  0, lte:  0, uns:  3, abs:  4 },
      { id: "2094", ely:  0, tdy:  5, lte:  3, uns:  1, abs:  0 },
      { id: "1124", ely:  1, tdy:  1, lte:  0, uns:  3, abs:  5 },
      { id: "362", ely:  0, tdy:  2, lte:  1, uns:  2, abs:  0 },
      { id: "1532", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1485", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  MER: { ely:   8, tdy:  42, lte:   41, uns:  164, abs:  22, creep:   49, empWithExc:  47, empWithCreep:  17, totalEmployees: 54, scheduleDataIssue: false,
    top: [
      { id: "123", ely:  2, tdy:  1, lte:  5, uns:  1, abs:  0 },
      { id: "144", ely:  0, tdy:  1, lte:  6, uns:  3, abs:  0 },
      { id: "116", ely:  0, tdy:  3, lte:  6, uns:  0, abs:  0 },
      { id: "1033", ely:  1, tdy:  0, lte:  3, uns:  6, abs:  0 },
      { id: "2140", ely:  0, tdy:  1, lte:  4, uns:  1, abs:  0 },
      { id: "115", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "135", ely:  3, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1088", ely:  0, tdy:  4, lte:  2, uns:  2, abs:  2 },
      { id: "143", ely:  0, tdy:  5, lte:  2, uns:  1, abs:  0 },
      { id: "119", ely:  0, tdy:  3, lte:  2, uns:  0, abs:  0 }
    ]},
  PSL: { ely:  10, tdy:   0, lte:    4, uns:  367, abs:   2, creep:   14, empWithExc:  47, empWithCreep:   6, totalEmployees: 60, scheduleDataIssue: false,
    top: [
      { id: "1814", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1891", ely:  1, tdy:  0, lte:  1, uns:  1, abs:  0 },
      { id: "511", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "2478", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "2066", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1152", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 18, abs:  0 },
      { id: "1733", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  284, abs:   0, creep:    0, empWithExc:  51, empWithCreep:   0, totalEmployees: 81, scheduleDataIssue: true,
    top: [
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2296", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1243", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "955", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2447", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1641", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "437", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1527", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "432", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  VAL: { ely:  60, tdy:   0, lte:  127, uns:   78, abs:   2, creep:  187, empWithExc:  59, empWithCreep:  49, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "708", ely:  7, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1270", ely:  3, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "184", ely:  7, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "156", ely:  5, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "176", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "164", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1168", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1877", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2286", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1921", ely:  4, tdy:  0, lte:  2, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  49, tdy:  58, lte:  104, uns:  271, abs:  54, creep:  153, empWithExc:  66, empWithCreep:  26, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "250", ely: 10, tdy:  0, lte:  9, uns:  2, abs:  0 },
      { id: "467", ely:  7, tdy:  0, lte:  5, uns:  1, abs:  2 },
      { id: "224", ely:  5, tdy:  0, lte:  5, uns:  0, abs:  2 },
      { id: "221", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  1 },
      { id: "473", ely:  0, tdy:  6, lte:  9, uns:  1, abs:  0 },
      { id: "223", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "472", ely:  0, tdy: 10, lte:  9, uns:  0, abs:  0 },
      { id: "214", ely:  0, tdy:  9, lte:  8, uns:  0, abs:  0 },
      { id: "210", ely:  8, tdy:  1, lte:  0, uns:  0, abs:  0 },
      { id: "211", ely:  6, tdy:  3, lte:  0, uns:  0, abs:  0 }
    ]},
  WDL: { ely:  15, tdy:   4, lte:   45, uns:   48, abs:   9, creep:   60, empWithExc:  40, empWithCreep:  23, totalEmployees: 114, scheduleDataIssue: false,
    top: [
      { id: "503", ely:  7, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  2, lte:  8, uns:  0, abs:  0 },
      { id: "492", ely:  0, tdy:  1, lte:  7, uns:  1, abs:  0 },
      { id: "499", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2211", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2348", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "807", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "791", ely:  0, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "780", ely:  0, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "1985", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  1 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 335, tdy: 176, lte: 812, uns: 1850, abs: 186, creep: 1147, empWithExc: 556, empWithCreep: 256 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "Top creep this period: Baldwin Park 276, Valparaiso 187, Hills 175.",
  "Above the 50% creep-employee threshold: AGB = 22/43 (51%), HIL = 47/78 (60%), VAL = 49/80 (61%).",
  "Riverbend creep 0 / UNS 284 — schedules still not loaded in AOD; its exception data is not meaningful.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
