# `@axa-fr/react-toolkit-form-input-text`

1. [Text](#text)
2. [Text Error](#text-error)
3. [Text Success](#text-success)
   1. [Text Disabled](#text-disabled)
4. [TextInput](#textinput)
   1. [TextInput Required](#textinput-required)
5. [TextInput Error](#textinput-error)
6. [TextInput Rich Label](#textinput-rich-label)

## Text

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Text } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const textReturn = () => (
  <form className="af-form" name="myform">
    <Text id="uniqueid" name="placeName" placeholder="Paris" value="Robert" />
  </form>
);
export default textReturn;
```

## Text Error

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const textError = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="uniqueid"
      name="placeName"
      placeholder="Paris"
      label="your label"
      value="Robert"
      messageType={MessageTypes.error}
      message="Le champ est obligatoires"
      forceDisplayMessage={true}
    />
  </form>
);
export default textError;
```

## Text Success

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import { MessageTypes, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const textSuccess = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="uniqueid"
      name="placeName"
      label="your label"
      value="Robert"
      placeholder="Paris"
      messageType={MessageTypes.success}
      message="Success Message Type"
      forceDisplayMessage={true}
      helpMessage="Enter the place name, ex : Webcenteraa"
    />
    <HelpMessage />
  </form>
);
export default textSuccess;
```

### Text Disabled

To achieve Text Disabled, you need to add this :

```javascript
disabled = { true };
```

in **the component of your choice**.

## TextInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-help
```

### Import

```javascript
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import HelpButton from '@axa-fr/react-toolkit-help';
```

### Use

```javascript
const textInputReturn = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="uniqueid"
      name="placeName"
      placeholder=""
      value=""
      onChange={(e) => {
        console.log(e);
      }}
      label="Place name"
      helpMessage="Enter the place name, ex : Webcenter">
      <HelpButton>tooltip avec du text</HelpButton>
    </TextInput>
  </form>
);
export default textInputReturn;
```

### TextInput Required

To achieve TextInput Required, you need to add this :

```javascript
classModifier = 'required';
```

in **TextInput**.

## TextInput Error

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-help
```

### Import

```javascript
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import HelpButton from '@axa-fr/react-toolkit-help';
```

### Use

```javascript
const textInputError = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="uniqueid"
      name="placeName"
      label="Place name"
      placeholder="Paris"
      classModifier="required"
      value="Robert"
      messageType={MessageTypes.error}
      message="The field is required"
      forceDisplayMessage={true}>
      <HelpButton>tooltip avec du text</HelpButton>
    </TextInput>
  </form>
);
export default textInputError;
```

## TextInput Rich Label

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-help
```

### Import

```javascript
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import HelpButton from '@axa-fr/react-toolkit-help';
```

### Use

```javascript
const richLabel = (
  <span>
    Place name <i>optional</i>
  </span>
);

const textInputRichLabel = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="uniqueid"
      name="placeName"
      placeholder="Paris"
      label={richLabel}
      value="Robert"
      messageType={MessageTypes.error}
      message="Le champ est obligatoires"
      forceDisplayMessage={true}>
      <HelpButton>tooltip avec du text</HelpButton>
    </TextInput>
  </form>
);
export default textInputRichLabel;
```
