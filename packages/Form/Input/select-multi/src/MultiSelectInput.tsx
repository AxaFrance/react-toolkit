import React, { ComponentProps, ReactNode } from 'react';

import {
  Field,
  FieldInput,
  HelpMessage,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import MultiSelect from './MultiSelect';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof MultiSelect> & {
    helpMessage?: ReactNode;
  };

const MultiSelectInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  disabled,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  ...multiSelectProps
}: Props) => {
  const inputFieldClassModifier = `${classModifier} ${
    disabled ? 'disabled' : ''
  }`;
  const inputId = useId(id);
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
        className="af-form__select"
        classModifier={inputFieldClassModifier}>
        <MultiSelect id={inputId} disabled={disabled} {...multiSelectProps} />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default MultiSelectInput;
