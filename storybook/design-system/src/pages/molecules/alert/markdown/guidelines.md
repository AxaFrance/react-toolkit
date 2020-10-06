## 1) Définition

Une notification permet de communiquer une information ou un résultat d’action dans un bloc flottant, superposé à la page. D’une durée d’affichage déterminée, elle permet à l’utilisateur de comprendre les processus en cours ou achevés sans sortir de son parcours.

<img src="../../assets/images/alert/alert-01.jpg" alt="alert" class="tk-markdown__img-fullscreen" />

## 2) Use case

a) Une notification doit être utilisée lorsqu’une action menée par l’utilisateur obtient un résultat : validation, erreur, avertissement.

b) Une notification « information » peut être utilisée pour informer l’utilisateur d’une modification de données, de fonctionnement ou indiquer un conseil.

c) Une notification toast se distingue d’une fenêtre modale par sa durée limitée d’affichage.

d) Une notification inline se distingue d’une fenêtre modale par son utilisation au sein d’un bloc parent.

## 3) DO / DONT

Une variation de notification ne peut pas être utilisé pour un autre type d’information.

## 3) Avancé

Une notification est composée d’un titre et optionnellement d’un texte.

-   Titre: Doit expliquer succinctement le contexte, qui pourra être complété par un texte.
-   Texte: Doit contenir un minimum d’information précisant le titre.

<img src="../../assets/images/alert/alert-02.jpg" alt="alert" class="tk-markdown__img-fullscreen" />

## 4) Utilisation

a) Position

Une notification devra être positionnée à [48 px] en dessous du header de la page.

<img src="../../assets/images/alert/alert-03.jpg" alt="alert" class="tk-markdown__img-fullscreen" />

b) Alignement

Une notification doit prendre la largeur d’affichage maximale disponible (jusqu’à 12 colonnes).

c) Contenu

Les titres et textes sont ferrés à gauche.

<img src="../../assets/images/alert/alert-04.jpg" alt="alert" class="tk-markdown__img-fullscreen" />

d) Rédaction

-   Les titres et contenus doivent être le plus clair et concis possible.
-   Le titre doit rentrer sur une seule ligne.

e) Pictogrammes

Aucun pictogramme ne doit être utilisé dans les textes ou les boutons CTA.

f) Variations

-   Information
-   Avertissement
-   Succès
-   Erreur

Chaque notification existe en plusieurs variation:

-   1 ligne
-   2 lignes
-   2 lignes + CTA

<img src="../../assets/images/alert/alert-05.jpg" alt="alert" class="tk-markdown__img-fullscreen" />
