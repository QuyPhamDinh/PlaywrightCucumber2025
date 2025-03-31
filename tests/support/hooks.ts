import { Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "./world";

Before(async function (this: CustomWorld, { pickle }) {
  const useAuth = pickle.tags.some((tag) => tag.name === "@login");
  console.log("Before hook: Setting up browser...");
  await this.setupBrowser(useAuth);
});

After(async function (this: CustomWorld) {
  console.log("After hook: Closing browser...");
  try {
    await this.closeBrowser();
  } catch (error) {
    console.error("Error closing browser:", error);
  }
});
