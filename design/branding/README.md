# Branding — favicons & Open Graph images

Source art + generator for each site's icon set and social-share card. The
**outputs are committed** into `apps/parent/` and `apps/kid/` (they change
rarely and rasterizing needs a browser, so they aren't part of the per-deploy
`tools/build.mjs`). Re-run the generator only when you edit the source here.

## Sources

| File | Used for |
|------|----------|
| `parent-icon.svg` / `kid-icon.svg` | rounded squircle → `favicon.svg` + `favicon.ico` |
| `parent-icon-full.svg` / `kid-icon-full.svg` | full-bleed square → `apple-touch-icon.png`, `icon-192/512.png` |
| `parent-og.html` / `kid-og.html` | 1200×630 Open Graph card (real site fonts) → `og.png` |

The marks echo each design system: the parent's teal *rising-milestone timeline*
ending in an open "autonomy" node (The Ledger), and the kid's gold *compass-rose
star* on green (Quest Map).

## Generated per app (`apps/parent`, `apps/kid`)

`favicon.svg`, `favicon.ico` (16/32/48), `apple-touch-icon.png` (180),
`icon-192.png`, `icon-512.png` (maskable), `og.png` (1200×630), plus a
hand-written `site.webmanifest`.

## Regenerate

```bash
node design/branding/render.mjs           # rebuild every asset
node design/branding/render.mjs contact   # just a legibility contact sheet
node design/branding/verify.mjs           # serve each app, assert assets 200 + meta present
```

Uses the environment's global Playwright + Chromium (no local `node_modules`).
Head tags (`<link rel="icon">`, `og:*`, `twitter:*`, `theme-color`) live in each
page's `<head>`; update those by hand if you rename an asset.
