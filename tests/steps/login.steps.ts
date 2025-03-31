import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LeftPanel } from "../pom/leftPanel";
import { CustomWorld } from "../support/world";

Given("the user is on the login page", async function (this: CustomWorld) {
  await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
});

Then("the user should be logged in successfully", async function () {
  const leftPanel = new LeftPanel(this.page);

  expect(await leftPanel.isLogoutPresent()).toBeTruthy();
});
