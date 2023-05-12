import { test, expect, page } from '@playwright/test';
import { pageAccueil } from '../page-object/pageaccueil';
import { pagePanier } from '../page-object/pagepanier';
import { pageProduit } from '../page-object/pageproduit';
import { pageResultat } from '../page-object/pageresultat';
import { SignInPage } from '../page-object/signinpage';
import { pageLivraison } from '../page-object/pagelivraison';
import { deuxiemeResultat } from '../page-object/deuxiemeresultat';
import { pagePrix } from '../page-object/prix';



test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    await page.click('#sp-cc-accept');
});



/* Il s'agit d'un cas de test écrit à l'aide du framework de test Playwright en JavaScript. Le cas de
test est nommé "Option de livraison" et c'est une fonction asynchrone qui prend un objet `page`
comme paramètre. */
test('Option de livraison', async ({ page }) => {
    const accueil = new pageAccueil(page);
    const resultat = new pageResultat(page);
    const produit = new pageProduit(page);
    const resultatdeux = new deuxiemeResultat(page);
    const prix = new pagePrix(page);
    await accueil.pageAccueil();
    await resultat.pageResultat();
    await produit.pageProduit();
    await resultatdeux.deuxiemeResultat();
    await prix.convertPrixToNumber();
});