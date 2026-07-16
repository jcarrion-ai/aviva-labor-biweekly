// Aviva Labor — Timesheet Exceptions (per-community)
// Pay Period: Sun Jun 28 - Sat Jul 11, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (579 employees with at least one exception)
//         + Employee List > Employee Details (employee -> home location join via internal AOD rid; 579/579 joined)
// Pulled: 2026-07-16 (user-approved early run for the Fri Jul 17 pay date)
//
// AOD legend: ELY=Early in  TDY=Tardy  LTE=Late out  UNS=Unscheduled punch  ABS=Absent. "Creep" = ELY + LTE.
// NOTE: no MP column in this period's view (c0-c6, c6=Totals) — column map re-verified live before extraction.
// AOD operator threshold vs. agreed 7-min rule still unconfirmed — treat creep as directional.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "June 28, 2026", end: "July 11, 2026", payDate: "July 17, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_BY_PROPERTY = {
  ABP: { ely:  92, tdy:  24, lte:  231, uns:   41, abs:   6, creep:  323, empWithExc:  53, empWithCreep:  39, totalEmployees: 100, scheduleDataIssue: false,
    top: [
      { id: "1993", ely:  9, tdy:  0, lte: 10, uns:  1, abs:  0 },
      { id: "2264", ely:  9, tdy:  0, lte:  9, uns:  1, abs:  0 },
      { id: "2290", ely:  8, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "2300", ely:  7, tdy:  0, lte:  8, uns:  0, abs:  0 },
      { id: "389", ely:  3, tdy:  0, lte: 10, uns:  0, abs:  0 },
      { id: "1789", ely:  2, tdy:  0, lte: 10, uns:  1, abs:  0 },
      { id: "395", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "1043", ely:  6, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2298", ely:  5, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2205", ely:  2, tdy:  0, lte:  9, uns:  0, abs:  0 }
    ]},
  CCH: { ely:  43, tdy:  59, lte:   82, uns:   61, abs:  11, creep:  125, empWithExc:  42, empWithCreep:  29, totalEmployees: 101, scheduleDataIssue: false,
    top: [
      { id: "285", ely:  8, tdy:  1, lte:  9, uns:  1, abs:  0 },
      { id: "2184", ely:  6, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2204", ely:  0, tdy:  4, lte:  9, uns:  0, abs:  0 },
      { id: "1576", ely:  0, tdy:  7, lte:  8, uns:  1, abs:  0 },
      { id: "1105", ely:  0, tdy:  9, lte:  6, uns:  0, abs:  0 },
      { id: "2268", ely:  1, tdy:  3, lte:  5, uns:  1, abs:  0 },
      { id: "1291", ely:  0, tdy:  3, lte:  6, uns:  0, abs:  0 },
      { id: "270", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "2314", ely:  2, tdy:  0, lte:  3, uns:  3, abs:  0 },
      { id: "1762", ely:  1, tdy:  1, lte:  4, uns:  0, abs:  0 }
    ]},
  GLN: { ely:   0, tdy:   4, lte:    4, uns:  175, abs:   1, creep:    4, empWithExc:  32, empWithCreep:   3, totalEmployees: 45, scheduleDataIssue: false,
    top: [
      { id: "829", ely:  0, tdy:  1, lte:  2, uns:  1, abs:  1 },
      { id: "686", ely:  0, tdy:  1, lte:  1, uns:  0, abs:  0 },
      { id: "683", ely:  0, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "2036", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2177", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1886", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2194", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2193", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "1778", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2255", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  AGB: { ely:  34, tdy:   3, lte:   50, uns:   95, abs:  17, creep:   84, empWithExc:  31, empWithCreep:  19, totalEmployees: 41, scheduleDataIssue: false,
    top: [
      { id: "108", ely:  5, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "74", ely:  2, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1408", ely:  5, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "1765", ely:  5, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "88", ely:  0, tdy:  0, lte:  6, uns:  2, abs:  0 },
      { id: "1872", ely:  0, tdy:  0, lte:  6, uns:  1, abs:  0 },
      { id: "411", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "1356", ely:  4, tdy:  0, lte:  1, uns:  2, abs:  2 },
      { id: "90", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  0 },
      { id: "111", ely:  0, tdy:  0, lte:  5, uns:  1, abs:  0 }
    ]},
  HIL: { ely:  36, tdy:  18, lte:  115, uns:   54, abs:  11, creep:  151, empWithExc:  54, empWithCreep:  40, totalEmployees: 73, scheduleDataIssue: false,
    top: [
      { id: "810", ely:  4, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2098", ely:  8, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "2104", ely:  2, tdy:  1, lte:  6, uns:  2, abs:  0 },
      { id: "2029", ely:  4, tdy:  2, lte:  2, uns:  0, abs:  0 },
      { id: "638", ely:  0, tdy:  1, lte:  6, uns:  0, abs:  0 },
      { id: "851", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1729", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "632", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1855", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "2323", ely:  6, tdy:  0, lte:  0, uns:  0, abs:  0 }
    ]},
  MAY: { ely:   7, tdy:   1, lte:    8, uns:  207, abs:  10, creep:   15, empWithExc:  44, empWithCreep:   3, totalEmployees: 74, scheduleDataIssue: false,
    top: [
      { id: "1711", ely:  6, tdy:  0, lte:  1, uns:  3, abs:  4 },
      { id: "340", ely:  0, tdy:  0, lte:  6, uns:  3, abs:  0 },
      { id: "2003", ely:  1, tdy:  0, lte:  1, uns:  0, abs:  0 },
      { id: "354", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "348", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "2154", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2022", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 },
      { id: "2166", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 },
      { id: "339", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 },
      { id: "343", ely:  0, tdy:  0, lte:  0, uns:  8, abs:  0 }
    ]},
  MER: { ely:   4, tdy:  27, lte:   26, uns:  154, abs:  17, creep:   30, empWithExc:  43, empWithCreep:  14, totalEmployees: 54, scheduleDataIssue: false,
    top: [
      { id: "2141", ely:  1, tdy:  1, lte:  3, uns:  5, abs:  0 },
      { id: "1033", ely:  1, tdy:  3, lte:  3, uns:  2, abs:  0 },
      { id: "116", ely:  0, tdy:  1, lte:  4, uns:  1, abs:  0 },
      { id: "2140", ely:  1, tdy:  0, lte:  3, uns:  2, abs:  0 },
      { id: "119", ely:  1, tdy:  0, lte:  2, uns:  0, abs:  0 },
      { id: "144", ely:  0, tdy:  0, lte:  2, uns:  3, abs:  0 },
      { id: "115", ely:  0, tdy:  1, lte:  2, uns:  0, abs:  0 },
      { id: "414", ely:  0, tdy:  3, lte:  1, uns:  2, abs:  0 },
      { id: "1966", ely:  0, tdy:  0, lte:  1, uns:  3, abs:  1 },
      { id: "113", ely:  0, tdy:  0, lte:  1, uns:  3, abs:  1 }
    ]},
  PSL: { ely:   0, tdy:   0, lte:    0, uns:  380, abs:   0, creep:    0, empWithExc:  44, empWithCreep:   0, totalEmployees: 50, scheduleDataIssue: true,
    top: [
      { id: "1116", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "1755", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2090", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1055", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "2277", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2135", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "523", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "2247", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1782", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1781", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 }
    ]},
  RVB: { ely:   0, tdy:   0, lte:    0, uns:  353, abs:   0, creep:    0, empWithExc:  65, empWithCreep:   0, totalEmployees: 84, scheduleDataIssue: true,
    top: [
      { id: "1964", ely:  0, tdy:  0, lte:  0, uns: 13, abs:  0 },
      { id: "443", ely:  0, tdy:  0, lte:  0, uns: 12, abs:  0 },
      { id: "1976", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "1440", ely:  0, tdy:  0, lte:  0, uns: 11, abs:  0 },
      { id: "675", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1437", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1243", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1828", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1940", ely:  0, tdy:  0, lte:  0, uns: 10, abs:  0 },
      { id: "1296", ely:  0, tdy:  0, lte:  0, uns:  9, abs:  0 }
    ]},
  VAL: { ely:  26, tdy:   1, lte:   83, uns:   61, abs:   2, creep:  109, empWithExc:  47, empWithCreep:  35, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "1812", ely:  4, tdy:  0, lte:  6, uns:  0, abs:  1 },
      { id: "1270", ely:  2, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "2006", ely:  8, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "164", ely:  2, tdy:  0, lte:  5, uns:  0, abs:  0 },
      { id: "1707", ely:  3, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "156", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "158", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2286", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 },
      { id: "2139", ely:  1, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "713", ely:  0, tdy:  0, lte:  4, uns:  0, abs:  0 }
    ]},
  AWH: { ely:  92, tdy:  46, lte:  112, uns:  196, abs:  43, creep:  204, empWithExc:  65, empWithCreep:  34, totalEmployees: 78, scheduleDataIssue: false,
    top: [
      { id: "250", ely: 10, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "224", ely:  8, tdy:  0, lte:  8, uns:  0, abs:  2 },
      { id: "467", ely:  8, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "1433", ely:  8, tdy:  0, lte:  3, uns:  2, abs:  0 },
      { id: "214", ely:  0, tdy:  8, lte:  9, uns:  1, abs:  0 },
      { id: "221", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  2 },
      { id: "243", ely:  9, tdy:  0, lte:  0, uns:  1, abs:  0 },
      { id: "210", ely:  9, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "473", ely:  0, tdy:  2, lte:  8, uns:  1, abs:  0 },
      { id: "474", ely:  3, tdy:  1, lte:  4, uns:  1, abs:  0 }
    ]},
  WDL: { ely:  24, tdy:   2, lte:   57, uns:   29, abs:   3, creep:   81, empWithExc:  28, empWithCreep:  22, totalEmployees: 108, scheduleDataIssue: false,
    top: [
      { id: "775", ely:  0, tdy:  0, lte:  9, uns:  0, abs:  0 },
      { id: "1638", ely:  6, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "503", ely:  6, tdy:  1, lte:  2, uns:  2, abs:  0 },
      { id: "492", ely:  1, tdy:  0, lte:  7, uns:  0, abs:  0 },
      { id: "771", ely:  0, tdy:  0, lte:  6, uns:  0, abs:  0 },
      { id: "763", ely:  0, tdy:  1, lte:  5, uns:  0, abs:  0 },
      { id: "1535", ely:  5, tdy:  0, lte:  0, uns:  0, abs:  0 },
      { id: "791", ely:  2, tdy:  0, lte:  3, uns:  0, abs:  0 },
      { id: "499", ely:  1, tdy:  0, lte:  3, uns:  1, abs:  0 },
      { id: "840", ely:  0, tdy:  0, lte:  3, uns:  1, abs:  1 }
    ]}
};

window.AVIVA_EXCEPTIONS_ENTERPRISE = { ely: 358, tdy: 185, lte: 768, uns: 1806, abs: 121, creep: 1126, empWithExc: 548, empWithCreep: 238 };

window.AVIVA_EXCEPTIONS_NOTES = [
  "ABP again has the most creep events this period (323 = 92 early-in + 231 late-out across 39 employees).",
  "HIL creep employees = 40/73 (55% of headcount) — still above the 50% pattern threshold. VAL = 35/78 (45%), just under it this period.",
  "PSL and RVB still show zero creep / zero tardy / zero absence with very high unscheduled punches (380 and 353) — schedules are still not loaded in AOD for these properties, so their exception data is not meaningful.",
  "MAY (creep 15, UNS 207) and GLN (creep 4, UNS 175) still show the partial no-schedule signature — worth confirming schedule coverage at these two.",
  "AOD exception threshold vs. the agreed 7-minute creep rule remains unconfirmed; treat creep counts as directional."
];
