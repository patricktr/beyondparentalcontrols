# Handoff: Beyond Parental Controls — visual redesign

## Overview
This is a visual redesign of **Beyond Parental Controls**, a client-side, no-backend web
product that gives parents a staged plan for taking a kid from a locked-down first device to
full online autonomy by 18 — on a deliberate schedule. It ships as **two separate deployments
from one content source**:

- **Parent site** (`beyondparentalcontrols.com`) — landing → configurator → the candid,
  research-backed **parent plan**, plus a **research** page. Adopts a refined editorial identity
  we call **"The Ledger."**
- **Kid site** (`yourinternetroadmap.com`) — a warm, second-person **roadmap** the kid keeps.
  Adopts a friendly, game-like "quest map" identity aimed at **upper-elementary readers**.

This handoff covers **four screens**: the parent Landing, Research, and Plan pages, and the
Kid Roadmap. A fifth file (`Design Options.dc.html`) is an exploration board showing the four
directions considered — the client chose direction **1a "The Ledger"** for the parent side; it is
included only as reference and is **not** to be implemented.

## About the Design Files
The files in `designs/` are **design references authored in HTML** — prototypes that show the
intended look, layout, type, color, and interactions. They are **not production code to copy
verbatim**. They are written as "Design Components" (`.dc.html`, requiring `support.js` to render
in a browser) with **all styling inline**; that inline-style approach is a quirk of the prototyping
tool, **not** a directive for the target codebase.

**The task is to recreate these designs in the product's actual environment.** The existing
codebase (see below) is a **zero-dependency, vanilla-JS, static-HTML** app that renders content
client-side from URL parameters. Recreate the visuals there using its own conventions:
a real external stylesheet with CSS custom properties (the current app already uses a
`style.css` with a `:root` token block and a `prefers-color-scheme: dark` block — extend that,
don't inline styles). Keep the app's parametric render pipeline; only the **presentation layer**
(CSS + the HTML each section emits) is changing.

## Existing codebase context (important)
```
content/            Single source of truth: spine (grade schedule) + per-audience section prose.
  spine.js          STAGES (Grade 4→12, ages 9→17), PLATFORMS, APPROACH. Shared by both builds.
  render.js         Audience-agnostic composer + helpers (pronouns, footnotes/cite, stagesFor).
  parent/sections.js  Candid parent prose. PARENT-ONLY — never shipped to the kid build.
  kid/sections.js     Warm kid prose. The ONLY content the kid build ships.
apps/
  parent/           index.html (landing+configurator), plan.html, research.html, style.css, lib/
  kid/              index.html, style.css, lib/
tools/build.mjs     Composes content/ into each app's lib/; asserts no parent-only text in kid build.
```
Key architecture facts to preserve:
- **No backend, no database, no accounts, no analytics, no cookies. `noindex`.** Everything
  renders in the browser. Do not add tracking or network calls.
- **Config lives in the URL**, e.g. `plan.html?child=Milo&age=9&for=neutral&platform=apple&approach=balanced&school=1`.
  The plan and kid roadmap render from `URLSearchParams` via `content/render.js`.
- **The kid site is a separate deployment** that does not import the candid parent fragments.
  The redesign must not move any candid content into the kid build, and the **kid site must keep
  its "no back-link to the parent side"** rule (there is intentionally no nav from kid → parent).
- Both sites currently support **light + dark** via `prefers-color-scheme`. The mocks show the
  **light** theme only; derive dark values from the existing `style.css` dark blocks (guidance in
  Design Tokens below).

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, and interactions are specified. Recreate
pixel-close using the codebase's CSS. Where the mock shows only a representative slice of content
(e.g. Research shows ~10 of ~58 findings; Plan condenses later grade cards), the **full content
comes from the existing `content/` files** — apply the design pattern to every item.

---

## Screens / Views

### Shared shell (both parent + kid)
- **Column**: single centered column, `max-width: 760px` (parent) / `680px` (kid), side padding 22–26px.
- **Masthead (parent only)**: sticky top bar, `background: #f7f5ef` at ~87% alpha + `backdrop-filter: blur(6px)`,
  `border-bottom: 1px solid #e6e2d6`, padding `15px 26px`. Left: wordmark in Newsreader 18px/600. Right:
  a mono nav link + a mono status caption (`No account · No tracking`). On Plan/Research the right side is a
  single "← adjust choices" / "← back to the plan" mono link.
- **Kid top bar**: solid `#1f8a4c` band, white text; a `🧭` glyph in a `#ffd66b` rounded tile + wordmark in
  Baloo 2 17px/700. **No links** (kid site never links back to parent).
- **Section header pattern (parent)**: a mono eyebrow (uppercase, `letter-spacing: 0.14em`, `#9a9488`) above a
  Newsreader h2, with a `1px solid #e0dccf` bottom rule (`padding-bottom: 14px`).

### 1. Parent — Landing  (`designs/Landing.dc.html`; recreate as `apps/parent/index.html`)
- **Purpose**: pitch the approach, show the three research findings, preview the schedule, and hold the
  configurator that builds the plan.
- **Layout** top→bottom: masthead · hero (mono eyebrow, h1 44px, 19px muted lede) · "What the research
  actually says" (3 findings) · "A roadmap you can personalize" (intro + a compact schedule-preview card) ·
  privacy callout · configurator form · footer micro-caption.
- **Findings**: each is a flex row — a teal `✓` (weight 700, 18px) + a paragraph with a bold lead-in;
  separated by `1px solid #ece8dc` hairlines (18–20px vertical padding). Below them: a mono→link
  "Read the research behind the plan →".
- **Schedule-preview card**: `background: #fdfcf8`, `1px solid #e6e2d6`, radius 14px. Inside, a mini version
  of the Plan timeline (vertical `2px #ddd8ca` rail, `margin-left: 40px`; age labels in the left gutter in
  mono; node dots; grade titles in Newsreader 15px/500). "Now" row uses the filled teal node + teal age
  number; the 18 row uses a ring node (paper fill, `2px solid #14596b`).
- **Privacy callout**: `background: #e8f1f4`, `1px solid #bcd6dd`, radius 12px, 15px text, leads with 🔒.
- **Configurator** (`<form action="plan.html" method="get">`): card `#fdfcf8`, `1px solid #e0dccf`, radius 16px,
  padding `30px 28px`, `display: grid; gap: 22px`. Controls:
  - Text input `child` (radius 9px, `1px solid #ddd8ca`, white bg).
  - `age` `<select>` (fixed ~110px wide) + a mono helper "→ places the 'you are here' marker".
  - `for` radios as **pills** (boy / girl / LGBTQ+ / neutral·they-them) — neutral is the default/selected style.
  - `platform` checkboxes as pills (Apple ✓ default / Google / Amazon).
  - `approach` radios as pills (Cautious / Balanced=default / Open).
  - `school` checkbox row.
  - Submit button: full-width teal, "Build our plan →".
  - **Pill spec**: `border-radius: 999px`, padding `8px 15px`, `1px solid #ddd8ca`, white bg. **Selected**:
    `border-color: #14596b; background: #e8f1f4; color: #14596b; font-weight: 600`.
- **Copy**: use the exact hero, findings, privacy, and form copy already in `apps/parent/index.html`.

### 2. Parent — Research  (`designs/Research.dc.html`; recreate as `apps/parent/research.html`)
- **Purpose**: every claim in the plan traced to a primary source, with confidence caveats.
- **Layout**: masthead (back link) · hero (eyebrow "~70 primary sources", h1 40px, lede) · privacy note ·
  TOC (mono pills that anchor-jump) · five parts (Controls backfire / Skews boys / Skews girls / LGBTQ+ /
  How to read this) · Sources list.
- **Finding block** (the core repeated unit): left border `3px solid #e0dccf`, `padding-left: 20px`. Three
  stacked parts:
  1. **Claim** — 15.5px `#22252a`.
  2. **Stat** — 16px in **`#0e7c86`** with bold figures + a mono superscript citation number.
  3. **Caveat** — 13px *italic* `#8a8578` (geography / confidence / n).
- **"Good" findings** (the LGBTQ+ lifeline ones): same block but `border-left: 3px solid #14596b` and a
  `background: #eef4f5` tint, radius `0 8px 8px 0`.
- **Note/aside** (section preambles): `background: #f3efe3`, `1px solid #e6e2d6`, `border-left: 3px solid #14596b`.
- **TOC pills**: mono 12px, `1px solid #ddd8ca`, radius 999px, `#fdfcf8`. Anchor targets use `scroll-margin-top: 70px`
  (to clear the sticky masthead).
- **Content**: the mock shows a representative subset. Implement the block pattern for **all** findings and the
  full numbered `<ol>` of sources from `apps/parent/research.html` (footnote/citation machinery already exists
  in `content/render.js` via `cite()` / `footnotes()`).

### 3. Parent — Plan  (`designs/Plan.dc.html`; recreate as `apps/parent/plan.html` output)  ← centerpiece
- **Purpose**: the generated, candid plan for this family's config. Rendered client-side from URL params.
- **Layout**: masthead (adjust-choices) · doc header (mono config summary + h1 40px + doc-meta) ·
  Section 1 "What the evidence actually says" (numbered findings) · Section 2 "The stack" (layer cards) ·
  **Section 3 "The year-by-year schedule"** (the timeline) · emergency playbook · "Send this to your kid"
  share card · references teaser.
- **Numbered findings**: `<ol>` with custom Newsreader numerals (22px teal, absolutely positioned in a 40px
  gutter). Finding 4 contains a **pledge blockquote**: `background: #eef4f5`, `border-left: 3px solid #14596b`,
  Newsreader *italic* 16px.
- **Stack layer cards**: `background: #fdfcf8`, `1px solid #e6e2d6`, radius 11px; a mono teal label
  (`LAYER 0 · IDENTITY`, etc.) over a 14.5px description.
- **THE SCHEDULE (timeline)** — the signature element:
  - A single vertical rail: `position: absolute; left: 26px; top/bottom: 8px; width: 2px; background: #ddd8ca`.
  - Each stage = a row with `padding-left: 62px`. In the gutter: an **age number** (mono, right-aligned in a
    26px box at `left: 0`) and a **node dot** on the rail (`left: 20–22px`).
  - **"Now" stage (Grade 4)**: full card — `background: #fdfcf8`, **`2px solid #14596b`**, radius 14px, plus a
    `box-shadow: 0 0 0 4px rgba(20,89,107,0.09)` halo. Header: Newsreader 19px/600 teal + a teal
    "You are here" pill. Body: lead paragraph, a 2-column **Unlocks / Stays locked** grid (green label
    `#2f7a3a` / red label `#a5442f`, 13.5px lists), a "Teach this year" tinted box (`#f3efe3`), and a **Gate**
    line. Its node is a filled teal dot with a `3px` paper ring + `box-shadow: 0 0 0 2px #14596b`.
  - **Other stages (5–11)**: compact cards — `1px solid #e6e2d6`, radius 12px; Newsreader 17px/600 title;
    one-line lead; an inline "Unlocks: … / Locked: …" run using the same green/red (and amber `#8a6a2e` for
    "Steps down" at grades 9–10). Node = small `#c8c2b2` dot (the age-13 node is larger, `#7fa9b3`, marking
    the platform floor).
  - **Handoff (Grade 12/18)**: highlighted teal-soft card (`#eef4f5`, `1px solid #bcd6dd`) with a closing
    pledge blockquote. Node = paper-fill ring, `3px solid #14596b`.
  - **"You are here" logic**: the current stage is the latest STAGE whose `age <= cfg.age` (see `stagesFor()`
    in `content/render.js`). Age < 9 → no current stage.
- **Emergency playbook**: `background: #fdf1ef`, `1px solid #b3402f`, `border-left: 5px solid #b3402f`,
  radius 10px, mono red label.
- **Share card** ("Send this to your kid"): `background: #e8f1f4`, `1px solid #bcd6dd`, radius 16px. A readonly
  input (mono 12px) holding the **kid URL** + a teal "Copy" button. Build the kid URL from **non-sensitive
  fields only** (`child?`, `age`, `for`, `platform[]`, `approach`) pointed at `https://yourinternetroadmap.com/`
  — exactly as `apps/parent/plan.html` already does. Copy → `navigator.clipboard.writeText`, button flips to
  "Copied ✓" for 1.5s.
- **Content**: render **all nine** stages and the full section prose from `content/parent/sections.js`; the mock
  condenses later cards for brevity only.

### 4. Kid — Roadmap  (`designs/Kid Roadmap.dc.html`; recreate as `apps/kid/index.html` output)
- **Audience**: upper-elementary (≈ ages 9–11). Friendly and game-like, **not** babyish. Opens most often as a
  **shared link on a phone** — design mobile-first; the 680px column is the max.
- **Purpose**: the kid's own copy of the plan — how they earn more freedom, one year at a time.
- **Layout**: kid top bar · hero (playful pill, h1 46px, sub) · **journey bar** · intro + "big idea" panel ·
  "Our promise to you" · "A few things that are always true" · **the roadmap level-track** · closing
  "secret" panel · "Questions?".
- **Journey bar** (hero anchor): white card, `2px solid #d8e6dc`, radius 22px, soft shadow. Inside: a 16px-tall
  rounded track filled with `linear-gradient(90deg, #1f8a4c 0%, #12a39a 45%, #f0a83c 100%)`. A `🚲` "you are
  here" marker (white circle, `4px solid #1f8a4c`) sits at the left end; a `🎉` marker at the right. Labels
  below: "Age 9 / YOU ARE HERE" (green) and "Age 18 / ALL YOURS" (amber). The marker position should map to the
  child's current stage.
- **Big-idea panel**: `background: #e4f5ea`, `2px solid #bfe6cd`, radius 20px; lead line in Baloo 2 800
  `#146336`; the bike analogy in body.
- **Promise card** (highest emphasis): `background: #fff7e6`, **`2.5px solid #ecb63f`**, radius 20px, soft
  amber shadow. Lead pledge in Baloo 2 800 `#8a5a10` at 20px; supporting copy `#5a4a2a`.
- **"Always true" rule cards**: white, `2px solid #d8e6dc`, radius 16px; each a flex row with a **44×44
  rounded-square icon tile** (radius 13px, soft-tint bg) holding a single emoji, next to the copy. The
  **four-warning-signs** card is special: amber-tinted border, with the four signs as a **2×2 grid of chips**
  (`background: #fff9ec`, `1px solid #f0dcae`, `#7a5a1a` 14.5px/700). Passwords + sleep are a **2-up row** of
  smaller cards. The closing "values" card is green-tinted (`#eafbef`).
- **THE LEVEL TRACK** (signature): a vertical **dashed** connector
  (`repeating-linear-gradient(#cfe4d6 0 10px, transparent 10px 20px)`, 4px wide) behind a stack of stage cards,
  each with `padding-left: 74px`. In the gutter sits a **rounded-square number node** (52–56px, radius 16–18px,
  `3px solid #fff`, colored drop shadow) showing the grade number.
  - **Node color progresses** to tell the freedom arc: g4 `#1f8a4c` → g5 `#34a35f` → g6 `#22a597` →
    g7 `#12a39a` → g8 `#2f8fb3` → g9 `#5b83c4` → g10 `#8a6fc0` → g11 `#c58a3c` → **g12 `🎉` gradient tile
    `#f0a83c→#e0902a`**.
  - **Grade 4 (current)** is the hero card: `3px solid #1f8a4c`, radius 20px, green shadow, a `📍 YOU ARE HERE`
    amber pill, the three copy lines (**You get** green / **Coming later** tan `#9a8250` / **You'll get good at**
    teal `#127a8a`), and an **open** "Tell me more" `<details>`.
  - **Grades 5–8**: white cards, `2px solid #d8e6dc`, radius 18px, Baloo 2 grade label in the node's color, a
    Baloo 2 title, the copy lines, and a **collapsed** "Tell me more" `<details>`.
  - **Grades 9–11**: same card, no expander (shorter copy).
  - **Grade 12**: celebratory amber-gradient card (`#fff7e6→#fdeecb`, `2.5px solid #ecb63f`).
- **"Tell me more"**: native `<details>/<summary>`; hide the default marker; a `▸` chevron rotates 90°
  (`transform 0.18s ease`) on open. Summary in Baloo 2 15px `#127a8a`.
- **Closing "secret" panel**: solid `#1f8a4c` card, white text, centered; highlight words in `#ffd66b`.
- **Copy**: use the exact kid copy from `content/kid/sections.js` (lines + "Tell me more" notes) for every grade,
  and personalize the greeting with `child` when present ("Hey Milo!").

---

## Interactions & Behavior
- **Navigation**: parent masthead links move between `index.html` (Landing), `research.html`, `plan.html`.
  The configurator submits `GET` to `plan.html`, serializing all fields into the query string. The kid site is
  standalone — **no** links back to the parent site.
- **Plan render**: on load, parse `URLSearchParams`, build config via `content/config.js` `parseConfig`, and
  render sections via `content/render.js`. Title becomes `${child}'s plan · …` when a name is present.
- **Kid link + Copy** (Plan share card): assemble the kid URL from non-sensitive fields, show it in the readonly
  input; Copy button writes to clipboard and shows "Copied ✓" for ~1500ms, else selects the input text.
- **"Tell me more"** (Kid): pure `<details>` toggle; chevron rotation is the only animation. Grade 4 default-open.
- **TOC anchors** (Research): smooth-scroll (`html { scroll-behavior: smooth }`) with `scroll-margin-top: 70px`
  on targets to clear the sticky masthead.
- **Hover/focus**: links darken teal `#14596b → #0e4552`; buttons `filter: brightness(1.07)`; pills change to
  the selected style on `:has(input:checked)`. Provide visible focus rings for keyboard users.
- **Responsive**: parent column 760px, kid 680px; both fluid below that with the stated side padding. On narrow
  widths, the Plan "Unlocks / Stays locked" 2-column grid and the Kid passwords/sleep 2-up row may stack.
- **Motion**: none required beyond the chevron and hover transitions. (Optional, if the team wants it: fade/slide
  stage cards in on scroll — additive, not load-bearing.)

## State Management
- **Source of truth is the URL.** No component state store, no persistence, no accounts.
  Config schema (from README + `content/config.js`): `child` (free text, client-only), `age` (5–18),
  `for` (`boy`·`girl`·`lgbtq`·`neutral`), `platform` (multi: `apple`·`google`·`amazon`),
  `approach` (`cautious`·`balanced`·`open`), `school` (bool).
- **Derived**: current stage = latest `STAGES[i].age <= age`; pronouns + verb agreement from `for`;
  platform setup fragments from `platform`; pace/tone from `approach`.
- **Safety invariant**: the kid build imports only `content/kid/sections.js`; `tools/build.mjs` asserts no
  parent-only content reaches the kid bundle. Preserve this — never inline candid copy into a kid template.

## Design Tokens

### Parent — "The Ledger" (light)
```
/* surfaces */
--bg:            #f7f5ef;   /* page paper */
--bg-canvas:     #f2f0e8;   /* behind the column */
--card:          #fdfcf8;
--input-bg:      #ffffff;
/* ink */
--text:          #22252a;
--text-body:     #3a3f45;
--muted:         #565b62;
--muted-2:       #6b7078;
--faint:         #9a9488;   /* mono eyebrows */
--faint-italic:  #8a8578;   /* caveats */
/* accent */
--accent:        #14596b;   /* primary teal (links, buttons, rules, "now") */
--accent-hover:  #0e4552;
--accent-2:      #0e7c86;   /* stat figures */
--accent-soft:   #e8f1f4;   /* callouts, selected pills */
--accent-soft-2: #eef4f5;   /* blockquotes, "good" findings */
--accent-border: #bcd6dd;
/* borders */
--rule:          #e0dccf;   /* h2 underline */
--border:        #e6e2d6;   /* cards, masthead */
--hairline:      #ece8dc;   /* between findings */
--hairline-2:    #f0ece0;
--input-border:  #ddd8ca;
/* timeline */
--rail:          #ddd8ca;
--node-future:   #c8c2b2;
--node-13:       #7fa9b3;
/* semantic labels */
--unlock:        #2f7a3a;   /* green */
--locked:        #a5442f;   /* red */
--stepdown:      #8a6a2e;   /* amber */
/* emergency */
--emg-bg:        #fdf1ef; --emg-border: #b3402f; --emg-text: #3a2320;
/* misc */
--selection:     #cfe3e8;
```
Dark theme: derive from the existing `apps/parent/style.css` `@media (prefers-color-scheme: dark)` block
(`--bg #15181b`, `--text #d8dce1`, `--accent #67bccd`, `--card #1b1f24`, `--border #2b3036`, etc.).

### Kid — "Quest Map" (light)
```
/* surfaces */
--bg:            #f3faf4;  --bg-canvas: #eef7f0;  --card: #ffffff;
/* ink */
--ink:           #123a24;  /* headings */    --text: #3a473f;   --text-2: #4a574f;   --muted: #4e6157;
/* green (primary) */
--green:         #1f8a4c;  --green-dark: #127a41;
--green-soft:    #dff2e5;  --green-soft-2: #e4f5ea;  --green-soft-3: #eafbef;
--green-border:  #bfe6cd;  --card-border: #d8e6dc;
/* teal (secondary — "get good at", toggles) */
--teal:          #127a8a;  --teal-2: #12a39a;
/* amber (promise, "you are here", finish) */
--amber-bg:      #fff7e6;  --amber-border: #ecb63f;  --amber-ink: #8a5a10;  --amber-ink-2: #5a4a2a;
--amber:         #f0a83c;  --amber-dark: #c47f1f;
--chip-bg:       #fff9ec;  --chip-border: #f0dcae;  --chip-ink: #7a5a1a;
--pin:           #f0a83c;  --highlight: #ffd66b;
/* stage-node progression (green→gold) */
g4 #1f8a4c · g5 #34a35f · g6 #22a597 · g7 #12a39a · g8 #2f8fb3 · g9 #5b83c4 · g10 #8a6fc0 · g11 #c58a3c · g12 #f0a83c→#e0902a
/* journey bar */
gradient: #1f8a4c 0% → #12a39a 45% → #f0a83c 100%
```
Dark theme: derive from `apps/kid/style.css` dark block (`--bg #141815`, `--accent #5fd18b`, `--card #1a211c`,
`--promise-bg #2a2517`, etc.).

### Typography
- **Parent**: **Newsreader** (serif) headings — h1 40–44px / weight 500 / line-height ~1.1 / `letter-spacing:
  -0.015em`; h2 26–27px / 500 with the `#e0dccf` underline; h3 17–19px / 600 in teal. **Public Sans** body
  400–700, 15–19px, line-height 1.55–1.62. **IBM Plex Mono** 400–600 for eyebrows/labels/citations, 10.5–12px,
  uppercase, `letter-spacing: 0.10–0.16em`.
- **Kid**: **Baloo 2** headings/labels 500–800 — h1 46px/800/lh 1.02; h2 24–28px/700 (with a leading emoji);
  h3 19–22px/700. **Nunito** body 400–800, 15–19px, line-height 1.5–1.6 (bump up for young readers).
- All via Google Fonts (already the approach in these mocks). If the codebase self-hosts fonts, match families
  and weights.

### Spacing, radius, shadow
- **Radii**: parent cards 14–16px, inner 11–14px, inputs 9px, buttons 10–11px, pills 999px. Kid cards 16–22px,
  node tiles 16–18px, chips 11px, pills 999px.
- **Section rhythm**: parent ~52px between major sections; kid ~38–44px.
- **Shadows**: soft, low-alpha, colored to the element — e.g. parent card `0 20px 50px -28px rgba(30,28,20,0.4)`;
  kid journey bar `0 8px 24px -14px rgba(20,60,36,0.3)`; kid "now" node `0 6px 16px -6px rgba(31,138,76,0.7)`.
  The parent "now" card uses a flat halo `box-shadow: 0 0 0 4px rgba(20,89,107,0.09)`.

## Assets
- **No raster/vector art.** Iconography on the kid side is a small, curated set of **emoji** used as wayfinding
  (🧭 🚲 🎉 🌱 🤝 ⭐ 🎣 🎭 🚩 🎁 💬 🤫 📱 🛡️ 🙈 🔒 😴 💚 📍 💡 🗺️ 🙋 💛 ✅). This is intentional for a kid-facing
  product; keep them as text emoji (or swap for the codebase's existing icon set if one exists). The parent
  side uses **no** emoji except the single 🔒 already in the privacy copy.
- Fonts: Newsreader, Public Sans, IBM Plex Mono (parent); Baloo 2, Nunito (kid) — Google Fonts.

## Files
In `designs/` (open in a browser; they need `support.js` alongside them):
- `Landing.dc.html` — parent Landing → implement as `apps/parent/index.html`.
- `Research.dc.html` — parent Research → implement as `apps/parent/research.html`.
- `Plan.dc.html` — parent Plan (centerpiece) → implement as `apps/parent/plan.html` output.
- `Kid Roadmap.dc.html` — kid Roadmap → implement as `apps/kid/index.html` output.
- `Design Options.dc.html` — the four explored directions (reference only; chosen = 1a "The Ledger").
- `support.js` — runtime needed only to preview the `.dc.html` prototypes; **do not** port it.

Existing source to pair with these (unchanged by the redesign except styling + emitted markup):
`content/spine.js`, `content/render.js`, `content/parent/sections.js`, `content/kid/sections.js`,
`apps/parent/style.css`, `apps/kid/style.css`.
