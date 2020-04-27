## CustomDate
* * *

### Get started
First to use, you have to import the component.

```js
import {CustomDate} from 'af-toolkit-react';
import '@axa-fr/react-toolkit-form-input-date-phone/dist/datepicker.scss';
```

The component reuses the following library:
- react-datepicker: https://reactdatepicker.com
- react-datepicker uses momentjs: https://momentjs.com that you must install in your application (mandatory)

```
npm install moment --save
```

Do not forget the right local when starting your application. By default, "create-react-app" excludes locals ​​for lightening the version of your final application. Adding it explicitly allows the local file to be present in the final application.

```js
require ('moment/locale/fr.js');
// in your start application file "index.js"
```

The date is a special component. It actually has 2 important props:
- viewValue: The value of the text field which is a string
- value: The value of the date in momentjs format

This allows you to have control of what happens and to respond to all use cases. If you are an individual, you can use the "viewValue" or "value" property. In any case if "viewValue" is not a valid date in the current language, the value of "value" returned will always be "null".

For more information about style component, you can see the [Form Date Style on Toolkit-core ](http://toolkit-intranet-axa.azurewebsites.net/#/form)
