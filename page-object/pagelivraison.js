import { expect, page } from '@playwright/test';

/* La classe "pageLivraison" contient une méthode qui vérifie la visibilité de certains éléments sur
une page web et clique sur l'un d'entre eux. */
export class pageLivraison {
    constructor(page) {
        this.page = page;
    }
    async pageLivraison() {
        await expect(this.page.locator('#add-new-address-popover-link')).toBeVisible();
        await expect(this.page.locator('[data-csa-c-slot-id="ap-generic-tspc"]')).toBeVisible();
        // await this.page.locator('[data-csa-c-slot-id="ap-generic-tspc"]').click();

    }
}