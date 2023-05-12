import { test, expect, page } from '@playwright/test';
import { pageAccueil } from '../page-object/pageaccueil';
import { pagePanier } from '../page-object/pagepanier';
import { pageProduit } from '../page-object/pageproduit';
import { pageResultat } from '../page-object/pageresultat';
import { pageSignIn } from '../page-object/pagesignin';



test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    await page.click('#sp-cc-accept');
});



test('Option de livraison', async ({ page }) => {
    const achat = new pageAccueil(page);
    const resultat = new pageResultat(page);
    const produit = new pageProduit(page);
    const panier = new pagePanier(page);
    const signin = new pageSignIn(page);
    await achat.pageAccueil();
    await resultat.pageResultat();
    await produit.pageProduit();
    await panier.pagePanier();
    await signin.pageSignIn();
});