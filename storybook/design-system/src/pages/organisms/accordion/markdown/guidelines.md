Le composant accordéon permet aux utilisateurs d'afficher et de masquer des sections de contenu sur une même page.

## Tone of voice

Les accordéons cachent le contenu, les titres des accordéons doivent donc être clairs.
Si nécessaire, ajouter une ligne de résumé pour aider les utilisateurs à comprendre le contenu de la section :

## Usage

Utiliser un accordéon pour permettre à l'utilisateur d'afficher et de masquer du contenu si besoin.
Dans le cas où l'interface n'est pas utilisée régulièrement, les accordéons doivent être utilisés avec parcimonie.

### Visuel 1 : A utiliser quand le contenu doit être mis en avant dans la page

![accordion-closed](../../assets/images/accordion/accordion-closed.jpg)

### Visuel 2 : A utiliser quand le contenu est secondaire (ex : récapitulatif d'information)

![accordion-secondary](../../assets/images/accordion/accordion-secondary.jpg)

### Visuel 3 : A utiliser uniquement quand l’accordéon doit être en fullscreen

![accordion-fullscreen](../../assets/images/accordion/accordion-fullscreen.jpg)

## Bests practices

La nature d'un accordéon nécessiterait un collapse automatique, mais ce n'est pas toujours la meilleure option en termes de facilité d'utilisation :

-   Pour les accordéons comportant de nombreux éléments, laisser les sections agrandies, car les sauts qui se produisent lorsque les panneaux se ferment et s’ouvrent simultanément sont trop perturbants.
-   S'il n'y a pas beaucoup d'éléments, la section peut être réduite par défaut car le saut sera minime.

Dans tous les cas, le choix de collapser ou non le contenu doit résulter du besoin de l’utilisateur à voir, analyser, comparer ou non les données des sections de l’accordéon.

L'icône en forme de flèche sert à indiquer la fonctionnalité de l'accordéon, ainsi qu'à indiquer visuellement l'état de l'accordéon par sa rotation et sa direction.

Il est possible de pouvoir sauvegarder la ou les sections de contenu ouvertes lorsque l'utilisateur revient sur la page.

## DO / DONT

### DO

1. Lorsqu'un accordéon s'ouvre et se ferme, seule sa hauteur doit changer, sa largeur doit rester constante.
2. Les fonctionnalités d'ouverture et de fermeture d'un accordéon s'effectuent au clic sur l'ensemble de l'en-tête du composant.
3. Utiliser un accordéon plutôt que les onglets (tabs) si les utilisateurs ont besoin de voir plus d'une section à la fois.

### DONT

1. N'utilisez pas un accordéon pour du contenu essentiel aux utilisateurs.
2. N'utilisez pas le composant accordéon si la quantité de contenu qu'il contient ralenti le chargement de la page.
3. Ne pas désactiver les sections. Désactiver les contrôles est déroutant pour les utilisateurs. S'il n'y a pas de contenu pour une section, expliquez pourquoi à l'ouverture de la section.
4. Les fonctionnalités d'ouverture et de fermeture ne doivent jamais être déclenchées au survol.
