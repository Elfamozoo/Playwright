import { expect, page } from '@playwright/test';

export class deuxiemeResultat {
    constructor(page) {
        this.page = page;
    }
    async deuxiemeResultat() {
        await this.page.fill('#twotabsearchtextbox', 'basket nike');
        await this.page.click('#nav-search-submit-button');
        await this.page.click('text=Revolution 6 Nn, Chaussures de Course Homme');
        await this.page.locator('#native_dropdown_selected_size_name').selectOption({ label: '40 EU' });
        await this.page.click('#add-to-cart-button');
        await this.page.click('#nav-cart');
        await this.page.click('[data-csa-c-slot-id="sw-gtc"]')
    }
}