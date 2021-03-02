import React, { ComponentProps, ReactNode } from 'react';
import { CustomFormEvent } from '@axa-fr/react-toolkit-form-core';
import { Option } from '@axa-fr/react-toolkit-core';
import CheckBoxModes from './CheckboxModes';
import CheckboxItem from './CheckboxItem';

const classMode = {
  default: 'af-form__checkbox-custom',
  classic: 'af-form__checkbox',
};

type OnChangeCheckboxEvent = Omit<CustomFormEvent, 'value'> & {
  values: string[];
  target: { value: string; checked?: boolean };
};

type Props = Omit<
  ComponentProps<typeof CheckboxItem>,
  'onChange' | 'value' | 'label' | 'checked'
> & {
  options: Option[];
  values?: string[];
  children?: ReactNode;
  mode?: CheckBoxModes;
  onChange?: (e: OnChangeCheckboxEvent) => void;
};
const Checkbox = ({
  options,
  disabled,
  children,
  values,
  mode = CheckBoxModes.default,
  onChange,
  name,
  id,
  ...otherProps
}: Props) => {
  const onChangeCustom = (e: CustomFormEvent) => {
    const newValues = values || [];

    const index = newValues.indexOf(e.value);
    const checked = index <= -1;
    if (checked) {
      newValues.push(e.value);
    } else {
      newValues.splice(index, 1);
    }
    onChange({
      values: newValues,
      target: { value: e.value, checked },
      name,
      id,
    });
  };

  const classNameMode =
    mode === CheckBoxModes.default || mode === CheckBoxModes.classic
      ? classMode[mode]
      : `af-form__checkbox-${mode}`;

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
            onChange={onChangeCustom}
            disabled={option.disabled || disabled}
            className={classNameMode}
            {...otherProps}>
            {children}
          </CheckboxItem>
        );
      })}
    </>
  );
};

export default Checkbox;
