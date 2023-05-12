import { page } from "@playwright/test";

export class pagePanier {
    constructor(page) {
        this.page = page;
    }
    async pagePanier() {
        await this.page.locator('#sw-atc-details-single-container').screenshot({ path: 'test-results/panier.png', fullPage: true, });
        await this.page.click('#sc-buy-box-ptc-button');
    }
}