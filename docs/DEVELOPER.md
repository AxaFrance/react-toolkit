# Building and Testing @axa-fr/react-toolkit

## How to make and test a change in my context

Considering you have a project using react-toolkit and want to make a change (bugfix, stylefix, new feature) and see it working on your consuming project.

### 1. Retrieve and prepare toolkit

[see Contributing](./../CONTRIBUTING.md#installation)

### 2. Create or prepare your project

- [Optional] Step for new/empty project => `npx create-react-app react-toolkit-consumer`
- `cd react-toolkit-consumer`
- `npm install -D sass`
  > Optional - only if you want to use sass file from toolkit
- `npm start`

👉 Your project should start without any errors

### 3. Iterate

Considering you want to make changes on button

- `npm i -P <local_toolkit_src_folder>/packages/button`
  > More info about local install command [doc npm](https://docs.npmjs.com/cli/v7/commands/npm-install)
- Add a component file _MyProjectButton.tsx_ into your project with following content :

  ```
  import Button from "@axa-fr/react-toolkit-button";
  import "@axa-fr/react-toolkit-button/dist/button.scss";

      ...

      <Button>Text Consumer</Button>
      ...
  ```

👉 You should see the react-toolkit button in your project (with correct style)

- Editing component **behavior** into toolkit

  - Edit file `<local_toolkit_src_folder>\packages\button\src\Button.tsx`

  ```
  const ButtonRaw = (props: ButtonCoreComponentProps) => {
    const buttonProps: ButtonCoreComponentProps = omitProperties(props);
    return <button {...buttonProps}>Overrided in Toolkit</button>;
  };
  ```

  - ❗ Re-Build behavior

    - Go to _component_ (/packages/button) `package.json`
    - run `npm run prepare` (you can right-click on command & choose 'Run script' in vscode)

  - Refresh your running site

👉 You should see the text _Overrided in Toolkit_ in your button (with correct style)

- Editing component **style**

  - Edit file `<local_toolkit_src_folder>\packages\button\src\button.scss`

  ```
  .af-btn {
    font-family: $font-family-base;
    background-color: red;
  }
  ```

  - ❗ Re-Build style

    - Go to _root_ `package.json`
    - run `npm run style` (you can click on ▶️ when browsing your package.json scripts in vscode )

  - Refresh your running site

👉 You should see the text _Overrided in Toolkit_ in **red** (with correct style)

⚠️ Take time to prepare your proposal before submitting it (test, lint, storybook ...) [see Contributing](./../CONTRIBUTING.md)
