## 1) Définition

Le champ de formulaire est l’outil de saisie de données libre par excellence. Sa variabilité et sa flexibilité permettent de répondre à quasiment tous les besoins métiers.

## 2) Use case

-   Les champs de formulaires sont utilisés pour demander des données spécifiques, voire personnelles aux utilisateurs; ils doivent être utilisés à bon escient. Plus il y a de champs dans un formulaire, plus la complétion sera longue.
-   Le champ de formulaire doit être utilisé uniquement pour des données libres, ne pouvant être comblé par un select, boutons radio ou checkboxes.
-   Un champ de formulaire doit être suivi en fin de page d’un bouton CTA permettant d’enregistrer la saisie.

<img src="../../assets/images/champ/champ-01.jpg" alt="champ" class="tk-markdown__img-fullscreen" />

## 3) DO/DONT

Utiliser un champ de formulaire lorsque le type de saisie n’est pas adapté.
Pour rappel, on utilisera:

-   des boutons radios pour une liste de réponses mutuellement exclusives,
-   des checkboxes pour une liste de réponses multiples.
-   un select pour une réponse parmi une longue liste.

## 4) Utilisation

a) Position

-   Le champ de formulaire doit être ferré à gauche dans le bloc parent.
-   Le champ de formulaire peut prendre toute la largeur disponible dans le bloc parent ou la partager avec d’autres champs de manière égale (1/2 -1/2).
-   Deux champs seront séparés de 16px d’espacement dans la largeur ou la hauteur.

b) Alignement

-   Le label du champ doit être aligné horizontalement avec son label.
-   Le label est aligné verticalement avec le champ.

c) Contenu

-   Le placeholder dans le champ doit être présent et clair pour faciliter la saisie.
-   Celui-ci doit être [$color-grey-1] tant que le champ n’est pas actif.
-   Un bouton d’information peut accompagner le champ si celui-ci nécessite un contexte.
-   Dans le cas d’un text area le champ de formulaire pourra s’étendre sur plusieurs lignes, avec un placeholder correspondant.

<img src="../../assets/images/champ/champ-02.jpg" alt="champ" class="tk-markdown__img-fullscreen" />

d) Rédaction

-   Le label d’un champ doit clairement indiquer la donnée demandée à l’utilisateur.
-   Le placeholder doit clairement indiquer un exemple de données correspondant au label.

<img src="../../assets/images/champ/champ-03.jpg" alt="champ" class="tk-markdown__img-fullscreen" />

e) Pictogrammes

Aucun pictogramme ne peut être utilisé en tant que placeholder, dans le label.

f) Variations

-   Simple - Renvoie une erreur si laissé vide par l’utilisateur alors qu’obligatoire.
-   Autocomplete - Un champ avec une fonction autocomplete sera pertinent dans le cas d’adresses ou d’autres données prévisibles. - La liste des options sera présentée directement en dessous du champ, comme dans le composant select.
-   Format de donnée imposée (mail) - Renvoie une erreur si le format de donnée ne correspond pas.
-   Mot de passe - Peut afficher un message d’erreur si la saisie ne correspond pas. - Peut afficher un indicateur de force pendant la saisie si les paramètres correspondent. - Peut afficher un indicateur de correspondance pendant la saisie si elle correspond.
-   Text area - La zone de texte libre est dédiée à la saisie d’informations secondaires et de longueur variable : commentaire, avis etc.

<img src="../../assets/images/champ/champ-04.jpg" alt="champ" class="tk-markdown__img-fullscreen" />

g) États

-   Inactif (vide)
-   Actif (saisie effectuée)
-   Focus (saisie en cours)
-   Erreur
-   Désactivé

<img src="../../assets/images/champ/champ-05.jpg" alt="champ" class="tk-markdown__img-fullscreen" />
