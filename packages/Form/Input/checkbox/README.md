# `@axa-fr/react-toolkit-form-input-checkbox`

1. [CheckboxItem](#checkboxitem)
2. [Checkbox](#checkbox)
3. [CheckboxInputClassic](#checkboxinputclassic)
4. [CheckboxInputDefault](#checkboxinputdefault)
5. [CheckboxInput Inline](#checkboxinput-inline)
6. [CheckboxItem Toggle](#checkboxitem-toggle)
7. [CheckboxInput Toggle](#checkboxinput-toggle)

## CheckboxItem

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
```

### Import

```javascript
import { CheckboxItem } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxItemInput = () => (
  <form className="af-form" name="myform">
    <CheckboxItem
      id="uniqueid"
      name="chackboxItemName"
      label="web center forever"
      value="Hello AXA"
      onClick={(e) => {
        console.log(e);
      }}
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default CheckboxItemInput;
```

## Checkbox

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
npm i @axa-fr/react-toolkit-badge
```

### Import

```javascript
import {
  Checkbox,
  CheckboxModes,
} from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
import Badge from '@axa-fr/react-toolkit-badge';
import '@axa-fr/react-toolkit-badge/dist/af-badge.css';
```

### Use

```javascript
const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3', id: 'uniqueId3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
    value: '4',
    id: 'uniqueId4',
  },
];

const values = ['1', '3'];

const CheckboxInput = () => (
  <form className="af-form" name="myform">
    <Checkbox
      id="uniqueid"
      name="placeName"
      values={values}
      options={options}
      mode={CheckboxModes.classic}
    />
  </form>
);
export default CheckboxInput;
```

## CheckboxInputClassic

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
npm i @axa-fr/react-toolkit-badge
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import {
  CheckboxInput,
  CheckboxModes,
} from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
import Badge from '@axa-fr/react-toolkit-badge';
import '@axa-fr/react-toolkit-badge/dist/af-badge.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3', id: 'uniqueId3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
    value: '4',
    id: 'uniqueId4',
  },
];

const values = ['1', '3'];

const CheckboxInputClassic = () => (
  <form className="af-form" name="myform">
    <CheckboxInput
      id="CheckboxInput"
      name="uniqueName"
      label="Place type"
      mode={CheckboxModes.classic}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      values={values}
      options={options}
    />
  </form>
);
export default CheckboxInputClassic;
```

### CheckboxInputRequired

To achieve CheckboxInputRequired, you need to add this:

```javascript
classModifier = 'required';
```

to the **CheckboxInputClassic** component

## CheckboxInputDefault

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
npm i @axa-fr/react-toolkit-badge
```

### Import

```javascript
import { Checkbox } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
import Badge from '@axa-fr/react-toolkit-badge';
import '@axa-fr/react-toolkit-badge/dist/af-badge.css';
```

### Use

```javascript
const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3', id: 'uniqueId3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
    value: '4',
    id: 'uniqueId4',
  },
];

const values = ['1', '3'];

let margin = {
  marginRight: 50,
};

const CheckboxInputDefault = () => (
  <form className="af-form" name="myform">
    <label className="af-form__group-label" style={margin}>
      {' '}
      Place type
    </label>
    <Checkbox
      id="uniqueid"
      name="checkboxName"
      values={values}
      options={options}
    />
  </form>
);
export default CheckboxInputDefault;
```

## CheckboxInput Inline

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
npm i @axa-fr/react-toolkit-badge
```

### Import

```javascript
import {
  Checkbox,
  CheckboxModes,
} from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
import Badge from '@axa-fr/react-toolkit-badge';
import '@axa-fr/react-toolkit-badge/dist/af-badge.css';
```

### Use

```javascript
const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3', id: 'uniqueId3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
    value: '4',
    id: 'uniqueId4',
  },
];

const values = ['1', '3'];

let margin = {
  marginRight: 50,
};

const CheckboxInputInline = () => (
  <form className="af-form" name="myform">
    <label className="af-form__group-label" style={margin}>
      {' '}
      Place type
    </label>
    <Checkbox
      id="uniqueid"
      name="CheckboxName"
      values={values}
      options={options}
      mode={CheckboxModes.inline}
      placeholder="Paris"
    />
  </form>
);
export default CheckboxInputInline;
```

## CheckboxItem Toggle

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
```

### Import

```javascript
import { CheckboxItem } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxItemToggle = () => (
  <form className="af-form" name="myform">
    <CheckboxItem
      id="uniqueid"
      name="checkboxItemName"
      className="af-form__checkbox-toggle"
      value="Hello AXA"
      checked={true}
    />
  </form>
);
export default CheckboxItemToggle;
```

## CheckboxInput Toggle

```shell script
npm i @axa-fr/react-toolkit-form-input-checkbox
```

### Import

```javascript
import { CheckboxItem } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
let margin = {
  marginRight: 50,
};

const CheckboxInputToggle = () => (
  <form className="af-form" name="myform">
    <label className="af-form__group-label" style={margin}>
      Do you accept CGU ?
    </label>
    <CheckboxItem
      id="uniqueid"
      name="checkboxItemName"
      className="af-form__checkbox-toggle"
      value="Hello AXA"
      checked={false}
    />
  </form>
);
export default CheckboxInputToggle;
```
