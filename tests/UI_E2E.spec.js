const {test,expect} = require('@playwright/test');

test("UI E2E test", async ({page}) => {

       const email = "Gauravtestuser1@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Gauravtestuser123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() == productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

    page.locator("[placeholder='Select Country']").pressSequentially("ind"); 
    await page.waitForTimeout(2000);
    const dropdown = page.locator(".ta-results");
    const optionsCount= await dropdown.locator("button").count();
    console.log(optionsCount);
    for(let i =0;i<optionsCount;i++){
const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
    }
  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order.");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("text=' Orders History Page '").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr ");


    for(let i=0;i<await rows.count();i++){
        const rowOrderId = await rows.nth(i).locator("th").textContent();

        if(orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetail = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetail)).toBeTruthy();
    console.log(orderIdDetail);

});