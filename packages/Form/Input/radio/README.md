# `@axa-fr/react-toolkit-form-input-radio`

1. [RadioItem](#radioitem)
2. [Radio](#radio)
3. [RadioInput Default](#radioinput-default)
   1. [RadioInput Default Required](#radioinput-default-required)
4. [RadioInput Classic](#radioinput-classic)
5. [RadioInput Inline](#radioinput-inline)
6. [Radio with children](#radio-with-children)

## RadioItem

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { RadioItem } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const RadioItemInput = () => (
  <form className="af-form" name="myform">
    <RadioItem
      id="uniqueId"
      name="radioItemName"
      value="your value"
      label="Paris"
      checked={true}
    />
  </form>
);
export default RadioItemInput;
```

## Radio

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Radio, RadioModes } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: 'For fun', value: '1', id: 'customIdOne' },
  { label: 'For work', value: '2', id: 'customIdTwo' },
  { label: 'For drink', value: '3', id: 'customIdThree' },
  { label: 'For the life', value: '4', id: 'customIdFour', disabled: true },
];

const RadioInput = () => (
  <form className="af-form" name="myform">
    <Radio
      name="radioName"
      options={options}
      mode={RadioModes.default}
      onChange={() => console.log('your function')}
    />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default RadioInput;
```

## RadioInput Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { RadioInput, RadioModes } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: 'For fun', value: '1', id: 'customIdOne' },
  { label: 'For work', value: '2', id: 'customIdTwo' },
  { label: 'For drink', value: '3', id: 'customIdThree' },
  { label: 'For the life', value: '4', id: 'customIdFour', disabled: true },
];

const RadioInputDefault = () => (
  <form className="af-form" name="myform">
    <RadioInput
      id="uniqueId"
      label="Place type"
      name="radioInputName"
      options={options}
      mode={RadioModes.default}
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default RadioInputDefault;
```

### RadioInput Default Required

To achieve RadioInput Default Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **RadioInput Default** component

## RadioInput Classic

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { RadioInput, RadioModes } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: 'For fun', value: '1', id: 'customIdOne' },
  { label: 'For work', value: '2', id: 'customIdTwo' },
  { label: 'For drink', value: '3', id: 'customIdThree' },
  { label: 'For the life', value: '4', id: 'customIdFour', disabled: true },
];

const RadioInputClassic = () => (
  <form className="af-form" name="myform">
    <RadioInput
      id="uniqueId"
      label="Place type"
      name="radioInputName"
      options={options}
      mode={RadioModes.classic}
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default RadioInputClassic;
```

## RadioInput Inline

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { RadioInput, RadioModes } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: 'For fun', value: '1', id: 'customIdOne' },
  { label: 'For work', value: '2', id: 'customIdTwo' },
  { label: 'For drink', value: '3', id: 'customIdThree' },
  { label: 'For the life', value: '4', id: 'customIdFour', disabled: true },
];

const RadioInputInline = () => (
  <form className="af-form" name="myform">
    <RadioInput
      id="uniqueId"
      label="Place type"
      name="radioInputName"
      options={options}
      mode={RadioModes.inline}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      onChange={() => {
        console.log('your function');
      }}
    />
  </form>
);
export default RadioInputInline;
```

## Radio with children

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-help
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-popover
```

### Import

```javascript
import { RadioInput, RadioModes } from '@axa-fr/react-toolkit-form-input-radio';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import HelpButton from '@axa-fr/react-toolkit-help';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
```

### Use

```javascript
const options = [
  { label: 'For fun', value: '1', id: 'customIdOne' },
  { label: 'For work', value: '2', id: 'customIdTwo' },
  { label: 'For drink', value: '3', id: 'customIdThree' },
  { label: 'For the life', value: '4', id: 'customIdFour', disabled: true },
];

const RadioWithChildren = () => (
  <form className="af-form" name="myform">
    <RadioInput
      id="uniqueId"
      label="Place type"
      name="radioInputName"
      options={options}
      mode={RadioModes.default}
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      onChange={(e) => {
        console.log(e);
      }}>
      <HelpButton mode="hover" classModifier="small">
        Hello Radio
      </HelpButton>
    </RadioInput>
  </form>
);
export default RadioWithChildren;
```
