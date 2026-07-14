const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.url().includes('hero-bg')) {
      console.log('Hero bg response:', response.url(), response.status());
    }
  });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const heroImageSrc = await page.evaluate(() => {
    const img = document.querySelector('img[alt="Employer hiring landscape"]');
    return img ? { src: img.src, srcset: img.srcset, width: img.width, height: img.height, visible: img.offsetParent !== null } : null;
  });
  
  console.log("Hero Image:", heroImageSrc);
  await browser.close();
})();
