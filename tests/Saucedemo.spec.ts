import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('SauceDemo - Checkout', () => {

  test('TC-CKO-001 - Verify Checkout button functionality', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill(USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/inventory.html/);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/cart.html/);
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/checkout-step-one.html/);
    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Checkout: Your Information');

  });


  test('TC-CKO-002 - Register in Checkout using valid inputs', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill(USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Omar');
    await page.locator('[data-test="lastName"]').fill('Abdo');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Checkout: Overview');
  });


 test('TC-CKO-012 - Verify Finish button functionality', async ({ page }) => {

  await page.goto(BASE_URL);
  await page.locator('[data-test="username"]').fill(USERNAME);
  await page.locator('[data-test="password"]').fill(PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Omar');
  await page.locator('[data-test="lastName"]').fill('Abdo');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL(/checkout-step-two.html/);
  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Complete!');
  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});
  });
