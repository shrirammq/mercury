import test, { expect } from "@playwright/test";
import { log } from "console";


test('How to interact with Listbox', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select_multiple')
    const frame = page.frameLocator('id=iframeResult')
    const lstCars = frame.locator('#cars')
    lstCars.selectOption([{index:0},{index:2},{index:3}])
    await page.waitForTimeout(5000)
    await page.close()

})