// Serve each built app at server root and load it in Chromium to confirm the
// favicon/manifest/og assets resolve (no 404s), pages render, and meta is present.
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const require = createRequire(join(execSync('npm root -g').toString().trim(), 'x.js'));
const { chromium } = require('playwright');

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };

function serve(baseDir) {
  const srv = createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let fp = join(baseDir, normalize(p));
    if (existsSync(fp) && statSync(fp).isDirectory()) fp = join(fp, 'index.html');
    if (!existsSync(fp)) { res.writeHead(404); res.end('404'); return; }
    res.writeHead(200, { 'content-type': TYPES[extname(fp)] || 'application/octet-stream' });
    res.end(readFileSync(fp));
  });
  return new Promise((r) => srv.listen(0, () => r({ srv, port: srv.address().port })));
}

async function check(browser, baseDir, paths, label) {
  const { srv, port } = await serve(baseDir);
  const page = await browser.newPage();
  const bad = [];
  page.on('response', (resp) => { if (resp.status() >= 400) bad.push(`${resp.status()} ${resp.url()}`); });
  page.on('pageerror', (e) => bad.push(`JS ERROR: ${e.message}`));
  console.log(`\n=== ${label} (root: ${baseDir.replace(root, '.')}) ===`);
  for (const path of paths) {
    bad.length = 0;
    await page.goto(`http://localhost:${port}${path}`, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() => ({
      title: document.title,
      icon: document.querySelector('link[rel~="icon"][type="image/svg+xml"]')?.getAttribute('href'),
      manifest: document.querySelector('link[rel="manifest"]')?.getAttribute('href'),
      ogImg: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
      twCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content')?.slice(0, 40),
    }));
    // actively fetch the local root-relative assets to prove they exist
    const assets = ['/favicon.svg', '/favicon.ico', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png', '/site.webmanifest', '/og.png'];
    const statuses = await page.evaluate(async (as) => {
      const out = {};
      for (const a of as) { try { out[a] = (await fetch(a)).status; } catch (e) { out[a] = 'ERR'; } }
      return out;
    }, assets);
    const asset404 = Object.entries(statuses).filter(([, s]) => s !== 200);
    console.log(`  ${path}`);
    console.log(`    title: ${info.title}`);
    console.log(`    svg-icon:${info.icon}  manifest:${info.manifest}  tw:${info.twCard}`);
    console.log(`    og:title: ${info.ogTitle}`);
    console.log(`    og:image: ${info.ogImg}`);
    console.log(`    assets all 200: ${asset404.length === 0 ? 'YES' : 'NO → ' + JSON.stringify(Object.fromEntries(asset404))}`);
    const pageBad = bad.filter((b) => !b.includes('beyondparentalcontrols.com') && !b.includes('yourinternetroadmap.com'));
    if (pageBad.length) console.log(`    ⚠ page errors: ${pageBad.join(' | ')}`);
  }
  await page.close();
  srv.close();
}

const browser = await chromium.launch();
try {
  await check(browser, join(root, 'apps', 'parent'),
    ['/', '/plan.html?child=Milo&age=9&for=neutral&platform=apple&approach=balanced', '/research.html', '/privacy/'], 'PARENT');
  await check(browser, join(root, 'apps', 'kid'),
    ['/', '/?child=Milo&age=9'], 'KID');
} finally {
  await browser.close();
}
