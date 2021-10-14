# `@axa-fr/react-toolkit-form-input-select`

1. [SelectBase](#selectbase)
2. [Select](#select)
3. [Select keep placeholder](#select-keep-placeholder)
4. [SelectInput](#selectinput)
5. [SelectInput Required](#selectinput-required)

## SelectBase

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { SelectBase } from '@axa-fr/react-toolkit-form-input-select';
import '@axa-fr/react-toolkit-form-input-select/dist/af-select.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

const SelectBaseInput = () => (
  <form className="af-form" name="myform">
    <div className="af-form__select">
      <SelectBase options={options} />
    </div>
  </form>
);
export default SelectBaseInput;
```

## Select

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Select } from '@axa-fr/react-toolkit-form-input-select';
import '@axa-fr/react-toolkit-form-input-select/dist/af-select.css';
import { FieldInput, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

const SelectInput = () => (
  <form className="af-form" name="myform">
    <FieldInput>
      <div className="col-md-4">
        <div className="af-form__select">
          <Select
            options={options}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <HelpMessage message="Enter the place name, ex : Webcenter" />
        </div>
      </div>
    </FieldInput>
  </form>
);
export default SelectInput;
```

## Select keep placeholder

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Select } from '@axa-fr/react-toolkit-form-input-select';
import '@axa-fr/react-toolkit-form-input-select/dist/af-select.css';
import { FieldInput, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

const SelectKeepPlaceholder = () => (
  <form className="af-form" name="myform">
    <FieldInput>
      <div className="col-md-4">
        <div className="af-form__select">
          <Select
            options={options}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <HelpMessage message="Enter the place name, ex : Webcenter" />
        </div>
      </div>
    </FieldInput>
  </form>
);
export default SelectKeepPlaceholder;
```

## SelectInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-select
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { SelectInput } from '@axa-fr/react-toolkit-form-input-select';
import '@axa-fr/react-toolkit-form-input-select/dist/af-select.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

const SelectInputReturn = () => (
  <form className="af-form" name="myform">
    <SelectInput
      id="idSelectInputReturn"
      name="placeName"
      label="Place type"
      options={options}
      placeholder="- Select -"
      value=""
      helpMessage="Enter the place type"
    />
  </form>
);
export default SelectInputReturn;
```

### SelectInput Required

To achieve SelectInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **SelectInput** component
