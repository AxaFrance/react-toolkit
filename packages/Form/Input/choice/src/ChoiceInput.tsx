import React, { ComponentPropsWithoutRef } from 'react';
import { Field, useOptionsWithId } from '@axa-fr/react-toolkit-form-core';
import Choice from './Choice';

type Props = ComponentPropsWithoutRef<typeof Choice> &
  Omit<ComponentPropsWithoutRef<typeof Field>, 'children'>;

const ChoiceInput = ({
  id,
  messageType,
  message,
  className,
  classModifier,
  isVisible,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  forceDisplayMessage,
  options,
  ...otherProps
}: Props) => {
  const newOptions = useOptionsWithId(options, id);
  const firstId = options && newOptions[0] ? newOptions[0].id : '';

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
      <Choice
        {...otherProps}
        classModifier={classModifier}
        options={options ? newOptions : undefined}
      />
    </Field>
  );
};

export default ChoiceInput;
