const puppeteer = require('puppeteer');
let url = 'https://www.riau.go.id/';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized','--disable-dev-shm-usage'],
        defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.waitFor(500);
    // await page.screenshot({path: 'image/riau.go.id.png', fullPage: true});
    await browser.close();

})();
