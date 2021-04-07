<h1>Migration Guide</h1>

- [From version 1.x to 2.0.x](#from-version-1x-to-20x)
  - [Date Input](#date-input)
  - [All](#package-react-toolkit-all)

# From version 1.x to 2.0.x

## Date Input

We updated the React DatePicker from 1.X to 3.X. The library no longer uses moment. Instead it uses DateFns as a dependency for date management. Therefore, the Date Input no longer uses moment object for the value, but a Javascript [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Also, the onChange callback returns a Date value instead of a moment value.

The `locale` param also changed. It is a string which sets the language of the component. You can find the full list on [DateFns's website](https://date-fns.org/v2.0.0-alpha.18/docs/I18n#supported-languages). This feature uses the [dynamic import](https://reactjs.org/docs/code-splitting.html#import) in order to import only the locales needed by the user. Make sure that your project is compatible with code splitting. (_create-react-app_ does it out-of-the-box).

We also added a `format` prop which allows to specify how `value` is formatted in `viewValue` and in the field. It has to be a [unicode format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

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

## Collapse

We merged CollapseCard and CollapseCardBase so now there is just CollapseCard. You can now use `onToggle` prop on CollapseCard.

**Breaking Change : `collapse` prop is now replaced by `isOpen` who is easier to understand.**

Don't just replace the prop name ! Be sure that you have the expected behaviour.

In 1.X

```javascript
<CollapseCardBase
  collapse={true}
  onToggle={() => {}}
  ...
/>
```

In 2.0.X:

```javascript
<CollapseCard
  isOpen={true}
  onToggle={() => {}}
  ...
/>
```

## Package `react-toolkit-all`

The component `Title` (from `@axa-fr/react-toolkit-layout-header`) has been renamed to `HeaderTitle` to add `@axa-fr/react-toolkit-title` to the `@axa-fr/react-toolkit-all` package.

```diff
- import { Title } from '@axa-fr/react-toolkit-all';
+ import { HeaderTitle } from '@axa-fr/react-toolkit-all';
```
