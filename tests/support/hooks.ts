// import { Before, After } from "@cucumber/cucumber";
// import { chromium } from "@playwright/test";
// import { CustomWorld } from "./world";

// Before(async function (this: CustomWorld) {
//   const browser = await chromium.launch({ headless: false });
//   this.context = await browser.newContext();
//   this.page = await this.context.newPage();
// });

// After(async function (this: CustomWorld) {
//   await this.page.close();
//   await this.context.close();
// });
