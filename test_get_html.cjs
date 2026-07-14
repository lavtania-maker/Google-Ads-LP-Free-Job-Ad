const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://ais-pre-uyioyxo4bjtucdeatbg7zx-604262292423.asia-east1.run.app/', { waitUntil: 'networkidle0' });
  const html = await page.evaluate(() => document.body.innerHTML);
  require('fs').writeFileSync('preview_body.html', html);
  await browser.close();
})();
