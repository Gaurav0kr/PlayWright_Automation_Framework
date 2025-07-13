const {test, expect} = require ('@playwright/test');


test('Browser context Playwright test',async ({browser})=>
{

    const context = await browser.newContext();
    const page =await context.newPage();
    const userName = page.locator("#username");
    const passWord = page.locator("[type='password']")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator("#username").fill("Gauravtestuser1@gmail.com");
    await page.locator("[type='password']").fill("Gauravtestuser123");
    await page.locator("#terms").click();
    await page.locator("[type='submit']").click();
    console.log("Successfully clicked on signin button");
    console.log(await page.locator("[style*='block']").textContent());
// asertion on error text message
    await expect(page.locator("[style*='block']")).toContainText("username/password.");
    console.log("error message validated successfullly");
    await userName.fill("");
    await passWord.fill("");
    await userName.fill("rahulshettyacademy");
    await passWord.fill("learning");
    await page.locator("[type='submit']").click();
    console.log(await page.title());
    
    //console.log(await pageTitle.nth(0).textContent());
    await page.waitForLoadState('networkidle');
    const pageTitle = page.locator(".card-body a");
    console.log(await pageTitle.allTextContents());
    
});

test('First Playwright test',async ({page})=>
{

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});