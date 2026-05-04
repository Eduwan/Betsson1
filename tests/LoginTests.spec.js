import { test, expect } from '@playwright/test';
import { LoginFeature } from '../pages/LoginFeature';

test.describe('Login Feature Tests', () => {

  test('Successful login', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Invalid password', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('standard_user', 'wrong_pass');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Locked user login', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('locked_out_user', 'secret_sauce');

    const error = await loginFeature.getErrorMessage();
    expect(error).toContain('locked out');
  });

  test('Empty credentials', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('', '');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

 test('Case sensitive username', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('standard_usER', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Case sensitive password', async ({ page }) => {
    const loginFeature = new LoginFeature(page);

    await loginFeature.goto();
    await loginFeature.login('standard_user', 'secret_Sauce');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });


});