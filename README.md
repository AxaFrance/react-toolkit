# @axa-fr/react-toolkit

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

- [About](#about)
- [Getting Started](#getting-started)
- [Packages](#packages)
- [Concept](#concept)
- [How It Works](#how-it-works)
- [Contribute](#ontribute)

## About

A set of independent components.
Awesome library based on HTML and CSS using BEM convention with a JavaScript react.js implementation. Each components are autonomous and extensible. Pick and use only what you need!

**How is done css isolation?**

Only by using [BEM (Block Element Modifier)](http://getbem.com) css convention. No need of a intricate technologies, just pragatism.

Component are simple to use (just drag and drog it), simple to customise (by using css modifier) to your own need. Each Components may evoluate internally (html, css, js) minimizing the impact on your application.

You can easily build a new app from scratch or integrate component into existing application.

[html+css documentation website](https://toolkit-intranet-axa.azurewebsites.net)
[react storybook website](https://toolkit-intranet-react-axa.azurewebsites.net)

## Getting Started

Install what you need

```sh
npm install @axa-fr/react-toolkit-alert --save
npm install @axa-fr/css-core --save
```

Use only what you need

```javascript
import React from 'react';
import Alert from '@axa-fr/react-toolkit-alert';
import '@axa-fr/css-core/dist/axa-components/alert/alert.scss';

const MyAlertComponent => () => {
<Alert
    classModifier="MyModifier"
    icon="ok"
    title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d′office"
  />
}
```

## Packages

- [`@axa-fr/react-toolkit-form-input-text`](./packages/Form/Input/text/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-text.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-text)
- [`@axa-fr/react-toolkit-form-input-date`](./packages/Form/Input/date/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date)
- [`@axa-fr/react-toolkit-form-input-choice`](./packages/Form/Input/choice/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-choice.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-choice)
- [`@axa-fr/react-toolkit-form-input-select`](./packages/Form/Input/select/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select)
- [`@axa-fr/react-toolkit-form-input-select-multi`](./packages/Form/Input/select-multi/readme.md)[![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select-multi.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select-multi)
- [`@axa-fr/react-toolkit-form-input-file`](./packages/Form/Input/file/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-file.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-file)
- [`@axa-fr/react-toolkit-form-input-slider`](./packages/Form/Input/slider/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-slider.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-slider)
- [`@axa-fr/react-toolkit-form-input-checkbox`](./packages/Form/Input/checkbox/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-checkbox.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-checkbox)
- [`@axa-fr/react-toolkit-form-input-textarea`](./packages/Form/Input/textarea/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-textarea.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-textarea)
- [`@axa-fr/react-toolkit-form-input-radio`](./packages/Form/Input/radio/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-radio.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-radio)
- [`@axa-fr/react-toolkit-form-summary`](./packages/Form/summary/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-summary.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-summary)
- [`@axa-fr/react-toolkit-form-steps`](./packages/Form/steps/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-steps.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-steps)
- [`@axa-fr/react-toolkit-form-core`](./packages/Form/core/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-core.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-core)
- [`@axa-fr/react-toolkit-form-input-number`](./packages/Form/Input/number/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-number.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-number)
- [`@axa-fr/react-toolkit-form-input-card`](./packages/Form/Input/card/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-card.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-card)
- [`@axa-fr/react-toolkit-form-input-select`](./packages/Form/Input/select/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select)
- [`@axa-fr/react-toolkit-form-input-switch`](./packages/Form/Input/switch/readme.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-switch.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-switch)
- [`@axa-fr/react-toolkit-layout-footer`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-layout-footer-client`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-layout-header`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-table`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-collapse`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-loader`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-help`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-popover`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-modal`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-modal-boolean`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-action`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-alert`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-tabs`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-badge`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-button`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-icon`](./packages/redux-fetch/readme.md)
- [`@axa-fr/react-toolkit-core`](./packages/redux-fetch/readme.md)

## Concept

Each component should be autonomous (html + css + javascript) and extensible.

## How It Works

- Html/Css :

  - BEM convention is used in order to break css cascading problem
  - Scss and css files are avalaible by component and can be overrided or extended
  - [Html/Css Documentation](http://toolkit-intranet-axa.azurewebsites.net)

- React :
  - Components are without state by default
  - Some higher component level are statefull but feel free to use the stateless one if it not feet to your use case
  - [React documentation](https://toolkit-intranet-react-axa.azurewebsites.net/)

## Contribute

- [How to run the solution and to contribute](./CONTRIBUTING.md)
- [Please respect our code of conduct](./CODE_OF_CONDUCT)

## Roadmap

- Update general documentation
- Continu to migrate to TypeScript component by component
- Continu to fix and clean code. Make it simpler, better, lighter