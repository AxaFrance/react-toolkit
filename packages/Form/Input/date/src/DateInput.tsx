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
import Date from './CustomDate';

type Props = Omit<
  ComponentPropsWithoutRef<typeof Date>,
  'placeholderText'
> &
  ComponentPropsWithoutRef<typeof Field> & {
    placeholder?: string;
    helpMessage?: ReactNode;
    children?: ReactNode;
  };

const DateInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  name,
  value,
  locale,
  onChange,
  readOnly,
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
        className="af-form__date"
        classModifier={inputFieldClassModifier}>
        <Date
          name={name}
          id={inputId}
          value={value}
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

export default DateInput;
