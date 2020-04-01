# @axa-fr/react-toolkit

[![Build status](https://dev.azure.com/axaguildev/react-toolkit/_apis/build/status/AxaGuilDEv.react-toolkit?branch=master)](https://dev.azure.com/axaguildev/react-toolkit)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=alert_status)](https://sonarcloud.io/dashboard?id=AxaGuilDEv_react-toolkit) [![Reliability](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=reliability_rating) [![Security](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=security_rating)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=security_rating) [![Code Corevage](https://sonarcloud.io/api/project_badges/measure?project=AxaGuilDEv_react-toolkit&metric=coverage)](https://sonarcloud.io/component_measures?id=AxaGuilDEv_react-toolkit&metric=Coverage)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Twitter](https://img.shields.io/twitter/follow/GuildDEvOpen?style=social)](https://twitter.com/intent/follow?screen_name=GuildDEvOpen)

- [About](#about)
- [Getting Started](#getting-started)
- [Packages](#packages)
- [Concept](#concept)
- [How Does It Work](#how-does-it-work)
- [Contribute](#contribute)
- [Roadmap](#roadmap)
- [Demo](#demo)

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

- [`@axa-fr/react-toolkit-all`](./packages/all/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-all.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-all)
- [`@axa-fr/react-toolkit-form-input-text`](./packages/Form/Input/text/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-text.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-text)
- [`@axa-fr/react-toolkit-form-input-date`](./packages/Form/Input/date/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date)
- [`@axa-fr/react-toolkit-form-input-date-phone`](./packages/Form/Input/date-phone/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date-phone.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-date-phone)
- [`@axa-fr/react-toolkit-form-input-choice`](./packages/Form/Input/choice/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-choice.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-choice)
- [`@axa-fr/react-toolkit-form-input-select`](./packages/Form/Input/select/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select)
- [`@axa-fr/react-toolkit-form-input-select-multi`](./packages/Form/Input/select-multi/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select-multi.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select-multi)
- [`@axa-fr/react-toolkit-form-input-file`](./packages/Form/Input/file/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-file.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-file)
- [`@axa-fr/react-toolkit-form-input-slider`](./packages/Form/Input/slider/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-slider.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-slider)
- [`@axa-fr/react-toolkit-form-input-checkbox`](./packages/Form/Input/checkbox/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-checkbox.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-checkbox)
- [`@axa-fr/react-toolkit-form-input-textarea`](./packages/Form/Input/textarea/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-textarea.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-textarea)
- [`@axa-fr/react-toolkit-form-input-radio`](./packages/Form/Input/radio/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-radio.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-radio)
- [`@axa-fr/react-toolkit-form-summary`](./packages/Form/summary/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-summary.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-summary)
- [`@axa-fr/react-toolkit-form-steps`](./packages/Form/steps/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-steps.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-steps)
- [`@axa-fr/react-toolkit-form-core`](./packages/Form/core/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-core.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-core)
- [`@axa-fr/react-toolkit-form-input-number`](./packages/Form/Input/number/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-number.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-number)
- [`@axa-fr/react-toolkit-form-input-card`](./packages/Form/Input/card/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-card.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-card)
- [`@axa-fr/react-toolkit-form-input-select`](./packages/Form/Input/select/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-select)
- [`@axa-fr/react-toolkit-form-input-switch`](./packages/Form/Input/switch/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-switch.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-input-switch)
- [`@axa-fr/react-toolkit-layout-footer`](./packages/Layout/footer/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-footer.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-footer)
- [`@axa-fr/react-toolkit-layout-footer-client`](./packages/Layout/footer-client/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-footer-client.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-footer-client)
- [`@axa-fr/react-toolkit-layout-header`](./packages/Layout/header/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-header.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-layout-header)
- [`@axa-fr/react-toolkit-table`](./packages/table/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-table.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-table)
- [`@axa-fr/react-toolkit-collapse`](./packages/collapse/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-collapse.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-collapse)
- [`@axa-fr/react-toolkit-loader`](./packages/loader/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-loader.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-loader)
- [`@axa-fr/react-toolkit-help`](./packages/help/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-help.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-help)
- [`@axa-fr/react-toolkit-popover`](./packages/popover/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-popover.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-popover)
- [`@axa-fr/react-toolkit-modal`](./packages/modal/default/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-modal-default.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-modal-default)
- [`@axa-fr/react-toolkit-modal`](./packages/modal/boolean/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-modal-boolean.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-modal-boolean)
- [`@axa-fr/react-toolkit-action`](./packages/action/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-action.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-action)
- [`@axa-fr/react-toolkit-alert`](./packages/alert/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-alert.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-alert)
- [`@axa-fr/react-toolkit-tabs`](./packages/tabs/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-tabs.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-tabs)
- [`@axa-fr/react-toolkit-badge`](./packages/badge/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-badge.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-badge)
- [`@axa-fr/react-toolkit-button`](./packages/button/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-button.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-button)
- [`@axa-fr/react-toolkit-icon`](./packages/icon/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-icon.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-icon)
- [`@axa-fr/react-toolkit-core`](./packages/core/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-core.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-core)
- [`@axa-fr/react-toolkit-title`](./packages/title/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-title.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-title)
- [`@axa-fr/react-toolkit-link`](./packages/link/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-link.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-link)
- [`@axa-fr/react-toolkit-list`](./packages/list/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-list.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-list)
- [`@axa-fr/react-toolkit-panel`](./packages/panel/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-panel.svg)](https://badge.fury.io/js/%40axa-fr%2F/react-toolkit-panel)
- [`@axa-fr/react-toolkit-restitution`](./packages/restitution/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-restitution.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-restitution)
- [`@axa-fr/react-toolkit-form-filter-inline`](./packages/Form/filter-inline/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-filter-inline.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-filter-inline)
- [`@axa-fr/react-toolkit-form-filter`](./packages/Form/filter/README.md) [![npm version](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-filter.svg)](https://badge.fury.io/js/%40axa-fr%2Freact-toolkit-form-filter)

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

## Contribute

- [How to run the solution and to contribute](./CONTRIBUTING.md)
- [Please respect our code of conduct](./CODE_OF_CONDUCT.md)

## Roadmap

- Update general documentation
- Migrating to TypeScript all components
- Fix the issues and clean code. Make it simpler, faster, lighter

## Demo

- [Online](https://axaguildev.github.io/react-toolkit/latest/demo/index.html)
- [Guideline](./examples/README.md)
- [Source code](./examples/demo)

![alt text](./examples/demo.png 'Demo sample')
