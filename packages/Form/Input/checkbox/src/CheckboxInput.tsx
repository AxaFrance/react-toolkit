import React, { ComponentProps } from 'react';
import { Field } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import CheckBoxModes from './CheckboxModes';
import Checkbox from './Checkbox';

type Props = ComponentProps<typeof Checkbox> & ComponentProps<typeof Field>;

const CheckboxInput = ({
  mode,
  messageType,
  message,
  classModifier,
  options,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  children,
  placeholder,
  isVisible,
  className,
  forceDisplayMessage,
  ...checkboxProps
}: Props) => {
  const rowModifier = `${classModifier} ${
    mode === CheckBoxModes.classic ? 'label-top' : ''
  }`;
  const newOptions = InputManager.getOptionsWithId(options);

  return (
    <Field
      label={label}
      id={newOptions[0]?.id}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Checkbox mode={mode} options={newOptions} {...checkboxProps} />
    </Field>
  );
};

export default CheckboxInput;
