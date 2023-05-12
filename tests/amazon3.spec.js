/* Importation des fonctions `test` et `expect` de la bibliothèque `@playwright/test`, qui est un cadre
de test pour automatiser les tests de navigateur à l'aide de Playwright. Ces fonctions sont
utilisées pour définir et exécuter des cas de test. */
import { test, expect, page } from '@playwright/test';
import { pageAccueil } from '../page-object/pageaccueil';
import { pagePanier } from '../page-object/pagepanier';
import { pageProduit } from '../page-object/pageproduit';
import { pageResultat } from '../page-object/pageresultat';


/* `test.beforeEach` est un crochet fourni par Playwright qui s'exécute avant chaque cas de test. Dans
ce cas, il navigue sur le site Amazon France et clique sur le bouton « Accepter les cookies ». Cela
garantit que le site Web est dans un état cohérent avant l'exécution de chaque scénario de test. */
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    await page.click('#sp-cc-accept');
});

/* Il s'agit d'un cas test qui automatise le processus d'achat d'un produit sur Amazon France. Il
utilise Playwright pour naviguer sur le site Web, rechercher un produit spécifique (panier nike),
sélectionner une taille spécifique (36,5 EU), ajouter le produit au panier et procéder au paiement.
Il prend également des captures d'écran à différentes étapes du processus et les enregistre dans un
répertoire spécifié. */
test('Achat produit', async ({ page }) => {
    const achat = new pageAccueil(page);
    const resultat = new pageResultat(page);
    const produit = new pageProduit(page);
    const panier = new pagePanier(page);
    await achat.pageAccueil();
    await resultat.pageResultat();
    await produit.pageProduit();
    await panier.pagePanier();
});










