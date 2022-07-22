import React, { ComponentPropsWithoutRef } from 'react';
import { Radio } from '@axa-fr/react-toolkit-form-input-radio';
import { Option, withInput } from '@axa-fr/react-toolkit-form-core';

const defaultOptions = [
  { label: 'Oui', value: true, id: 'radioItemTrue' },
  { label: 'Non', value: false, id: 'radioItemFalse' },
];

type Props = Omit<ComponentPropsWithoutRef<typeof Radio>, 'options'> & {
  id: string;
  options?: Array<Omit<Option, 'value'> & { value: boolean }>;
};

const Choice = ({
  children,
  value,
  options = defaultOptions,
  id: _id,
  ...otherProps
}: Props) => {
  const choiceOptions = options.map((option) => ({
    ...option,
    value: `${option.value}`,
  }));
  return (
    <Radio {...otherProps} value={value?.toString()} options={choiceOptions}>
      {children}
    </Radio>
  );
};

const handlers = {
  onChange:
    ({ onChange, name, id }: any) =>
    (e: any) => {
      const receivedValue = e.value;
      const newValue = receivedValue === '' ? null : receivedValue === 'true';
      onChange({
        value: newValue,
        name,
        id,
      });
    },
};

Choice.displayName = 'EnhancedInputRadio';

export default withInput<Props>(handlers)(Choice);
