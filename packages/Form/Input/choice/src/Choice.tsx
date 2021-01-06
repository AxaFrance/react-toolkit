import React, { ComponentPropsWithoutRef } from 'react';
import { Radio } from '@axa-fr/react-toolkit-form-input-radio';
import { CustomFormEvent } from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__radio-custom';

const defaultOptions = [
  { label: 'Oui', value: 'true', id: 'radioItemTrue' },
  { label: 'Non', value: 'false', id: 'radioItemFalse' },
];

type ChoiceEvent = Omit<CustomFormEvent, 'value'> & { value: boolean };
type RadioProps = ComponentPropsWithoutRef<typeof Radio>;
type Props = Omit<
  RadioProps,
  'id' | 'label' | 'checked' | 'onChange' | 'value' | 'options'
> &
  Partial<Pick<RadioProps, 'options'>> & {
    onChange?: (e: ChoiceEvent) => void;
    value?: boolean;
  };
const Choice = ({
  className = defaultClassName,
  children,
  value,
  options = defaultOptions,
  onChange,
  ...otherProps
}: Props) => (
  <Radio
    {...otherProps}
    className={className}
    value={value?.toString()}
    options={options}
    onChange={(e: CustomFormEvent) =>
      onChange && onChange({ ...e, value: e.value === 'true' })
    }>
    {children}
  </Radio>
);

export default Choice;
