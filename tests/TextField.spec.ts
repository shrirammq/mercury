import test from "@playwright/test"
import { describe } from "node:test"

describe('How to use describe Annotation', () => {
    test('How to handle Simple Alert', async ({ page }) => {
        try {
            await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete14/dialogs/#')
            page.on('dialog', async (dialog) => {
                console.log("Information Message:" + dialog.message())
                console.log("Alert Type:" + dialog.type())
                dialog.accept()
            })
            await page.getByText('Show Alert').click();
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            await page.close();
        }
    });

    test('How to handle Confirmation Alert', async ({ page }) => {
        try {
            await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete14/dialogs/#')
            page.on('dialog', async (dialog) => {
                console.log("Information Message:" + dialog.message())
                console.log("Alert Type:" + dialog.type())
                dialog.dismiss()
            })
            await page.getByText('Show Confirm').click();
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            await page.close();
        }
    });

    test('How to handle Prompt Alert', async ({ page }) => {
        try {
            await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete14/dialogs/#')
            page.on('dialog', async (dialog) => {
                console.log("Information Message:" + dialog.message())
                console.log("Alert Type:" + dialog.type())
                console.log("Alert Default Value:" + dialog.defaultValue())
                dialog.accept('SRIKRISHNA')
            })
            await page.getByText('Show Prompt').click();
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            await page.close();
        }

    })
})
