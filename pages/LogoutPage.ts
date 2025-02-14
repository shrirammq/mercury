import { Page } from "@playwright/test";

export class LogoutPage {

    private page: Page
    private btnIcon: string = '#react-burger-menu-btn'
    private lnkLogout: string = '#logout_sidebar_link'

    constructor(page: Page) {
        this.page = page
    }

    async logout(): Promise<void> {
        await this.page.locator(this.btnIcon).click()
        await this.page.locator(this.lnkLogout).click()
    }


}