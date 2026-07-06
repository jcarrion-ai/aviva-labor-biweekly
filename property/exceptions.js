// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Jun 14 - Sat Jun 27, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (558 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 558/558 joined)
// Pulled: 2026-07-06 (catch-up run for the Fri Jul 3 pay date)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// NOTE: unlike prior closed-period pulls, this Previous Period view DID expose an MP column (verified c6="MP", c7=Totals).
//       Enterprise MP total was 1 — still excluded from the dashboard for consistency.
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "June 14, 2026", end: "June 27, 2026", payDate: "July 3, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  79, tdy:  27, lte:  228, uns:   33, abs:   8, creep:  307, empWithExc:  56, empWithCreep:  42, totalEmployees: 102, scheduleDataIssue: false,
    top: [
      { id: "1993", ely: 10, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "395", ely:  8, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "389", ely:  7, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1043", ely:  7, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "2264", ely:  7, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1199", ely:  6, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1789", ely:  1, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "867", ely:  4, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "397", ely:  2, tdy:  6, lte:  8, uns:  2, abs:  0 },
      { id: "864", ely:  0, tdy:  2, lte: 10, uns:  1, abs:  0 }
    ]},
  CCH: { ely:  40, tdy:  75, lte:   88, uns:   56, abs:  13, creep:  128, empWithExc:  46, empWithCreep:  35, totalEmployees: 103, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  7, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "328", ely:  3, tdy:  3, lte:  8, uns:  0, abs:  0 },
      { id: "1576", ely:  1, tdy:  6, lte:  9, uns:  0, abs:  0 },
      { id: "270", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1105", ely:  0, tdy:  8, lte:  7, uns:  0, abs:  0 },
      { id: "2204", ely:  0, tdy:  5, lte:  7, uns:  0, abs:  1 },
      { id: "319", ely:  0, tdy:  1, lte:  7, uns:  0, abs:  0 },
      { id: "1291", ely:  0, tdy:  6, lte:  6, uns:  0, abs:  0 },
      { id: "300", ely:  0, tdy:  5, lte:  5, uns:  0, abs:  0 },
      { id: "2010", ely:  1, tdy:  4, lte:  4, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   4, tdy:   1, lte:    6, uns:  146, abs:   6, creep:   10, empWithExc:  30, empWithCreep:   6, totalEmployees: 50, scheduleDataIssue: false,
    top: [
      { id: "829", ely:  1, tdy:  0, lte:  2, uns:  0, abs:  2 },
      { id: "1746", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "683", ely:  0, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "1361", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  2 },
      { id: "686", ely:  1, tdy:  1, lte:  0, uns:  0, abs:  1 },
      { id: "1332", ely:  1, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "698", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2177", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1736", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  AGB: { ely:  30, tdy:  10, lte:   39, uns:   95, abs:  12, creep:   69, empWithExc:  29, empWithCreep:  17, totalEmployees: 40, scheduleDataIssue: false,
    top: [
      { id: "411", ely:  5, tdy:  0, lte:  2, uns:  2, abs:  0 },
      { id: "108", ely:  7, tdy:  1, lte:  0, uns:  1, abs:  0 },
      { id: "74", ely:  0, tdy:  1, lte:  6, uns:  1, abs:  0 },
      { id: "1872", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  1 },
      { id: "80", ely:  6, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "1356", ely:  5, tdy:  0, lte:  0, uns:  3, abs:  2 },
      { id: "90", ely:  0, tdy:  1, lte:  5, uns:  2, abs:  0 },
      { id: "1408", ely:  4, tdy:  0, lte:  1, uns:  2, abs:  0 },
      { id: "111", ely:  0, tdy:  0, lte:  4, uns:  1, abs:  1 },
      { id: "1765", ely:  3, tdy:  0, lte:  0, uns:  3, abs:  2 }
    ]},
  HIL: { ely:  32, tdy:  12, lte:  129, uns:   64, abs:  10, creep:  161, empWithExc:  51, empWithCreep:  43, totalEmployees: 76, scheduleDataIssue: false,
    top: [
      { id: "810", ely:  4, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2098", ely:  9, tdy:  0, lte:  0, uns:  0, abs:  2 },
      { id: "2097", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "638", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1290", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1406", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1157", ely:  2, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2167", ely:  0, tdy:  2, lte:  5, uns:  0, abs:  0 },
      { id: "2187", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  1 }
    ]},
  MAY: { ely:   6, tdy:   0, lte:    6, uns:  214, abs:  11, creep:   12, empWithExc:  39, empWithCreep:   2, totalEmployees: 74, scheduleDataIssue: false,
    top: [
      { id: "340", ely:  0, tdy:  0, lte:  6, uns:  3, abs:  3 },
      { id: "1711", ely:  6, tdy:  0, lte:  0, uns:  3, abs:  2 },
      { id: "2166", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "348", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1996", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2172", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "354", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "489", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2206", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2022", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  MER: { ely:  17, tdy:  36, lte:   36, uns:  135, abs:  39, creep:   53, empWithExc:  47, empWithCreep:  21, totalEmployees: 54, scheduleDataIssue: false,
    top: [
      { id: "1033", ely:  3, tdy:  1, lte:  4, uns:  3, abs:  0 },
      { id: "116", ely:  0, tdy:  5, lte:  6, uns:  2, abs:  0 },
      { id: "144", ely:  2, tdy:  0, lte:  3, uns:  2, abs:  0 },
      { id: "2140", ely:  1, tdy:  1, lte:  4, uns:  0, abs:  0 },
      { id: "2044", ely:  0, tdy:  5, lte:  4, uns:  1, abs:  0 },
      { id: "1966", ely:  2, tdy:  0, lte:  2, uns:  0, abs:  3 },
      { id: "2132", ely:  2, tdy:  1, lte:  2, uns:  0, abs:  2 },
      { id: "2141", ely:  0, tdy:  0, lte:  3, uns:  4, abs:  2 },
      { id: "421", ely:  0, tdy:  3, lte:  2, uns:  0, abs:  0 },
      { id: "135", ely:  2, tdy:  0, lte:  0, uns:  0, abs:  1 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  384, abs:   0, creep:    0, empWithExc:  42, empWithCreep:   0, totalEmployees: 55, scheduleDataIssue: true,
    top: [
      { id: "1116", ely:  0, tdy:  0, lte:  0, uns: 14, abs:  0 },
      { id: "1115", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1733", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1055", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1591", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "521", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "523", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2023", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1782", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  345, abs:   0, creep:    0, empWithExc:  59, empWithCreep:   0, totalEmployees: 81, scheduleDataIssue: true,
    top: [
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1940", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1976", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "423", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1793", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "432", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "435", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "422", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  VAL: { ely:  45, tdy:   1, lte:  147, uns:   51, abs:  12, creep:  192, empWithExc:  56, empWithCreep:  43, totalEmployees: 81, scheduleDataIssue: false,
    top: [
      { id: "184", ely:  8, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1812", ely:  6, tdy:  0, lte:  8, uns:  0, abs:  2 },
      { id: "1270", ely:  6, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "156", ely:  5, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "176", ely:  0, tdy:  1, lte:  9, uns:  0, abs:  0 },
      { id: "164", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1707", ely:  4, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "183", ely:  1, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2139", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "185", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 }
    ]},
  AWH: { ely:  62, tdy:  48, lte:  111, uns:  245, abs:  45, creep:  173, empWithExc:  65, empWithCreep:  28, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "224", ely:  9, tdy:  0, lte:  9, uns:  0, abs:  2 },
      { id: "250", ely:  9, tdy:  0, lte:  8, uns:  2, abs:  0 },
      { id: "467", ely:  7, tdy:  0, lte:  7, uns:  0, abs:  2 },
      { id: "221", ely:  0, tdy:  0, lte: 11, uns:  0, abs:  1 },
      { id: "214", ely:  1, tdy:  6, lte:  9, uns:  0, abs:  0 },
      { id: "243", ely: 10, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "472", ely:  0, tdy:  8, lte:  8, uns:  0, abs:  0 },
      { id: "473", ely:  0, tdy:  4, lte:  8, uns:  0, abs:  0 },
      { id: "210", ely:  8, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "254", ely:  0, tdy:  0, lte:  8, uns:  0, abs:  0 }
    ]},
  WDL: { ely:  14, tdy:   2, lte:   30, uns:   33, abs:   6, creep:   44, empWithExc:  15, empWithCreep:  11, totalEmployees: 112, scheduleDataIssue: false,
    top: [
      { id: "503", ely:  7, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "492", ely:  0, tdy:  0, lte:  7, uns:  1, abs:  1 },
      { id: "1535", ely:  3, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "771", ely:  1, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  2, lte:  4, uns:  0, abs:  0 },
      { id: "789", ely:  0, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "745", ely:  0, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "780", ely:  0, tdy:  0, lte:  2, uns:  1, abs:  0 },
      { id: "1710", ely:  2, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "807", ely:  0, tdy:  0, lte:  1, uns:  4, abs:  0 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 329, tdy: 212, lte: 820, uns: 1801, abs: 162, creep: 1149, empWithExc: 535, empWithCreep: 248 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "ABP has the most creep events this period (307 = 79 early-in + 228 late-out across 42 employees).",
  "HIL creep employees = 43/76 (57% of headcount). VAL = 43/81 (53%). Both exceed the 50% pattern threshold.",
  "PSL and RVB still show zero creep / zero tardy / zero absence with very high unscheduled punches (384 and 345) \u2014 schedules are still not loaded in AOD for these properties, so their exception data is not meaningful.",
  "MAY (creep 12, UNS 214) and GLN (creep 10, UNS 146) show a similar partial no-schedule signature \u2014 worth confirming schedule coverage at these two.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
