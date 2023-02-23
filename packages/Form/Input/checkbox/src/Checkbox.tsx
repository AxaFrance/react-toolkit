import React, { ComponentProps, ReactNode } from 'react';
import { Option, withIsVisible } from '@axa-fr/react-toolkit-form-core';
import CheckBoxModes from './CheckboxModes';
import CheckboxItem from './CheckboxItem';

type OnChange = {
  onChange: (data: {
    values: string[];
    target: { value: string; checked: boolean };
    name: string;
    id: string;
  }) => void;
};

type Props = Omit<
  ComponentProps<typeof CheckboxItem>,
  'value' | 'label' | 'checked' | 'onChange'
> & {
  options: Option[];
  values?: string[];
  children?: ReactNode;
  mode?: keyof typeof CheckBoxModes;
} & OnChange;

const Checkbox = ({
  id,
  name,
  options,
  disabled,
  children,
  values,
  mode = CheckBoxModes.default,
  onChange,
  ...otherProps
}: Props) => {
  const className = defaultClassName(mode);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value, checked },
  }) => {
    const newValues = checked
      ? [...values, value]
      : values.filter((v) => v !== value);
    onChange({ values: newValues, target: { value, checked }, id, name });
  };
  return (
    <>
      {options.map((option) => {
        const isChecked = values ? values.indexOf(option.value) >= 0 : false;
        return (
          <CheckboxItem
            {...otherProps}
            onChange={handleOnChange}
            key={option.value}
            className={className}
            id={option.id}
            value={option.value}
            label={option.label}
            isChecked={isChecked}
            name={name}
            disabled={option.disabled || disabled}>
            {children}
          </CheckboxItem>
        );
      })}
    </>
  );
};

const defaultClassName = (mode: string) => {
  switch (mode) {
    case CheckBoxModes.default:
      return 'af-form__checkbox-custom';
    case CheckBoxModes.classic:
      return 'af-form__checkbox';
    default:
      return `af-form__checkbox-${mode}`;
  }
};

Checkbox.displayName = 'EnhancedInputCheckbox';

export default withIsVisible(Checkbox);
