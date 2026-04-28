// Aviva Labor — Timesheet Exceptions
// Pay Period: Sun Apr 5 - Sat Apr 18, 2026 (AOD "Previous Period")
// Source: AOD Daily Operations > Employee Exceptions report (enterprise scope, 612 employees with at least one exception)
// Pulled: 2026-04-28 (test run override of bi-weekly cadence)
//
// AOD column legend:
//   ELY = Early in (clocked in earlier than scheduled) — clock-in creep
//   TDY = Tardy in (clocked in later than scheduled)
//   LTE = Late out (clocked out later than scheduled) — clock-out drift
//   UNS = Unscheduled punch (worked outside any schedule — likely missing schedule rather than an issue)
//   ABS = Absent (scheduled but no punch)
//   MP  = Missed Punch (data quality / approval flag)
//
// "Creep" per current threshold (any minute over 7) = ELY + LTE counts.
// AOD's exception flag fires when the punch differs from schedule by the operator-configured threshold.
// CONFIRM with admin that the AOD threshold matches the agreed 7-minute creep rule.

window.AVIVA_EXCEPTIONS_PERIOD = { start: "Apr 5, 2026", end: "Apr 18, 2026", payDate: "Apr 24, 2026", days: 14 };

window.AVIVA_EXCEPTIONS_TOTALS = {
  ely: 315,    // early-in events (creep, front-end)
  tdy: 200,    // tardy events
  lte: 863,    // late-out events (creep, back-end)
  uns: 2377,   // unscheduled punches
  abs: 150,    // absent events
  mp: 3905,    // missed punches
  // Derived
  creep: 1178,           // ely + lte
  actionable: 5283,      // ely + tdy + lte + mp (the categories Jimmy is targeting)
  employees_with_creep: 251,
  employees_with_mp: 612,
  employees_total: 612
};

// Top 25 employees ranked by creep events (ELY + LTE). Anonymous employee IDs only.
// `mp` column included to show whether a creep offender is also a missed-punch offender.
window.AVIVA_EXCEPTIONS_TOP_CREEP = [
  { id: "250",  ely: 10, tdy: 0, lte:  8, mp: 20 },
  { id: "1993", ely:  8, tdy: 0, lte: 10, mp: 18 },
  { id: "1157", ely:  8, tdy: 0, lte:  8, mp: 17 },
  { id: "395",  ely:  8, tdy: 0, lte:  7, mp: 15 },
  { id: "389",  ely:  4, tdy: 0, lte: 10, mp: 14 },
  { id: "108",  ely:  8, tdy: 0, lte:  6, mp: 14 },
  { id: "80",   ely: 10, tdy: 0, lte:  4, mp: 14 },
  { id: "164",  ely:  4, tdy: 0, lte:  9, mp: 13 },
  { id: "224",  ely:  6, tdy: 0, lte:  7, mp: 15 },
  { id: "467",  ely:  7, tdy: 0, lte:  5, mp: 12 },
  { id: "1270", ely:  4, tdy: 0, lte:  8, mp: 12 },
  { id: "407",  ely:  2, tdy: 1, lte: 10, mp: 13 },
  { id: "74",   ely:  3, tdy: 0, lte:  8, mp: 14 },
  { id: "775",  ely:  1, tdy: 0, lte: 10, mp: 11 },
  { id: "1341", ely:  3, tdy: 0, lte:  8, mp: 12 },
  { id: "410",  ely:  3, tdy: 3, lte:  8, mp: 14 },
  { id: "184",  ely:  7, tdy: 0, lte:  4, mp: 11 },
  { id: "1734", ely:  4, tdy: 1, lte:  7, mp: 13 },
  { id: "1043", ely:  7, tdy: 0, lte:  4, mp: 11 },
  { id: "221",  ely:  0, tdy: 2, lte: 11, mp: 14 },
  { id: "285",  ely:  1, tdy: 0, lte:  9, mp: 10 },
  { id: "1161", ely:  2, tdy: 1, lte:  9, mp: 12 },
  { id: "78",   ely:  0, tdy: 8, lte:  3, mp: 15 },
  { id: "472",  ely:  0, tdy: 6, lte:  8, mp: 15 },
  { id: "473",  ely:  0, tdy: 5, lte:  9, mp: 14 }
];

// Per-property allocation is NOT available from this report (no Location column, no workgroup filter).
// Wiring options for May 8:
//   (a) Run Employee Exceptions 12× with workgroup-filtered pulls
//   (b) Cross-reference the 612 employees with the Employee Details report's Home Workgroup column
// Until then, the property tabs render the enterprise totals with a "not yet attributed" badge.
window.AVIVA_EXCEPTIONS_BY_PROPERTY = null;

// Long shift (>= 8 consecutive hours, no meal break) and missed meal categories
// require punch-detail extraction (Time Card Detail per employee). Not exposed in any
// aggregated AOD report. Implementation deferred to next iteration.
window.AVIVA_EXCEPTIONS_LONG_SHIFT = null;
window.AVIVA_EXCEPTIONS_MISSED_MEAL = null;

// Estimated $ impact of creep events. Conservative model:
//   - Each creep event averages ~10 min of unintended time (mid-point between 7-min threshold and ~13 min typical)
//   - Of that, assume 50% lands in OT premium territory (some creep is on-shift, some triggers OT/DT)
//   - Use enterprise blended OT rate of $32/hr (≈ avg loaded wage × 1.5)
//   - 1,178 creep events × 10 min × 0.5 × ($32/hr / 60 min) = $3,141 estimated avoidable OT premium
// This is a directional estimate to size the prize, not a precise figure. Refine in v2 once
// per-property + magnitude (minutes per creep event) data is available.
window.AVIVA_EXCEPTIONS_DOLLARS_EST = {
  method: "1,178 creep × 10 min avg × 50% in OT zone × $32/hr blended OT rate",
  estimate: 3141,
  confidence: "directional",
  refinement_needed: ["per-property allocation", "actual minutes per creep event from punch detail"]
};
