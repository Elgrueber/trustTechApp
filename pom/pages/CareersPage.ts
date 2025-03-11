import { expect, Locator, Page } from '@playwright/test';

export default class CareersPage {

    private registerLink: Locator;

    constructor(private page: Page) {
        this.registerLink = page.locator('role=link[name="Register"]');
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }
}