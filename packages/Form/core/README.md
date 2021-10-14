# `@axa-fr/react-toolkit-form-core`

## Installation

```shell script
npm i @axa-fr/react-toolkit-form-core
```

## FieldForm

### Import

```javascript
import { Field, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const FieldForm = () => (
  <Field id="uniqueId" label="Your Label">
    <textarea name="placeName" placeholder="Paris"></textarea>
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </Field>
);
export default FieldForm;
```
