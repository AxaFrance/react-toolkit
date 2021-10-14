# `@axa-fr/react-toolkit-form-input-pass`

1. [Pass](#pass)
2. [PassInput](#passinput)
   1. [PassInput Required](#passinput-required)

## Pass

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-pass
npm i @axa-fr/react-toolkit-form-core
```

| classModifier / type |
| -------------------- |
| bad                  |
| okay                 |
| good                 |
| verygood             |
| excellent            |

### Import

```javascript
import { Pass } from '@axa-fr/react-toolkit-form-input-pass';
import '@axa-fr/react-toolkit-form-input-pass/dist/af-pass.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const PassInput = () => (
  <form className="af-form" name="myform">
    <Pass
      id="uniqueid"
      classModifier="good"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => {
        console.log('your function');
      }}
      name="password"
      type="password"
      value="your value"
    />
    <HelpMessage message="Enter password" />
  </form>
);
export default PassInput;
```

## PassInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-pass
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-popover
npm i @axa-fr/react-toolkit-help
```

### Import

```javascript
import { PassInput } from '@axa-fr/react-toolkit-form-input-pass';
import '@axa-fr/react-toolkit-form-input-pass/dist/af-pass.css';
import { PopoverModes, PopoverPlacements } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import Help from '@axa-fr/react-toolkit-help';
import '@axa-fr/react-toolkit-help/dist/af-help-custom.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const PassInputReturn = () => (
  <form className="af-form" name="myform">
    <PassInput
      id="uniqueid"
      name="password"
      value=""
      label="Password"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => console.log('onToggle')}
      helpMessage="8 characters minimum">
      <Help mode={PopoverModes.click} placement={PopoverPlacements.right}>
        Choose a password
      </Help>
    </PassInput>
  </form>
);
export default PassInputReturn;
```

### PassInput Required

To achieve PassInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **PassInput** component
