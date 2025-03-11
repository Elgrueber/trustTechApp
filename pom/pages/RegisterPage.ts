import { expect, Locator, Page } from '@playwright/test';

export default class RegisterPage {

    constructor(private page: Page) { }

    async getBasicInfoParagraph() {
        const basicInfoParagraph = this.page.getByRole('paragraph', { name: 'Basic Info' });
        return basicInfoParagraph;
    }

    async fillFirstNameField(firstName: string) {
        const firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
        await firstNameField.fill(firstName);
    }

    async fillLastNameField(lastName: string) {
        const lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
        await lastNameField.fill(lastName);
    }

    async fillEmailField(email: string) {
        const emailField = this.page.getByRole('textbox', { name: 'Email' });
        await emailField.fill(email);
    }

    async fillPhoneField(phone: string) {
        const phoneField = this.page.getByRole('textbox', { name: 'Phone' });
        await phoneField.fill(phone);
    }

    async fillCityField(city: string) {
        const cityField = this.page.getByRole('textbox', { name: 'City' });
        await cityField.fill(city);
    }

    async fillStateField(state: string) {
        const stateField = this.page.getByRole('textbox', { name: 'State/Province' });
        await stateField.fill(state);
    }

    async clickResetButton() {
        const resetButton = this.page.getByRole('button', { name: 'Reset' });
        await resetButton.click();
    }

    async clickBrowseResumeLink() {
        const browseResumeLink = this.page.getByRole('link', { name: 'Browse Resume' });
        await browseResumeLink.click();
    }
}