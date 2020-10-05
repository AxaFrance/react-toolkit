## 1) Définition

Le spinner est un composant animé faisant patienter l’utilisateur lors de tâches à forte latence. Il représente un chargement en cours sans indication du niveau de complétion de celui-ci.

## 2) Use case

-   Le spinner doit être mis en place lorsque l’action liée prend constamment plus de 3 secondes pour s’effectuer.
-   Le spinner peut être utilisé lors d’un upload de fichier.

<img src="../../assets/images/loader/loader-01.jpg" alt="loader" class="tk-markdown__img-fullscreen" />

## 3) DO/DONT

-   Le spinner ne doit pas être utilisé si l’on peut afficher une barre de chargement quantifiée (XX%).
-   Le spinner ne doit pas être utilisé si le résultat de l’action de s’affiche pas dans un laps de temps raisonnable (1 minute). Par exemple, si une action nécessite l’action d’un admin pour que le processus avance d’une étape, on préfèrera utiliser un message indiquant le délai moyen de traitement.

<img src="../../assets/images/loader/loader-02.jpg" alt="loader" class="tk-markdown__img-fullscreen" />

## 4) Utilisation

a) Position

Le spinner doit être dans la page ou le bloc en cours de chargement.

b) Alignement

Le spinner doit être centré horizontalement et verticalement dans la page ou le bloc en cours de chargement.

c) Contenu

Le spinner peut être accompagné d’un label, par exemple « Chargement en cours » ou « Veuillez patienter quelques instants »

d) Rédaction

Le label du spinner doit être le plus clair et concis que possible, tout en restant courtois car les chargements créent de la frustration.

e) Pictogrammes

Aucun pictogramme ne doit être utilisé en plus du label.
