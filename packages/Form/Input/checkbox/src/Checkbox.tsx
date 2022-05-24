import React, { ChangeEvent, ComponentProps, ReactNode } from 'react';
import { Option, withInput } from '@axa-fr/react-toolkit-form-core';
import CheckBoxModes from './CheckboxModes';
import CheckboxItem from './CheckboxItem';

type Props = Omit<
  ComponentProps<typeof CheckboxItem>,
  'value' | 'label' | 'checked'
> & {
  options: Option[];
  values?: string[];
  children?: ReactNode;
  mode?: CheckBoxModes;
};

const Checkbox = ({
  options,
  disabled,
  children,
  values,
  mode = CheckBoxModes.default,
  name,
  className = defaultClassName(mode),
  ...otherProps
}: Props) => {
  return (
    <>
      {options.map((option) => {
        const isChecked = values ? values.indexOf(option.value) >= 0 : false;
        return (
          <CheckboxItem
            key={option.value}
            id={option.id}
            value={option.value}
            label={option.label}
            checked={isChecked}
            name={name}
            disabled={option.disabled || disabled}
            className={className}
            {...otherProps}>
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

const handlersOverride = {
  onChange:
    ({ onChange, name, values, id }: any) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      let newValues: typeof values = [];
      if (values) {
        newValues = [...values];
      }
      const index = newValues.indexOf(e.target.value);
      const checked = index <= -1;
      if (checked) {
        newValues.push(e.target.value);
      } else {
        newValues.splice(index, 1);
      }
      onChange({
        values: newValues,
        target: { value: e.target.value, checked },
        name,
        id,
      });
    },
};

Checkbox.displayName = 'EnhancedInputCheckbox';

export default withInput<Props>(handlersOverride)(Checkbox);
