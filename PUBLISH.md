# One-time publish steps

This folder is a ready-to-push GitHub repo. Run these once from Terminal to create the GitHub repo and turn on Pages.

## Option A — GitHub CLI (`gh`) installed

```bash
cd ~/Documents
mv "/Users/lloydjones/Library/Application Support/Claude/local-agent-mode-sessions/d810140f-dfa3-4d4b-92d2-0dc4375b6a14/dea513c4-34b1-4eef-94c2-ef8a7c5094e5/local_95e5fd29-a87a-49a7-babd-c1f2e0bb67fc/outputs/aviva-labor-dashboard-repo" ~/Documents/aviva-labor-dashboard
cd ~/Documents/aviva-labor-dashboard

git init -b main
git add .
git commit -m "Initial dashboard — pay period Apr 5–18, 2026"

gh repo create aviva-labor-dashboard --public --source=. --push
gh repo edit --enable-issues=false --enable-wiki=false

# Turn on Pages from the main branch root
gh api -X POST repos/jcarrion-ai/aviva-labor-dashboard/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

After ~30 seconds the dashboard will be live at https://jcarrion-ai.github.io/aviva-labor-dashboard/

## Option B — plain git + GitHub web UI

1. Go to https://github.com/new — name the repo `aviva-labor-dashboard`, public, **don't** initialize with a README.
2. Then in Terminal:
   ```bash
   mv "/Users/lloydjones/Library/Application Support/Claude/local-agent-mode-sessions/d810140f-dfa3-4d4b-92d2-0dc4375b6a14/dea513c4-34b1-4eef-94c2-ef8a7c5094e5/local_95e5fd29-a87a-49a7-babd-c1f2e0bb67fc/outputs/aviva-labor-dashboard-repo" ~/Documents/aviva-labor-dashboard
   cd ~/Documents/aviva-labor-dashboard
   git init -b main
   git add .
   git commit -m "Initial dashboard — pay period Apr 5–18, 2026"
   git remote add origin git@github.com:jcarrion-ai/aviva-labor-dashboard.git
   git push -u origin main
   ```
3. In the repo on github.com → **Settings** → **Pages** → set Source to `main` / `/ (root)` and save.

## After the first publish

The scheduled task `aviva-biweekly-labor-dashboard` is configured to look for the local clone at `~/Documents/aviva-labor-dashboard`. Each run will:
- Regenerate `index.html` in place
- Drop a dated snapshot into `history/`
- Drop a dated CSV into `data/`
- `git add . && git commit && git push`

So future updates require no manual steps as long as the clone stays at that path and your git credentials are cached (SSH key, or `git config credential.helper osxkeychain` after a first HTTPS push).
