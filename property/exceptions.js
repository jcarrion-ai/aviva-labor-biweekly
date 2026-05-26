// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun May 3 - Sat May 16, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (619 employees with at least one exception)
//         + Employee List > Employee Details (employee → home location join via internal AOD rid)
// Pulled: 2026-05-26 (manual recovery run — missed Friday 2026-05-22)
//
// AOD column legend (Previous Period view):
//   ELY = Early in (clock-in creep)   TDY = Tardy in   LTE = Late out (clock-out drift)
//   UNS = Unscheduled punch (often missing schedule, not behavior)
//   ABS = Absent (scheduled, no punch)
//   MP  = Missed Punch — this period DID expose MP (totaled 10 across the enterprise);
//         retained in raw CSV but kept off the dashboard for consistency with prior runs.
//
// "Creep" = ELY + LTE counts. Confirm AOD operator threshold matches the agreed 7-min rule.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "May 3, 2026", end: "May 16, 2026", payDate: "May 22, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  78, tdy:  37, lte:  221, uns:   39, abs:   9, creep:  299, empWithExc:  69, empWithCreep:  53, totalEmployees: 102, scheduleDataIssue: false,
    top: [
      { id: "389", ely:  7, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1993", ely:  7, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "395", ely:  8, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "611", ely:  6, tdy:  1, lte:  8, uns:  0, abs:  0 },
      { id: "1341", ely:  3, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1789", ely:  2, tdy:  2, lte: 10, uns:  0, abs:  0 },
      { id: "1734", ely:  2, tdy:  2, lte:  9, uns:  0, abs:  0 },
      { id: "1865", ely:  7, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "1671", ely:  1, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "590", ely:  3, tdy:  0, lte:  7, uns:  0, abs:  0 }
    ]},
  CCH: { ely:  26, tdy:  59, lte:   59, uns:  111, abs:  20, creep:   85, empWithExc:  58, empWithCreep:  31, totalEmployees: 104, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  3, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "270", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "318", ely:  0, tdy:  9, lte:  5, uns:  0, abs:  0 },
      { id: "1291", ely:  4, tdy:  0, lte:  1, uns:  8, abs:  0 },
      { id: "1373", ely:  1, tdy:  2, lte:  4, uns:  0, abs:  0 },
      { id: "1576", ely:  0, tdy:  5, lte:  4, uns:  0, abs:  0 },
      { id: "328", ely:  0, tdy:  2, lte:  4, uns:  0, abs:  0 },
      { id: "481", ely:  0, tdy:  2, lte:  4, uns:  0, abs:  0 },
      { id: "271", ely:  3, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "305", ely:  4, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  GLN: { ely:  10, tdy:   2, lte:   16, uns:  118, abs:  10, creep:   26, empWithExc:  29, empWithCreep:   7, totalEmployees:  48, scheduleDataIssue: false,
    top: [
      { id: "683", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "829", ely:  3, tdy:  0, lte:  2, uns:  0, abs:  1 },
      { id: "2014", ely:  0, tdy:  0, lte:  4, uns:  6, abs:  1 },
      { id: "1746", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "686", ely:  2, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "698", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  2 },
      { id: "1934", ely:  2, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "2036", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1804", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  AGB: { ely:  41, tdy:   8, lte:   55, uns:   71, abs:  35, creep:   96, empWithExc:  31, empWithCreep:  20, totalEmployees:  39, scheduleDataIssue: false,
    top: [
      { id: "108", ely:  8, tdy:  1, lte:  3, uns:  0, abs:  0 },
      { id: "1356", ely:  6, tdy:  0, lte:  2, uns:  2, abs:  2 },
      { id: "74", ely:  1, tdy:  0, lte:  7, uns:  2, abs:  1 },
      { id: "111", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "80", ely:  5, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "2047", ely:  7, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "99", ely:  0, tdy:  2, lte:  6, uns:  3, abs:  2 },
      { id: "1765", ely:  5, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "1408", ely:  5, tdy:  0, lte:  1, uns:  1, abs:  0 },
      { id: "88", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  HIL: { ely:  55, tdy:  13, lte:  156, uns:   57, abs:   9, creep:  211, empWithExc:  60, empWithCreep:  51, totalEmployees:  73, scheduleDataIssue: false,
    top: [
      { id: "810", ely:  8, tdy:  0, lte:  8, uns:  1, abs:  0 },
      { id: "2104", ely:  3, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "638", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2167", ely:  1, tdy:  1, lte:  7, uns:  0, abs:  0 },
      { id: "1289", ely:  0, tdy:  0, lte:  7, uns:  2, abs:  0 },
      { id: "2029", ely:  4, tdy:  1, lte:  3, uns:  0, abs:  0 },
      { id: "2097", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1406", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1157", ely:  3, tdy:  0, lte:  3, uns:  0, abs:  0 }
    ]},
  MAY: { ely:  12, tdy:  15, lte:   54, uns:   82, abs:  30, creep:   66, empWithExc:  43, empWithCreep:  20, totalEmployees:  83, scheduleDataIssue: false,
    top: [
      { id: "340", ely:  0, tdy:  0, lte: 10, uns:  1, abs:  0 },
      { id: "489", ely:  3, tdy:  0, lte:  3, uns:  3, abs:  0 },
      { id: "1996", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  1 },
      { id: "354", ely:  3, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "2079", ely:  1, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "348", ely:  1, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "861", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2117", ely:  0, tdy:  3, lte:  3, uns:  2, abs:  0 },
      { id: "2094", ely:  0, tdy:  3, lte:  3, uns:  1, abs:  0 },
      { id: "1758", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  1 }
    ]},
  MER: { ely:  13, tdy:  50, lte:   50, uns:  129, abs:  30, creep:   63, empWithExc:  46, empWithCreep:  22, totalEmployees:  54, scheduleDataIssue: false,
    top: [
      { id: "2140", ely:  1, tdy:  1, lte:  6, uns:  1, abs:  0 },
      { id: "1101", ely:  0, tdy:  6, lte:  6, uns:  0, abs:  2 },
      { id: "116", ely:  0, tdy:  3, lte:  6, uns:  0, abs:  0 },
      { id: "1033", ely:  2, tdy:  0, lte:  4, uns:  1, abs:  2 },
      { id: "144", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2044", ely:  0, tdy:  5, lte:  4, uns:  1, abs:  0 },
      { id: "2028", ely:  3, tdy:  0, lte:  1, uns:  4, abs:  0 },
      { id: "143", ely:  0, tdy:  3, lte:  3, uns:  0, abs:  0 },
      { id: "123", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2141", ely:  0, tdy:  0, lte:  2, uns:  3, abs:  2 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  395, abs:   0, creep:    0, empWithExc:  47, empWithCreep:   0, totalEmployees:  55, scheduleDataIssue: true,
    top: [
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1151", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1055", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2105", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2023", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2000", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1755", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1782", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1913", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  299, abs:   0, creep:    0, empWithExc:  54, empWithCreep:   0, totalEmployees:  81, scheduleDataIssue: true,
    top: [
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1243", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "436", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1749", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "423", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1642", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "435", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  VAL: { ely:  29, tdy:   0, lte:   99, uns:   65, abs:   0, creep:  128, empWithExc:  47, empWithCreep:  37, totalEmployees:  81, scheduleDataIssue: false,
    top: [
      { id: "1270", ely:  6, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "164", ely:  2, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "176", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1707", ely:  5, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "153", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "156", ely:  3, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "833", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "184", ely:  4, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "183", ely:  0, tdy:  0, lte:  5, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  65, tdy:  52, lte:   97, uns:  265, abs:  42, creep:  162, empWithExc:  64, empWithCreep:  29, totalEmployees:  79, scheduleDataIssue: false,
    top: [
      { id: "250", ely: 10, tdy:  0, lte: 10, uns:  1, abs:  0 },
      { id: "224", ely:  8, tdy:  0, lte:  7, uns:  0, abs:  2 },
      { id: "467", ely:  8, tdy:  0, lte:  5, uns:  0, abs:  2 },
      { id: "214", ely:  0, tdy: 10, lte:  9, uns:  0, abs:  0 },
      { id: "221", ely:  0, tdy:  3, lte:  9, uns:  0, abs:  0 },
      { id: "223", ely:  1, tdy:  1, lte:  8, uns:  0, abs:  0 },
      { id: "243", ely:  9, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "210", ely:  9, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "473", ely:  0, tdy:  8, lte:  8, uns:  0, abs:  0 },
      { id: "211", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  WDL: { ely:  15, tdy:   2, lte:  111, uns:   79, abs:   3, creep:  126, empWithExc:  48, empWithCreep:  26, totalEmployees: 113, scheduleDataIssue: false,
    top: [
      { id: "2156", ely:  2, tdy:  0, lte:  9, uns:  1, abs:  0 },
      { id: "775", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "791", ely:  4, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "840", ely:  1, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "2159", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "807", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "780", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "745", ely:  1, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "1939", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1681", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = {
  ely: 344, tdy: 238, lte: 918, uns: 1822, abs: 188,
  creep: 1262,
  employees_with_creep: 296,
  employees_total: 619
};

window.AVIVA_EXCEPTIONS_NOTES = [
  "PSL and RVB: schedule data still missing in AOD — UNS-heavy, creep undetectable. Fix schedules first.",
  "HIL: highest creep rate — 51 of 73 employees (70%) with at least one creep event in 14 days.",
  "Enterprise creep events: 1262 (ELY 344 + LTE 918); 296 of 619 employees on the list had at least one."
];
