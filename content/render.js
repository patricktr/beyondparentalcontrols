// Audience-agnostic composer + the helper bundle every section receives.
// Contains NO prose, so it's safe in either build. Each audience's sections
// module default-exports an ORDERED ARRAY of { when?, body } — the two docs
// have different section sequences, so order lives with the sections, not here.

import { STAGES, PLATFORMS, APPROACH } from './spine.js';

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// subj/obj/possessive per pronoun set. `they` is singular they, which needs plural
// verb agreement — handled by the be/have/s helpers below. cfg.pronouns selects the
// set (boy→he, girl→she, neutral→they; lgbtq is parent-chosen). See config.js.
const PRONOUNS = {
  he:   { subj: 'he',   obj: 'him',  pos: 'his',   posp: 'his',    refl: 'himself' },
  she:  { subj: 'she',  obj: 'her',  pos: 'her',   posp: 'hers',   refl: 'herself' },
  they: { subj: 'they', obj: 'them', pos: 'their', posp: 'theirs', refl: 'themselves' },
};

// Grade→age schedule with a pace offset: "you are here" = the latest grade the
// child's approach-shifted age has reached (cautious sits ~a year back, open ~a
// year ahead, balanced raw). Before the first reached grade → nothing current.
function stagesFor(cfg) {
  const shift = APPROACH[cfg.approach]?.shift ?? 0;
  let current = -1;
  STAGES.forEach((s, i) => { if (cfg.age >= s.age + shift) current = i; });
  return STAGES.map((s, i) => ({ ...s, isCurrent: i === current, isNext: i === current + 1 }));
}

export function helpers(cfg) {
  const stages = stagesFor(cfg);
  const pr = PRONOUNS[cfg.pronouns] || PRONOUNS.they;
  const plural = cfg.pronouns === 'they';
  const name = cfg.child ? esc(cfg.child) : ''; // pre-escaped: the only untrusted string

  // Footnotes. cite(src) emits a superscript ref and registers the source;
  // footnotes() renders the numbered list. Numbering is document-order because
  // sections render in array order (see render() below) and the section that
  // calls footnotes() is LAST. Deduped by url||text, so citing one source twice
  // reuses its number. `src` is { text, url? } (text is trusted authored HTML)
  // or a plain string.
  const _notes = [];
  const _seen = new Map();
  const cite = (src) => {
    const s = typeof src === 'string' ? { text: src } : src;
    const key = s.key || s.url || s.text;
    let n = _seen.get(key);
    const first = n === undefined;
    if (first) { n = _notes.length + 1; _seen.set(key, n); _notes.push({ n, ...s }); }
    return `<sup class="fn-ref"${first ? ` id="ref${n}"` : ''}><a href="#fn${n}">${n}</a></sup>`;
  };
  const footnotes = ({ title = 'References' } = {}) =>
    _notes.length === 0 ? '' : `
      <section class="footnotes" aria-label="${title}">
        <h2>${title}</h2>
        <ol>${_notes.map(({ n, text, url }) =>
          `<li id="fn${n}">${text}${url ? ` <a class="fn-src" href="${url}" target="_blank" rel="nofollow noopener">↗ source</a>` : ''} <a class="fn-back" href="#ref${n}" aria-label="Back to reference ${n}">↩</a></li>`
        ).join('')}</ol>
      </section>`;

  return {
    cfg,
    esc,
    name,
    cite,
    footnotes,
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
    current: stages.find((x) => x.isCurrent), // undefined before the first reached grade
    next: stages.find((x) => x.isNext),
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
