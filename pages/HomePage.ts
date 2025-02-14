import { Page } from "@playwright/test";

export class HomePage {
    private page: Page
    private btnAdd: string = '#add-to-cart-sauce-labs-backpack'
    private btnRemove: string = '#remove-sauce-labs-backpack'

    constructor(page: Page) {
        this.page = page
    }


    async addRemove(): Promise<void> {
        await this.page.locator(this.btnAdd).click()
        await this.page.locator(this.btnRemove).click()
    }


}