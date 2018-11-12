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
        errorMessages.push(`[${name}] ${element.message}`);
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
