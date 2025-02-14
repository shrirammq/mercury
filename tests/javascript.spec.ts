import test, { expect } from "@playwright/test";


test('How to use Javascript',async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.waitForTimeout(2000)
    await page.evaluate('history.back()')
    await page.waitForTimeout(2000)
    await page.evaluate('history.forward()')
    await page.waitForTimeout(2000)
    await page.evaluate('history.go(0)')
    await page.waitForTimeout(5000)
    await page.close()
})


test('How to enter data in Text FIled suign JavaScript', async ({ page }) => {
    await page.goto('https://emicalculator.net/')
    await page.waitForTimeout(2000)
    await page.evaluate("document.getElementById('loaninterest').value='13.5'")
    console.log(await page.evaluate("document.getElementById('loaninterest').value"))
    await page.waitForTimeout(5000)
    await page.close()
    
})

test('How to click on element using Javascript', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)
    await page.locator('#login-button').click()
    await page.waitForTimeout(5000)
    await page.close()
})

test('How to Highlight an Object using Javascript', async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/data_rendering.html')
    await page.waitForTimeout(2000)
    await page.setViewportSize({width:1500,height:1200})
    await page.waitForTimeout(5000)
    await page.title()
    await page.close()
})



