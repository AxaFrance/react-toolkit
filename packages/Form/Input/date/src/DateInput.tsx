import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  withInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import CustomDate from './CustomDate';

type Props = Omit<
  ComponentPropsWithoutRef<typeof CustomDate>,
  'placeholderText'
> &
  ComponentPropsWithoutRef<typeof Field> & {
    inputFieldClassModifier: string;
    inputClassModifier: string;
    placeholder?: string;
    helpMessage?: ReactNode | string;
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

const enhanced = withInputClassModifier(DateInput);
export default enhanced;
