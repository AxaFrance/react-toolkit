import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import FieldError from './FieldError';
import FieldForm from './FieldForm';
import MessageTypes from './MessageTypes';

type FieldProps = Omit<
  ComponentPropsWithoutRef<typeof FieldForm>,
  'children'
> & {
  label: ReactNode;
  children?: ReactNode;
  id?: string;
  classModifier?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
  isVisible?: boolean;
  roleContainer?: string;
  ariaLabelContainer?: string;
  isLabelContainerLinkedToInput?: boolean;
};

const Field = ({
  id = '',
  message = '',
  messageType = MessageTypes.error,
  label,
  children,
  forceDisplayMessage,
  classModifier = '',
  className,
  classNameContainerLabel = 'col-md-2',
  classNameContainerInput = 'col-md-10',
  isVisible = true,
  roleContainer,
  ariaLabelContainer,
  isLabelContainerLinkedToInput = true,
}: FieldProps) => {
  if (!isVisible) {
    return null;
  }

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'row af-form__group'
  );

  return (
    <div
      className={componentClassName}
      role={roleContainer}
      aria-label={ariaLabelContainer}>
      <div className={classNameContainerLabel}>
        <label
          className="af-form__group-label"
          htmlFor={isLabelContainerLinkedToInput ? id : null}>
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

export default Field;
