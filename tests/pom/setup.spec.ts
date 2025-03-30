import test, { expect } from "@playwright/test";

import { RegistrationPage } from "./registrationPage";
import { User } from "@model/user";

test("Register and save authentication state", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/register.htm");

  const registrationPage = new RegistrationPage(page);

  const fakeUser = User.generateFakeUser();

  await registrationPage.fillForm(fakeUser);

  await registrationPage.submit();

  const expectWelcomMessage = "Welcome " + fakeUser.username;
  expect
    .soft(await registrationPage.getWelcomeMessage())
    .toEqual(expectWelcomMessage);
  expect(await registrationPage.getSuccessfulMessage()).toEqual(
    "Your account was created successfully. You are now logged in."
  );

  await page.context().storageState({ path: "tests/testData/auth.json" });
});
