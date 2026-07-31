// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Jul 12 - Sat Jul 25, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (565 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 565/565 joined)
// Pulled: 2026-07-31 (scheduled bi-weekly run)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// NOTE: no MP column in this period's view (c0-c6, c6=Totals) — column map re-verified live before extraction.
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "July 12, 2026", end: "July 25, 2026", payDate: "July 31, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  82, tdy:  31, lte:  219, uns:   47, abs:   6, creep:  301, empWithExc:  58, empWithCreep:  38, totalEmployees: 101, scheduleDataIssue: false,
    top: [
      { id: "1993", ely: 10, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "2290", ely:  9, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "395", ely:  8, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1043", ely:  8, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2300", ely:  6, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2264", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1391", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "407", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "389", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "396", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 }
    ]},
  CCH: { ely:  39, tdy:  60, lte:   82, uns:   56, abs:  15, creep:  121, empWithExc:  43, empWithCreep:  27, totalEmployees: 102, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  8, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "2204", ely:  0, tdy:  4, lte:  9, uns:  0, abs:  0 },
      { id: "2184", ely:  4, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "300", ely:  1, tdy:  5, lte:  7, uns:  0, abs:  0 },
      { id: "319", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1105", ely:  0, tdy:  7, lte:  6, uns:  0, abs:  0 },
      { id: "2183", ely:  4, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1373", ely:  3, tdy:  3, lte:  2, uns:  0, abs:  0 },
      { id: "305", ely:  4, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "270", ely:  5, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   2, tdy:   0, lte:    4, uns:  162, abs:   0, creep:    6, empWithExc:  28, empWithCreep:   4, totalEmployees: 42, scheduleDataIssue: false,
    top: [
      { id: "1332", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "683", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1746", ely:  1, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "1466", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2177", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "698", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2194", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2036", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1823", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  AGB: { ely:  34, tdy:   9, lte:   50, uns:   99, abs:  18, creep:   84, empWithExc:  32, empWithCreep:  21, totalEmployees: 40, scheduleDataIssue: false,
    top: [
      { id: "74", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "80", ely:  9, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "111", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1872", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "108", ely:  5, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1356", ely:  4, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "1765", ely:  3, tdy:  0, lte:  2, uns:  2, abs:  2 },
      { id: "88", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "1408", ely:  4, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "99", ely:  0, tdy:  2, lte:  3, uns:  2, abs:  2 }
    ]},
  HIL: { ely:  26, tdy:   2, lte:   99, uns:   50, abs:   8, creep:  125, empWithExc:  43, empWithCreep:  31, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "810", ely:  3, tdy:  1, lte:  8, uns:  0, abs:  0 },
      { id: "2104", ely:  3, tdy:  0, lte:  8, uns:  1, abs:  0 },
      { id: "2323", ely:  8, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1406", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "1855", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "2029", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "1678", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2098", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "638", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  MAY: { ely:   6, tdy:   0, lte:   10, uns:  177, abs:  13, creep:   16, empWithExc:  35, empWithCreep:   3, totalEmployees: 70, scheduleDataIssue: false,
    top: [
      { id: "340", ely:  0, tdy:  0, lte:  7, uns:  2, abs:  3 },
      { id: "1711", ely:  6, tdy:  0, lte:  0, uns:  3, abs:  3 },
      { id: "354", ely:  0, tdy:  0, lte:  3, uns:  2, abs:  1 },
      { id: "2346", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2166", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2154", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "348", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2313", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "343", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 },
      { id: "1624", ely:  0, tdy:  0, lte:  0, uns:  7, abs:  0 }
    ]},
  MER: { ely:   6, tdy:  37, lte:   38, uns:  137, abs:  34, creep:   44, empWithExc:  48, empWithCreep:  18, totalEmployees: 52, scheduleDataIssue: false,
    top: [
      { id: "116", ely:  0, tdy:  3, lte:  6, uns:  0, abs:  0 },
      { id: "2140", ely:  1, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "144", ely:  1, tdy:  2, lte:  3, uns:  1, abs:  0 },
      { id: "119", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2284", ely:  0, tdy:  3, lte:  3, uns:  1, abs:  1 },
      { id: "115", ely:  0, tdy:  2, lte:  3, uns:  0, abs:  0 },
      { id: "138", ely:  1, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "2028", ely:  0, tdy:  0, lte:  2, uns:  2, abs:  2 },
      { id: "2141", ely:  0, tdy:  1, lte:  2, uns:  2, abs:  1 },
      { id: "1966", ely:  0, tdy:  0, lte:  2, uns:  2, abs:  1 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  400, abs:   0, creep:    0, empWithExc:  46, empWithCreep:   0, totalEmployees: 51, scheduleDataIssue: true,
    top: [
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "521", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1899", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2247", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2105", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "854", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2277", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1755", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  334, abs:   2, creep:    0, empWithExc:  55, empWithCreep:   0, totalEmployees: 79, scheduleDataIssue: true,
    top: [
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2296", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "955", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2278", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1749", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "423", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1828", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1642", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  VAL: { ely:  64, tdy:   0, lte:  154, uns:   73, abs:   0, creep:  218, empWithExc:  53, empWithCreep:  41, totalEmployees: 82, scheduleDataIssue: false,
    top: [
      { id: "1270", ely:  5, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "184", ely:  6, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "164", ely:  2, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "713", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "156", ely:  4, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "1812", ely:  9, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "2286", ely:  1, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1707", ely:  4, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2262", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  83, tdy:  54, lte:  118, uns:  212, abs:  62, creep:  201, empWithExc:  70, empWithCreep:  35, totalEmployees: 82, scheduleDataIssue: false,
    top: [
      { id: "250", ely: 10, tdy:  0, lte: 10, uns:  3, abs:  0 },
      { id: "224", ely: 10, tdy:  0, lte:  9, uns:  0, abs:  2 },
      { id: "467", ely:  7, tdy:  0, lte:  4, uns:  0, abs:  1 },
      { id: "474", ely:  7, tdy:  0, lte:  3, uns:  0, abs:  1 },
      { id: "243", ely: 10, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "214", ely:  0, tdy:  7, lte:  9, uns:  2, abs:  0 },
      { id: "472", ely:  0, tdy:  8, lte:  9, uns:  0, abs:  0 },
      { id: "1433", ely:  7, tdy:  0, lte:  2, uns:  1, abs:  1 },
      { id: "221", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  2 },
      { id: "2144", ely:  7, tdy:  0, lte:  0, uns:  2, abs:  3 }
    ]},
  WDL: { ely:  14, tdy:   3, lte:   26, uns:   38, abs:   3, creep:   40, empWithExc:  24, empWithCreep:  10, totalEmployees: 114, scheduleDataIssue: false,
    top: [
      { id: "1638", ely:  7, tdy:  0, lte:  2, uns:  0, abs:  2 },
      { id: "763", ely:  0, tdy:  3, lte:  8, uns:  0, abs:  0 },
      { id: "492", ely:  0, tdy:  0, lte:  8, uns:  1, abs:  0 },
      { id: "503", ely:  4, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1535", ely:  2, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1985", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  1 },
      { id: "1710", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "2190", ely:  0, tdy:  0, lte:  1, uns:  1, abs:  0 },
      { id: "771", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "754", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 356, tdy: 196, lte: 800, uns: 1785, abs: 161, creep: 1156, empWithExc: 535, empWithCreep: 228 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "ABP again has the most creep events this period (301 = 82 early-in + 219 late-out across 38 employees).",
  "AGB creep employees = 21/40 (52% of headcount) and VAL = 41/82 (50%) — both at or above the 50% pattern threshold this period. HIL = 31/78 (40%), below it.",
  "PSL and RVB still show zero creep / zero tardy with very high unscheduled punches (400 and 334) — schedules are still not loaded in AOD for these properties, so their exception data is not meaningful.",
  "MAY (creep 16, UNS 177) and GLN (creep 6, UNS 162) still show the partial no-schedule signature — worth confirming schedule coverage at these two.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
