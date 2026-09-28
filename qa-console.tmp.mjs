import puppeteer from 'puppeteer-core';

const BASE = process.env.BASE || 'https://coffe-shop-2.vercel.app';
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'shell',
  args: ['--no-sandbox', '--hide-scrollbars'],
});

const targets = [
  ['/en', 'home en (map section)'],
  ['/fr', 'home fr'],
  ['/en/location', 'location en (map page)'],
  ['/en/about', 'about en (no map)'],
];

for (const [path, label] of targets) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const logs = [];
  page.on('console', (m) => logs.push(`[console.${m.type()}] ${m.text().slice(0, 160)} @ ${m.location().url.slice(0, 90)}`));
  page.on('requestfailed', (r) => logs.push(`[reqfail] ${r.url().slice(0, 140)} :: ${r.failure()?.errorText}`));
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem('bloo-coffee-consent', 'accepted'); } catch {}
  });
  await page.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise((r) => setTimeout(r, 6000));
  console.log(`\n==== ${path} (${label}) ====`);
  const seen = new Set();
  for (const l of logs) {
    const key = l.replace(/@ .*$/, '');
    if (!seen.has(key)) { seen.add(key); console.log('  ' + l); }
  }
  if (!logs.length) console.log('  (no console messages)');
  await page.close();
}
await browser.close();
console.log('\ndone');