// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Apr 5 - Sat Apr 18, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (612 employees with at least one exception)
//         + Employee List > Employee Details (employee → home location join via internal AOD rid)
// Pulled: 2026-04-28 (test run override of bi-weekly cadence)
//
// AOD column legend (Previous Period view):
//   ELY = Early in (clocked in earlier than scheduled) — clock-in creep
//   TDY = Tardy in (clocked in later than scheduled)
//   LTE = Late out (clocked out later than scheduled) — clock-out drift
//   UNS = Unscheduled punch — worked outside any schedule (likely missing schedule, NOT a behavior issue)
//   ABS = Absent — scheduled but no punch
//   c6  = Totals row (NOT MP — Missed Punch is only shown for the Current Period view)
//
// AUDIT NOTE — bug fixed in this version: the prior v0 of this file misread the Previous-Period
// "Totals" column as "Missed Punches", inflating the MP count to 3,905 (which is actually the
// SUM of ELY+TDY+LTE+UNS+ABS, not a separate MP figure). MP data is not available for closed
// pay periods in this report. The dashboard no longer shows an MP card.
//
// "Creep" per current threshold = ELY + LTE counts. AOD's exception threshold is operator-
// configured — confirm it matches the agreed 7-minute rule with whoever administers AOD.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "Apr 5, 2026", end: "Apr 18, 2026", payDate: "Apr 24, 2026", days: 14 };

// Per-community exception data, attributed via Employee Details (Home Location).
// Counts are absolute event counts for the 14-day period.
window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely: 69, tdy: 39, lte: 221, uns:  77, abs:  6, creep: 290, empWithExc: 63, empWithCreep: 39, totalEmployees:  96, scheduleDataIssue: false,
    top: [
      { id: "1993", ely: 8, tdy: 0, lte: 10, uns: 0, abs: 0 },
      { id: "395",  ely: 8, tdy: 0, lte:  7, uns: 0, abs: 0 },
      { id: "389",  ely: 4, tdy: 0, lte: 10, uns: 0, abs: 0 },
      { id: "407",  ely: 2, tdy: 1, lte: 10, uns: 0, abs: 0 },
      { id: "410",  ely: 3, tdy: 3, lte:  8, uns: 0, abs: 0 },
      { id: "1734", ely: 4, tdy: 1, lte:  7, uns: 1, abs: 0 },
      { id: "1341", ely: 3, tdy: 0, lte:  8, uns: 1, abs: 0 },
      { id: "1043", ely: 7, tdy: 0, lte:  4, uns: 0, abs: 0 },
      { id: "610",  ely: 1, tdy: 2, lte:  9, uns: 1, abs: 0 },
      { id: "846",  ely: 0, tdy: 1, lte: 10, uns: 1, abs: 0 }
    ]},
  CCH: { ely:  7, tdy:  3, lte:  15, uns: 310, abs: 15, creep:  22, empWithExc: 57, empWithCreep:  8, totalEmployees: 101, scheduleDataIssue: false,
    top: [
      { id: "285",  ely: 1, tdy: 0, lte:  9, uns:  0, abs: 0 },
      { id: "313",  ely: 3, tdy: 0, lte:  1, uns:  0, abs: 0 },
      { id: "320",  ely: 0, tdy: 2, lte:  2, uns:  0, abs: 0 },
      { id: "294",  ely: 0, tdy: 0, lte:  2, uns:  0, abs: 0 },
      { id: "298",  ely: 0, tdy: 0, lte:  1, uns:  3, abs: 0 },
      { id: "271",  ely: 1, tdy: 0, lte:  0, uns:  2, abs: 0 },
      { id: "287",  ely: 1, tdy: 0, lte:  0, uns:  0, abs: 0 },
      { id: "907",  ely: 1, tdy: 0, lte:  0, uns:  0, abs: 0 },
      { id: "1760", ely: 0, tdy: 0, lte:  0, uns: 12, abs: 0 },
      { id: "1291", ely: 0, tdy: 0, lte:  0, uns: 12, abs: 0 }
    ]},
  GLN: { ely:  4, tdy:  5, lte:  10, uns: 158, abs:  0, creep:  14, empWithExc: 31, empWithCreep:  7, totalEmployees:  49, scheduleDataIssue: false,
    top: [
      { id: "1746", ely: 2, tdy: 1, lte: 3, uns:  0, abs: 0 },
      { id: "829",  ely: 0, tdy: 3, lte: 3, uns:  0, abs: 0 },
      { id: "683",  ely: 1, tdy: 0, lte: 1, uns:  5, abs: 0 },
      { id: "1934", ely: 1, tdy: 0, lte: 0, uns:  5, abs: 0 },
      { id: "686",  ely: 0, tdy: 1, lte: 1, uns:  0, abs: 0 },
      { id: "1332", ely: 0, tdy: 0, lte: 1, uns:  0, abs: 0 },
      { id: "1361", ely: 0, tdy: 0, lte: 1, uns:  0, abs: 0 },
      { id: "1778", ely: 0, tdy: 0, lte: 0, uns: 12, abs: 0 },
      { id: "2036", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 },
      { id: "1823", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 }
    ]},
  AGB: { ely: 39, tdy: 12, lte:  56, uns:  95, abs: 28, creep:  95, empWithExc: 29, empWithCreep: 15, totalEmployees:  37, scheduleDataIssue: false,
    top: [
      { id: "108",  ely:  8, tdy: 0, lte: 6, uns: 0, abs: 0 },
      { id: "80",   ely: 10, tdy: 0, lte: 4, uns: 0, abs: 0 },
      { id: "74",   ely:  3, tdy: 0, lte: 8, uns: 3, abs: 0 },
      { id: "1161", ely:  2, tdy: 1, lte: 8, uns: 1, abs: 0 },
      { id: "94",   ely:  4, tdy: 2, lte: 5, uns: 1, abs: 3 },
      { id: "1356", ely:  5, tdy: 0, lte: 2, uns: 2, abs: 2 },
      { id: "1408", ely:  5, tdy: 0, lte: 2, uns: 0, abs: 1 },
      { id: "99",   ely:  1, tdy: 0, lte: 4, uns: 1, abs: 1 },
      { id: "95",   ely:  1, tdy: 1, lte: 3, uns: 0, abs: 0 },
      { id: "78",   ely:  0, tdy: 8, lte: 3, uns: 3, abs: 1 }
    ]},
  HIL: { ely: 50, tdy: 37, lte: 149, uns:  66, abs: 11, creep: 199, empWithExc: 58, empWithCreep: 49, totalEmployees:  72, scheduleDataIssue: false,
    top: [
      { id: "1157", ely: 8, tdy: 0, lte: 8, uns: 1, abs: 0 },
      { id: "2098", ely: 6, tdy: 1, lte: 4, uns: 0, abs: 0 },
      { id: "810",  ely: 2, tdy: 0, lte: 8, uns: 1, abs: 0 },
      { id: "638",  ely: 3, tdy: 0, lte: 6, uns: 0, abs: 0 },
      { id: "2104", ely: 1, tdy: 1, lte: 7, uns: 1, abs: 0 },
      { id: "2017", ely: 6, tdy: 0, lte: 2, uns: 0, abs: 0 },
      { id: "2029", ely: 3, tdy: 1, lte: 4, uns: 1, abs: 1 },
      { id: "1276", ely: 1, tdy: 2, lte: 6, uns: 0, abs: 0 },
      { id: "813",  ely: 0, tdy: 2, lte: 6, uns: 1, abs: 0 },
      { id: "1406", ely: 0, tdy: 0, lte: 6, uns: 0, abs: 0 }
    ]},
  MAY: { ely: 26, tdy: 13, lte:  43, uns:  90, abs: 26, creep:  69, empWithExc: 39, empWithCreep: 24, totalEmployees:  83, scheduleDataIssue: false,
    top: [
      { id: "340",  ely: 0, tdy: 1, lte: 6, uns: 3, abs: 0 },
      { id: "1009", ely: 3, tdy: 0, lte: 3, uns: 2, abs: 1 },
      { id: "1570", ely: 5, tdy: 0, lte: 1, uns: 1, abs: 1 },
      { id: "354",  ely: 0, tdy: 5, lte: 5, uns: 1, abs: 0 },
      { id: "1711", ely: 5, tdy: 0, lte: 0, uns: 2, abs: 2 },
      { id: "345",  ely: 2, tdy: 0, lte: 3, uns: 1, abs: 0 },
      { id: "362",  ely: 1, tdy: 0, lte: 3, uns: 0, abs: 1 },
      { id: "489",  ely: 2, tdy: 0, lte: 1, uns: 5, abs: 0 },
      { id: "1603", ely: 2, tdy: 0, lte: 1, uns: 3, abs: 0 },
      { id: "2079", ely: 1, tdy: 0, lte: 2, uns: 1, abs: 1 }
    ]},
  MER: { ely:  4, tdy: 34, lte:  48, uns: 207, abs: 11, creep:  52, empWithExc: 45, empWithCreep: 17, totalEmployees:  53, scheduleDataIssue: false,
    top: [
      { id: "144",  ely: 2, tdy: 2, lte: 5, uns: 0, abs: 0 },
      { id: "1101", ely: 0, tdy: 6, lte: 6, uns: 0, abs: 2 },
      { id: "1033", ely: 1, tdy: 2, lte: 5, uns: 3, abs: 0 },
      { id: "2044", ely: 0, tdy: 3, lte: 6, uns: 0, abs: 0 },
      { id: "116",  ely: 0, tdy: 3, lte: 4, uns: 3, abs: 0 },
      { id: "140",  ely: 0, tdy: 3, lte: 4, uns: 1, abs: 0 },
      { id: "143",  ely: 0, tdy: 3, lte: 4, uns: 0, abs: 0 },
      { id: "124",  ely: 0, tdy: 2, lte: 4, uns: 0, abs: 0 },
      { id: "2141", ely: 0, tdy: 0, lte: 3, uns: 2, abs: 2 },
      { id: "2131", ely: 0, tdy: 1, lte: 1, uns: 6, abs: 0 }
    ]},
  PSL: { ely:  0, tdy:  0, lte:   0, uns: 447, abs:  0, creep:   0, empWithExc: 50, empWithCreep:  0, totalEmployees:  54, scheduleDataIssue: true,
    top: [
      { id: "1781", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 },
      { id: "1115", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 },
      { id: "1733", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 },
      { id: "2023", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "854",  ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1755", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "2007", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "2109", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1116", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1761", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 }
    ]},
  RVB: { ely:  0, tdy:  0, lte:   0, uns: 440, abs:  0, creep:   0, empWithExc: 62, empWithCreep:  0, totalEmployees:  78, scheduleDataIssue: true,
    top: [
      { id: "449",  ely: 0, tdy: 0, lte: 0, uns: 13, abs: 0 },
      { id: "1440", ely: 0, tdy: 0, lte: 0, uns: 12, abs: 0 },
      { id: "2004", ely: 0, tdy: 0, lte: 0, uns: 11, abs: 0 },
      { id: "1799", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1296", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "443",  ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "675",  ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1437", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1976", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 },
      { id: "1298", ely: 0, tdy: 0, lte: 0, uns: 10, abs: 0 }
    ]},
  VAL: { ely: 37, tdy:  2, lte: 117, uns:  70, abs:  0, creep: 154, empWithExc: 50, empWithCreep: 37, totalEmployees:  82, scheduleDataIssue: false,
    top: [
      { id: "164",  ely: 4, tdy: 0, lte: 9, uns: 0, abs: 0 },
      { id: "1270", ely: 4, tdy: 0, lte: 8, uns: 0, abs: 0 },
      { id: "184",  ely: 7, tdy: 0, lte: 4, uns: 0, abs: 0 },
      { id: "1811", ely: 6, tdy: 0, lte: 3, uns: 0, abs: 0 },
      { id: "176",  ely: 0, tdy: 1, lte: 8, uns: 0, abs: 0 },
      { id: "185",  ely: 0, tdy: 0, lte: 8, uns: 0, abs: 0 },
      { id: "833",  ely: 0, tdy: 0, lte: 7, uns: 0, abs: 0 },
      { id: "153",  ely: 0, tdy: 0, lte: 6, uns: 0, abs: 0 },
      { id: "1877", ely: 0, tdy: 0, lte: 6, uns: 0, abs: 0 },
      { id: "156",  ely: 1, tdy: 0, lte: 5, uns: 0, abs: 0 }
    ]},
  AWH: { ely: 52, tdy: 46, lte: 115, uns: 247, abs: 40, creep: 167, empWithExc: 63, empWithCreep: 29, totalEmployees:  80, scheduleDataIssue: false,
    top: [
      { id: "250",  ely: 10, tdy: 0, lte:  8, uns: 2, abs: 0 },
      { id: "224",  ely:  6, tdy: 0, lte:  7, uns: 0, abs: 2 },
      { id: "467",  ely:  7, tdy: 0, lte:  5, uns: 0, abs: 0 },
      { id: "221",  ely:  0, tdy: 2, lte: 11, uns: 0, abs: 1 },
      { id: "473",  ely:  0, tdy: 5, lte:  9, uns: 0, abs: 0 },
      { id: "254",  ely:  0, tdy: 0, lte:  9, uns: 0, abs: 0 },
      { id: "214",  ely:  1, tdy: 7, lte:  7, uns: 0, abs: 0 },
      { id: "472",  ely:  0, tdy: 6, lte:  8, uns: 0, abs: 1 },
      { id: "209",  ely:  0, tdy: 1, lte:  8, uns: 0, abs: 0 },
      { id: "223",  ely:  0, tdy: 0, lte:  8, uns: 0, abs: 0 }
    ]},
  WDL: { ely: 27, tdy:  6, lte:  87, uns:  58, abs: 13, creep: 114, empWithExc: 40, empWithCreep: 25, totalEmployees: 117, scheduleDataIssue: false,
    top: [
      { id: "775",  ely: 1, tdy: 0, lte: 10, uns: 0, abs: 0 },
      { id: "791",  ely: 2, tdy: 0, lte:  8, uns: 0, abs: 0 },
      { id: "499",  ely: 3, tdy: 0, lte:  7, uns: 0, abs: 0 },
      { id: "789",  ely: 1, tdy: 0, lte:  7, uns: 1, abs: 0 },
      { id: "2057", ely: 2, tdy: 2, lte:  5, uns: 3, abs: 1 },
      { id: "1985", ely: 6, tdy: 0, lte:  1, uns: 0, abs: 0 },
      { id: "763",  ely: 1, tdy: 2, lte:  5, uns: 0, abs: 0 },
      { id: "1535", ely: 6, tdy: 0, lte:  0, uns: 0, abs: 0 },
      { id: "840",  ely: 0, tdy: 0, lte:  6, uns: 0, abs: 0 },
      { id: "1937", ely: 0, tdy: 0, lte:  4, uns: 1, abs: 0 }
    ]}
};

// Enterprise totals (sum of 12 communities; ~2-3 events come from corporate / non-community
// workgroups not attributable to any community).
window.AVIVA_EXCEPTIONS_ENTERPRISE = {
  ely: 315, tdy: 200, lte: 863, uns: 2377, abs: 150,
  creep: 1178,
  employees_with_creep: 251,
  employees_total: 612
};

// Notes for the dashboard:
// - PSL and RVB show ZERO creep — but it's a data issue, not a clean operation. Their employees
//   don't have schedules in AOD, so AOD has nothing to compute "early/late vs schedule" against.
//   Their UNS counts are sky-high (447 / 440) — every punch registers as "unscheduled".
//   FIX: Add schedule patterns for PSL and RVB employees in AOD before exception monitoring is
//   meaningful for those properties.
// - CCH and GLN have low creep (22, 14) but moderate UNS (310, 158) — same pattern at a smaller
//   scale; partial schedule coverage.
// - HIL stands out: 49 of 72 employees (68%) had at least one creep event — pervasive, not
//   concentrated in a few employees. Operational pattern issue rather than individual employee.
window.AVIVA_EXCEPTIONS_NOTES = [
  "PSL and RVB: schedule data missing in AOD — UNS-heavy, creep undetectable. Fix schedules first.",
  "HIL: pervasive creep — 68% of employees with at least one creep event in 14 days.",
  "ABP, AWH, VAL: long creep tails concentrated in specific employees — check the top-offender lists."
];
