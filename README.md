# @axa-fr/react-toolkit

[![Build status](https://dev.azure.com/axaguildev/react-toolkit/_apis/build/status/AxaGuilDEv.react-toolkit?branch=master)](https://dev.azure.com/axaguildev/react-toolkit)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=alert_status)](https://sonarcloud.io/dashboard?id=AxaGuilDEv_react-toolkit) [![Reliability](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=reliability_rating) [![Security](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=security_rating)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=security_rating) [![Code Corevage](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=coverage)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=Coverage)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Twitter](https://img.shields.io/twitter/follow/GuildDEvOpen?style=social)](https://twitter.com/intent/follow?screen_name=GuildDEvOpen)

- [About](#about)
- [Getting Started](#getting-started)
- [Packages](#packages)
- [Concept](#concept)
- [How Does It Work](#how-does-it-work)
- [List of supported browsers](#list-of-supported-browsers)
- [Contribute](#contribute)
- [Roadmap](#roadmap)

## About

A set of independent components. Awesome library based on HTML and CSS using BEM convention with the JavaScript ReactJS implementation. Each components are autonomous and extensible. Pick and use only what you need!

**How _React-toolkit_ does CSS isolation?**

Only by using [BEM (Block Element Modifier)](http://getbem.com) CSS convention. No need of the intricate technologies, just pragatism.

Components are simple to use (just drag and drog it), simple to customize (by using CSS modifier) to your own need. Each component may evaluate internally (HTML, CSS, JS) and minimize an impact on your application.

You can easily build a new app from scratch or integrate some component into existing application.

[html+css documentation website](https://axaguildev.github.io?target=react_toolkit_storybook)
[react storybook website](https://axaguildev.github.io?target=react_toolkit_design)

## Getting Started

Install what you need

```sh
npm install @axa-fr/react-toolkit-alert --save
```

Use only what you need

```javascript
import React from 'react';
import Alert from '@axa-fr/react-toolkit-alert';
import '@axa-fr/react-toolkit-alert/dist/alert.scss';

const MyAlertComponent => () => (
<Alert
    icon="ok"
    title="This is an alert"
  />
)
```

## Packages

- [@axa-fr/react-toolkit-all](./packages/all/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-all?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-all)
- [@axa-fr/react-toolkit-action](./packages/action/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-action?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-action)
- [@axa-fr/react-toolkit-alert](./packages/alert/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-alert?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-alert)
- [@axa-fr/react-toolkit-badge](./packages/badge/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-badge?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-badge)
- [@axa-fr/react-toolkit-button](./packages/button/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-button?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-button)
- [@axa-fr/react-toolkit-collapse](./packages/collapse/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-collapse?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-collapse)
- [@axa-fr/react-toolkit-core](./packages/core/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-core?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-core)
- [@axa-fr/react-toolkit-form-core](./packages/Form/core/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-core?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-core)
- [@axa-fr/react-toolkit-form-filter](./packages/Form/filter/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-filter?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-filter)
- [@axa-fr/react-toolkit-form-filter-inline](./packages/Form/filter-inline/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-filter-inline?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-filter-inline)
- [@axa-fr/react-toolkit-form-input-card](./packages/Form/Input/card/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-card?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-card)
- [@axa-fr/react-toolkit-form-input-checkbox](./packages/Form/Input/checkbox/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-checkbox?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-checkbox)
- [@axa-fr/react-toolkit-form-input-choice](./packages/Form/Input/choice/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-choice?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-choice)
- [@axa-fr/react-toolkit-form-input-date](./packages/Form/Input/date/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-date?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-date)
- [@axa-fr/react-toolkit-form-input-date-phone](./packages/Form/Input/date-phone/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-date-phone?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-date-phone)
- [@axa-fr/react-toolkit-form-input-file](./packages/Form/Input/file/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-file?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-file)
- [@axa-fr/react-toolkit-form-input-number](./packages/Form/Input/number/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-number?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-number)
- [@axa-fr/react-toolkit-form-input-pass](./packages/Form/Input/pass/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-pass?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-pass)
- [@axa-fr/react-toolkit-form-input-radio](./packages/Form/Input/radio/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-radio?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-radio)
- [@axa-fr/react-toolkit-form-input-select](./packages/Form/Input/select/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-select?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-select)
- [@axa-fr/react-toolkit-form-input-select-multi](./packages/Form/Input/select-multi/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-select-multi?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-select-multi)
- [@axa-fr/react-toolkit-form-input-slider](./packages/Form/Input/slider/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-slider?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-slider)
- [@axa-fr/react-toolkit-form-input-switch](./packages/Form/Input/switch/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-switch?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-switch)
- [@axa-fr/react-toolkit-form-input-text](./packages/Form/Input/text/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-text?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-text)
- [@axa-fr/react-toolkit-form-input-textarea](./packages/Form/Input/textarea/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-input-textarea?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-input-textarea)
- [@axa-fr/react-toolkit-form-steps](./packages/Form/steps/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-steps?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-steps)
- [@axa-fr/react-toolkit-form-summary](./packages/Form/summary/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-form-summary?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-form-summary)
- [@axa-fr/react-toolkit-help](./packages/help/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-help?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-help)
- [@axa-fr/react-toolkit-highlight](./packages/highlight/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-highlight?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-highlight)
- [@axa-fr/react-toolkit-icon](./packages/icon/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-icon?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-icon)
- [@axa-fr/react-toolkit-layout-footer](./packages/Layout/footer/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-layout-footer?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-layout-footer)
- [@axa-fr/react-toolkit-layout-footer-client](./packages/Layout/footer-client/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-layout-footer-client?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-layout-footer-client)
- [@axa-fr/react-toolkit-layout-header](./packages/Layout/header/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-layout-header?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-layout-header)
- [@axa-fr/react-toolkit-link](./packages/link/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-link?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-link)
- [@axa-fr/react-toolkit-list](./packages/list/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-list?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-list)
- [@axa-fr/react-toolkit-loader](./packages/loader/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-loader?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-loader)
- [@axa-fr/react-toolkit-modal-boolean](./packages/Modal/boolean/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-modal-boolean?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-modal-boolean)
- [@axa-fr/react-toolkit-modal-default](./packages/Modal/default/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-modal-default?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-modal-default)
- [@axa-fr/react-toolkit-panel](./packages/panel/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-panel?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-panel)
- [@axa-fr/react-toolkit-popover](./packages/popover/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-popover?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-popover)
- [@axa-fr/react-toolkit-restitution](./packages/restitution/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-restitution?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-restitution)
- [@axa-fr/react-toolkit-status](./packages/status/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-status?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-status)
- [@axa-fr/react-toolkit-table](./packages/table/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-table?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-table)
- [@axa-fr/react-toolkit-tabs](./packages/tabs/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-tabs?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-tabs)
- [@axa-fr/react-toolkit-title](./packages/title/README.md) [![npm version](https://img.shields.io/npm/v/@axa-fr/react-toolkit-title?style=flat)](https://www.npmjs.com/package/@axa-fr/react-toolkit-title)

## Concept

Each component should be autonomous (HTML + CSS + JS) and extensible.

## How Does It Work

- HTML/CSS :

  - BEM convention is used in order to break CSS cascading problem
  - SCSS and CSS files are avalaible for every component and can be overrided or extended
  - [HTML/CSS Documentation](https://axaguildev.github.io?target=react_toolkit_storybook)

- React :
  - Components are stateless by default
  - Some Higher Order Components (HOC) are stateful but feel free to use the stateless one if it fits your use case
  - [React documentation](https://axaguildev.github.io?target=react_toolkit_design)

## List of supported browsers

Here is the list of browsers we tested this toolkit on:

- Chrome 84+
- Firefox 79+
- Microsoft Edge 85+
- Internet Explorer 11
- Safari 13.1+
- Opera 71+

## Contribute

- [How to run the solution and to contribute](./CONTRIBUTING.md)
- [Please respect our code of conduct](./CODE_OF_CONDUCT.md)

## Roadmap

- Update general documentation
- Migrating to TypeScript all components
- Fix the issues and clean code. Make it simpler, faster, lighter
