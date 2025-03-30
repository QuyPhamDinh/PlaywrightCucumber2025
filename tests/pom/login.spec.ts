import test, { expect } from "@playwright/test";
import { LeftPanel } from "./leftPanel";

test("test login from save storage state", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  const leftPanel = new LeftPanel(page);

  expect(await leftPanel.isLogoutPresent()).toBeTruthy();
});
