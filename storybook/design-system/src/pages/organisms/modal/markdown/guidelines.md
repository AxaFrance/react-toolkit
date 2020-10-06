## 1) Définition

Une modale permet de communiquer une information ou une action dans une fenêtre secondaire tout en permettant à l’utilisateur de rester dans le contexte de la tâche en cours.

## 2) Use case

-   Une modale interrompt le processus en cours par défaut. Elle sera le plus efficace en définissant une tâche à accomplir pour que l’utilisateur puisse continuer.
-   Les modales doivent être utilisées avec parcimonie afin de limiter les interruptions du parcours utilisateur, facteurs de frustration.
-   Une modale s’affiche de manière permanente — elle peut être fermée en cliquant sur l’icône [X] ou le CTA secondaire d’annulation si il est présent

<img src="../../assets/images/modal/modal-01.jpg" alt="modal" class="tk-markdown__img-fullscreen" />

## 3) DO/DONT

-   Une modale ne doit pas être utilisée si l’information qu’elle présente est facultative ou secondaire dans le parcours utilisateur.
-   Si l’information est secondaire ou ne nécessite pas d’action immédiate, on utilisera une notification.

## 4) Anatomie

Une modale est composée d’un header, d’un body et d’un footer.

-   Header: doit contenir le titre de la modale, ferré à gauche, un bouton [x] aligné à droite. Le titre explique succinctement le contexte, qui sera complété par le body.
-   Body: doit contenir un minimum d’information précisant l’action à valider ou l’information à prendre en compte dans le processus.
-   Footer: Doit contenir les boutons, généralement un ou deux (Valider / Annuler).
-   Si un bouton d’aide ou un lien doit être inclus, on le placera dans le body.

<img src="../../assets/images/modal/modal-02.jpg" alt="modal" class="tk-markdown__img-fullscreen" />

## 5) Utilisation

a) Position

Une modale doit être centré verticalement et horizontalement dans la page.

b) Alignement

Une modale doit être centré verticalement et horizontalement dans la page.

c) Contenu

-   Les titres, et textes sont ferrés à gauche, les boutons CTA respectent leurs règles d’usage.
-   Le bouton [x] est positionné en haut à droite

<img src="../../assets/images/modal/modal-03.jpg" alt="modal" class="tk-markdown__img-fullscreen" />

d) Rédaction

-   Les titres et contenus doivent être le plus clair et concis que possible.
-   Le titre doit rentrer sur une seule ligne préférablement.
-   Les boutons d’actions doivent clairement indiquer l’action opérée.

e) Pictogrammes

Aucun pictogramme ne doit être utilisé dans les textes ou les boutons CTA.

f) Action

La modale peut être fermée de plusieurs façons :

-   En cliquant à l’extérieur de celle-ci.
-   En cliquant sur [x] en haut à droite.
-   En cliquant sur un des boutons CTA.

g) Variations

-   Décision
    -   Demande une action pour poursuivre.
-   Saisie
    -   Demande une saisie spécifique (Champs de formulaire) pour poursuivre.
-   Passive
    -   Donne une information critique, impliquant une action qui ne peut être intégrée.
    -   Fortement perturbatrice pour l’utilisateur, cette modale doit être utilisée uniquement dans le cas où l’utilisateur doit opérer une action extérieure immédiatement.
