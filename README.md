# PlaywrightCucumber2025

# Playwright + Cucumber BDD Testing

This project integrates **Playwright** for browser automation and **Cucumber** for Behavior-Driven Development (BDD) testing using TypeScript.

## Table of Contents

- [Project Setup](#project-setup)
- [Running Tests](#running-tests)
  - [Headless Mode](#headless-mode)
  - [Running Tests on Different Browsers](#running-tests-on-different-browsers)
- [Cucumber Features and Step Definitions](#cucumber-features-and-step-definitions)
- [Debugging](#debugging)
- [Environment Variables](#environment-variables)

## Project Setup

To get started, clone this repository and install the required dependencies:

```bash
git clone https://github.com/QuyPhamDinh/PlaywrightCucumber2025.git
cd PlaywrightCucumber2025
npm install
```

BDD Automation Framework with Cucumber and Playwright
📌 Overview
This project is a Behavior-Driven Development (BDD) automation framework using:

Cucumber.js for test scenarios in Gherkin syntax.

Playwright for browser automation.

TypeScript for type safety and better maintainability.

The framework supports:
✔ Multiple browsers (Chromium, Firefox, WebKit)
✔ Headless/headed mode
✔ Authentication state persistence
✔ Page Object Model (POM) for maintainability

📂 Project Structure
bash
Copy
./tests/
├── features/ # Gherkin feature files
│ ├── login.feature # Login test scenarios
│ └── registration.feature # Registration test scenarios
│
├── model/ # Data models
│ └── user.ts # Fake user generator
│
├── pom/ # Page Object Model (POM) classes
│ ├── leftPanel.ts # Left panel POM
│ ├── registrationPage.ts # Registration page POM
│ └── setup.spec.ts # (Optional) Playwright setup tests
│
├── steps/ # Step definitions
│ ├── login.steps.ts # Login step implementations
│ └── registration.steps.ts # Registration step implementations
│
├── support/ # Framework setup
│ ├── hooks.ts # Cucumber hooks (Before/After)
│ └── world.ts # Custom World for Playwright setup
│
└── testData/ # Test data
└── auth.json # Saved authentication state
🚀 Setup & Execution

1. Install Dependencies
   bash
   Copy
   npm install
2. Run Tests
   Command Description
   npm run test:bdd Runs all BDD tests (default: Chromium, headless)
   BROWSER=firefox npm run test:bdd Runs tests in Firefox
   BROWSER=webkit npm run test:bdd Runs tests in WebKit
   HEADLESS=false npm run test:bdd Runs tests in headed mode
   npx cucumber-js --tags "@login" Runs only scenarios with @login tag
   npx cucumber-js --tags "@setup" Runs only scenarios with @setup tag
   🔧 Key Features
3. Multi-Browser Support
   Configure the browser via BROWSER env variable:

bash
Copy
BROWSER=firefox npm run test:bdd # Firefox
BROWSER=webkit npm run test:bdd # WebKit
BROWSER=chromium npm run test:bdd # Chromium (default) 2. Headless/Headed Mode
Toggle headless mode with HEADLESS:

bash
Copy
HEADLESS=false npm run test:bdd # Run in headed mode (visible browser)
HEADLESS=true npm run test:bdd # Run in headless mode (default) 3. Authentication State Persistence
The @login scenario saves auth state in tests/testData/auth.json.

Subsequent runs can reuse this state by passing useAuth: true in hooks.

4. Page Object Model (POM)
   pom/ contains reusable page classes.

Example: registrationPage.ts handles form interactions.

📝 Example Test Execution
Run Registration Test (Save Auth State)
bash
Copy
BROWSER=firefox HEADLESS=false npm run test:bdd -- --tags "@setup"
Opens Firefox in headed mode.

Registers a new user.

Saves auth state in auth.json.

Run Login Test (Reuse Auth State)
bash
Copy
BROWSER=firefox HEADLESS=false npm run test:bdd -- --tags "@login"
Reuses saved auth state for login.

Verifies successful login.

🔧 Troubleshooting
Issue: Browser Not Closing
✅ Fix: Ensure After hook is called (check for unhandled errors).

Issue: Auth State Not Saving
✅ Fix:

Confirm saveAuthState() is called in the registration test.

Check file permissions for auth.json.

Issue: Tests Fail in Headless Mode
✅ Fix:

Add delays if needed (await page.waitForTimeout(1000)).

Debug with HEADLESS=false.
