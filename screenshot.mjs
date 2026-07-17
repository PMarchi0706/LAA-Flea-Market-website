import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('C:/Users/Porte/AppData/Local/Temp/puppeteer-test/package.json');
const puppeteer = require('puppeteer');

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const OUT_DIR = join(__dirname, 'temporary screenshots');

await mkdir(OUT_DIR, { recursive: true });

// auto-increment index
let max = 0;
try {
  for (const f of await readdir(OUT_DIR)) {
    const m = f.match(/^screenshot-(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
} catch {}
const n = max + 1;
const outPath = join(OUT_DIR, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved ${outPath}`);
