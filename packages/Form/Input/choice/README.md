# `@axa-fr/react-toolkit-form-input-choice`

1. [ChoiceInput](#choiceinput)
2. [ChoiceInput Required](#choiceinput-required)
3. [Choice](#choice)

## ChoiceInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-choice
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { ChoiceInput } from '@axa-fr/react-toolkit-form-input-choice';
import '@axa-fr/react-toolkit-form-input-choice/dist/af-radio.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const ChoiceInputForm = () => (
  <form className="af-form" name="myform">
    <ChoiceInput
      id="uniqueid"
      name="choiceInputName"
      label="Place type"
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
      onChange={(e) => {
        console.log(e);
      }}
      onClick={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default ChoiceInputForm;
```

### ChoiceInput Required

To achieve CheckboxInputRequired, you need to add this :

```javascript
classModifier = 'required';
```

to the **ChoiceInput** component

## Choice

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-choice
```

### Import

```javascript
import { Choice } from '@axa-fr/react-toolkit-form-input-choice';
import '@axa-fr/react-toolkit-form-input-choice/dist/af-radio.css';
```

### Use

```javascript
const ChoiceInput = () => (
  <form className="af-form" name="myform">
    <Choice
      name="placeName"
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default ChoiceInput;
```
