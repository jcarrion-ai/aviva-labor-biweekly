// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun May 31 - Sat Jun 13, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (585 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid)
// Pulled: 2026-06-18 (on-week run; pay date moved Fri Jun 19 -> Thu Jun 18, Juneteenth holiday)
//
// AOD legend (Previous Period view): ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent
//   No MP (Missed Punch) column is exposed for closed periods. "Creep" = ELY + LTE.
//   AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "May 31, 2026", end: "June 13, 2026", payDate: "June 18, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  69, tdy:  23, lte:  185, uns:   58, abs:  19, creep:  254, empWithExc:  60, empWithCreep:  41, totalEmployees: 99, scheduleDataIssue: false,
    top: [
      { id: "1043", ely:  9, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1993", ely:  7, tdy:  0, lte:  7, uns:  4, abs:  3 },
      { id: "1774", ely:  5, tdy:  1, lte:  8, uns:  1, abs:  0 },
      { id: "867", ely:  3, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "389", ely:  3, tdy:  1, lte:  8, uns:  2, abs:  2 },
      { id: "395", ely:  6, tdy:  0, lte:  5, uns:  2, abs:  1 },
      { id: "404", ely:  1, tdy:  3, lte:  9, uns:  0, abs:  0 },
      { id: "407", ely:  0, tdy:  2, lte:  9, uns:  1, abs:  0 },
      { id: "1199", ely:  3, tdy:  0, lte:  6, uns:  1, abs:  2 },
      { id: "1789", ely:  3, tdy:  0, lte:  6, uns:  2, abs:  0 }
    ]},
  CCH: { ely:  32, tdy:  61, lte:   69, uns:   46, abs:  13, creep:  101, empWithExc:  46, empWithCreep:  34, totalEmployees: 101, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  5, tdy:  0, lte:  7, uns:  2, abs:  0 },
      { id: "2204", ely:  1, tdy:  4, lte:  7, uns:  0, abs:  0 },
      { id: "1105", ely:  0, tdy: 10, lte:  6, uns:  0, abs:  0 },
      { id: "300", ely:  1, tdy:  4, lte:  5, uns:  0, abs:  0 },
      { id: "270", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1373", ely:  2, tdy:  6, lte:  3, uns:  0, abs:  0 },
      { id: "1998", ely:  4, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "318", ely:  0, tdy:  8, lte:  4, uns:  0, abs:  0 },
      { id: "328", ely:  0, tdy:  1, lte:  4, uns:  0, abs:  0 },
      { id: "319", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   5, tdy:   3, lte:    5, uns:  173, abs:   3, creep:   10, empWithExc:  34, empWithCreep:   7, totalEmployees: 48, scheduleDataIssue: false,
    top: [
      { id: "1746", ely:  3, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1736", ely:  1, tdy:  0, lte:  1, uns:  9, abs:  0 },
      { id: "2014", ely:  0, tdy:  0, lte:  1, uns:  9, abs:  2 },
      { id: "686", ely:  0, tdy:  1, lte:  1, uns:  1, abs:  0 },
      { id: "1332", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1361", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "1466", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "698", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2036", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1804", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  AGB: { ely:  36, tdy:  10, lte:   46, uns:   71, abs:  15, creep:   82, empWithExc:  31, empWithCreep:  20, totalEmployees: 37, scheduleDataIssue: false,
    top: [
      { id: "108", ely:  9, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "74", ely:  1, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "80", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1408", ely:  5, tdy:  0, lte:  2, uns:  2, abs:  0 },
      { id: "1872", ely:  0, tdy:  0, lte:  6, uns:  3, abs:  0 },
      { id: "88", ely:  0, tdy:  5, lte:  5, uns:  0, abs:  0 },
      { id: "1356", ely:  3, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "1765", ely:  3, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "95", ely:  1, tdy:  1, lte:  3, uns:  0, abs:  1 },
      { id: "100", ely:  1, tdy:  0, lte:  3, uns:  0, abs:  0 }
    ]},
  HIL: { ely:  38, tdy:  17, lte:  135, uns:   91, abs:   8, creep:  173, empWithExc:  55, empWithCreep:  42, totalEmployees: 70, scheduleDataIssue: false,
    top: [
      { id: "2104", ely:  5, tdy:  0, lte:  8, uns:  1, abs:  2 },
      { id: "810", ely:  2, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "1157", ely:  3, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2098", ely:  6, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "2012", ely:  6, tdy:  0, lte:  2, uns:  0, abs:  1 },
      { id: "638", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2164", ely:  3, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "632", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "851", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1406", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 }
    ]},
  MAY: { ely:   0, tdy:   4, lte:   15, uns:  219, abs:   8, creep:   15, empWithExc:  41, empWithCreep:   8, totalEmployees: 82, scheduleDataIssue: false,
    top: [
      { id: "340", ely:  0, tdy:  0, lte:  7, uns:  3, abs:  3 },
      { id: "489", ely:  0, tdy:  0, lte:  2, uns:  6, abs:  1 },
      { id: "738", ely:  0, tdy:  1, lte:  1, uns:  6, abs:  0 },
      { id: "2094", ely:  0, tdy:  1, lte:  1, uns:  6, abs:  0 },
      { id: "349", ely:  0, tdy:  0, lte:  1, uns:  6, abs:  0 },
      { id: "739", ely:  0, tdy:  1, lte:  1, uns:  5, abs:  0 },
      { id: "1624", ely:  0, tdy:  0, lte:  1, uns:  6, abs:  0 },
      { id: "2079", ely:  0, tdy:  0, lte:  1, uns:  2, abs:  0 },
      { id: "348", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2166", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  MER: { ely:   6, tdy:  44, lte:   35, uns:  129, abs:  25, creep:   41, empWithExc:  44, empWithCreep:  15, totalEmployees: 54, scheduleDataIssue: false,
    top: [
      { id: "2140", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "2141", ely:  2, tdy:  1, lte:  3, uns:  3, abs:  1 },
      { id: "2044", ely:  0, tdy:  4, lte:  4, uns:  1, abs:  0 },
      { id: "144", ely:  0, tdy:  0, lte:  4, uns:  3, abs:  0 },
      { id: "116", ely:  0, tdy:  1, lte:  4, uns:  1, abs:  0 },
      { id: "414", ely:  0, tdy:  3, lte:  3, uns:  3, abs:  1 },
      { id: "1033", ely:  1, tdy:  0, lte:  2, uns:  2, abs:  1 },
      { id: "2028", ely:  0, tdy:  0, lte:  2, uns:  4, abs:  0 },
      { id: "115", ely:  0, tdy:  2, lte:  2, uns:  0, abs:  0 },
      { id: "135", ely:  2, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  394, abs:   0, creep:    0, empWithExc:  47, empWithCreep:   0, totalEmployees: 56, scheduleDataIssue: true,
    top: [
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "521", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1055", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1842", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1891", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "523", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "525", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "526", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "854", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  327, abs:   1, creep:    0, empWithExc:  61, empWithCreep:   0, totalEmployees: 77, scheduleDataIssue: true,
    top: [
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "437", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1243", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1440", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "423", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "432", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "424", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  VAL: { ely:  31, tdy:   0, lte:  111, uns:   40, abs:   0, creep:  142, empWithExc:  41, empWithCreep:  33, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "176", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "156", ely:  3, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "184", ely:  6, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1270", ely:  3, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "1707", ely:  6, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1812", ely:  3, tdy:  0, lte:  4, uns:  7, abs:  0 },
      { id: "153", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1877", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "154", ely:  1, tdy:  0, lte:  5, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  88, tdy:  50, lte:  121, uns:  239, abs:  44, creep:  209, empWithExc:  66, empWithCreep:  39, totalEmployees: 80, scheduleDataIssue: false,
    top: [
      { id: "224", ely: 10, tdy:  0, lte: 10, uns:  0, abs:  2 },
      { id: "250", ely: 10, tdy:  0, lte:  8, uns:  1, abs:  0 },
      { id: "467", ely:  7, tdy:  0, lte:  7, uns:  1, abs:  0 },
      { id: "211", ely: 10, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "243", ely: 10, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "245", ely:  1, tdy:  3, lte:  8, uns:  1, abs:  0 },
      { id: "210", ely:  9, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "221", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  1 },
      { id: "214", ely:  0, tdy:  8, lte:  8, uns:  1, abs:  0 },
      { id: "472", ely:  1, tdy:  2, lte:  7, uns:  0, abs:  0 }
    ]},
  WDL: { ely:  20, tdy:  10, lte:   57, uns:   48, abs:   7, creep:   77, empWithExc:  31, empWithCreep:  22, totalEmployees: 118, scheduleDataIssue: false,
    top: [
      { id: "492", ely:  0, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "503", ely:  8, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  2, lte:  7, uns:  0, abs:  0 },
      { id: "775", ely:  0, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "499", ely:  2, tdy:  0, lte:  4, uns:  3, abs:  0 },
      { id: "840", ely:  0, tdy:  1, lte:  5, uns:  2, abs:  0 },
      { id: "2211", ely:  0, tdy:  1, lte:  3, uns:  1, abs:  1 },
      { id: "1638", ely:  1, tdy:  1, lte:  2, uns:  0, abs:  1 },
      { id: "1535", ely:  3, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "2156", ely:  1, tdy:  0, lte:  2, uns:  0, abs:  1 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = {
  ely: 329, tdy: 222, lte: 781, uns: 1978, abs: 143,
  creep: 1110,
  employees_with_creep: 264,
  employees_total: 585
};

window.AVIVA_EXCEPTIONS_NOTES = [
  "PSL and RVB: schedule data still missing in AOD — UNS-heavy, creep undetectable. Fix schedules first.",
  "HIL: highest creep rate — 42 of 70 employees (60%) with at least one creep event in 14 days.",
  "Enterprise creep events: 1110 (ELY 329 + LTE 781); 264 of 585 employees on the list had at least one.",
  "Prior on-week close (Sat May 30) was missed; this run follows the May 16 close — a one-period gap in history."
];
