import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';

const propTypes = {
  message: PropTypes.string,
  messageType: PropTypes.oneOf([
    MessageTypes.error,
    MessageTypes.success,
    MessageTypes.warning,
  ]),
};

const defaultProps = {
  message: null,
  messageType: MessageTypes.error,
};

const defaultClassName = 'af-form__message';

const FieldError = ({ message, messageType }) => {
  const className = ClassManager.getComponentClassName(
    defaultClassName,
    messageType,
    defaultClassName
  );

  const classNameError = `af-form__${messageType}-text`;

  return message ? (
    <small className={className}>
      <span className="glyphicon glyphicon-exclamation-sign" />
      <span className={classNameError}>{message}</span>
    </small>
  ) : null;
};

FieldError.propTypes = propTypes;
FieldError.defaultProps = defaultProps;

FieldError.Clone = (data) => {
  const { props, message, child } = data;
  return React.cloneElement(child, {
    ...props,
    message,
  });
};

export default FieldError;
