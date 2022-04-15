import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  FieldInput,
  HelpMessage,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import Select from './Select';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Select> & {
    helpMessage?: ReactNode;
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
