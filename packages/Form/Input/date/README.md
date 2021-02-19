## Form Input Date

---

### Get started

```sh
npm i @axa-fr/react-toolkit-form-input-date
```

First to use, you have to import the component.

```js
import { CustomDate, DateInput } from '@axa-fr/react-toolkit-form-input-date';
import '@axa-fr/react-toolkit-form-input-date-phone/dist/datepicker.scss';
```

The component reuses the following library:

- react-datepicker: https://reactdatepicker.com

The date is a special component. It actually has 2 important props:

- viewValue: The value of the text field which is a string
- value: The value of the date in momentjs format

This allows you to have control of what happens and to respond to all use cases. If you are an individual, you can use the "viewValue" or "value" property. In any case if "viewValue" is not a valid date in the current language, the value of "value" returned will always be "null".

### Supported Languages

The Date input allows to use various languages. French is the default locale, but you can change it using the `locale` property. You can find the available languages full list on [DateFns's website](https://date-fns.org/v2.0.0-alpha.18/docs/I18n#supported-languages).

This feature uses the [dynamic import](https://reactjs.org/docs/code-splitting.html#import) in order to import only the locales needed by the user. Be sure that your project is able to manage that with an approriate tool (like Webpack).

### Format

Since Version 2.0, DateInput uses [Date-Fns](https://date-fns.org/) and returns a Javascript Date object. Moment is not required anymore. You can specify the string format for viewValue in the format property. The default format is "dd/MM/YYYY" you can find the list on the [Date-fns](https://date-fns.org/docs/format) Website

For more information about style component, you can see the [Form Date Style on Toolkit-core ](http://toolkit-intranet-axa.azurewebsites.net/#/form)
