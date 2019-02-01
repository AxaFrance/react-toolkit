import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string,
};

const defaultProps = {
  message: null,
};

function FieldError(props) {
  const { message } = props;
  const error = message ? (
    <small className="af-form__message af-form__message--error">
      <span className="glyphicon glyphicon-exclamation-sign" />
      <span className="af-form__error-text">{message}</span>
    </small>
  ) : null;

  return error;
}

FieldError.propTypes = propTypes;
FieldError.defaultProps = defaultProps;

FieldError.Clone = data => {
  const { props, message, child } = data;
  return React.cloneElement(child, {
    ...props,
    message,
  });
};

export default FieldError;
