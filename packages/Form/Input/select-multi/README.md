# `@axa-fr/react-toolkit-form-input-select-multi`

1. [MultiSelect](#multiselect)
2. [MultiSelectInput](#multiselectinput)
   1. [MultiSelectInput Required](#multiselectinput-required)
3. [MultiSelect One Value](#multiselect-one-value)

## MultiSelect

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select-multi
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { MultiSelect } from '@axa-fr/react-toolkit-form-input-select-multi';
import '@axa-fr/react-toolkit-form-input-select-multi/dist/af-select.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const values = ['fun', 'drink'];

const MultiSelectInput = () => (
  <form className="af-form" name="myform">
    <MultiSelect
      name="multiSelectName"
      onChange={(e) => console.log(e)}
      options={options}
      values={values}
      placeholder="Select"
    />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default MultiSelectInput;
```

## MultiSelectInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select-multi
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { MultiSelectInput } from '@axa-fr/react-toolkit-form-input-select-multi';
import '@axa-fr/react-toolkit-form-input-select-multi/dist/af-select.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const values = ['fun', 'drink'];

const MultiSelectInputReturn = () => (
  <form className="af-form" name="myform">
    <MultiSelectInput
      id="uniqueId"
      label="Place type"
      name="multiSelectInputName"
      onChange={(e) => console.log(e)}
      options={options}
      values={values}
      helpMessage="Enter the place type"
      messageType={MessageTypes.error}
      placeholder="Select"
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);

export default MultiSelectInputReturn;
```

### MultiSelectInput Required

To achieve MultiSelectInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **MultiSelectInput** component

## MultiSelect One Value

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select-multi
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { MultiSelect } from '@axa-fr/react-toolkit-form-input-select-multi';
import '@axa-fr/react-toolkit-form-input-select-multi/dist/af-select.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const MultiSelectOneValue = () => (
  <form className="af-form" name="myform">
    <MultiSelectInput
      id="uniqueId"
      label="Place type"
      name="placeType"
      options={options}
      onChange={() => {
        console.log('your function');
      }}
      values={['fun']}
      helpMessage="Enter the place type"
      messageType={MessageTypes.error}
      forceDisplayMessage={false}
      placeholder="Select"
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
    <h2 className="af-subtitle">Something Bellow</h2>
  </form>
);
export default MultiSelectOneValue;
```
