# SauceDemo Automation Tests - Login + Checkout (Playwright + JavaScript)

This project contains automated UI tests for the login feature of https://www.saucedemo.com/
and for the product checkout process using Playwright with JavaScript.

It covers positive, and negative test cases and generates HTML test reports.

## Test Coverage

- Valid login (standard_user)
- Invalid username/password combinations
- Locked out user
- Empty credentials
- Case sensitive credentials
- Successful checkout (done with playwright codegen)
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

1. tests/
  LoginTests.spec.js
  checkout.specs.js
2. pages/
  LoginFeature.js
3. playwright.config.js
4. package.json
5. test-results.json


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
