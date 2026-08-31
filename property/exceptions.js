// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Aug 9 - Sat Aug 22, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (587 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 587/587 joined)
// Pulled: 2026-08-31 (catch-up run for period ended Aug 22)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// NOTE: no MP column in this period's view (c0-c6, c6=Totals) — column map re-verified live before extraction.
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "August 9, 2026", end: "August 22, 2026", payDate: "August 28, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  85, tdy:  27, lte:  208, uns:   37, abs:   6, creep:  293, empWithExc:  56, empWithCreep:  41, totalEmployees: 98, scheduleDataIssue: false,
    top: [
      { id: "1043", ely: 10, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "1774", ely:  4, tdy:  2, lte: 10, uns:  1, abs:  0 },
      { id: "2335", ely: 10, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2290", ely:  8, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "395", ely:  5, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "389", ely:  3, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1993", ely:  6, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1789", ely:  2, tdy:  1, lte:  9, uns:  1, abs:  0 },
      { id: "2264", ely:  4, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "404", ely:  1, tdy:  1, lte:  9, uns:  0, abs:  0 }
    ]},
  CCH: { ely:  32, tdy:  54, lte:   86, uns:  125, abs:  27, creep:  118, empWithExc:  55, empWithCreep:  32, totalEmployees: 108, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  7, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "2268", ely:  2, tdy:  3, lte:  8, uns:  1, abs:  0 },
      { id: "2183", ely:  6, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "1373", ely:  1, tdy:  5, lte:  6, uns:  0, abs:  0 },
      { id: "2356", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "319", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2360", ely:  0, tdy:  1, lte:  6, uns:  0, abs:  1 },
      { id: "1105", ely:  0, tdy:  7, lte:  5, uns:  0, abs:  0 },
      { id: "1762", ely:  1, tdy:  3, lte:  4, uns:  0, abs:  0 },
      { id: "2184", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   7, tdy:   1, lte:   17, uns:  149, abs:   4, creep:   24, empWithExc:  29, empWithCreep:   6, totalEmployees: 45, scheduleDataIssue: false,
    top: [
      { id: "1736", ely:  4, tdy:  1, lte:  5, uns:  1, abs:  0 },
      { id: "2193", ely:  3, tdy:  0, lte:  4, uns:  2, abs:  2 },
      { id: "683", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "681", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1595", ely:  0, tdy:  0, lte:  1, uns:  2, abs:  0 },
      { id: "1332", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2036", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "698", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2194", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  AGB: { ely:  49, tdy:   1, lte:   70, uns:   68, abs:  11, creep:  119, empWithExc:  31, empWithCreep:  24, totalEmployees: 41, scheduleDataIssue: false,
    top: [
      { id: "74", ely:  5, tdy:  0, lte:  8, uns:  1, abs:  0 },
      { id: "94", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1981", ely:  7, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "1356", ely:  6, tdy:  0, lte:  2, uns:  3, abs:  2 },
      { id: "1408", ely:  4, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "1872", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2203", ely:  4, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "108", ely:  4, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "87", ely:  1, tdy:  0, lte:  4, uns:  3, abs:  2 },
      { id: "2331", ely:  3, tdy:  0, lte:  2, uns:  2, abs:  0 }
    ]},
  HIL: { ely:  35, tdy:   8, lte:  114, uns:   69, abs:  10, creep:  149, empWithExc:  58, empWithCreep:  45, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "2098", ely:  8, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "1401", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "810", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "638", ely:  1, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "2012", ely:  7, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "851", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  1 },
      { id: "2104", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  1 },
      { id: "1678", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "632", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  MAY: { ely:  17, tdy:   7, lte:   51, uns:  210, abs:  17, creep:   68, empWithExc:  47, empWithCreep:  14, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "1486", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1711", ely:  7, tdy:  0, lte:  2, uns:  2, abs:  3 },
      { id: "335", ely:  4, tdy:  0, lte:  5, uns:  1, abs:  2 },
      { id: "1124", ely:  4, tdy:  0, lte:  3, uns:  4, abs:  1 },
      { id: "340", ely:  0, tdy:  0, lte:  7, uns:  2, abs:  3 },
      { id: "354", ely:  0, tdy:  3, lte:  6, uns:  1, abs:  3 },
      { id: "363", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1307", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2003", ely:  0, tdy:  3, lte:  3, uns:  5, abs:  0 },
      { id: "1247", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  0 }
    ]},
  MER: { ely:   9, tdy:  43, lte:   33, uns:  135, abs:  37, creep:   42, empWithExc:  42, empWithCreep:  14, totalEmployees: 54, scheduleDataIssue: false,
    top: [
      { id: "144", ely:  2, tdy:  0, lte:  6, uns:  4, abs:  0 },
      { id: "123", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "2140", ely:  2, tdy:  2, lte:  4, uns:  2, abs:  0 },
      { id: "116", ely:  0, tdy:  1, lte:  5, uns:  0, abs:  1 },
      { id: "115", ely:  0, tdy:  3, lte:  4, uns:  0, abs:  0 },
      { id: "135", ely:  3, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "124", ely:  0, tdy:  2, lte:  1, uns:  5, abs:  1 },
      { id: "112", ely:  1, tdy:  4, lte:  0, uns:  2, abs:  0 },
      { id: "421", ely:  0, tdy:  3, lte:  1, uns:  0, abs:  1 },
      { id: "2028", ely:  1, tdy:  0, lte:  0, uns:  1, abs:  3 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  361, abs:   0, creep:    0, empWithExc:  39, empWithCreep:   0, totalEmployees: 55, scheduleDataIssue: true,
    top: [
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "994", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "523", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1055", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2247", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2105", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2023", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2277", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    1, uns:  288, abs:   0, creep:    1, empWithExc:  55, empWithCreep:   1, totalEmployees: 83, scheduleDataIssue: true,
    top: [
      { id: "454", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "2296", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "437", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "955", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "423", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1642", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "435", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  VAL: { ely:  41, tdy:   2, lte:  127, uns:   71, abs:   2, creep:  168, empWithExc:  54, empWithCreep:  42, totalEmployees: 81, scheduleDataIssue: false,
    top: [
      { id: "1812", ely:  7, tdy:  0, lte:  9, uns:  1, abs:  1 },
      { id: "1270", ely:  6, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "184", ely:  5, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "164", ely:  1, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1707", ely:  4, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "1168", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "1877", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2286", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1335", ely:  1, tdy:  0, lte:  4, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  81, tdy:  41, lte:  133, uns:  175, abs:  72, creep:  214, empWithExc:  65, empWithCreep:  36, totalEmployees: 81, scheduleDataIssue: false,
    top: [
      { id: "250", ely:  8, tdy:  0, lte:  7, uns:  2, abs:  0 },
      { id: "467", ely:  8, tdy:  0, lte:  6, uns:  0, abs:  2 },
      { id: "224", ely:  7, tdy:  0, lte:  7, uns:  0, abs:  2 },
      { id: "246", ely:  8, tdy:  0, lte:  4, uns:  1, abs:  0 },
      { id: "243", ely: 10, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "223", ely:  0, tdy:  0, lte: 10, uns:  1, abs:  0 },
      { id: "221", ely:  0, tdy:  1, lte:  9, uns:  0, abs:  2 },
      { id: "214", ely:  0, tdy:  6, lte:  8, uns:  1, abs:  0 },
      { id: "473", ely:  0, tdy:  5, lte:  8, uns:  0, abs:  0 },
      { id: "2144", ely:  7, tdy:  0, lte:  1, uns:  1, abs:  3 }
    ]},
  WDL: { ely:  21, tdy:   6, lte:   54, uns:   41, abs:   1, creep:   75, empWithExc:  31, empWithCreep:  21, totalEmployees: 117, scheduleDataIssue: false,
    top: [
      { id: "503", ely:  7, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  3, lte:  7, uns:  0, abs:  0 },
      { id: "1638", ely:  5, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "492", ely:  0, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "2359", ely:  5, tdy:  0, lte:  0, uns:  5, abs:  0 },
      { id: "1768", ely:  0, tdy:  3, lte:  4, uns:  0, abs:  0 },
      { id: "1535", ely:  3, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "789", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "499", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2156", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 377, tdy: 190, lte: 894, uns: 1729, abs: 187, creep: 1271, empWithExc: 562, empWithCreep: 276 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "ABP again leads on creep (293 = 85 early-in + 208 late-out across 41 employees) — identical total to last period.",
  "AGB creep employees = 24/41 (59%), HIL = 45/80 (56%) and VAL = 42/81 (52%) — all above the 50% pattern threshold this period.",
  "PSL is back to zero creep with UNS 361, and RVB shows creep 1 with UNS 288 — schedules still not loaded in AOD; their exception data is not meaningful.",
  "MAY (creep 68, UNS 210) and GLN (creep 24, UNS 149) still show the partial no-schedule signature — worth confirming schedule coverage at these two.",
  "AWH ABS spiked to 72 (vs 21 last period) — worth a look at attendance data quality there.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
