import React, { ComponentPropsWithoutRef } from 'react';
import { Radio } from '@axa-fr/react-toolkit-form-input-radio';
import { withInput } from '@axa-fr/react-toolkit-form-core';

const defaultOptions = [
  { label: 'Oui', value: 'true', id: 'radioItemTrue' },
  { label: 'Non', value: 'false', id: 'radioItemFalse' },
];

type RadioProps = ComponentPropsWithoutRef<typeof Radio>;
type Props = Omit<
  RadioProps,
  'id' | 'label' | 'checked' | 'value' | 'options'
> &
  Partial<Pick<RadioProps, 'options'>> & {
    value?: boolean;
  };
const Choice = ({
  children,
  value,
  options = defaultOptions,
  ...otherProps
}: Props) => (
  <Radio {...otherProps} value={value?.toString()} options={options}>
    {children}
  </Radio>
);

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
