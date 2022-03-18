import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import FieldError from './FieldError';
import MessageTypes from './MessageTypes';
import FieldForm from './FieldForm';

const DEFAULT_CLASS_NAME = 'row af-form__group';

type FieldProps = {
  label: ReactNode;
  children?: ReactNode;
  id?: string;
  message?: string;
  messageType?: MessageTypes;
  forceDisplayMessage?: boolean;
  className?: string;
  classModifier?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
  isVisible?: boolean;
};

const defaultProps = {
  id: '',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  className: DEFAULT_CLASS_NAME,
  classModifier: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
  isVisible: true,
};

const Field = ({
  label,
  children,
  message,
  messageType,
  forceDisplayMessage,
  classModifier,
  className,
  id,
  classNameContainerLabel,
  classNameContainerInput,
  isVisible,
}: FieldProps) => {
  if (!isVisible) {
    return null;
  }

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASS_NAME
  );

  return (
    <div className={componentClassName}>
      <div className={classNameContainerLabel}>
        <label className="af-form__group-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <FieldForm
        className={classNameContainerInput}
        message={message}
        messageType={messageType}
        forceDisplayMessage={forceDisplayMessage}>
        {children}
        <FieldError message={message} messageType={messageType} />
      </FieldForm>
    </div>
  );
};

Field.defaultProps = defaultProps;

export default Field;
