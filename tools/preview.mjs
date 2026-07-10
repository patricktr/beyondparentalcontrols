#!/usr/bin/env node
// Render a sample config to stdout, to eyeball the content model.
//   node tools/preview.mjs kid
//   node tools/preview.mjs parent "child=Milo&age=9&for=boy&platform=apple&approach=balanced&school=1"

import { parseConfig } from '../content/config.js';
import { render } from '../content/render.js';

const audience = process.argv[2] === 'parent' ? 'parent' : 'kid';
const query = process.argv[3] || 'child=Milo&age=9&for=boy&platform=apple&approach=balanced';

const sections = (await import(`../content/${audience}/sections.js`)).default;
const cfg = parseConfig(new URLSearchParams(query));

console.log(`\n# ${audience.toUpperCase()}  ?${query}\n`);
console.log(render(cfg, sections));
console.log('');
