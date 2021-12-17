# `@axa-fr/react-toolkit-form-input-date`

1. [Date](#date)
2. [DateInput](#dateinput)
   1. [DateInput Required](#dateinput-required)

## Date

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-date
```

### Import

```javascript
import { Date } from '@axa-fr/react-toolkit-form-input-date';
import '@axa-fr/react-toolkit-form-input-date/dist/af-date.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const MyCustomDate = () => (
  <Date
    id="uniqueid"
    name="date"
    value={new Date('2021-12-17')}
    onChange={() => {
      console.log('your function');
    }}
  />
);
```

## DateInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-date
```

### Import

```javascript
import { DateInput } from '@axa-fr/react-toolkit-form-input-date';
import { InputConstants, MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-input-date/dist/af-date.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const MyDateInput = () => (
  <form className="af-form" name="myform">
    <DateInput
      id="uniqueid"
      label="Place name"
      name="placeName"
      locale="fr-fr"
      onChange={(date) => {
        console.log(date.getDay());
      }}
      helpMessage="jj/mm/aaaa"
      message=""
      value={Date('2021-12-17')}
      messageType={MessageTypes.success}
      forceDisplayMessage={true}
      classNameContainerLabel={
        InputConstants.defaultProps.classNameContainerLabel
      }
      classNameContainerInput={
        InputConstants.defaultProps.classNameContainerInput
      }
    />
  </form>
);
export default MyDateInput;
```

### DateInput Required

To achieve DateInput Required, you need to add a classModifier prop like this :

```javascript
classModifier = 'required';
```

to the **DateInput** component
