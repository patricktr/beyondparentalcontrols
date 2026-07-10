#!/usr/bin/env node
// Compose content/ into each app's lib/ (git-ignored, regenerated each build).
//
//   node tools/build.mjs
//
// The kid app receives the shared modules + kid/sections.js ONLY. The parent
// app additionally gets parent/sections.js. A post-build assertion guarantees
// no parent-only content reached the kid bundle — that exclusion is the safety
// boundary, and it's enforced here on every build/deploy.

import { cpSync, mkdirSync, rmSync, readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHARED = ['config.js', 'spine.js', 'render.js'];
const SENTINEL = 'PARENT-ONLY-SENTINEL';

function buildApp(app, sectionsRelPath) {
  const lib = join(root, 'apps', app, 'lib');
  rmSync(lib, { recursive: true, force: true });
  mkdirSync(lib, { recursive: true });
  for (const f of SHARED) cpSync(join(root, 'content', f), join(lib, f));
  cpSync(join(root, 'content', sectionsRelPath), join(lib, 'sections.js'));
  return lib;
}

buildApp('parent', 'parent/sections.js');
const kidLib = buildApp('kid', 'kid/sections.js');

// Safety assertion: the kid bundle must not contain parent-only content.
for (const f of readdirSync(kidLib)) {
  if (readFileSync(join(kidLib, f), 'utf8').includes(SENTINEL)) {
    throw new Error(`SAFETY VIOLATION: parent-only content reached apps/kid/lib/${f}`);
  }
}

console.log('build ok — apps/parent/lib + apps/kid/lib (kid verified free of parent-only content)');
