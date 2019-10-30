import Form from './Form';
import Validation from './validation';
import {
  computeInitialStateErrorMessage,
  genericHandleChange,
} from './generic';
import React, {useState} from "react";

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

const handleChange = (form ) => event => {
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
  };

const handleSubmit = (form) => () => {
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
  };

const FormContainer = () => {

  const [form, setForm] = useState(initialState);

  const submit = e => {
    e.preventDefault();
    const newForm = handleSubmit(form)();
    setForm(newForm);
  };

  const change = (e) => {
    const newForm = handleChange(form)(e);
    setForm(newForm);
  };

  return (<Form form={form} handleSubmit={submit} handleChange={change} />);
};

export default FormContainer;
