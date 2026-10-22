import { test, expect } from '@playwright/test';

const BASE_URL = 'https://seleniumbase.io/coffee/';

test.describe('Coffee Shop', () => {
 
  test('TC_CF_01 - Check total for 1 coffee', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('div[data-sb="Cafe-Latte"]').click();
    await page.locator('a[aria-label="Cart page"]').click();
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $16.00');
  });


  test('TC_CF_02 - Check total for 3 coffees', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('div[data-sb="Mocha"]').click();
    await page.locator('div[data-sb="Flat-White"]').click();
    await page.locator('div[data-sb="Cappuccino"]').click();
    await page.locator('a[aria-label="Cart page"]').click();
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $45.00');
  });



  test('TC_CF_03 - Check total for 2 units of the same coffee', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('div[data-sb="Americano"]').click();
    await page.locator('a[aria-label="Cart page"]').click();
    await page.getByRole('button', {
      name: 'Add one Americano'
    }).first().click();
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $14.00');

});

});
