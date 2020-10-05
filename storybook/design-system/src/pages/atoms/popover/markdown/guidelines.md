## 1) Définition

Une infobulle offre un commentaire textuel à un objet auquel elle est rattachée.

<img src="../../assets/images/infobulle/infobulle-01.jpg" alt="infobulle" class="tk-markdown__img-fullscreen" />

## 2) Use case

-   Une infobulle doit être utilisée si le composant associé n’est pas compréhensible hors contexte.
-   Une infobulle doit être utilisée si une donnée spécifique est requise.
-   Une infobulle doit être utilisée si l’utilisateur a besoin d’une explication spécifique pour agir.

## 3) DO/DONT

Une infobulle ne doit jamais cacher un composant avec lequel l’utilisateur peut agir directement : [x], bouton CTA, checkbox, radio, onglet, etc.

<img src="../../assets/images/infobulle/infobulle-02.jpg" alt="infobulle" class="tk-markdown__img-fullscreen" />

<img src="../../assets/images/infobulle/infobulle-03.jpg" alt="infobulle" class="tk-markdown__img-fullscreen" />

## 4) Utilisation

a) Position

-   Une infobulle peut être rattachée à un bouton d’information. Dans ce cas, l’infobulle sera positionnée à droite du bouton, centré sur la hauteur.
-   Sinon, l’infobulle pourra être rattaché à son composant dans toutes les directions : au-dessus, dessous, droite ou gauche, tout en restant centré dans la hauteur ou la largeur.

b) Alignement

<img src="../../assets/images/infobulle/infobulle-04.jpg" alt="infobulle" class="tk-markdown__img-fullscreen" />

c) Contenu

Une infobulle ne doit contenir que du texte de labeur ferré à gauche.

d) Rédaction

Le texte de l’infobulle doit être le plus clair et concis que possible, tout en étant suffisamment précis pour donner suffisamment de contexte à l’utilisateur.

e) Pictogrammes

Aucun pictogramme ne doit être utilisé en plus du label.

f) Action

L’infobulle d’un composant s’affiche quand l’utilisateur clique dessus ou passe sa souris dessus (hover).
