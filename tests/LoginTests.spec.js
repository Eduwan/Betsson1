import { test, expect } from '@playwright/test';
import { LoginFeature } from '../pages/LoginFeature';
const credentials = require('../data/credentials');

test.describe('Login Feature Tests', () => {

  test('Successful login', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.standard.username,credentials.standard.password);

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Invalid password', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.wrong.username, credentials.wrong.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Locked user login', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.locked.username, credentials.locked.password);

    const error = await loginFeature.getErrorMessage();
    expect(error).toContain('locked out');
  });

  test('Empty credentials', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.empty.username, credentials.empty.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

 test('Case sensitive username', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.upperUser.username, credentials.upperUser.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Case sensitive password', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login(credentials.upperPass.username, credentials.upperPass.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });


});