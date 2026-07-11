#!/usr/bin/env node
// Watch content/ and rebuild apps/*/lib on every change (debounced).
//
//   node tools/watch.mjs      (or: npm run watch)
//
// Dependency-free: uses node:fs recursive watch (supported on macOS/Windows).
// Builds are serialized — a change during a build queues one more run, so
// concurrent writes can't corrupt apps/*/lib mid-copy. There is NO browser
// live-reload: after a rebuild, refresh the page to see content changes.

import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');

let timer = null;
let building = false;
let pending = false;

function build() {
  if (building) { pending = true; return; }   // coalesce: rebuild once more after
  building = true;
  const t0 = Date.now();
  const p = spawn('node', ['tools/build.mjs'], { cwd: root });
  let out = '';
  p.stdout.on('data', (d) => { out += d; });
  p.stderr.on('data', (d) => { out += d; });
  p.on('close', (code) => {
    building = false;
    const ms = Date.now() - t0;
    const last = out.trim().split('\n').pop() || '';
    if (code === 0) console.log(`[watch] rebuilt in ${ms}ms — ${last}`);
    else console.error(`[watch] BUILD FAILED (exit ${code}):\n${out.trim()}`);
    if (pending) { pending = false; schedule(); }
  });
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(build, 120);            // debounce bursts of fs events
}

console.log('[watch] initial build, then watching content/ for changes…');
build();

watch(contentDir, { recursive: true }, (evt, file) => {
  if (file) console.log(`[watch] ${evt}: ${file}`);
  schedule();
});
