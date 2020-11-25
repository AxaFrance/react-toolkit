import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import FieldError from './FieldError';
import MessageTypes from './MessageTypes';

const defaultClassName = 'row af-form__group';

type FieldProps = {
  id: string;
  label: string;
  children?: ReactNode;
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
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  className: defaultClassName,
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
    return <></>;
  }

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <div className={classNameContainerLabel}>
        <label className="af-form__group-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className={classNameContainerInput}>
        {children}
        {forceDisplayMessage && (
          <FieldError message={message} messageType={messageType} />
        )}
      </div>
    </div>
  );
};

Field.defaultProps = defaultProps;

export default Field;
