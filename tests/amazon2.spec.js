/* Importation des fonctions `test` et `expect` de la bibliothèque `@playwright/test`, qui est un cadre
de test pour automatiser les tests de navigateur à l'aide de Playwright. Ces fonctions sont
utilisées pour définir et exécuter des cas de test. */
import { test, expect } from '@playwright/test';
import { pageAccueil } from '../page-object/pageaccueil';
import { pageProduit } from '../page-object/pageproduit';
import { pageResultat } from '../page-object/pageresultat';



/* `test.beforeEach` est un crochet fourni par Playwright qui s'exécute avant chaque cas de test. Dans
ce cas, il navigue sur le site Amazon France et clique sur le bouton « Accepter les cookies ». Cela
garantit que le site Web est dans un état cohérent avant l'exécution de chaque scénario de test. */
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    await page.click('#sp-cc-accept');
});

/* Il s'agit d'un cas de test qui recherche un produit de basket Nike sur le site Web d'Amazon France,
clique sur le produit, prend une capture d'écran de la page du produit, puis ferme la page. Le test
utilise l'API de Playwright pour interagir avec le site Web et effectuer ces actions. */
test('Recherche et cliquer sur un produit', async ({ page }) => {
    const achat = new pageAccueil(page);
    const resultat = new pageResultat(page);
    const produit = new pageProduit(page);
    await achat.pageAccueil();
    await resultat.pageResultat();
    await produit.pageProduit();
});









