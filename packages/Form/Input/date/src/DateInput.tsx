import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';
import CustomDate from './CustomDate';

type Props = Omit<
  ComponentPropsWithoutRef<typeof CustomDate>,
  'placeholderText'
> &
  ComponentPropsWithoutRef<typeof Field> & {
    placeholder?: string;
    helpMessage?: ReactNode;
  };
const DateInput = ({
  classModifier,
  message,
  children,
  id,
  disabled,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  helpMessage,
  messageType,
  placeholder,
  isVisible,
  forceDisplayMessage,
  className,
  name,
  value,
  locale,
  format,
  viewValue,
  onChange,
  readOnly,
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
        className="af-datepicker__container"
        classModifier={inputFieldClassModifier}>
        <CustomDate
          name={name}
          id={inputId}
          value={value}
          locale={locale}
          format={format}
          viewValue={viewValue}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          placeholderText={placeholder}
          classModifier={inputClassModifier}
          {...otherProps}
        />
        <span className="glyphicon glyphicon-calendar" />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default DateInput;
