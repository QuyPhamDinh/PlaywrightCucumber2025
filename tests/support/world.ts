import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium, firefox, webkit } from "@playwright/test";
let page: Page;
let browser: Browser;
setDefaultTimeout(60000);
Before(async () => {
  const browserType = process.env.BROWSER || "chromium"; // Default to Chromium
  console.log(`Running tests on: ${browserType}`);
  const headless = process.env.HEADLESS === "true";

  // Dynamically launch the selected browser
  switch (browserType) {
    case "firefox":
      browser = await firefox.launch({ headless });
      break;
    case "webkit":
      browser = await webkit.launch({ headless });
      break;
    case "chromium":
    default:
      browser = await chromium.launch({ headless });
      break;
  }

  const context = await browser.newContext();
  page = await context.newPage();
});
After(async () => {
  await browser.close();
});
export { page, browser };
