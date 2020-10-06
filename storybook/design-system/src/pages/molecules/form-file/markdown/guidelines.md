## 1) Définition

Un champ d’upload permet à l’utilisateur de charger un ou plusieurs fichiers sur un serveur.

## 2) Use case

Un champ d’upload doit être accompagné des formats et tailles de fichiers autorisés.

<img src="../../assets/images/upload/upload-01.jpg" alt="upload" class="tk-markdown__img-fullscreen" />

## 3) DO/DONT

-   Un champ d’upload ne doit pas être utilisé pour autre chose que pour charger des fichiers.
-   Le champ d’upload ne doit pas être utilisé sans son bouton « Choisir un fichier ».

<img src="../../assets/images/upload/upload-02.jpg" alt="upload" class="tk-markdown__img-fullscreen" />

<img src="../../assets/images/upload/upload-03.jpg" alt="upload" class="tk-markdown__img-fullscreen" />

## 4) Utilisation

<img src="../../assets/images/upload/upload-04.jpg" alt="upload" class="tk-markdown__img-fullscreen" />

a) Position

Comme n’importe quel autre champ de formulaire, le champ d’upload s’affichera à droite de son label.

b) Alignement

Le champ d’upload doit être aligné à gauche sur la colonne des champs de formulaire, en prenant toute la largeur possible vers la droite.

c) Contenu

Le texte dans le bouton upload — ou accompagnant la puce — doit être le plus clair et concis que possible.

d) Rédaction

Aucun pictogramme ne doit être ajouté au placeholder ou au bouton que le pictogramme d’upload déjà présent.

e) Action

-   Lorsqu’un fichier est déposé/sélectionné, le chargement commence.
-   Lorsque le chargement est terminé, une ligne avec un pictogramme [√], le nom du fichier et un lien de suppression s’affiche en dessous du champ.
-   En cas d’erreur, une ligne avec un pictogramme [!] et le nom du fichier s’affiche en dessous du champ. La cause d’erreur sera affichée avec une notification inline.
-   Plusieurs lignes de fichiers peuvent s’accumuler.

<img src="../../assets/images/upload/upload-05.jpg" alt="upload" class="tk-markdown__img-fullscreen" />

f) États

-   Actif
-   Hover
-   Focus
-   Erreur
-   Désactivé
