import { page } from "@playwright/test";

export class pageResultat {
    constructor(page) {
        this.page = page;
    }
    async pageResultat() {
        await this.page.screenshot({ path: 'test-results/Recherche.png', fullPage: true, });
        await this.page.click('text=Court Borough Low 2 (GS), Chaussures de basket-ball enfants');
    }
}