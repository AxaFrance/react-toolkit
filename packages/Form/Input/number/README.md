# `@axa-fr/react-toolkit-form-input-number`

### Principles

The Number component exposes a native HTML number input. Therefore, it accepts a specific range of characters :

- number [0-9]
- "e" for exposant
- "," and "." as sperator
- negative value with "-"

On mobile, it will open the native OS keyboard for number.

### Props

It will expose an object with :

- the typed value
- the name
- the id

It accept the same props as the others form component

1. [Number](#number)
2. [NumberInput](#numberinput)
   1. [NumberInput Required](#numberinput-required)

## Number

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-number
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Number } from '@axa-fr/react-toolkit-form-input-number';
import '@axa-fr/react-toolkit-form-input-file/dist/af-file.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const numberInput = () => (
  <form className="af-form" name="myform">
    <Number
      id="uniqueid"
      name="numberName"
      value={2.9}
      placeholder="0.0"
      onChange={(e) => {
        console.log(e);
      }}
    />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default numberInput;
```

## NumberInput

```shell script
npm i @axa-fr/react-toolkit-form-input-number
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-help
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-popover
```

### Import

```javascript
import { NumberInput } from '@axa-fr/react-toolkit-form-input-number';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import { PopoverModes, PopoverPlacements } from '@axa-fr/react-toolkit-popover';
import Help from '@axa-fr/react-toolkit-help';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
```

### Use

```javascript
const NumberInputReturn = () => (
  <div>
    <form className="af-form" name="myform">
      <NumberInput
        id="uniqueid"
        value={10}
        label="Place name"
        name="placeName"
        onChange={(e) => {
          console.log(e);
        }}
        messageType={MessageTypes.error}
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
        helpMessage="Enter the place name, ex : Webcenter">
        <Help mode={PopoverModes.click} placement={PopoverPlacements.right}>
          {' '}
          Lorem ipsum dolor sit amet{' '}
        </Help>
      </NumberInput>
    </form>
  </div>
);
export default NumberInputReturn;
```

### NumberInput Required

To achieve NumberInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **NumberInput** component
