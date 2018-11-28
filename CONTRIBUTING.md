# Contributing to @axa-fr/react-toolkit

First, ensure you have the [latest `npm`](https://docs.npmjs.com/).

To get started with the repository:

```sh
git clone https://github.com/AxaGuilDEv/af-toolkit.git
cd af-toolkit
npm install
npm run bootstrap
```

## Commands

## How to run

Demo of how the component is used.

```sh
# [react] Develop with storybook
$ npm run storybook
# [react] Build the storybook website
$ npm run storybook:build

# [react] To edit component in live inside storybook, you have run js compilation in another bash process
$ npm run dev

# [css] Develop html/css
$ npm run css
# [css] Build the html/css website
$ npm run css:build
```

## How to run Demo Application

```sh
# [react] Launch local demo app
$ npm start
# [react] Build local demo app
$ npm run demo:build
```

### Run Unit Tests

```sh
$ npm test

# watch for changes
$ npm test -- --watch

# For a specific file (e.g., in packages/context/__tests__/command.test.js)
$ npm test -- --watch packages/action
```

By default, `npm test` also runs the linter.
You can skip this by calling `jest` directly:

```sh
$ npx jest
$ npx jest --watch
$ npx jest --config jest.config.json
# etc
```

### Linting

```sh
$ npm run lint
```

It's also a good idea to hook up your editor to an eslint plugin.

To fix lint errors from the command line:

```sh
$ npm run lint -- --fix
```

### Coverage

If you would like to check test coverage, run the coverage script, then open
`coverage/lcov-report/index.html` in your favorite browser.

```sh
$ npm test -- --coverage

# OS X
$ open coverage/lcov-report/index.html

# Linux
$ xdg-open coverage/lcov-report/index.html
```

## Pull Request

Please respect the following [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md)

## Issue

Please respect the following [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md)
