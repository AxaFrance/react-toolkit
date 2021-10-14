# `@axa-fr/react-toolkit-form-input-date`

**For the use of the date, we use the moment.js library you find the documentation below** :
[Moment.js documentation](https://momentjs.com/docs/)

1. [DateInputStory](#dateinputstory)
2. [DateInputStory Required](#dateinputstory-required)
3. [CustomDateStory](#customdatestory)

## DateInputStory

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-date
npm i @axa-fr/react-toolkit-form-core
npm install moment
```

### Import

```javascript
import { DateInput } from '@axa-fr/react-toolkit-form-input-date';
import moment from 'moment';
import '@axa-fr/react-toolkit-form-input-date/dist/af-datepicker.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const DateInputStory = () => {
  const dateNow = moment().toDate();
  return (
    <form className="af-form" name="myform">
      <DateInput
        id="uniqueId"
        label="Place name"
        className="DateInput"
        helpMessage="jj/mm/aaaa"
        value={dateNow}
        locale="fr"
        onChange={(e: any) => {
          console.log(e);
        }}
      />
    </form>
  );
};
export default DateInputStory;
```

### DateInputStory Required

To achieve DateInputStory Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **DateInputStory** component

## CustomDateStory

### Installation

```shell script
npm i "@axa-fr/react-toolkit-form-input-date"
npm i "@axa-fr/react-toolkit-form-core"
npm install moment
```

### Import

```javascript
import { CustomDate } from '@axa-fr/react-toolkit-form-input-date';
import '@axa-fr/react-toolkit-form-input-date/dist/af-datepicker.css';
import {
  HelpMessage,
  Field,
  FieldError,
} from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import moment from 'moment';
```

### Use

```javascript
const CustomDateStory = () => {
  const dateNow = moment().toDate();
  return (
    <form className="af-form" name="myform">
      <Field id="customDateId" label="Choix d'une date" message="">
        <div className="col-md-10">
          <div className="af-datepicker__container">
            <CustomDate value={dateNow} />
            <span className="glyphicon glyphicon-calendar" />
          </div>
          <HelpMessage message="jj/mm/aaaa" />
          <FieldError />
        </div>
      </Field>
    </form>
  );
};
export default CustomDateStory;
```
