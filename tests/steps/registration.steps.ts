import { Given, When, Then } from "@cucumber/cucumber";
import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pom/RegistrationPage";
import { User } from "../model/user";
import { page } from "../support/world";

let registrationPage: RegistrationPage;
let fakeUser: User;
Given("I am on the registration page", async function () {
  await page.goto("https://parabank.parasoft.com/parabank/register.htm"); // Replace with actual URL
  registrationPage = new RegistrationPage(page);
});

When("I fill in the registration form with valid data", async function () {
  fakeUser = User.generateFakeUser();
  await registrationPage.fillForm(fakeUser);
});

When("I submit the form", async function () {
  await registrationPage.submit();
});

Then("I should see a success message", async function () {
  const expectWelcomMessage = "Welcome " + fakeUser.username;
  expect
    .soft(await registrationPage.getWelcomeMessage())
    .toEqual(expectWelcomMessage);
  expect(await registrationPage.getSuccessfulMessage()).toEqual(
    "Your account was created successfully. You are now logged in."
  );
});
