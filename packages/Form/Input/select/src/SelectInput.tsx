import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  FieldInput,
  HelpMessage,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Select from './Select';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Select> & {
    helpMessage?: string;
    children?: ReactNode;
  };

const SelectInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  disabled,
  label,
  classNameContainerLabel,
  classNameContainerInput,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  ...otherSelectProps
}: Props) => {
  const inputClassModifier = `${classModifier} ${
    children ? 'hasinfobulle' : ''
  }`;
  const inputFieldClassModifier = `${classModifier} ${
    disabled ? 'disabled' : ''
  }`;
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
      classModifier={inputFieldClassModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__select"
        classModifier={inputFieldClassModifier}>
        <Select
          id={id}
          disabled={disabled}
          classModifier={inputClassModifier}
          {...otherSelectProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default SelectInput;
