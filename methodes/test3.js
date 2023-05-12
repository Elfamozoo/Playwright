import { test, expect, page } from '@playwright/test';

/* La classe ci-dessus représente un ensemble de méthodes permettant d'automatiser le processus de
recherche et d'achat d'une chaussure de basket Nike sur une page Web à l'aide de Puppeteer. */
export class achatProduit {
    constructor(page) {
        this.page = page;
    }
    async expectPage() {
        await expect(page.url()).toBe('https://www.amazon.fr/');
        await this.page.screenshot({ path: 'test-results/Page accueil.png', fullPage: true, });
    }
    async searchProduct() {
        await this.page.fill('#twotabsearchtextbox', 'basket nike');
        await this.page.click('#nav-search-submit-button');
    }
    async screenshotRecherche() {
        await this.page.screenshot({ path: 'test-results/Recherche.png', fullPage: true, });
    }
    async choixProduit() {
        await this.page.click('text=Court Borough Low 2 (GS), Chaussures de basket-ball enfants');
    }
    async screenshotProduit() {
        await this.page.screenshot({ path: 'test-results/page-produit.png', fullPage: true, });
    }
    async choixTaille() {
        await this.page.locator('#native_dropdown_selected_size_name').selectOption({ label: '36.5 EU' });
    }
    async addedToCart() {
        await this.page.click('#add-to-cart-button');
    }
    async screenshotPanier() {
        await this.page.screenshot({ path: 'test-results/panier.png', fullPage: true, });
    }
    async paiement() {
        await this.page.click('#sc-buy-box-ptc-button');
    }
    async screenshotConnexion() {
        await this.page.screenshot({ path: 'test-results/connexion.png', fullPage: true, });
    }
    async close() {
        await this.page.close();
    }
}
