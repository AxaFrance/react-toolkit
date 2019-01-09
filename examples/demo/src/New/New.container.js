import New from './New';
import { lifecycle, compose, withStateHandlers } from 'recompose';
import { rules } from './New.validation.rules';
import {
  computeInitialStateErrorMessage,
  genericHandleChange
} from './validation.generic';
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

const setErrorMessage = key => fields => fields[key].message !== null;

const preInitState = lifecycle({
  state: {
    hasSubmit: false,
    fields: {
      [FIRSTNAME]: { name: FIRSTNAME, value: '', message: MSG_REQUIRED },
      [AGENT]: { name: AGENT, value: '', message: MSG_REQUIRED },
      [LASTNAME]: { name: LASTNAME, value: '', message: MSG_REQUIRED },
      [CONTRACT]: { name: CONTRACT, value: '', message: MSG_REQUIRED },
      [BIRTHDATE]: {
        name: BIRTHDATE,
        value: null,
        viewValue: '',
        message: MSG_REQUIRED
      },
      [BEGIN]: {
        name: BEGIN,
        value: null,
        viewValue: '',
        message: MSG_REQUIRED
      }
    }
  }
});

export const withInitState = computeInitialStateErrorMessage(
  preInitState,
  rules
);

const withFormHandlers = withStateHandlers(({ fields }) => ({ fields }), {
  onChange: ({ fields }, props) => event => {
    const newField = genericHandleChange(rules, fields, event);
    return {
      fields: newField
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
