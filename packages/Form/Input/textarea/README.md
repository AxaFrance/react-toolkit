# `@axa-fr/react-toolkit-form-input-textarea`

1. [Installation](#installation)
2. [Textarea](#textarea)
3. [TextareaInput](#textareainput)
   1. [TextareaInput Required](#textareainput-required)

## Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-textarea
npm i @axa-fr/react-toolkit-form-core
```

## Textarea

### Import

```javascript
import { Textarea } from '@axa-fr/react-toolkit-form-input-textarea';
import '@axa-fr/react-toolkit-form-input-textarea/dist/af-textarea.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const TextareaInput = () => (
  <form className="af-form" name="myform">
    <Textarea id="uniqueid" name="textareaName" value="" placeholder="Paris" />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default TextareaInput;
```

## TextareaInput

### Import

```javascript
import { TextareaInput } from '@axa-fr/react-toolkit-form-input-textarea';
import '@axa-fr/react-toolkit-form-input-textarea/dist/af-textarea.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const TextareaInputReturn = () => (
  <form className="af-form" name="myform">
    <TextareaInput
      id="uniqueId"
      value=""
      onChange={(e) => {
        console.log(e);
      }}
      label="Place type"
      name="textareainputName"
      rows={6}
      cols={60}
      helpMessage="Enter the place type"
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
export default TextareaInputReturn;
```

### TextareaInput Required

To achieve TextareaInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **TextareaInput** component
