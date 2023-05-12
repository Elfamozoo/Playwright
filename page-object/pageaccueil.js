import { expect, page } from '@playwright/test';

export class pageAccueil {
    constructor(page) {
        this.page = page;
    }
    async pageAccueil() {
        await expect(this.page.url()).toBe('https://www.amazon.fr/');
        await this.page.screenshot({ path: 'test-results/Page accueil.png', fullPage: true, });
        await this.page.fill('#twotabsearchtextbox', 'basket nike');
        await this.page.click('#nav-search-submit-button');
    }
}