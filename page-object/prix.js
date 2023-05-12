import { expect, page } from '@playwright/test';

export class pagePrix {
    constructor(page) {
        this.page = page;
    }
    async recupPrix() {
        const prix = await this.page.locator('#a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold').innerText();
        return prix;
    }

    async convertPrixToNumber() {
        const prix = await this.recupPrix();
        /* `const prixNumber = prix.replace(/[^0-9]/g, '');` supprime tous les caractères non
        numériques de la chaîne `prix` et attribue la chaîne de nombres résultante à la variable
        `prixNumber`. L'expression régulière `/[^0-9]/g` correspond à tout caractère qui n'est pas
        un chiffre (0-9), et le drapeau `g` garantit que toutes les correspondances sont remplacées,
        pas seulement la première. Ceci est utile pour convertir une chaîne de prix avec des
        symboles monétaires ou d'autres caractères non numériques en une valeur numérique pure qui
        peut être utilisée pour des calculs ou des comparaisons. */
        const prixNumber = prix.replace(/[^0-9]/g, '');
        return prixNumber;
    }
}