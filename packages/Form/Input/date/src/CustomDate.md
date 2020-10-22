## CustomDate

---

### Get started

First to use, you have to import the component.

```js
import { CustomDate } from 'af-toolkit-react';
import '@axa-fr/react-toolkit-form-input-date-phone/dist/datepicker.scss';
```

The component reuses the following library:

- react-datepicker: https://reactdatepicker.com

The date is a special component. It actually has 2 important props:

- viewValue: The value of the text field which is a string
- value: The value of the date in momentjs format

This allows you to have control of what happens and to respond to all use cases. If you are an individual, you can use the "viewValue" or "value" property. In any case if "viewValue" is not a valid date in the current language, the value of "value" returned will always be "null".


### Supported Languages

The Date input allow to use a differents languages : Spanish(es-ES), English (en-GB or en-US), French (fr-FR) and German (de-DE). By default french is used, you can specify the langage in the locale property using the . If you want a new language, please create a [new Issue](https://github.com/AxaGuilDEv/react-toolkit/issues)

### Format

Since the Version 2.0, The DateInput uses [Date-Fns](https://date-fns.org/) and return a Javascript Date object. Moment is not required anymore. You can specify the string format for viewValue in the format property. The default format is "dd/MM/YYYY" you can find the list on the [Date-fns](https://date-fns.org/v2.0.0-alpha.18/docs/format) Website

For more information about style component, you can see the [Form Date Style on Toolkit-core ](http://toolkit-intranet-axa.azurewebsites.net/#/form)
