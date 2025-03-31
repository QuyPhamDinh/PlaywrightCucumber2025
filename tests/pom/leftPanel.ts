import { Locator, Page } from "@playwright/test";

export class LeftPanel {
  readonly page: Page;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = this.page.locator("#leftPanel a[href='logout.htm']");
  }

  async isLogoutPresent() {
    return await this.logoutLink.isVisible();
  }
}
