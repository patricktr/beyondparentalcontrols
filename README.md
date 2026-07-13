# Beyond Parental Controls

A tailored, staged plan for taking a kid from a locked-down first device to
full online autonomy by 18 — **on a deliberate schedule, not by attrition.**

Parents answer a few questions and get a plan written for *their* kid; the kid
gets a warm, safe, forward-facing version of the same roadmap.

> Spun off from the original single-family `internetroadmap` project.

## Two sites, one plan

| Site | Domain | Audience | Contents |
|------|--------|----------|----------|
| **Parent** | `beyondparentalcontrols.com` | Grown-ups | Big-picture landing + configurator + the candid parent plan + a sourced *research* page |
| **Kid** | `yourinternetroadmap.com` | Kids | Only the kid-facing roadmap — nothing candid |

The parent configures once, reads the parent plan, and sends the kid **only**
the kid link.

## Core architecture decisions

1. **Content is parametric, not N hand-written pages.** There is *one* plan — a
   shared spine (~80% identical for everyone) — and the family's choices are
   knobs that swap in fragments or shift parameters. See [`content/`](content/).
2. **Rendering is client-side from URL parameters.** No backend, no database, no
   accounts. The config lives in the URL, e.g.
   `…/plan?child=Milo&age=9&for=boy&platform=apple&approach=balanced`.
3. **Personalized links are free** — the link *is* the config. (No token store;
   if URLs ever feel long we can bit-pack a self-decoding token, still no DB.)
4. **Safety boundary is a separate deployment, not a gate.** Because pages
   render client-side, candid text would otherwise ship to the kid's browser.
   The kid site is its own deployment that *does not contain* the candid
   fragments — so no URL-tampering can reveal what isn't there. See
   [Safety model](#safety-model).

## Inputs (the config schema)

| Param | Values | Effect |
|-------|--------|--------|
| `age` | number / grade | Sets the "you are here" marker and the next unlock |
| `platform` | `apple` · `google` · `amazon` (multi-select) | Swaps the setup instructions (Screen Time / Family Link / Amazon Kids); pick several and each device layer is shown |
| `approach` | `cautious` · `balanced` · `open` | **Pace, not destination.** Shifts where the kid sits on the one fixed schedule by ~±1 yr (cautious holds each unlock a year longer, open a year earlier). Grades and gates are identical across paces; every path still ends at full autonomy by 18. |
| `for` | `boy` · `girl` · `lgbtq` · `neutral` | Drives the gender-aware **2026 threat model** (boy / girl / LGBTQ+ each get their own cited threat emphasis; neutral shows both sex-patterns) plus pronouns. Not a separate document. |
| `pro` | `he` · `she` · `they` | Pronoun override, offered only when `for=lgbtq` (an LGBTQ+ kid may use any pronouns); otherwise pronouns follow `for`. |
| `child` | free text | The kid's name (client-side only; only leaves the device inside a link the parent chooses to share) |
| `school` | bool (`1`) | Optional: "school sends home a managed device" fragment (the NYC-DOE/Chromebook content) |

## Safety model

The boundary is **what the kid's device receives** — not secrecy. Two
load-bearing layers:

1. **Separate deployment.** `yourinternetroadmap.com` is built from kid-safe
   fragments only; the candid fragments are never in its bundle, so no
   URL-tampering can reveal what isn't there.
2. **No back-link.** The kid page links nowhere near the parent side. The only
   cross-link is parent→kid ("send this to your kid").

We deliberately **do not** gate or hide the parent content — the parent site
and this repo are both public. The goal was never to keep this material secret
from every kid on the internet (one with open browsing can already reach far
worse); it's to guarantee it is never *delivered to your kid* via the link you
send. A password gate would add friction for every parent without strengthening
that guarantee, since the separation above — not a gate — is what does the work.

## Repo structure

```
content/            Single source of truth: the spine + fragments + schema.
                    Each section is tagged audience: both | parent | kid.
apps/
  parent/           → beyondparentalcontrols.com  (landing + configurator + /plan + /research)
  kid/              → yourinternetroadmap.com      (roadmap only)
tools/              build.mjs composes content into each app (the kid build
                    EXCLUDES every parent-only fragment); watch.mjs rebuilds on change.
```

Data claims in the parent plan carry superscript **footnotes to primary sources**
(`h.cite()` / `h.footnotes()` in [`content/render.js`](content/render.js)); the full
provenance, with confidence and geography caveats, lives on the parent `research` page.

## Build & deploy

Push to `main` and both sites deploy automatically (Vercel Git integration).

- **Two Vercel projects, one repo.** `beyondparentalcontrols` (→ apps/parent)
  and `yourinternetroadmap` (→ apps/kid) are both connected to this GitHub repo.
- **One build, two outputs.** Each project builds from the **repo root** with
  `node tools/build.mjs` (which composes `content/` into every app's `lib/`) and
  serves a different **Output Directory** — `apps/parent` vs `apps/kid`. Building
  from the repo root keeps the shared `content/` + `tools/` in scope, so no
  "include files outside root directory" flag is needed. (These three settings —
  build command, output directory, framework=Other — live in each project's
  Vercel settings, since Output Directory differs per project.)
- `lib/` stays git-ignored — Vercel regenerates it every build, so the build's
  safety assertion (kid bundle carries no parent-only content) runs on every deploy.
- Local: `npm run build` (or `npm run watch` to rebuild on every `content/` change),
  then serve the repo and open `apps/<app>/`.

> **Why not Turborepo?** Turborepo earns its keep once you have several apps that
> share real packages and benefit from build caching + affected-only task runs.
> Here the "build" is one sub-second script over content-as-data, so a plain repo
> with the Vercel monorepo settings above is the right amount of structure.

## Privacy

No accounts, no database, no cookies; everything renders in the browser and the config you
enter never leaves your device. The **parent** site keeps only lightweight, anonymous analytics
(pageviews, browser, coarse geo via PostHog) — the URL query string is stripped so names and choices are
never sent, autocapture is off, persistence is cookieless, and IP is discarded server-side (PostHog
`anonymize_ips`, verified on the project). The **kid** site is untracked. Matches the original project's
family-privacy stance. Full policy lives at [`/privacy`](apps/parent/privacy/index.html) and is linked
from every parent-site footer.

The parent content pages (landing, plan, research, privacy) are **indexable** — a permissive
[`robots.txt`](apps/parent/robots.txt) + [`sitemap.xml`](apps/parent/sitemap.xml) ship with the parent app.
The **kid** site keeps its `noindex` meta tag (it's a personalized artifact, not a page to surface in search).

## Status

Parent side is substantially built and every `for` × `platform` × `approach` ×
school combination renders end-to-end:

- Configurator + the candid parent plan, with a gender-aware **2026 threat model**
  (boy / girl / LGBTQ+ / neutral) whose specific figures carry footnotes to primary
  sources, plus a sourced `research.html`.
- All three device layers (Apple · Google · Amazon, multi-select) and the
  school-issued-device track.
- Year-by-year schedule with **pace shifting** — cautious / balanced / open move the
  "you are here" marker ±1 yr while every path still lands at full autonomy by 18.
- Kid side renders the warm, candid-free roadmap.

Next: deepen the kid-facing content and the platform-specific grade-by-grade steps.
