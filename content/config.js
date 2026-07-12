// Parse + normalize URL params into a validated config.
// Pure and shared by both builds — contains NO audience-specific prose.
//
// Every value here is attacker-controllable (a config is just a URL anyone can
// craft), so we validate hard: enums fall back to a default, age is clamped to
// an int, and the free-text name is stripped to name-safe characters. The name
// is additionally HTML-escaped at render time (see render.js `helpers`).

export const DEFAULTS = {
  age: 9,
  approach: 'balanced',
  platform: 'apple',
  gender: 'neutral',
  schoolDevice: false,
};

const PLATFORM_IDS = ['apple', 'google', 'amazon'];

const oneOf = (val, allowed, fallback) => (allowed.includes(val) ? val : fallback);

const clampInt = (val, lo, hi, fallback) => {
  const n = parseInt(val, 10);
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : fallback;
};

// Allow letters/marks (any language), apostrophes, periods, hyphens, spaces.
const cleanName = (val) =>
  (val || '').replace(/[^\p{L}\p{M}'’.\- ]/gu, '').trim().slice(0, 24);

export function parseConfig(params) {
  const get = (k) => params.get(k);
  // Multi-select: households can run more than one ecosystem. Dedupe, validate,
  // default to Apple. Accepts repeated ?platform=apple&platform=google.
  const platforms = [...new Set(params.getAll('platform').filter((p) => PLATFORM_IDS.includes(p)))];
  // legacy `for=other` links fall through to the default (neutral).
  const gender = oneOf(get('for'), ['boy', 'girl', 'lgbtq', 'neutral'], DEFAULTS.gender);
  return {
    child: cleanName(get('child')),
    age: clampInt(get('age'), 5, 18, DEFAULTS.age),
    approach: oneOf(get('approach'), ['cautious', 'balanced', 'open'], DEFAULTS.approach),
    platforms: platforms.length ? platforms : [DEFAULTS.platform],
    gender,
    schoolDevice: get('school') === '1',
  };
}
