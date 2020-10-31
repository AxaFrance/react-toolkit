# Contributing to @axa-fr/react-toolkit

## Prerequisite

You must use a version of Node.js respecting the following rule `>=10.14.2` or `12.x` or `>=14`.

## Installation

To get started, start by [forking the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) on your personnal github account.

Then, clone the forked repository:

```sh
git clone https://github.com/{your_account}/react-toolkit.git
```

It's now time to install all dependencies:

```sh
cd react-toolkit
npm install
```

A post-install action is thrown. This action first install dependencies with `lerna bootstrap` & then build all packages with a custom command gulp.

At this point you are ready to contribute.

## Storybook

This tool will help you display component in a page where it will be isolated (rather than integrated in a page with many components).

We are using the state of the art tool: [Storybook](https://storybook.js.org/).

To launch it, you can run:

```sh
npm run storybook
```

## Keeping your forked repository up-to-date

Before you start developping, it is important to always keep your forked repository **up-to-date**.

### Link your forked repository to the original project

For this, you will add a remote which points to the original repository (this has to be done only once):

```sh
git remote add upstream https://github.com/AxaGuilDEv/react-toolkit.git
```

### Update your master branch

Then, each time you want to update your repository with the last changes, run:

```sh
git checkout master
git fetch upstream
git rebase upstream/master
```

More information in github documentation: [Fork a repo / Keep your fork synced](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced)

## How to work on a component

### Architecture of a component

Here's an example in JS:
```text
├── dist/ : contains the generated JS/CSS files (in the postinstall process).
├── src/
|   ├── __snapshots__ : generated storybook snapshots used to test the component.
|   ├── GreatComponent.js : the react component code.
|   ├── GreatComponent.md : more documentation about the component (props, ...).
|   ├── GreatComponent.spec.js : all unit tests for the component.
|   ├── GreatComponent.stories.js : examples to be shown in the Storybook tool.
|   ├── great-component.scss : Sass file, complying to BEM convention
|   └── index.js : should export your component(s).
├── LICENSE : specific license of the component (keep it MIT for now)
├── package.json : description of the component and its dependencies
└── README.md : all useful information to run the component
```

### Getting started

Into a terminal, to start to develop a component you can run

```sh
npm run dev
```

Or, if you want to run your component in watch mode, execting one of command below

```sh
# If your component is in js
npm run dev:js -- --scope=@axa-fr/react-toolkit-status

# If your component is in TypeScript
npm run dev:ts -- --scope=@axa-fr/react-toolkit-action
```

_scope_ refer to package name of your component you are working on.

And then if you want to work on it, in isolation mode, you can run storybook

```sh
npm run storybook
```

After all this, if your development affect css, you can run `npm run style` to regenerate css

### Testing

As a contributor, you are expected to run tests before submitting any pull request.

#### Run unit tests

```sh
npm test
```

By default, `npm test` also runs the linter.
You can add args to `npm test` command with `--`:

```sh
$ npm test -- --watch
$ npm test -- --config jest.config.json
# etc
```

#### Run coverage

As the Boy Scout Rule states, you are expected to leave the code better than you found it. To do so, please check that your code is properly covered by meaningful tests.

```sh
npm test -- --coverage
```

#### Browser testing

You can find the list of supported browser in the [List of supported browsers](./README.md#list-of-supported-browsers) section of the README.

If you are developping on a Mac, you will find some Virtual Machines to help you test, on [Microsoft Edge Tools](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) webiste.

### Documentation

After working on a component, you are expected to update the documentation.

Documentation can be found in the [Design System](https://github.com/AxaGuilDEv/design-system) repository.

Do not forget to update the component status page, located in this repository at:

```text
└─ src/
    └─ pages/
      └─ get-started/
          └─ component-status/
            └─ markdown/
                └─ content.md
```

Direct link (on master branch): [content.md](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/component-status/markdown/content.md)

### Commit messages

We are using the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format), you are expected to follow it. This is very important because our changlog is generated using commit messages.

Keep in mind, though, that your pull request will be squashed into master, so repository mainteners may use your commit message but are not entitled to use them as is.

## Scripts

| Script name          | Description                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| `publish`            | Used by the CI to generate a new version.                                                                   |
| `postinstall`        | Clean and build all compoents within the `packages` folder. It is ran just after the `npm install` command. |
| `clean`              | Removes all the generated `dist` folders and `node_modules` folders within the `packages`.                  |
| `clean:dist`         | Removes all the generated `dist` folders within the `packages` folder.                                      |
| `clean:node_modules` | Removes all the `node_modules` folders within the `packages` folder (uses `lerna clean`).                   |
| `style`              | Generates all `.css` file from the Sass `.scss` files.                                                      |
| `storybook`          | Lauches the [Storybook](#storybook) tool.                                                                   |
| `storybook:build`    | Builds the [Storybook](#storybook) tool.                                                                    |
| `test`               | Builds the [Design System](#design-system) tool.                                                            |
| `cover`              | Used by the CI to generate coverage files.                                                                  |
| `lint`               | Launches both JS and TS linters                                                                             |
| `lint:js`            | Launches JS linters, will fix whatever is possible to fix, for you.                                         |
| `lint:ts`            | Launches TS linters, will fix whatever is possible to fix, for you.                                         |
| `dev`                | Launches both JS and TS components in watch mode.                                                           |
| `dev:js`             | Launches JS components in watch mode.                                                                       |
| `dev:ts`             | Launches TS components in watch mode.                                                                       |
| `changelog`          | Used by the CI to generate the changelog using commit messages                                              |

## Troubleshooting

### Some tests are not working after I switched branch

Aftet switching for one branch to another, you may have issues with tests. This is due to the fact that some dependencies may have changed.

The quickest way to fix it is to make sure all your packages are correctly installed. For this, make sure you are in the root folder and then run this command:
```sh
npm ci
```

This will :

- Erase your `node_modules` folder in the react-toolkit root folder;
- Install dependencies from the `package-lock.json`in a fresh `node_modules` folder;
- Erase all `node_modules` in all packages;
- Erase all `dist` in all packages;
- run `lerna bootstrap` to install all packages.

Tests should run perfectly after this!


### When `lerna clean` did not work...

In some cases, `lerna clean` may fail... then you will have to remove manually all `node_modules`folders.

Best way to do it on a Linux / Mac:
```sh
find . -name "node_modules" -type d -prune -exec rm -rf '{​​​​​​​​}​​​​​​​​' +
```

## Pull Request

Please respect the following [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md)

## Issue

Please respect the following [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md)
