# Flip Baseball

A browser-based card baseball game prototype. Pick two of eight fictional clubs, flip cards from a play deck, and play a full nine-inning baseball game with animated hits, moving runners, scorekeeping, and team lineups.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a simple static server:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Deploy to Vercel

This is a static HTML/CSS/JavaScript site. The included `vercel.json` forces Vercel to use the generic “Other” framework preset, run `npm run build`, and publish the generated `dist/` directory instead of trying to detect a Python entrypoint.

