import New from './New';
import { lifecycle, compose, withStateHandlers } from 'recompose';
import { validationForm } from './New.validation';
import {
  FIRSTNAME,
  AGENT,
  LASTNAME,
  CONTRACT,
  BIRTHDATE,
  BEGIN,
  MSG_REQUIRED
} from './constants';

const errorList = fields =>
  Object.keys(fields).filter(key => setErrorMessage(key)(fields));

const setErrorMessage = key => fields => fields[key].errorMessage !== null;

const withInitState = lifecycle({
  state: {
    hasSubmit: false,
    fields: {
      [FIRSTNAME]: { value: '', errorMessage: MSG_REQUIRED },
      [AGENT]: { value: '', errorMessage: MSG_REQUIRED },
      [LASTNAME]: { value: '', errorMessage: MSG_REQUIRED },
      [CONTRACT]: { value: '', errorMessage: MSG_REQUIRED },
      [BIRTHDATE]: { value: '', viewValue: '', errorMessage: MSG_REQUIRED },
      [BEGIN]: { value: '', viewValue: '', errorMessage: MSG_REQUIRED }
    }
  }
});

const withFormHandlers = withStateHandlers(({ fields }) => ({ fields }), {
  onChange: ({ fields }, props) => ({ name, value, viewValue }) => {
    const errorMessage = validationForm[name](viewValue || value);
    return {
      fields: {
        ...fields,
        [name]: {
          value,
          errorMessage
        }
      }
    };
  },
  onSubmit: ({ fields }, { history }) => e => {
    const errors = errorList(fields);
    if (!errors.length) {
      history.push('/confirm');
    }
    return {
      hasSubmit: true
    };
  }
});

const enhance = compose(
  withInitState,
  withFormHandlers
);

const Enhanced = enhance(New);

export default Enhanced;
