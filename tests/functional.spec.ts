import { test, expect } from '@playwright/test';
import { LINKS } from '../testData';
import HomePage from '../pom/pages/HomePage';
import CareersPage from '../pom/pages/CareersPage';
import RegisterPage from '../pom/pages/RegisterPage';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('TRUSTECH');
});

test.describe('navigation', () => {
  for (const link of LINKS) {
    test(`navigation to ${link.name}`, async ({ page }) => {
      await page.goto('/');

      const homePage = new HomePage(page);
      await homePage.getLinkByName(link.name).click();
      const title = await page.title();

      expect(title).toContain(link.title);
    });
  }
});

test(`fill form to apply`, async ({ page }) => {
  await page.goto('/');

  const homePage = new HomePage(page);
  const careerPage = new CareersPage(page);
  const registerPage = new RegisterPage(page);

  const link = LINKS[3];
  await homePage.getLinkByName(link.name).click();
  const title = await page.title();

  expect(title).toContain('CAREERS');

  await careerPage.clickRegisterLink();
  // await expect(await registerPage.getBasicInfoParagraph()).toHaveText('Basic Info');

  await registerPage.fillFirstNameField('John');
  await registerPage.fillLastNameField('Doe');
  await registerPage.fillEmailField('john.doe@example.com');
  await registerPage.fillPhoneField('1234567890');
  await registerPage.fillCityField('New York');
  await registerPage.fillStateField('NY');
  await registerPage.clickResetButton();
});
