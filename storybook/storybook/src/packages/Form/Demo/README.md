## Form example

Advises about forms :

- You might not need redux (redux is require only for exchange data at top level application). Do you need exchange you form data at top level application ? ([you-might-not-need-redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367))
- You migth need recompose ([recompose](https://recompose.docsforhumans.com))
- You might code with pure function. You code will be testable.
- You might not mock "import" when you code test ([mocking-is-a-code-smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a))
- You might need only one state at youd form top level component. Even if it is a big form with multiple state.
- Think simplicity (less code)
- Make generic what can be generic (simple use case), do not try to make generic what is specific (or you will rewrite javascript)

### Get started

```sh
npm i @axa-fr/react-toolkit-form-input-file
npm i @axa-fr/react-toolkit-form-input-text
npm i @axa-fr/react-toolkit-form-input-date
npm i @axa-fr/react-toolkit-help
npm i @axa-fr/react-toolkit-form-input-select
npm i @axa-fr/react-toolkit-form-summary
# External librairies (feel free to use another one)
npm i recompose
npm i mw.validation
```

### Exemple "Form.js" (stateless)

```javascript
import React from 'react';
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import { DateInput } from '@axa-fr/react-toolkit-form-input-date';
import { FileInput } from '@axa-fr/react-toolkit-form-input-file';
import HelpButton from '@axa-fr/react-toolkit-help';
import { SelectInput } from '@axa-fr/react-toolkit-form-input-select';
import { Summary } from '@axa-fr/react-toolkit-form-summary';

const Form = ({ handleChange, handleSubmit, form }) => (
  <form className="form-horizontal" onSubmit={handleSubmit}>
    <div className="card form-header">
      <h1>Place</h1>
      <Summary
        messages={form.errorMessages}
        isVisible={form.hasFormSubmittedOnce}
      />
      <h3>Characteristics</h3>
      <TextInput
        label="Place name *"
        name="placeName"
        onChange={handleChange}
        helpMessage="Enter the place name, ex : Webcenter"
        {...form.placeName}>
        <HelpButton>
          Paris est la capitale de la France. Elle se situe au cœur d&apos;un
          vaste bassin sédimentaire aux sols fertiles et au climat tempéré, le
          bassin parisien, sur une boucle de la Seine, entre les confluents de
          celle-ci avec la Marne et l&apos;Oise. Ses habitants s’appellent les
          Parisiens.
        </HelpButton>
      </TextInput>
      <TextInput
        label="Author *"
        name="author"
        onChange={handleChange}
        helpMessage="Enter the author name, ex : Steve"
        {...form.author}
      />
      <DateInput
        label="Date *"
        name="date"
        onChange={handleChange}
        helpMessage="Enter the actuel date"
        {...form.date}
      />
      <SelectInput
        name="placeType"
        label="Place type"
        onChange={handleChange}
        {...form.placeType}
      />
      <h3>Image</h3>
      <FileInput
        label="Upload image"
        accept="image/jpeg, image/png"
        onChange={handleChange}
        name="files"
        {...form.files}
      />
      <TextInput
        label="Image title *"
        name="imageTitle"
        onChange={handleChange}
        helpMessage="Enter the image title, ex : Sunset"
        {...form.imageTitle}
      />
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-10">
          <button
            className="btn btn-primary float-right float-md-left"
            name="submit"
            type="submit">
            Share
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default Form;
```

### Exemple "Form.container.js" (statefull)

```javascript
import { withState, withHandlers, compose, withProps } from 'recompose';
import Form from './Form';
import Validation from './validation';
import {
  computeInitialStateErrorMessage,
  genericHandleChange,
} from './generic';

const preInitialState = {
  placeName: {
    value: '',
    message: '',
  },
  author: {
    value: '',
    message: '',
  },
  placeType: {
    value: '',
    options: [
      { value: 'fun', label: 'For fun' },
      { value: 'work', label: 'For work' },
    ],
  },
  review: {
    value: 1,
  },
  date: {
    value: null,
    viewValue: null,
    message: '',
  },
  files: {
    value: [],
  },
  imageTitle: {
    value: '',
    message: '',
    isVisible: false,
  },
  errorMessages: [],
  hasFormSubmittedOnce: false,
};

const rules = {
  placeName: [
    'required',
    { minLength: { minLength: 3 } },
    { maxLength: { maxLength: 100 } },
  ],
  author: [
    'required',
    { minLength: { minLength: 3 } },
    { maxLength: { maxLength: 100 } },
  ],
  date: ['required', 'date'],
  review: ['digit'],
  placeType: [],
  imageTitle: ['required'],
};
const initialState = computeInitialStateErrorMessage(preInitialState, rules);

const handleChange = ({ setForm }) => event =>
  setForm(form => {
    const { name } = event;
    switch (name) {
      case 'files': {
        {
          const { values } = event;
          const imageTitle = form.imageTitle.value;
          const imageTitleErrorMessage = Validation.validateImageTitle(
            imageTitle,
            values
          );
          return {
            ...form,
            imageTitle: {
              value: imageTitle,
              message: imageTitleErrorMessage,
              isVisible: values.length > 0,
            },
            files: { values },
          };
        }
      }
      default:
        return genericHandleChange(rules, form, event);
    }
  });

const handleSubmit = ({ setForm }) => e =>
  setForm(form => {
    const errorMessages = [];
    for (const name in form) {
      const element = form[name];
      if (element instanceof Object && element.message) {
        errorMessages.push(form.placeName.message);
      }
    }

    const newForm = {
      ...form,
      hasFormSubmittedOnce: true,
      errorMessages,
    };

    for (const name in newForm) {
      const element = newForm[name];
      if (element instanceof Object) {
        element.forceDisplayMessage = true;
      }
    }

    return newForm;
  });

const enhance = compose(
  withState('form', 'setForm', initialState),
  withHandlers({ handleChange, handleSubmit }),
  withProps(props => ({
    handleSubmit: e => {
      e.preventDefault();
      props.handleSubmit();
    },
  }))
);

const FormContainer = enhance(Form);

export default FormContainer;
```

### Exemple "generic.js"

```javascript
import Validate from 'mw.validation';

export function computeInitialStateErrorMessage(state, rules) {
  for (const propertyName in rules) {
    const input = state[propertyName];
    if (input && input instanceof Object) {
      const event = {
        name: propertyName,
        value: input.value,
        viewValue: input.viewValue,
        values: input.values,
      };
      state = genericHandleChange(rules, state, event);
    }
  }
  return state;
}

export function validate(rules, value) {
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
}

export function genericHandleChange(rules, state, event) {
  if (rules[event.name]) {
    if (event.values !== undefined) {
      // Le cas d'un champs qui possède des valeurs multiple
      const { values } = event;
      return {
        ...state,
        [event.name]: {
          ...state[event.name],
          values,
        },
      };
    }
    if (event.viewValue !== undefined) {
      // Le cas d'un date par exemple on valide du text et non un objet date
      const { viewValue, value } = event;
      const inputRules = rules[event.name];
      const message = validate(inputRules, viewValue);
      return {
        ...state,
        [event.name]: {
          ...state[event.name],
          value,
          viewValue,
          message,
        },
      };
    }
    // le cas le plus répandu, on valide une "value" simple
    const { value } = event;
    const inputRules = rules[event.name];
    const message = validate(inputRules, value);
    return {
      ...state,
      [event.name]: {
        ...state[event.name],
        value,
        message,
      },
    };
  }
  console.warn(`Attention le champ ${event.name} n'est pas traité`);
  return state;
}
```
