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

    // Chrome's print pipeline rasterizes <video> elements at their native
    // decoded resolution as lossless (FlateDecode) PDF images, which can
    // each weigh 1-1.5MB. Swap each <video> for a downscaled JPEG snapshot
    // of its current frame before printing to drastically shrink the PDF.
    await page.evaluate(() => {
      const MAX_DIM = 800;
      const QUALITY = 0.75;
      document.querySelectorAll('video-slot').forEach((slot) => {
        const root = slot.shadowRoot;
        const video = root && root.querySelector('video');
        if (!video || !video.videoWidth || !video.videoHeight) return;
        const scale = Math.min(1, MAX_DIM / Math.max(video.videoWidth, video.videoHeight));
        const w = Math.round(video.videoWidth * scale);
        const h = Math.round(video.videoHeight * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', QUALITY);
        const img = document.createElement('img');
        img.src = dataUrl;
        img.style.cssText =
          'position:absolute;inset:0;width:100%;height:100%;object-fit:' +
          (video.style.objectFit || 'cover') + ';';
        video.style.display = 'none';
        root.appendChild(img);
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
