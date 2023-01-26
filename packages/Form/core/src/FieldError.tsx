import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';

const DEFAULT_CLASS_NAME = 'af-form__message';

type FieldProps = {
  message?: string;
  messageType?: MessageTypes;
};

const FieldError = ({
  message = null,
  messageType = MessageTypes.error,
}: FieldProps) => {
  const className = getComponentClassName(
    DEFAULT_CLASS_NAME,
    messageType,
    DEFAULT_CLASS_NAME
  );

  return (
    message && (
      <small className={className}>
        <span className="glyphicon glyphicon-exclamation-sign" />
        <span className={`af-form__${messageType}-text`}>{message}</span>
      </small>
    )
  );
};

export default FieldError;
