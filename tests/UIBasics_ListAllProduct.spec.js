const {test, expect} = require ('@playwright/test');

test('Listing products',async ({page})=>
{   
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    console.log("Successfully clicked on signin button");
    console.log(await page.title());
    await page.waitForLoadState('networkidle');
    //await expect(page.locator(".card-body b").first()).toBeVisible();
    //await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    
});
test.only ('UI-Control',async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName = page.locator("#username");
    const passWord = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    await userName.fill("Gauravtestuser1@gmail.com");
    await passWord.fill("Gauravtestuser123");
    await dropdown.selectOption("Teacher");
    //await page.pause();
    console.log("teacher is selected");
    await page.locator(".radiotextsty").nth(1).click();
    console.log("user is selected");
    await page.locator("#okayBtn").click();
    console.log(page.locator(".radiotextsty").nth(1).isChecked);
    await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
    await page.pause();
    // To uncheck a checkbox, You can use uncheck() method 
    await page.locator("#terms").uncheck();
    //since we don't have any readymade method to validate unchecked checkbox so we can use below trick
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(page.locator("[target='_blank']")).toHaveAttribute('class','blinkingText');
    console.log("BlickingText is validated");

});

