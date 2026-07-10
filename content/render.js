// Audience-agnostic composer + the helper bundle every section receives.
// Contains NO prose, so it's safe in either build. Give it a `sections` map
// (kid's or parent's) and it walks SECTION_ORDER, rendering whatever that
// audience provides.

import { STAGES, SECTION_ORDER, PLATFORMS, APPROACH } from './spine.js';

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

// Apply the approach shift and figure out which stage the child is in now.
function pacedStages(cfg) {
  const { shift } = APPROACH[cfg.approach];
  const stages = STAGES.map((s) => ({
    ...s,
    age: s.terminal ? 18 : Math.max(5, Math.min(17, s.baseAge + shift)),
  }));
  let current = 0;
  stages.forEach((s, i) => { if (cfg.age >= s.age) current = i; });
  return stages.map((s, i) => ({ ...s, isCurrent: i === current, isNext: i === current + 1 }));
}

export function helpers(cfg) {
  const stages = pacedStages(cfg);
  const pr = PRONOUNS[cfg.gender];
  const plural = cfg.gender === 'other'; // "they" takes plural verb forms
  const name = cfg.child ? esc(cfg.child) : ''; // pre-escaped: the only untrusted string

  return {
    cfg,
    esc,
    name,
    hasName: Boolean(name),
    kid: name || 'your kid', // parent-side fallback when no name given

    // pronouns + conjugation (so "they wants" never happens)
    they: pr.subj, them: pr.obj, their: pr.pos, theirs: pr.posp, themself: pr.refl,
    be: plural ? 'are' : 'is',
    beC: plural ? '’re' : '’s', // be-contraction: "he’s at" / "they’re at"
    have: plural ? 'have' : 'has',
    haveC: plural ? '’ve' : '’s', // have-contraction: "he’s done" / "they’ve done"
    s: (verb) => (plural ? verb : verb + 's'), // "want" → "wants"
    Cap: (w) => w.charAt(0).toUpperCase() + w.slice(1),

    platform: PLATFORMS[cfg.platform],
    approach: APPROACH[cfg.approach],
    showGrade: cfg.approach === 'balanced', // grades only line up at the default pace
    stages,
    current: stages.find((x) => x.isCurrent),
  };
}

// sections: { [id]: { when?(cfg): boolean, body(helpers): htmlString } }
export function render(cfg, sections) {
  const h = helpers(cfg);
  return SECTION_ORDER
    .map((id) => sections[id])
    .filter((sec) => sec && (!sec.when || sec.when(cfg)))
    .map((sec) => sec.body(h).trim())
    .join('\n\n');
}
