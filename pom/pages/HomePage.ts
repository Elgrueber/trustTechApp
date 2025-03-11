import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {

    constructor(private page: Page) { }

    getLinkByName(name: string): Locator {
        return this.page.getByRole('link', { name });
    }
}