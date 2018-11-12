## Footer

### Get started

```sh
  npm i "@axa-fr/react-toolkit-layout-footer"
```

### Components

#### Footer

The footer content will display what was passed in the _copyright_ prop.

```javascript
import React from 'react';
import { Footer } from '@axa-fr/react-toolkit-layout-footer';
const MyFooter => () => (
  <Footer copyright="© 2017-2018 AXA Webcenter" />
)
```

#### FooterCore

This core component displays its children instead of a copyright prop, therefore allowing HTML tags, e.g. :

```javascript
import React from 'react';
import { FooterCore } from '@axa-fr/react-toolkit-layout-footer';
const MyFooterCore => () => (
  <FooterCore>
    <a href="https://www.axa.fr/">
      @ AXA 2018
    </a>
    <i>Tous droits réservés</i>
  </FooterCore>
)
```
