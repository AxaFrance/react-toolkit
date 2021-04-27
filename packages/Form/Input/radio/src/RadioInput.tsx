import React, { ComponentProps } from 'react';
import { Field } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Radio from './Radio';

import RadioModes from './RadioModes';

type RadioInputProps = ComponentProps<typeof Field> &
  ComponentProps<typeof Radio>;

const RadioInput: React.FC<RadioInputProps> = ({
  mode = RadioModes.default,
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
}) => {
  const fieldClassModifier = `${classModifier ?? ''}${
    classModifier && mode === RadioModes.classic ? ' ' : ''
  }${mode === RadioModes.classic ? 'label-top' : ''}`;
  const newOptions = InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
  const radioClassModifier = `${classModifier ?? ''}${
    classModifier && forceDisplayMessage && messageType ? ' ' : ''
  }${forceDisplayMessage && messageType ? `${messageType}` : ''}`;
  return (
    <Field
      label={label}
      id={firstId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={fieldClassModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Radio
        options={newOptions}
        mode={mode}
        classModifier={radioClassModifier}
        className={className}
        {...radioProps}
      />
      {children}
    </Field>
  );
};

export default RadioInput;
