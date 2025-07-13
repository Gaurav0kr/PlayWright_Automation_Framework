const {test,expect} = require('@playwright/test');

test("Labels test", async ({page}) => {

    page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Employed").check();
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.locator("form div input[name='name']").fill("Gaurav");
    await page.locator("input[name='email']").fill("Gauravtestuser1@gmail.com");
    await page.getByPlaceholder("Password").fill("gaurav123");
    await page.getByRole("button", {name: "Submit"}).click();
    const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    console.log(bool);
    await page.getByRole("link", {name:"Shop"}).click();
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();
    console.log("test completed   ");

});