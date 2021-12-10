import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from 'react';

import {
  Field,
  HelpMessage,
  FieldInput,
  withInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Number from './Number';

type Props = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithRef<typeof Number> & {
    inputFieldClassModifier: string;
    inputClassModifier: string;
    helpMessage?: ReactNode;
    children?: ReactNode;
  };

const NumberInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  label,
  classNameContainerLabel,
  classNameContainerInput,
  forceDisplayMessage,
  messageType,
  isVisible,
  className,
  inputFieldClassModifier,
  inputClassModifier,
  ...otherProps
}: Props) => {
  const inputId = InputManager.getInputId(id);
  return (
    <Field
      label={label}
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Number
          id={inputId}
          classModifier={inputClassModifier}
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default withInputClassModifier(NumberInput);
