> Le tableau est l’outil de présentation de données par excellence; accompagné de filtres et de tri il permet d’obtenir rapidement une recherche croisée.

## 1) Définition

Un tableau est un composant présentant un ensemble de données organisées en colonnes et lignes, pouvant être triées, filtrées, recherchées.

## 2) Use case

-   Un tableau doit obligatoirement être titré.
-   Un tableau doit représenter l’information nécessaire pour que l’utilisateur puisse avoir suffisamment d’informations sur une seule page, sans surabonder avec trop de colonnes ou lignes, dégradant la lecture.
-   Les entêtes de colonnes représentent l’information la plus critique du tableau, ils doivent être rédigés de manière concise et claire dans le contexte du tableau, en plus d’être pertinent avec l’option de tri croissant/ décroissant si celle-ci est activée.
-   Afin de rendre les tableaux plus efficaces, le nombre de colonnes maximum est limité à 12, chacune de la largeur d’une colonne de grille au minimum.
-   Les colonnes doivent être au plus proche d’une largeur identique sur l’ensemble du tableau — au moins sur un ensemble de colonne dont le contenu est de la même largeur.
-   La présentation du contenu se fera toujours avec une alternance de fond de couleur entre chaque ligne, nommée « pyjama ». Celle-ci permet de rendre plus aisée la lecture de longues lignes en donnant un repaire visuel à l’utilisateur.

<img src="../../assets/images/tableau/tableau-01.jpg" alt="table" class="tk-markdown__img-fullscreen" />

-   Si possible, les lignes affichent un maximum de 4 lignes de texte, tout en s’ajustant automatiquement au contenu pour éviter des zones vides. Éviter de présenter de la donnée texte sur des colonnes trop étroites pour afficher plus de colonnes de données.
-   L’affichage pourra varier entre 10, 20 et 50 lignes avec un réglage par défaut de 10 lignes et la pagination affichée si le nombre de lignes à afficher dépasse le critère d’affichage.
-   Les actions ligne par ligne doivent être représentées par des pictogrammes (label optionnel) dans la dernière colonne à droite du tableau.
-   Une colonne de sélection de ligne sera titrée d’une checkbox « maître » agissant comme un « sélectionner tout ». Cette colonne sera toujours située le plus à gauche du tableau. Chaque ligne possèdera sa checkbox de sélection.
-   Les seuls types de composants présentés dans le tableau sont : - Bouton CTA - Checkboxes - Lien - Select - Tag - Bouton radio

## 3) DO/DONT

-   Aucune information dans une colonne ne devra être en dépassement (overflow).
-   Utiliser un type de composant non autorisé (cf. section I./B./11.)
-   Utiliser deux méthodes de filtres pour un même tableau.
-   Présenter deux tableaux côte à côte.
-   Utiliser le tableau pour mettre en page du contenu

## 4) Avancé

-   Les lignes et colonnes s’ajustent automatiquement à la largeur maximum disponible pour le composant, affichant le contenu le plus lisiblement que possible.
-   Le tri de colonne (croissant/décroissant) n’est pas obligatoire, il peut être désactivé par colonne.

## 5) Utilisation

a) Alignement

-   Les données des colonnes devront être ferrés à droite pour les valeurs numériques, à gauche pour les valeurs textuelles, les composants seront centrés (tag, checkboxes, etc).
-   Les entêtes de colonnes devront être ferrés à gauche, l’icône de tri actif ferré à gauche.

b) Contenu

Afin de faciliter la lecture des tableaux, on positionnera les valeurs textuelles à gauche du tableau, les valeurs numériques à droite du tableau.

c) Rédaction

-   Les titres de colonne doivent indiquer la typologie de données représentées.
-   Aucun texte contenu dans une ligne ne doit être en dépassement (overflow).

d) Filtres

-   Un tableau peut avoir des filtres de type « dropdown » liés à une ou plusieurs colonnes pour chercher des informations spécifiques — un statut par exemple. Cette ligne de filtre se placera entre le titre de colonne et les lignes de données.
-   Un champ de recherche peut s’appliquer sur l’ensemble du tableau. Celui-ci se placera au-dessus de l’ensemble des tris et du tableau.
-   Des filtres horizontaux ou verticaux peuvent être joints au tableau afin de trier efficacement sur des cas spécifiques.

e) Paginations

-   La pagination est activée quand le nombre de résultat dépasse l’option d’affichage.
-   Le sélecteur d’affichage est ferré à gauche.
-   La pagination est composée de liens << précédent et suivant >> aux extrémités, encadrent les valeurs de pages suivantes: active, suivante, …, dernière.
-   La pagination est ferrée à droite.

<img src="../../assets/images/tableau/tableau-02.jpg" alt="table" class="tk-markdown__img-fullscreen" />

f) Unité de mesure

-   Elles doivent être indiquées pour toutes les données de valeurs (€, %, etc.)
-   Si les unités sont identiques sur toutes les colonnes de données de valeurs du tableau, l’unité sera indiquée dans le titre. Par exemple: Résultat brut des agences en 2018 — en euros.

g) Action

-   Des saisies de données peuvent être effectuées dans le tableau, avec les composants dédiés (boutons, toggle ou select).
-   Dans la colonne d’action sont regroupées toutes les fonctions d’édition/suppression d’une ligne.
-   La sélection n’est pas une action. Elle sera dans sa colonne dédiée, placée tout à gauche du tableau.
