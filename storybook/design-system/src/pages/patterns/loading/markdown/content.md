## 1) Définition

a) Les patterns de chargement permettent aux utilisateurs de comprendre intuitivement le délai nécessaire à la réalisation d’une action, et de le séparer d’un état de « freeze » ou de blocage.

b) Bien utiliser les patterns réduit le niveau de frustration des utilisateurs, fluidifie les parcours avec des animations visuelles, communique l e poids de la tâche en cours et les processus traités côté serveur.

<img src="../../assets/images/chargement/spinner.svg" alt="spinner"  />

## 2) Utilisation

a) Spinner fullscreen: Le chargement initial des applications client peut être assez long, jusqu’à quelques dizaines de secondes. Dans ce cas, on utilisera un spinner fullscreen, avec ou sans label de chargement.

b) Loading bar: Le chargement de certaines fonctionnalités lourdes mais quantifiables seront plutôt accompagnées de barres de chargement, avec un xx% de complétion et si possible un label de chargement.

c) Inline spinner: Le chargement de fonctionnalités légères liées à certains champs (adresses, fichiers, CTA spécifiques) auront un spinner intégré directement ou juxtaposé.

<img src="../../assets/images/chargement/chargement.jpg" alt="chargement" class="tk-markdown__img-fullscreen" />

d) Page sèche

-   Dans le cas de chargement de composants « données », comme des tableaux, restitutions, cards, tiles, listes, l’affichage peut être simulé lors du chargement, avec un tableau vide et des rectangles gris en placeholder.
-   Dans une optique d’évolution technologique et systémique, on essayera de diminuer l’apparition de spinner fullscreen et loading bars au profit des pages sèches et chargements progressifs.

e) Chargements progressifs

-   De la même manière que le skeleton, le progressive loading a pour objectif d’afficher un tableau vide qui se rempli au fil des données chargées.
-   La différence avec l’exemple précédent est que le progressive loading fera ce que le skeleton fait en une fois en plusieurs: titre, labels de colonnes, filtres puis liste dans l’ordre de lecture. Cela permettra de lisser le remplissage soudain d’un composant comme un tableau.
