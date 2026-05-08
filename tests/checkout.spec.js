import { test, expect } from '@playwright/test';
import { LoginFeature } from '../pages/LoginFeature';
const credentials = require('../data/credentials');

// Created using the codegen playwright feature

test('Add to Cart & Checkout', async ({ page }) => {
  const loginFeature = new LoginFeature(page);
      await loginFeature.goto();
      await loginFeature.login(credentials.standard.username,credentials.standard.password);

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Edu');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Ruiz');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('29016');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});


test('Checkout with missing required fields', async ({ page }) => {
  const loginFeature = new LoginFeature(page);
  
      await loginFeature.goto();
      await loginFeature.login(credentials.standard.username,credentials.standard.password);

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Leave fields empty and try to continue
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: First Name is required');
});


test('Checkout empty cart', async ({ page }) => {
  const loginFeature = new LoginFeature(page);
  
      await loginFeature.goto();
      await loginFeature.login(credentials.standard.username,credentials.standard.password);

  // Enter the Chart without having selected any product
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Fill postal info and continue
  await page.locator('[data-test="firstName"]').fill('Edu');
  await page.locator('[data-test="lastName"]').fill('Ruiz');
  await page.locator('[data-test="postalCode"]').fill('29016');
  await page.locator('[data-test="continue"]').click();

   // assert for title and total value paid
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await expect(page.locator('[data-test="total-label"]')).toContainText('0.00');

});