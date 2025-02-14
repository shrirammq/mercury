import test from "@playwright/test";

test('Radio Button Actions', async ({ page }) => {
    await page.goto('https://www.getpancard.com/apply-new-pan-card-online')
    const rbMale = page.locator('#rblGender_0')
    console.log(await rbMale.isVisible())
    console.log(await rbMale.isEnabled())
    console.log(await rbMale.isChecked())
    await page.waitForTimeout(5000)
    await rbMale.click()
    console.log(await rbMale.isChecked())
    await page.waitForTimeout(5000)
    await page.close()

})