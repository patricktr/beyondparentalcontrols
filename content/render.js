// Audience-agnostic composer + the helper bundle every section receives.
// Contains NO prose, so it's safe in either build. Each audience's sections
// module default-exports an ORDERED ARRAY of { when?, body } — the two docs
// have different section sequences, so order lives with the sections, not here.

import { STAGES, PLATFORMS, APPROACH } from './spine.js';

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// subj/obj/possessive per gender. "other" = singular they, which needs plural
// verb agreement — handled by the be/have/s helpers below.
const PRONOUNS = {
  boy:   { subj: 'he',   obj: 'him',  pos: 'his',   posp: 'his',    refl: 'himself' },
  girl:  { subj: 'she',  obj: 'her',  pos: 'her',   posp: 'hers',   refl: 'herself' },
  other: { subj: 'they', obj: 'them', pos: 'their', posp: 'theirs', refl: 'themselves' },
};

// Fixed grade→age schedule; "you are here" = the latest grade the child's age
// has reached. Before Grade 4 → nothing current (Grade 4 is up next).
function stagesFor(cfg) {
  let current = -1;
  STAGES.forEach((s, i) => { if (cfg.age >= s.age) current = i; });
  return STAGES.map((s, i) => ({ ...s, isCurrent: i === current, isNext: i === current + 1 }));
}

export function helpers(cfg) {
  const stages = stagesFor(cfg);
  const pr = PRONOUNS[cfg.gender];
  const plural = cfg.gender === 'other';
  const name = cfg.child ? esc(cfg.child) : ''; // pre-escaped: the only untrusted string

  return {
    cfg,
    esc,
    name,
    hasName: Boolean(name),
    kid: name || 'your kid', // parent-side fallback

    // pronouns + conjugation (so "they wants" never happens)
    they: pr.subj, them: pr.obj, their: pr.pos, theirs: pr.posp, themself: pr.refl,
    be: plural ? 'are' : 'is',
    beC: plural ? '’re' : '’s',   // be-contraction: "he’s at" / "they’re at"
    have: plural ? 'have' : 'has',
    haveC: plural ? '’ve' : '’s', // have-contraction: "he’s done" / "they’ve done"
    s: (verb) => (plural ? verb : verb + 's'), // "want" → "wants"
    Cap: (w) => w.charAt(0).toUpperCase() + w.slice(1),

    platforms: cfg.platforms.map((id) => ({ id, ...PLATFORMS[id] })),
    platform: { id: cfg.platforms[0], ...PLATFORMS[cfg.platforms[0]] }, // primary
    multiPlatform: cfg.platforms.length > 1,
    approach: APPROACH[cfg.approach],
    schoolDevice: cfg.schoolDevice,
    stages,
    current: stages.find((x) => x.isCurrent), // undefined if age < Grade 4
    beforeStart: cfg.age < STAGES[0].age,
  };
}

// sections: ordered array of { when?(cfg): boolean, body(helpers): htmlString }
export function render(cfg, sections) {
  const h = helpers(cfg);
  return sections
    .filter((sec) => !sec.when || sec.when(cfg))
    .map((sec) => sec.body(h).trim())
    .join('\n\n');
}
