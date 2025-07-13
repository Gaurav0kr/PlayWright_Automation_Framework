const {test} = require ('@playwright/test');


test('Browser context Playwright test',async ({browser})=>
{

    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://gmail.com");
});

test('First practice for testOnly Playwright test',async ({page})=>
{

    await page.goto("https://amazon.com");
});
test('Second practice for testOnly Playwright test',async ({page})=>
{

    await page.goto("https://facebook.com");
});