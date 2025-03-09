import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/r.php?entry_point=login');
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Aniket');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('Thakre');
  await page.getByLabel('Day').selectOption('18');
  await page.getByLabel('Month').selectOption('11');
  await page.getByLabel('Year').selectOption('1996');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('aniketthakre3499@gmail.com');
  await page.getByRole('textbox', { name: 'New password' }).click();
  await page.getByRole('textbox', { name: 'New password' }).fill('Password');
});