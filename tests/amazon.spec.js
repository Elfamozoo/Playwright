/* Importation des fonctions `test` et `expect` de la bibliothèque `@playwright/test`, qui est un cadre
de test pour automatiser les tests de navigateur à l'aide de Playwright. Ces fonctions sont
utilisées pour définir et exécuter des cas de test. */
import { test, expect } from '@playwright/test';
import { pageAccueil } from '../page-object/pageaccueil';




/* `test.beforeEach` est un crochet fourni par Playwright qui s'exécute avant chaque cas de test. Dans
ce cas, il navigue sur le site Amazon France et clique sur le bouton « Accepter les cookies ». Cela
garantit que le site Web est dans un état cohérent avant l'exécution de chaque scénario de test. */
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    await page.click('#sp-cc-accept');
});


/* Il s'agit d'un cas de test qui utilise le framework de test Playwright pour automatiser les tests de
navigateur. */
test('Page accueil', async ({ page }) => {
    const achat = new pageAccueil(page);
    await achat.pageAccueil();
});
