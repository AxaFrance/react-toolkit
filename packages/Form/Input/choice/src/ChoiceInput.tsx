import React, { ComponentPropsWithoutRef } from 'react';
import { Field, useOptionsWithId } from '@axa-fr/react-toolkit-form-core';
import Choice from './Choice';

type Props = ComponentPropsWithoutRef<typeof Choice> &
  Omit<ComponentPropsWithoutRef<typeof Field>, 'children'>;

const defaultOptions = [
  { label: 'Oui', value: true },
  { label: 'Non', value: false },
];

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
  options = defaultOptions,
  ...otherProps
}: Props) => {
  const newOptions = useOptionsWithId(
    options.map((o) => ({ ...o, value: `${o.value}` })),
    id
  );
  const firstId = newOptions?.[0]?.id ?? '';
  const choiceOptions = newOptions.map((o) => ({
    ...o,
    value: o.value === 'true',
  }));
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
        id={id}
        classModifier={classModifier}
        options={options ? choiceOptions : undefined}
        required={classModifier?.includes('required')}
      />
    </Field>
  );
};

export default ChoiceInput;
