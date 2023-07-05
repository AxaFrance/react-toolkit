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

## forceDisplayMessage

The default behavior prevents HelpMessage from displaying until the user interacts (change or focus event)  with Field

You can bypass this behavior to display message anyway by setting the property forceDisplayMessage to true (false by default)

```javascript
  <Field id="uniqueId" label="Your Label" forceDisplayMessage />
```
Or

```javascript
  <Field id="uniqueId" label="Your Label" forceDisplayMessage={true} />
```

You can add this parameter to **any input from the toolkit** since inputs pass their props to Field