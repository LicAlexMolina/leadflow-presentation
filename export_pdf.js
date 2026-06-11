/**
 * export_pdf.js — exports leadflow_final.html to a backup PDF
 * (one full 1920x1080 slide per page), using the deck's built-in
 * print stylesheet (@media print + dynamic @page rule).
 *
 * Usage:
 *   npm install        (first time only — installs puppeteer-core)
 *   node export_pdf.js
 *
 * Output: LeadFlow_Intelligence_Backup.pdf (project root)
 *
 * Requires a local Chrome/Edge install. Set CHROME_PATH env var to override
 * the auto-detected executable.
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CANDIDATE_CHROME_PATHS = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);

function findChrome() {
  for (const p of CANDIDATE_CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error(
    'Could not find Chrome or Edge. Set the CHROME_PATH environment variable ' +
    'to your browser executable, e.g.\n' +
    '  $env:CHROME_PATH="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"; node export_pdf.js'
  );
}

(async () => {
  const htmlPath = path.resolve(__dirname, 'leadflow_final.html');
  const outPath = path.resolve(__dirname, 'LeadFlow_Intelligence_Backup.pdf');
  const url = 'file:///' + htmlPath.split('\\').join('/').split(' ').join('%20');

  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: 'new',
    args: ['--no-sandbox', '--allow-file-access-from-files'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // 'load' (not 'networkidle0') — the deck's autoplaying/looping videos
    // keep the network busy indefinitely, so networkidle0 would time out.
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.evaluateHandle('document.fonts.ready');

    // Let entrance animations / custom elements settle before printing.
    await new Promise((r) => setTimeout(r, 1500));

    // Embedded videos make the PDF very heavy and can't play in a static
    // document anyway. For the PDF only, replace each <video-slot>'s video
    // with a card linking to the Google Drive folder that hosts the demo
    // videos. This is a transient change to the in-memory page used for
    // page.pdf() — leadflow_final.html on disk is never touched.
    await page.evaluate(() => {
      const DRIVE_URL = 'https://drive.google.com/drive/folders/1Z7HQvI0mxF5UltRDRPAVBmFV-Ma--HFr?usp=sharing';
      document.querySelectorAll('video-slot').forEach((slot) => {
        const root = slot.shadowRoot;
        const video = root && root.querySelector('video');
        if (video) video.style.display = 'none';
        const card = document.createElement('div');
        card.style.cssText =
          'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' +
          'justify-content:center;gap:14px;text-align:center;padding:32px;box-sizing:border-box;' +
          'background:#10141F;color:#F4F6FC;font-family:system-ui,-apple-system,sans-serif;';
        card.innerHTML =
          '<div style="font-size:24px;font-weight:700;">Ver video en Google Drive</div>' +
          '<a href="' + DRIVE_URL + '" style="color:#5FDC76;font-size:15px;word-break:break-all;text-decoration:underline;">' + DRIVE_URL + '</a>';
        root.appendChild(card);
      });
    });

    await page.pdf({
      path: outPath,
      printBackground: true,
      preferCSSPageSize: true, // use the deck's injected @page { size: 1920px 1080px }
    });

    console.log('PDF exported to', outPath);
  } finally {
    await browser.close();
  }
})();
