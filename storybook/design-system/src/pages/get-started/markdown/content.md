## Usage

**Slash Design System** est pensé pour l'utilisation par des profils différents ( développeurs front-end, UX Designers, Développeurs back-end, Products Owner, ...).

## All bundle

Pour une utilisation simple et rapide, vous pouvez importer l'ensemble des styles des composants en important le fichier :

```scss
import '@axa-fr/react-toolkit-all/dist/style/af-components.css';
```

Ou la version SASS

```scss
import '@axa-fr/react-toolkit-all/dist/style/af-components.scss';
```

**Slash Design System** est indépendant de tout framework CSS, il habille et définie les guidelines de l'ensemble de composants utiles pour la création d'interfaces.

## Framework

Vous pouvez utiliser **Slash Design System** indépendemment des [composants React](http://link) comme framework pour créer vos apps à partir de l'utilisation des fichiers sources **scss** ou **css** depuis les **node_modules** .

**Component** : import du style par composant. Dans cette méthode, vous allez utiliser des fichiers sources des composants.
De cette manière, importer uniquement les styles dont vous avez besoin afin de réduire votre bundles.

```scss
// @file: myheader.scss
@import '@axa-fr/react-toolkit-layout-header/dist/Header/header.scss';
@import '@axa-fr/react-toolkit-layout-header/dist/Infos/infos.scss';
@import '@axa-fr/react-toolkit-layout-header/dist/Name/name.scss';
@import '@axa-fr/react-toolkit-layout-header/dist/User/user.scss';
@import '@axa-fr/react-toolkit-layout-header/dist/Logo/logo.scss';
```

```javascript
// @file: MyHeader.js
import './myheader.scss';
```

## Variables SASS

Vous avez la possibilité d'utiliser les variables du framework et vous pouvez même surcharger leur valeurs.

La liste des variables est de couleurs est disponibles sur la [page des couleurs.](/colors)

Vous pouvez importer les variables dans le fichier SASS de votre composant :

```scss
@import '@axa-fr/react-toolkit-core/dist/assets/scss/core.scss';
```

## Icons

Le framework met à disposition un [ensemble d'icones](/icones) utilisables de plusieurs manières :

Solution 1 : **classes CSS**

```javascript
// import du fichier scss avec les classes glyphicons
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
```

```html
<!--import du fichier scss avec les classes glyphicons-->
<i class="glyphicon glyphicon-ok"></i>
```

Solution 2 : **sprite SVG**

```javascript
// import du fichier sprite
import sprite from '@axa-fr/react-toolkit-core/dist/assets/icons-sprite.svg';

const IconOk = () => (
  <svg viewBox="0 0 16 16">
    <use xlinkHref={`${sprite}#ok`} />}
  </svg>
);
```

> Ceci est un exemple fait en React mais il faudrait créer un composant plus générique.

## Reset and Grid

Le framework embarque un fichier de **reset CSS** ainsi que la **grille de Bootstrap**.

```javascript
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css';
```

> Les grilles ne sont pas systématiquement nécessaires et c'est pour cette raison que vous avez la possibilité de l'embarquer ou pas dans votre projet.
