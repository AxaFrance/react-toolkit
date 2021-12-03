# `@axa-fr/react-toolkit-form-input-switch`

1. [Switch](#switch)
2. [SwitchInput](#switchinput)
   1. [SwitchInput Required](#switchinput-required)

## Switch

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-switch
```

### Import

```javascript
import { Switch } from '@axa-fr/react-toolkit-form-input-switch';
import '@axa-fr/react-toolkit-form-input-switch/dist/af-switch.css';
```

### Use

```javascript
const options = [
  {
    id: 'check0',
    label: 'Choice 1',
    value: 'value1',
  },
  {
    id: 'check1',
    label: 'Choice 2',
    value: '2',
  },
  {
    id: 'check2',
    label: 'Choice 3',
    value: 'value3',
  },
  {
    id: 'check3',
    label: 'Choice 4',
    value: '4',
  },
];

const SwitchInput = () => (
  <Switch
    name="Form.SwitchInput"
    value={options[3].value}
    options={options}
    onChange={(e) => console.log(e)}
    disabled={false}
  />
);
export default SwitchInput;
```

## SwitchInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-switch
```

### Import

```javascript
import { SwitchInput } from '@axa-fr/react-toolkit-form-input-switch';
import '@axa-fr/react-toolkit-form-input-switch/dist/af-switch.css';
```

### Use

```javascript
const options = [
  {
    id: 'check0',
    label: 'Choice 1',
    value: 'value1',
  },
  {
    id: 'check1',
    label: 'Choice 2',
    value: '2',
  },
  {
    id: 'check2',
    label: 'Choice 3',
    value: 'value3',
  },
  {
    id: 'check3',
    label: 'Choice 4',
    value: '4',
  },
];

const SwitchInputReturn = () => (
  <SwitchInput
    id="idSwitchInput"
    name="nameSwitchInput"
    label="Select a choice"
    value={options[3].value}
    options={options}
    disabled={false}
    onChange={(e) => console.log(e)}
  />
);
export default SwitchInputReturn;
```

### SwitchInput Required

To achieve SwitchInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **SwitchInput** component
