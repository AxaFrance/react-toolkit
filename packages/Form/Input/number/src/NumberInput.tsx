import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from 'react';

import {
  Field,
  HelpMessage,
  FieldInput,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';
import Number from './Number';

type Props = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithRef<typeof Number> & {
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
  disabled,
  ...otherProps
}: Props) => {
  const inputId = useId(id);
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    !!children
  );
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
          disabled={disabled}
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default NumberInput;
