Le spinner aide à informer l'utilisateur que l'application est en train de charger du contenu. Il est utilisé lorsque la progression du chargement ne peut pas être déterminée.

## Usage

Le spinner est utilisé lors du :

-   Chargement du contenu pour une page entière.
-   Chargement du contenu à l'intérieur d'un composant.
-   Chargement de contenu à l'intérieur d'une modal.
-   Chargement de la prochaine étape d'un workflow.

Sans cet indicateur, l'utilisateur peut se sentir perdu ou naviguer prématurément en dehors de la page.

Pour les temps de chargement supérieurs à 10 secondes, inclure une notification avec un texte explicatif.

## Bests practices

1. S’il s'agit d'un spinner pour une page entière :
    - Centrez le spinner horizontalement et verticalement dans le conteneur.
    - Ne placez pas le spinner directement sur du texte ou d’autres éléments visuels d’une page sans appliquer au préalable un masque foncé.
2. Dans les autres cas, utiliser le spinner bleu sur fond clair et le spinner blanc sur fond foncé.
3. Indépendamment de la longueur ou de la brièveté du temps de chargement, le spinner fonctionnera toujours à la même vitesse.
4. Le spinner ne doit jamais être utilisé pour indiquer une progression, il indique une attente.

## DO / DONT

| <span style="color: green;">DO</span>                                                                   | <span style="color: red;">DONT</span>                        |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Mettre le loader à droite du bouton                                                                     | Ne pas utiliser le spinner à l’intérieur des boutons.        |
| Si plusieurs éléments de contenu sont en cours de chargement, afficher un spinner pour la page entière. | Ne pas inclure plusieurs spinners sur une page en même temps |
