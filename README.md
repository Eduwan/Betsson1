# SauceDemo Automation Tests - Login + Checkout (Playwright + JavaScript)

This project contains automated UI tests for the login feature of https://www.saucedemo.com/
using Playwright with JavaScript.

It covers positive, and negative test cases and generates HTML test reports.

## Test Coverage

- Valid login (standard_user)
- Invalid username/password combinations
- Locked out user
- Empty credentials
- Case sensitive credentials
- Successful checkout
- Unsucessful checkout (missing postal details) 
- Basic UI validation (error messages, titles, texts displayed)

## Technology used

- Playwright
- JavaScript (Node.js)
- npm

## Design Approach

- Page Object Model (POM)
- Reusable page classes
- Independent test cases
- Playwright test runner


## Project Structure

tests/
  LoginTests.spec.js
  checkout.specs.js
pages/
  LoginFeature.js
playwright.config.js
package.json
test-results.json


## Installation

1. Clone the repository:
   git clone https://github.com/Eduwan/Betsson1.git

2. Install dependencies:
   npm install

3. Install Playwright browsers:
   npx playwright install


## Run Tests

Run all tests:
npx playwright test

or run them individually:
1. npx playwright test tests/LoginTests.spec.js
2. npx playwright test tests/checkout.spec.js


## Test Reports

Generate and view HTML report:
npx playwright show-report
