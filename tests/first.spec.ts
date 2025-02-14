import test, { chromium, firefox, webkit, Browser, Page } from "@playwright/test";

test('Function with optional parameters using class', async () => {
  const controller = new Controller();
  await controller.visit('chromium', 'https://playwright.dev/');
});

class Controller {
  private browser: Browser | undefined;
  private page: Page | undefined;

  async visit(browserType: string, url: string) {

    try {
      switch (browserType) {
        case 'chromium':
          this.browser = await chromium.launch({ headless: false });
          break;
        case 'firefox':
          this.browser = await firefox.launch({ headless: false });
          break;
        case 'webkit':
          this.browser = await webkit.launch({ headless: false });
          break;
        default:
          throw new Error('Unsupported browser type: ' + browserType);
      }
      this.page = await (await this.browser.newContext()).newPage();
      await this.page.goto(url);
      await this.page.waitForTimeout(3000);
    } catch (error) {
      console.error('Error during test execution:', error);
    } finally {
      if (this.page) {
        await this.page.close();
      }
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}
