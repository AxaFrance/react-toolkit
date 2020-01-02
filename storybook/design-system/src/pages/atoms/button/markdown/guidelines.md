Aussi nommés CTA (Call To Action), les boutons sont utilisés pour rendre les actions de navigation ou d'actions immédiatement visibles et faciles à exécuter en un clic.

## Tone of voice

Les boutons doivent toujours comporter un verbe qui encourage l'action.

-   Utilisez la formule {verbe} + {substantif} sur les boutons,
-   Les termes utilisés doivent permettre d’anticiper ce qui va se passer.
-   Le premier mot est en majuscule et le reste en minuscule (sauf si un terme est un nom propre).

## Usage

<div class="tk-markdown__usecases-container">
<div class="tk-markdown__usecases">
    <img src="../../assets/images/button/button-main.jpg" alt="Main button" />
    <h4>Bouton principal</h4>
    <p>Pour mettre en évidence une action "forte" dans la page. Ne pas utiliser plus d'un bouton principal par page ou section.</p>
</div>

<div class="tk-markdown__usecases">
    <img src="../../assets/images/button/button-main-icon.jpg" alt="Main button with icon" />
    <h4>Bouton principal avec pictogramme</h4>
    <p>Un pictogramme peut être inclus dans un bouton principal, lorsqu’on souhaite mettre en avant l’action principale d’une page.Ne pas multiplier les boutons avec des pictogrammes. Point d’attention : n’utiliser un pictogramme que si celui-ci est auto-porteur (ex : téléchargement).</p>
</div>

<div class="tk-markdown__usecases">
    <img src="../../assets/images/button/button-secondary.jpg" alt="Secondary button" />
    <h4>Bouton secondaire</h4>
    <p>Pour toutes les autres actions "moins fortes" que celle de l'action principale de la page (bouton de retour ou étape précédente). Un bouton secondaire peut être utilisé sans qu’un bouton principal ne soit présent dans la page.</p>
</div>

<div class="tk-markdown__usecases">
    <img src="../../assets/images/button/button-small.jpg" alt="Secondary button" />
    <h4>Bouton small</h4>
    <p>Il est toujours associé à un champ de formulaire et positionné à droite de celui-ci.</p>
</div>
</div>

## Bests practices

Différentes couleurs peuvent être utilisées en fonction de la gravité du résultat d’une action :

<div class="tk-markdown__usecases-container">
    <div class="tk-markdown__usecases">
        <img src="../../assets/images/button/button-danger.jpg" alt="Main button" />
        <h4>Bouton rouge</h4>
        <p>Utilisé lorsque « supprimer » des fichiers indique une gravité élevée.</p>
    </div>
    <div class="tk-markdown__usecases">
        <img src="../../assets/images/button/button-success.jpg" alt="Success button" />
        <h4>Bouton vert</h4>
        <p>Utilisé pour une action de validation </p>
    </div>
    <div class="tk-markdown__usecases">
        <img src="../../assets/images/button/button-main.jpg" alt="Success button" />
        <h4>Bouton bleu</h4>
        <p>Utilisé pour des actions principales.</p>
    </div>
    <div class="tk-markdown__usecases">
        <img src="../../assets/images/button/button-disabled.jpg" alt="Disabled button" />
        <h4>Bouton gris</h4>
        <p>Utilisé pour montrer qu'une action est existante mais que celle-ci n'est pas disponible pour l'utilisateur.</p>
    </div>
</div>

Prioriser les actions les plus importantes : Trop de boutons d'action sèment la confusion et rendent les utilisateurs incertains de la suite des choses.

## Positionnement

Les boutons sont positionnés en fonction du contexte :

1. En bas à droite des éléments sur lesquels porte l’action : pour clore une action (par exemple, enregistrer une modification dans un formulaire, fermer la page).
2. Les boutons de navigation sont positionnés en bas de la page (ou de l’écran en cas de barre sticky) à droite pour passer à l’étape suivante ou à gauche pour revenir à l’étape précédente
3. Quand la page présente un groupe de boutons (3 et plus), présenter le même espacement. Cependant, il est possible de créer des sous-regroupements, en augmentant l’espacement (entre le bouton isolé et les sous-groupes de boutons]
4. Cas particulier : les actions portant sur le contenu d’un tableau (l’ensemble ou une sélection) sont positionnées en tête du tableau
5. Pour les formulaires de page unique et les tâches ciblées, alignez les boutons à droite et triez les CTA par ordre d'importance de droite à gauche.

## Use cases

### Cas 1 :

Pour distinguer clairement deux options, utiliser un bouton principal / un bouton secondaire. Le bouton principal attirera davantage l'attention.

![Button Case 1](../../assets/images/button/button-cas1.png)

### Cas 2 :

Quand l'action principale est irréversible (ex : «Remplacer» ou «Supprimer») : Privilégié la CTA "warning" en rouge.

![Button Case 2](../../assets/images/button/button-cas2.png)

### Cas 3 :

Dans une modal, les CTA sont alignés à gauche

![Button Case 3](../../assets/images/button/button-cas3.png)

### Cas 4 :

Pour les champs de recherche, utilisez le CTA small, il doit être collé au champ de recherche :

![Button Case 4](../../assets/images/button/button-cas4.png)

### Cas 5 :

Lorsqu'une action impacte le contenu d’un tableau, la CTA principal est aligné à gauche et positionné au-dessus du tableau

![Button Case 5](../../assets/images/button/button-cas5.png)

## DO / DONT

Positionnement des CTA dans une modal :

| <span style="color: green;">DO</span>                          | <span style="color: red;">DONT</span>                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Button Dont](../../assets/images/button/button-modal-do.png) | ![Button Dont](../../assets/images/button/button-modal-dont.png) |
| Il est préférable de ferrer les boutons à droite ou à gauche   | Ne pas centrer les boutons                                       |
