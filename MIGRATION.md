<h1>Migration Guide</h1>

- [From version 2.3.x to 3.0.0](#from-version-23x-to-300)
  - [Title (from layout)](#title-from-layout)
  - [Modal](#modal)
  - [Form](#form)
- [From version 2.2.0 to 2.3.0](#from-version-220-to-230)
- [From version 2.0.x to 2.1.0](#from-version-20x-to-210)
- [From version 1.x to 2.0.x](#from-version-1x-to-20x)
  - [Date Input](#date-input)
  - [All](#package-react-toolkit-all)

# From version 2.3.x to 3.0.0

This version has some breaking changes. Please read the following to update your project.

## Title (from layout)

The `Title` component from the layout-header package has been renamed. Another component was also named `Title` in the title package. To avoid conflicts, the `Title` component from the layout-header package has been renamed to `HeaderTitle`.

```diff
- import { Title } from '@axa-fr/react-toolkit-layout-header';
+ import { HeaderTitle } from '@axa-fr/react-toolkit-layout-header';

- import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
+ import '@axa-fr/react-toolkit-layout-header/dist/HeaderTitle/af-title-bar.css';

- <Title title="Titre de mon application" />
+ <HeaderTitle title="Titre de mon application" />
```

## Modal

The `Modal` component has been fully refactored.\
In a technical standpoint, we removed the use of `react-modal` library and replaced it with a simple `dialog` html element. This change allows us to have a better accessibility and a better performance.\
In a functional standpoint, we removed the `isOpen` prop as the `dialog` element doesn't work that way. To open a dialog you have to call the `showModal` function that will set the `open` attribute on the `dialog` element. To close the dialog you have to call the `close` function that will set the `open` attribute to `false`.\
In order to do that, you can use `ref` to get the `dialog` element and call the `showModal` and `close` functions.

```diff
- <Modal isOpen={isOpen} onOutsideTap={onClose}>
+ const modalRef = useRef<HTMLDialogElement>(null);
+ <Modal ref={modalRef} onOutsideTap={onClose}>
```

```diff
- <button onClick={() => setIsOpen(true)}>Open Modal</button>
+ <button onClick={() => modalRef.current.showModal()}>Open Modal</button>
```

```diff
- <button onClick={() => setIsOpen(false)}>Close Modal</button>
+ <button onClick={() => modalRef.current.close()}>Close Modal</button>
```

Also we removed the prefix `Modal` for the subcomponents of the `Modal` component.\
For example, `Modal.HeaderBase` is now `HeaderBase`, `Modal.Body` is now `Body`, `Modal.Footer` is now `Footer`.

```diff
- <Modal.HeaderBase>My Header</Modal.HeaderBase>
+ <HeaderBase>My Header</HeaderBase>
```

Keep in mind that those components should be wrapped inside a `Modal` component.

Lastly, for your tests to keep working, you will need to define what the `showModal` and `close` functions do. For that you can use the following code in your `setupTests.ts` file :

```javascript
window.HTMLDialogElement.prototype.showModal = vi.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = true;
});

window.HTMLDialogElement.prototype.close = vi.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = false;
});
```

## Form

In this version, we refactored the form `onChange` event. Previously we used to override the native `onChange` event of the input. Now we use the native `onChange` event to keep it simplier and reduce the codebase and possible issues.\
For your forms to still work, you need to change the way you handle the `onChange` event.

Before to get the value of the input, you would do something like this :

```typescript
const handleChange = (event) => {
  changeSomeProperty(event.value);
};
```

Now you can directly get the value from the native event :

```typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  changeSomeProperty(event.target.value);
};
```

This change has to be done on all the form components that you use in your project :

- `Card`
- `Checkbox`
- `Choice`
- `Date`
- `File`
- `Number`
- `Pass`
- `Radio`
- `MultiSelect`
- `Select`
- `Text`
- `Textarea`

# From version 2.2.0 to 2.3.0

## Title

The Title component used to have some different css based on a specific `classModifier` or `className`. For `classModifier` it was called `bigTitle` and for `className` it was `af-subtitle`. This two custom css have now been deleted for the component. If you are using them on your project, you should remove them and make this implementation yourself.
The Title component only implement what our UXs have designed.

# From version 2.0.x to 2.1.0

## Toolkit-core

Some functions have been deleted or moved from the toolkit-core. It is for example the case of the ClassManager utils that could be used like that in 2.0.x

```javascript
import { ClassManager } from '@axa-fr/react-toolkit-core';

className={ClassManager.getComponentClassName(...)}
```

In 2.1.x the ClassManager doesn't exist anymore and you can target the functions directly.

```javascript
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

className={getComponentClassName(...)}
```

## Imports

With the tree shaking and the separation between CommonJS and ECMAScript files, you shouldn't import the components from the component folder of the react-toolkit-all package.

Before :

```javascript
import { Alert } from '@axa-fr/react-toolkit-all/component/alert';
```

After :

```javascript
import { Alert } from '@axa-fr/react-toolkit-all';
```

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

## File Upload Data Handling

In 1.X

- Direct iteration over files and appending them to FormData.

```diff
- const data = new FormData();
- files.forEach(({ file, fieldname, referentialName, type }) => {
-  data.append('Files', file, cleanFileName(file.name));
-  data.append('FieldName', fieldname);
-  data.append('Referential', referentialName);
-  type && data.append('Type', type);
-});
```

In 2.0.x

- Asynchronous handling of files.
- Files fetched as blobs.
- Metadata such as field name and type appended to FormData.

```diff
+ const data = new FormData();
+ await Promise.all(
+   files.map(async ({ file, fieldname, referentialName, type }) => {
+    const blob = await fetch(file.preview).then((response) => response.blob());
+    data.append('Files', blob, cleanFileName(file.name));
+    data.append('FieldName', fieldname);
+    data.append('Referential', referentialName);
+    type && data.append('Type', type);
+  })
+);
```

## CheckboxItem

There has been a change in the representation of boolean values in the events associated with checkbox state changes. In 1.x, boolean values were directly used in events, but after in 2.0.x, these values are now represented as strings indicating the boolean state.

Here is an exemple to adapt to this change :

```diff
-export const handleChange = (e) => {
-  const newValue = !e.value;
-  // Rest of the logic
-}

+export const handleChange = (e) => {
+  const newValue = e.value === 'true';
+  // Rest of the logic
+}
```

## Input Components

There has been a requirement change regarding the label attribute for all types of inputs. In the 1.x version, providing a label for the TextInput component was optional. However, in the 2.0.x version, a label is mandatory for all input components.

Here's an example demonstrating how to adapt to this change:

```diff
- <TextInput
-   name="textInputName"
-   id="textInputId"
-   value="textInputValue"
-   onChange={e => handleChange(e)}
- />

+ <TextInput
+   name="textInputName"
+   id="textInputId"
+   value="textInputValue"
+   onChange={e => handleChange(e)}
+   label=""
+ />
```

In this example, the TextInput component previously didn't have a label specified, which now causes an issue. To resolve this, an empty label attribute has been added to comply with the new requirement.
