import { Page } from "@playwright/test"

export class LoginPage {

    private page: Page
    private txtUserName: string = '#user-name'
    private txtPassword: string = '#password'
    private btnLogin: string = '#login-button'

    constructor(page: Page) {
        this.page = page
    }

    async login(userName: string, password: string): Promise<void> {
        await this.page.locator(this.txtUserName).fill(userName)
        await this.page.locator(this.txtPassword).fill(password)
        await this.page.locator(this.btnLogin).click()
    }

}