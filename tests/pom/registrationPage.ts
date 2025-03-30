import { Page, Locator } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phoneNumber: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly submitButton: Locator;

  readonly welcomeMessage: Locator;
  readonly successfulMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#customer\\.firstName");
    this.lastName = page.locator("#customer\\.lastName");
    this.address = page.locator("#customer\\.address\\.street");
    this.city = page.locator("#customer\\.address\\.city");
    this.state = page.locator("#customer\\.address\\.state");
    this.zipCode = page.locator("#customer\\.address\\.zipCode");
    this.phoneNumber = page.locator("#customer\\.phoneNumber");
    this.ssn = page.locator("#customer\\.ssn");
    this.username = page.locator("#customer\\.username");
    this.password = page.locator("#customer\\.password");
    this.confirmPassword = page.locator("#repeatedPassword");
    this.submitButton = page.getByRole("button", { name: "Register" });

    this.welcomeMessage = page.locator("#rightPanel h1");
    this.successfulMessage = page.locator("#rightPanel p");
  }

  async fillForm(data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.address.fill(data.address);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.zipCode.fill(data.zipCode);
    await this.phoneNumber.fill(data.phoneNumber);
    await this.ssn.fill(data.ssn);
    await this.username.fill(data.username);
    await this.password.fill(data.password);
    await this.confirmPassword.fill(data.confirmPassword);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getWelcomeMessage(): Promise<string | null> {
    return this.welcomeMessage.textContent();
  }

  async getSuccessfulMessage(): Promise<string | null> {
    return this.successfulMessage.textContent();
  }
}
