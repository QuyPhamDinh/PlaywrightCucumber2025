import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  firefox,
  webkit,
} from "@playwright/test";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  constructor(options: IWorldOptions) {
    super(options);
  }

  async setupBrowser(useAuth = false) {
    const browserType = process.env.BROWSER || "chromium"; // Default to Chromium
    console.log(`Running tests on: ${browserType}`);
    const headless = process.env.HEADLESS === "true";

    // Dynamically launch the selected browser
    switch (browserType) {
      case "firefox":
        this.browser = await firefox.launch({ headless });
        break;
      case "webkit":
        this.browser = await webkit.launch({ headless });
        break;
      case "chromium":
      default:
        this.browser = await chromium.launch({ headless });
        break;
    }

    // this.context = await this.browser.newContext();
    this.context = await this.browser.newContext({
      storageState: useAuth ? "tests/testData/auth.json" : undefined, // Load auth only when needed
    });
    this.page = await this.context.newPage();
  }

  async saveAuthState() {
    await this.context.storageState({ path: "tests/testData/auth.json" }); // Save authentication state
  }

  async closeBrowser() {
    await this.browser.close();
  }
}
setWorldConstructor(CustomWorld);
