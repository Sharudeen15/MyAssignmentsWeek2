const { test } = require('@playwright/test');
const { webkit } = require('playwright');

test('Flipkart WebKit Launch', async () => {

    const browser = await webkit.launch({ headless: false });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com');

    console.log(await page.title());
    console.log(page.url());

    await browser.close();

});