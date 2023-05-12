import { page } from "@playwright/test";

export class pageProduit {
    constructor(page) {
        this.page = page;
    }
    async pageProduit() {
        await this.page.screenshot({ path: 'test-results/page-produit.png', fullPage: true, });
        await this.page.locator('#native_dropdown_selected_size_name').selectOption({ label: '36.5 EU' });
        await this.page.click('#add-to-cart-button');
    }
}