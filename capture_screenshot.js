import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // often needed in containerized envs
        });
        const page = await browser.newPage();

        // Set a reasonable desktop viewport
        await page.setViewport({ width: 1440, height: 1000 });

        console.log('Navigating to otademo.easygds.com...');
        await page.goto('https://otademo.easygds.com', { waitUntil: 'networkidle0', timeout: 60000 });

        console.log('Taking screenshot...');
        await page.screenshot({ path: 'public/otademo_homepage.png' });

        await browser.close();
        console.log('Screenshot saved to public/otademo_homepage.png');
    } catch (error) {
        console.error('Error taking screenshot:', error);
        process.exit(1);
    }
})();
