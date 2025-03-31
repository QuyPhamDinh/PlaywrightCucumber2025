import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LeftPanel } from "../pom/leftPanel";
import { page } from "../support/world";

Given("the user is on the login page", async function () {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
});

Then("the user should be logged in successfully", async function () {
  const leftPanel = new LeftPanel(page);

  expect(await leftPanel.isLogoutPresent()).toBeTruthy();
});
