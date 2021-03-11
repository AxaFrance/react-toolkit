import React, { ComponentPropsWithoutRef } from 'react';
import { Field } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Choice from './Choice';

type Props = ComponentPropsWithoutRef<typeof Choice> &
  Omit<ComponentPropsWithoutRef<typeof Field>, 'children'>;
const ChoiceInput = ({
  mode,
  messageType,
  message,
  className,
  classModifier,
  id,
  name,
  isVisible,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  forceDisplayMessage,
  onChange,
  readOnly,
  disabled,
  options,
  ...otherProps
}: Props) => {
  const newOptions = options && InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
  return (
    <Field
      label={label}
      id={firstId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Choice options={newOptions} {...otherProps} />
    </Field>
  );
};

export default ChoiceInput;
