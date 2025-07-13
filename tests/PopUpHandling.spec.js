const { test, expect } = require('@playwright/test');

test("PipUp Handling", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://google.com");

    await page.goBack();
    const bool1 = await expect(page.locator("#displayed-text")).toBeVisible();
    console.log(bool1);
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#show-textbox").click();
    const bool2 =await expect(page.locator("#displayed-text")).toBeVisible();
    console.log(bool2);
    console.log("Visible and Hidden PopUp Handling Test Passed  ");

    page.on('dialog', async dialog=>
    {
        console.log(dialog.message());
    await dialog.accept();
    }
    )
    await page.locator("#confirmbtn").click();
    console.log("Confirm PopUp Handling Test Passed  ");
    await page.locator("#alertbtn").click();
    console.log("Alert and Confirm PopUp Handling Test Passed  ");

    //Mouse over
    await page.locator("#mousehover").hover();
const hoverText = await page.locator(".mouse-hover-content").allTextContents();
console.log(hoverText);

const pageFrame = page.frameLocator("#courses-iframe");
await pageFrame.locator("li a[href='lifetime-access']:visible").click();
const textToCheck = await pageFrame.locator(".text h2").textContent();
console.log(textToCheck);
console.log(textToCheck.split(" ")[1]);

    
});

