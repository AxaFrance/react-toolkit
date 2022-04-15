import React, { ComponentPropsWithoutRef } from 'react';
import { Field, useOptionsWithId } from '@axa-fr/react-toolkit-form-core';
import Radio from './Radio';

type RadioInputProps = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithoutRef<typeof Radio>;

const RadioInput = ({
  mode,
  messageType,
  message,
  className,
  classModifier,
  isVisible,
  options,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  forceDisplayMessage,
  children,
  ...radioProps
}: RadioInputProps) => {
  let rowModifier = classModifier;
  if (mode === 'classic') {
    rowModifier += ' label-top';
  }
  const newOptions = useOptionsWithId(options);
  const firstId = newOptions[0].id;
  return (
    <Field
      label={label}
      id={firstId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Radio
        options={newOptions}
        mode={mode}
        classModifier={classModifier}
        {...radioProps}
      />
      {children}
    </Field>
  );
};

export default RadioInput;
