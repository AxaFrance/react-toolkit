# `@axa-fr/react-toolkit-form-input-date-phone`

**For the use of the date, we use the moment.js library you find the documentation below** :
[Moment.js documentation](https://momentjs.com/docs/)

1. [DatePhone](#datephone)
2. [DatePhoneInput](#datephoneinput)
   1. [DatePhoneInput Required](#datephoneinput-required)

## DatePhone

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-date-phone
npm i @axa-fr/react-toolkit-form-core
npm install moment
```

### Import

```javascript
import { DatePhone } from '@axa-fr/react-toolkit-form-input-date-phone';
import '@axa-fr/react-toolkit-form-input-date-phone/dist/af-phonedate.css';
import {
  FieldError,
  FieldForm,
  HelpMessage,
  MessageTypes,
} from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import moment from 'moment';
```

### Use

```javascript
const DatePhoneInput = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message="your message"
      messageType={MessageTypes.error}
      forceDisplayMessage={false}>
      <div className="col-md-10">
        <DatePhone
          id="uniqueid"
          name="date"
          onChange={() => {
            console.log('your function');
          }}
          value={moment()}
        />
        <HelpMessage message="jj/mm/aaaa" />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);
export default DatePhoneInput;
```

## DatePhoneInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-date-phone
npm i @axa-fr/react-toolkit-form-core
npm install moment
```

### Import

```javascript
import { DatePhoneInput } from '@axa-fr/react-toolkit-form-input-date-phone';
import '@axa-fr/react-toolkit-form-input-date-phone/dist/af-phonedate.css';
import { InputConstants, MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import moment from 'moment';
```

### Use

```javascript
const DatePhoneInputReturn = () => (
  <form className="af-form" name="myform">
    <DatePhoneInput
      id="uniqueid"
      label="Place name"
      name="placeName"
      locale="fr-fr"
      onChange={(e) => {
        console.log(e);
      }}
      helpMessage="jj/mm/aaaa"
      message=""
      value={moment()}
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
export default DatePhoneInputReturn;
```

### DatePhoneInput Required

To achieve DatePhoneInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **DatePhoneInput** component
