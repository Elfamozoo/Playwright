import { test, expect, page } from '@playwright/test';

test('compare screenshots', async ({ page }) => {
    await page.goto('https://www.google.fr/');
    await page.getByRole('button', { name: 'Tout accepter' }).click();
    expect(await page.screenshot()).toMatchSnapshot('google.png');

});