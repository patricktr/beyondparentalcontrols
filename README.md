# Beyond Parental Controls

A tailored, staged plan for taking a kid from a locked-down first device to
full online autonomy by 18 — **on a deliberate schedule, not by attrition.**

Parents answer a few questions and get a plan written for *their* kid; the kid
gets a warm, safe, forward-facing version of the same roadmap.

> Spun off from the original single-family `internetroadmap` project.

## Two sites, one plan

| Site | Domain | Audience | Contents |
|------|--------|----------|----------|
| **Parent** | `beyondparentalcontrols.com` | Grown-ups | Big-picture landing + configurator + the candid parent plan |
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
| `platform` | `apple` · `google` · (`amazon` later) | Swaps the setup instructions (Screen Time / Family Link / Amazon Kids) |
| `approach` | `cautious` · `balanced` · `open` | **Pace, not destination** — shifts each milestone ±1–2 yrs and the default tone. Every version still ends at full autonomy by 18. |
| `for` | `boy` · `girl` · `other` | Pronouns + light risk-emphasis callouts (not a separate document) |
| `child` | free text | The kid's name (client-side only; only leaves the device inside a link the parent chooses to share) |
| `school_device` | bool | Optional: "school sends home a managed device" fragment (the NYC-DOE/Chromebook content) |

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
  parent/           → beyondparentalcontrols.com  (landing + configurator + /plan)
  kid/              → yourinternetroadmap.com      (roadmap only)
tools/              Build: composes content into each app; the kid build
                    EXCLUDES every parent-only (candid) fragment.
```

## Build & deploy

- Vanilla JS + a small Node build step (no framework).
- Two Vercel projects, each with its Root Directory set to its app folder, both
  push-to-deploy from this one repo.

## Privacy

No tracking, no analytics, no database, `noindex`. Everything renders in the
browser. Matches the original project's family-privacy stance.

## Status

🚧 Scaffolding. First milestone: one fully-worked combination
(Apple · Balanced · boy · age 9) end-to-end — landing → configurator → parent
plan → kid plan — as the proof, then fill in the platform/gender fragments.
