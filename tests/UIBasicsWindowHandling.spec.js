const {test, expect} = require ('@playwright/test');


test('Browser context Playwright test',async ({browser})=>
{

    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    const documentLink = page.locator("[target='_blank']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click()
        ]
    );
     const text =await newPage.locator(".im-para.red").textContent();
    console.log(text);
    const email = text.split("@")[1].split(" ")[0];
    console.log(email);
    await page.locator("#username").fill(email);
    await page.pause();
    console.log("email filled");
    
});
