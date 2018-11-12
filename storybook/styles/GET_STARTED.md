## Usage

AF-TOOLKIT-CORE est pensé pour l'utilisation par des profils différents (_consommateur_ ou _développeur front-end_).

### Bundle

Pour une utilisation simple et rapide, copiez-collez la feuille de style `<link>` de AF-TOOLKIT-CORE et les polices dans votre `<head>` avant toutes les autres feuilles de style pour charger le theme.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700">
<link rel="stylesheet" href="af-toolkit-core/bootstrap/af-toolkit-core.css">
```

Voilà, vous avez un site themé AF avec tous les composants Bootstrap 4 disponibles.

#### Bundle par univers

Si vous voulez utiliser un des universes, vous pouvez remplacer `af-toolkit-core.css` par le bundle de l'univers souhaité.

```html
<link rel="stylesheet" href="af-toolkit-core/universes/sante/af-toolkit-core-sante.css">
```

### Framework

Vous pouvez utiliser AF-TOOLKIT-CORE - et Bootstrap (en _peer dependency_ dans le projet) - comme framework pour créer vos apps à partir de l'utilisation des fichiers sources **scss** depuis les **node_modules** `af-toolkit-core/dist/axa-components` et `bootstrap/scss`

```scss
// Core variables and mixins
// Custom Theme AXA France

@import 'af-toolkit-core/dist/assets/scss/_custom-af.scss';
@import 'af-toolkit-core/dist/assets/scss/_custom-bootstrap.scss';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/_mixins';

// Reset and dependencies
@import 'bootstrap/scss/normalize';
@import 'bootstrap/scss/print';

// Core CSS
@import 'bootstrap/scss/reboot';
@import 'bootstrap/scss/type';
@import 'bootstrap/scss/images';
@import 'bootstrap/scss/code';
@import 'bootstrap/scss/grid';
@import 'bootstrap/scss/tables';
@import 'bootstrap/scss/forms';
@import 'bootstrap/scss/buttons';

// Components
@import 'bootstrap/scss/badge';

// Utility classes
@import 'bootstrap/scss/utilities';
```

Dans cette configuration, vous pouvez utiliser la méthode que vous jugez le plus adaptée pour votre app:

*   **One entry point** : un seul fichier `app.scss` avec l'import de tout les composants nécessaires (bootstrap et af-toolkit-core)

```scss
// @file: app.scss
@import 'af-toolkit-core/dist/assets/scss/_custom-af.scss';
@import 'af-toolkit-core/dist/assets/scss/_custom-bootstrap.scss';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/_mixins';

@import 'bootstrap/scss/**/*'; // @note: all components; note code compilant
```

*   **Component** : import du style par composant. Dans cette méthode, vous allez utiliser des fichiers sources des composants `af-toolkit-core/dist/axa-components/component.scss`.

```scss
// @file: component.scss
@import 'theme';
@import '../../../../axa-components/header/header'; // ex.
```

```javascript
// @file: component.js
import style from './component.scss';
```

> @note: cette méthode ne permet pas l'utilisation _global_ d'un univers `(ex.: .univers-sante)`.
> Vous avez disponibles, néanmoins, les _--modifiers_ par composant `(ex.: .af-table--sante)`
