import React, { ComponentProps, ReactNode } from 'react';
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
};

const Checkbox = ({
  options,
  disabled,
  children,
  values,
  ...otherProps
}: Props) => (
  <>
    {options.map((option) => {
      const isChecked = values ? values.indexOf(option.value) >= 0 : false;
      return (
        <CheckboxItem
          {...otherProps}
          key={option.value}
          id={option.id}
          value={option.value}
          label={option.label}
          isChecked={isChecked}
          disabled={option.disabled || disabled}>
          {children}
        </CheckboxItem>
      );
    })}
  </>
);

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

type OnChange = {
  onChange: (data: {
    values: string[];
    target: { value: string; checked: boolean };
    name: string;
    id: string;
  }) => void;
};

const handlersOverride = {
  onChange:
    ({ onChange, name, values, id }: Omit<Props, 'onChange'> & OnChange) =>
    (e: any) => {
      let newValues: typeof values = [];
      if (values) {
        newValues = [...values];
      }
      const index = newValues.indexOf(e.value);
      const checked = index <= -1;
      if (checked) {
        newValues.push(e.value);
      } else {
        newValues.splice(index, 1);
      }
      onChange &&
        onChange({
          values: newValues,
          target: { value: e.value, checked },
          name,
          id,
        });
    },
};

const propsOverride = ({
  mode = CheckBoxModes.default,
}: {
  mode?: keyof typeof CheckBoxModes;
}) => ({
  className: defaultClassName(mode),
});

Checkbox.displayName = 'EnhancedInputCheckbox';

export default withInput(handlersOverride, propsOverride)(Checkbox);
