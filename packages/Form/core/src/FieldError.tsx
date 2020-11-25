import React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';

const defaultClassName = 'af-form__message';

type FieldProps = {
  message?: string;
  messageType?: MessageTypes;
};

const FieldError = ({
  message,
  messageType = MessageTypes.error,
}: FieldProps) => {
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

export default FieldError;
