import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { LogoutPage } from "../pages/LogoutPage";
import fs from 'fs'

//  test('AddToCart', async ({ page }) => {
//      test.setTimeout(120000);
//      const testdata = JSON.parse(fs.readFileSync('./Testdata.json', 'utf8'))
//      for (const data of testdata) {
//      const loginPage: LoginPage = new LoginPage(page)
// //     await page.goto('https://www.saucedemo.com/')
// //     await loginPage.login(data.username,data.password)
// //     const homePage: HomePage = new HomePage(page)
// //     await homePage.addRemove()
// //     const logoutPage: LogoutPage = new LogoutPage(page)
// //     await logoutPage.logout()
//      }
//      await page.close();
//  })

test('AddToCarte', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('https://www.saucedemo.com/')
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const logoutPage = new LogoutPage(page)
    await loginPage.login('standard_user', 'secret_sauce')
    await homePage.addRemove()
    await logoutPage.logout()
    await page.close()
})

// test('AddToCartt', async ({ page }) => {
//     test.setTimeout(120000);
//     const testdata = JSON.parse(fs.readFileSync('./Testdata.json', 'utf8'))
//     for (const data of testdata) {
//         await page.goto('https://www.saucedemo.com/');
//         await page.locator('#user-name').fill(data.username);
//         await page.locator('#password').fill(data.password);
//         await page.locator('#login-button').click();
//         await page.locator('#add-to-cart-sauce-labs-backpack').click();
//         await page.locator('#remove-sauce-labs-backpack').click();
//         await page.locator('#react-burger-menu-btn').click();
//         await page.locator('#logout_sidebar_link').click();
//     }
//     await page.close();
// });
