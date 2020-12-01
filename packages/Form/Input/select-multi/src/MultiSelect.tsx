import React from 'react';
import ReactSelectAsync from 'react-select/async';
import { CustomFormEventValues } from '@axa-fr/react-toolkit-form-core';
import {
  OptionsType,
  OptionTypeBase,
  NamedProps as LibProps,
  ValueType,
} from 'react-select';

type Props = Omit<
  LibProps<OptionTypeBase>,
  'onChange' | 'loadOptions' | 'value'
> & {
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (event: CustomFormEventValues) => void;
  values?: string[];
  loadOptions?: (
    inputValue: string,
    callback: (options: OptionsType<OptionTypeBase>) => void
  ) => Promise<any> | void;
};

const MultiSelect = ({
  id,
  name,
  loadOptions,
  values,
  options,
  onChange,
  readOnly,
  disabled,
  placeholder = 'Select',
  className = 'react-select',
  noOptionsMessage = () => 'Aucun résultat',
  ...otherProps
}: Props) => {
  const selectedValues = options.filter((opt) => values?.includes(opt.value));

  const loadOptionsDefault = () => Promise.resolve(options);

  const handleChange = (changedValue: ValueType<OptionTypeBase>) => {
    onChange &&
      onChange({
        id,
        name,
        values: (changedValue || []).map((v: OptionTypeBase) => v.value),
      });
  };
  return (
    <ReactSelectAsync
      {...otherProps}
      className={className}
      isMulti={values !== null}
      name={name}
      value={selectedValues}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      onChange={handleChange}
      isDisabled={disabled || readOnly}
      defaultOptions
      loadOptions={loadOptions || loadOptionsDefault}
      valueKey="value"
      labelKey="label"
    />
  );
};

export default MultiSelect;
