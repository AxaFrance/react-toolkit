# Contributing to @axa-fr/react-toolkit

First, ensure you have Node.js < 12 and the [latest `npm`](https://docs.npmjs.com/).

To get started with the repository:

```sh
git clone https://github.com/AxaGuilDEv/react-toolkit.git
cd react-toolkit
npm install
```

A post-install action is thrown. This action first install dependencies with ```lerna bootstrap``` & then build all packages with a custom command gulp.

At this point you are ready to contribute.

## Additional installations

This repository contains some projects used to display, explain components built previously.

* *storybook* :
  * *design-system*: a design system web app rendering & exposing code to use components
  * *storybook*: a storybook app to develop in isolated mode
  * *styles*: part of design sytem & use as an explaination page of toolkit style



If you want to use these projects, you must:

```sh
cd storybook/design-system
npm ci
```

```sh
cd storybook/storybook
npm ci
```

## How to work on a component

Into a terminal, to start to develop a component you can run

```sh
npm run dev
```

Or,if you want to run your component in watch mode, execting one of command below

```sh
# If your component is in js
npm run dev:js -- --scope=@axa-fr/react-toolkit-status
# If your component is in TypeScript
npm run dev:ts -- --scope=@axa-fr/react-toolkit-action
```

*scope* refer to package name of your component you are working on.

And then if you want to work on it, in isolation mode, you can run storybook

```sh
npm run storybook
```

After all this, if your development affect css, you can run

```sh
npx gulp all
```

to regenerate css

## Other usefull commands

### Launch demo app

```sh
npm start
```

### Run unit tests

```sh
npm test
```

By default, `npm test` also runs the linter.
You can skip this by calling `jest` directly:

```sh
$ npm test -- --watch
$ npm test -- --config jest.config.json
# etc ...
```

### Run coverage

```sh
npm test -- --coverage
```


## Pull Request

Please respect the following [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md)
Don't forget to add label to your PR, to help mainteners to understand PR's aim.

## Issue

Please respect the following [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md)
Don't forget to add label to your issue, to help mainteners to understand issue's aim.
