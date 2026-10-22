import { test, expect } from '@playwright/test';

const BASE_URL = 'https://seleniumbase.io/coffee/';

test.describe('Coffee Shop', () => {
 
  test('Coffee_001 - Verify the total price once buy one coffee', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('div[data-sb="Cafe-Latte"]').click();
    await page.locator('a[aria-label="Cart page"]').click();
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $16.00');
  });


  test('Coffee_002 - Verify the total price once buy three coffee', async ({ page }) => {

    await page.goto(BASE_URL);
    await page.locator('div[data-sb="Mocha"]').click();
    await page.locator('div[data-sb="Flat-White"]').click();
    await page.locator('div[data-sb="Cappuccino"]').click();
    await page.locator('a[aria-label="Cart page"]').click();
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $45.00');
  });



  test('Coffee_003 - Verify the total price once buy the same kind of coffee 2 units', async ({ page }) => {

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
