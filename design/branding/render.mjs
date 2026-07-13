#!/usr/bin/env node
// Rasterize the brand SVGs into the favicon/OG asset set for both apps, and
// pack multi-size .ico files. Uses the environment's global Playwright +
// Chromium (no local node_modules). One-shot generator; re-run after editing
// any source SVG or OG template.
//
//   node design/branding/render.mjs            # build all assets
//   node design/branding/render.mjs contact    # just the legibility contact sheet
//
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const globalRoot = execSync('npm root -g').toString().trim();
const require = createRequire(join(globalRoot, 'x.js'));
const { chromium } = require('playwright');

const svg = (name) => readFileSync(join(here, name), 'utf8');

async function rasterize(page, svgMarkup, size) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<!doctype html><html><body style="margin:0;padding:0">
     <div style="width:${size}px;height:${size}px;line-height:0">${svgMarkup
       .replace(/width="512"/, `width="${size}"`)
       .replace(/height="512"/, `height="${size}"`)}</div>
     </body></html>`,
    { waitUntil: 'load' }
  );
  return page.screenshot({ clip: { x: 0, y: 0, width: size, height: size }, omitBackground: true });
}

// Minimal ICO encoder: wraps PNG payloads (Vista+/all modern browsers).
function buildIco(entries /* [{size, png:Buffer}] */) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 0);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt8(0, o + 2); // palette
    dir.writeUInt8(0, o + 3); // reserved
    dir.writeUInt16LE(1, o + 4); // planes
    dir.writeUInt16LE(32, o + 6); // bpp
    dir.writeUInt32LE(e.png.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.png.length;
  });
  return Buffer.concat([header, dir, ...entries.map((e) => e.png)]);
}

async function contactSheet(browser) {
  const page = await browser.newPage();
  const parent = svg('parent-icon.svg');
  const kid = svg('kid-icon.svg');
  const strip = (bg, label) => `
    <div style="background:${bg};padding:22px 26px;display:flex;align-items:center;gap:26px">
      <span style="width:150px;font:600 12px/1.3 monospace;color:${
        bg === '#ffffff' ? '#333' : '#ccc'
      }">${label}</span>
      ${[16, 24, 32, 48, 64]
        .map(
          (s) =>
            `<span style="display:inline-flex;flex-direction:column;align-items:center;gap:6px">
               <span style="width:${s}px;height:${s}px;line-height:0">${svg('parent-icon.svg')
              .replace('width="512"', `width="${s}"`)
              .replace('height="512"', `height="${s}"`)}</span>
               <span style="width:${s}px;height:${s}px;line-height:0">${svg('kid-icon.svg')
              .replace('width="512"', `width="${s}"`)
              .replace('height="512"', `height="${s}"`)}</span>
               <span style="font:11px monospace;color:${bg === '#ffffff' ? '#666' : '#aaa'}">${s}px</span>
             </span>`
        )
        .join('')}
    </div>`;
  await page.setViewportSize({ width: 640, height: 320 });
  await page.setContent(
    `<!doctype html><body style="margin:0;font-family:monospace">
       ${strip('#ffffff', 'light tab  (parent / kid)')}
       ${strip('#2b2b2b', 'dark tab')}
       ${strip('#c9c4b6', 'cream tab')}
     </body>`,
    { waitUntil: 'load' }
  );
  await page.screenshot({ path: join(here, 'contact-sheet.png'), fullPage: true });
  await page.close();
  console.log('wrote contact-sheet.png');
}

async function buildIcons(browser, { app, rounded, full }) {
  const page = await browser.newPage();
  const outDir = join(root, 'apps', app);
  mkdirSync(outDir, { recursive: true });

  // favicon.svg — ship the rounded source verbatim
  writeFileSync(join(outDir, 'favicon.svg'), svg(rounded));

  // favicon.ico — 16/32/48 rounded PNGs packed into one .ico
  const icoEntries = [];
  for (const size of [16, 32, 48]) icoEntries.push({ size, png: await rasterize(page, svg(rounded), size) });
  writeFileSync(join(outDir, 'favicon.ico'), buildIco(icoEntries));

  // PNG icons: 180 apple-touch + 192/512 maskable (full-bleed). 16/32/48 live in the .ico.
  writeFileSync(join(outDir, 'apple-touch-icon.png'), await rasterize(page, svg(full), 180));
  writeFileSync(join(outDir, 'icon-192.png'), await rasterize(page, svg(full), 192));
  writeFileSync(join(outDir, 'icon-512.png'), await rasterize(page, svg(full), 512));

  await page.close();
  console.log(`wrote icons for apps/${app}`);
}

async function buildOg(browser, { app, htmlFile }) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('file://' + join(here, htmlFile), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  await page.screenshot({
    path: join(root, 'apps', app, 'og.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await page.close();
  console.log(`wrote apps/${app}/og.png`);
}

const mode = process.argv[2];
const browser = await chromium.launch();
try {
  if (mode === 'contact') {
    await contactSheet(browser);
  } else {
    await contactSheet(browser);
    await buildIcons(browser, { app: 'parent', rounded: 'parent-icon.svg', full: 'parent-icon-full.svg' });
    await buildIcons(browser, { app: 'kid', rounded: 'kid-icon.svg', full: 'kid-icon-full.svg' });
    await buildOg(browser, { app: 'parent', htmlFile: 'parent-og.html' });
    await buildOg(browser, { app: 'kid', htmlFile: 'kid-og.html' });
  }
} finally {
  await browser.close();
}
