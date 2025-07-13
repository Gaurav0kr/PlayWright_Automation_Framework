const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');


const loginPayload = { userEmail: "Gauravtestuser1@gmail.com", userPassword: "Gauravtestuser123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8" }] };
let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
});


test("@API injected UI TestCase", async ({ page }) => {

    page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator("button[routerlink*='myorders']").click();

    //console.log(orderId);

    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");


    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();

        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetail = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetail)).toBeTruthy();
    console.log(orderIdDetail);

});

