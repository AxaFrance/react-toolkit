import React, { ComponentProps } from 'react';
import { Field, useOptionsWithId } from '@axa-fr/react-toolkit-form-core';

import CheckBoxModes from './CheckboxModes';
import Checkbox from './Checkbox';

type Props = Omit<
  ComponentProps<typeof Checkbox> & ComponentProps<typeof Field>,
  'children' | 'placeholder'
>;

const CheckboxInput = ({
  mode,
  messageType,
  message,
  classModifier,
  options,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  isVisible,
  className,
  forceDisplayMessage,
  ...checkboxProps
}: Props) => {
  let rowModifier = classModifier;
  if (mode === CheckBoxModes.classic) {
    rowModifier += ' label-top';
  }
  const newOptions = useOptionsWithId(options);

  return (
    <Field
      label={label}
      id={newOptions[0].id}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Checkbox
        mode={mode}
        options={newOptions}
        classModifier={classModifier}
        {...checkboxProps}
      />
    </Field>
  );
};

export default CheckboxInput;
