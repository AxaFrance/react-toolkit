import React, { ComponentPropsWithoutRef } from 'react';
import { Radio } from '@axa-fr/react-toolkit-form-input-radio';
import { Option, withIsVisible } from '@axa-fr/react-toolkit-form-core';

const defaultOptions = [
  { label: 'Oui', value: true, id: 'radioItemTrue' },
  { label: 'Non', value: false, id: 'radioItemFalse' },
];

type Props = Omit<
  ComponentPropsWithoutRef<typeof Radio>,
  'options' | 'onChange'
> & {
  id: string;
  options?: Array<Omit<Option, 'value'> & { value: boolean }>;
  onChange: (data: { name: string; id: string; value: boolean }) => void;
};

const Choice = ({
  children,
  value,
  options = defaultOptions,
  id,
  onChange,
  name,
  ...otherProps
}: Props) => {
  const choiceOptions = options.map((option) => ({
    ...option,
    value: `${option.value}`,
  }));

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value: incomingValue },
  }) => {
    const newValue = incomingValue === '' ? null : incomingValue === 'true';
    onChange({ name, id, value: newValue });
  };

  return (
    <Radio
      {...otherProps}
      value={value?.toString()}
      options={choiceOptions}
      onChange={handleOnChange}
      name={name}>
      {children}
    </Radio>
  );
};

Choice.displayName = 'EnhancedInputRadio';

export default withIsVisible(Choice);
