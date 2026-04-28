# Aviva Bi-Weekly Labor Dashboard

Live dashboard tracking active hours and overtime across the 12 Aviva senior living communities. Updated automatically every other Friday morning, the day after each bi-weekly pay period closes.

**Live URL:** https://jcarrion-ai.github.io/aviva-labor-dashboard/

## What's here

- `index.html` — the current pay period's dashboard (overwritten each run)
- `history/` — dated snapshots of every previously published dashboard
- `data/` — dated CSV exports of the underlying property-level data
- `aviva-aod-config.json` — workgroup IDs and report selectors for AOD; consumed by the scheduled task

## How it updates

A scheduled task in Claude (`aviva-biweekly-labor-dashboard`) runs every Friday at 7:00 AM ET. On post-period Fridays (the Friday after a Wednesday close) it:

1. Logs into AOD with the saved Chrome session.
2. Pulls per-property regular hours, overtime, employee counts, and submission status for the prior bi-weekly period.
3. Regenerates `index.html` and adds a dated copy to `history/` plus a CSV to `data/`.
4. Commits and pushes to this repo.

Off-week Fridays exit early and skip the run.

## Phase 2

Budget variance is wired into the dashboard structure but inactive until budgeted hours per property are loaded from a separate source. When that source is connected, the Budget Variance section and a new "Variance % by Property" chart populate automatically.

— Lloyd Jones LLC
