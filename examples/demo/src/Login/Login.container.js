import Login from './Login';
import { rules } from './Login.validation.rules';
import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import {
  computeInitialStateErrorMessage,
  genericHandleChange,
} from './validation.generic';
import { LOGIN, PASSWORD, MSG_REQUIRED } from './constants';

const errorList = fields =>
  Object.keys(fields).filter(key => setErrorMessage(key)(fields));

const setErrorMessage = key => fields => fields[key].message !== null;

const preInitState = {
  hasSubmit: false,
  fields: {
    [LOGIN]: { name: LOGIN, value: '', message: MSG_REQUIRED },
    [PASSWORD]: { name: PASSWORD, value: '', message: MSG_REQUIRED },
  },
};

export const initState = computeInitialStateErrorMessage(preInitState, rules);

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChange':
      const LoginField = genericHandleChange(rules, state.fields, action.event);
      return {
        ...state,
        fields: LoginField,
      };
    case 'onSubmit':
      return {
        ...state,
        hasSubmit: true,
      };
    default:
      throw new Error();
  }
};

const useLogin = history => {
  const [state, dispatch] = useReducer(reducer, initState);
  const onChange = event => dispatch({ type: 'onChange', event });
  const onSubmit = () => {
    const errors = errorList(state.fields);
    if (!errors.length) {
      history.push('/quote/confirm');
    }
    dispatch({ type: 'onSubmit' });
  };
  return { state, onChange, onSubmit };
};

const LoginContainer = ({ history }) => {
  const { state, onChange, onSubmit } = useLogin(history);
  return <Login {...state} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(LoginContainer);
