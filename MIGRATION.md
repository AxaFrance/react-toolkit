<h1>Migration Guide</h1>

- [From version 1.x to 2.0.x](#from-version-1x-to-20x)
  - [Date Input](#date-input)

# From version 1.x to 2.0.x

## Date Input

We updated the React DatePicker from 1.X to 3.X. The library no longer uses moment. Instead it uses DateFns as a dependency for date management. Therefore, the Date Input no longer uses moment object for the value, but a Javascript [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Also, the onChange callback return a Date value instead of a moment Value.

The `locale` param also changed. It is a string which set the language of the component. You can find the full list on [DateFns's website](https://date-fns.org/v2.0.0-alpha.18/docs/I18n#supported-languages). This feature uses the [dynamic import](https://reactjs.org/docs/code-splitting.html#import) in order to import only the locales needed by the user. Be sure that your project is able to manage that with an approriate tool (like Webpack).

We also added a `format` param which allow to specify the way to display value in viewvalue and in the field. He have to be a [unicode format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

In 1.X:

```javascript
<DateInput
  label="Enter a date"
  locale="fr-fr"
  value={moment('11/26/2017', 'MM/DD/YYYY')}
/>
```

In 2.0.x

```javascript
<DateInput
  label="Enter a date"
  locale="fr"
  value={new Date('11-26-2017')}
  format="dd/MM/yyyyy"
/>
```
