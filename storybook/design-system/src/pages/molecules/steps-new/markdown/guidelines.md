## 1) Définition

Le train d’étapes est une représentation visuelle de la position de l’utilisateur dans un parcours composé de plusieurs étapes. Il permet à celui-ci de se repérer et de connaître son niveau d’avancement, mais aussi améliore indirectement le taux de complétion des étapes.

## 2) Use case

Le train d’étapes sera utilisé pour des parcours comprenant plusieurs étapes.

<img src="../../assets/images/step/step-01.jpg" alt="step" class="tk-markdown__img-fullscreen" />

## 3) DO/DONT

Le train d’étapes ne sera pas utilisé pour un parcours comprenant plus de 7 étapes, on préfèrera couper le parcours en plusieurs sections comportant chacune leurs étapes.
Trop d’étapes peuvent envoyer un signal contraire : trop d’étapes pour compléter le parcours = abandon/non complétion de certaines étapes.

## 4) Utilisation

<img src="../../assets/images/step/step-02.jpg" alt="step" class="tk-markdown__img-fullscreen" />

a) Position

Le train d’étape sera toujours le premier élément collé sous le header.

b) Alignement

Le train d’étapes s’étale sur les 12 colonnes, son fond blanc.

c) Contenu

Le train d’étapes doit contenir toutes les étapes, séparé d’icônes [>] entre chacune.

d) Rédaction

Un mot ou une expression par étapes, le plus succint le mieux.

f) Pictogramme

Seule la section finale, de confirmation/validation du parcours pourra utiliser un icône [markup]

g) Action

Cliquer sur une étape précédente ramènera l’utilisateur en arrière.
