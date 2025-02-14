import { test } from "@playwright/test";
test('Click Action using JavaScript', async ({ browser }) => {
    let page = browser.newPage()
    ;(await page).goto('https://www.saucedemo.com/')
    ;(await page).close()
    
})
