import React, { ComponentPropsWithoutRef } from 'react';
import {
  Field,
  useOptionsWithId,
  getFirstId,
} from '@axa-fr/react-toolkit-form-core';
import Radio, { RadioModes } from './Radio';

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
  ariaLabelContainer,
  ...radioProps
}: RadioInputProps) => {
  const rowModifier = `${classModifier ?? ''}${
    mode === RadioModes.classic ? ' label-top' : ''
  }`;
  const newOptions = useOptionsWithId(options);
  const firstId = getFirstId(newOptions);

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
      classNameContainerInput={classNameContainerInput}
      roleContainer="radiogroup"
      ariaLabelContainer={ariaLabelContainer ?? label.toString()}>
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
