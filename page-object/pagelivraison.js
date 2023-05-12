import { expect, page } from '@playwright/test';

export class pageLivraison {
    constructor(page) {
        this.page = page;
    }
    async pageLivraison() {
        await expect(this.page.locator('#add-new-address-popover-link')).toBeVisible();
        await expect(this.page.locator('[data-csa-c-slot-id="ap-generic-tspc"]')).toBeVisible();
        await this.page.locator('[data-csa-c-slot-id="ap-generic-tspc"]').click();
    }
}