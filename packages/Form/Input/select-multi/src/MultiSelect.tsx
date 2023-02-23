import React from 'react';
import ReactSelect, { GroupBase, Options } from 'react-select';
import ReactSelectAsync, { AsyncProps } from 'react-select/async';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

type Option = { value: string; label: string; [x: string]: any };
type Props = Omit<
  AsyncProps<Option, true, GroupBase<Option>>,
  'value' | 'isDisabled'
> & {
  values?: string[] | null;
  value?: string;
  disabled?: boolean;
};
const MultiSelect = ({
  name,
  loadOptions,
  values,
  options,
  value,
  onChange,
  onBlur,
  placeholder = 'Select',
  className = 'react-select',
  disabled,
  loadingMessage = () => 'Chargement...',
  ...otherProps
}: Props) => {
  const commonProps = {
    name,
    onChange,
    onBlur,
    placeholder,
    className,
    isDisabled: disabled,
    options,
    valueKey: 'value',
    labelKey: 'label',
    ...otherProps,
  };

  if (values != null) {
    const newValues = (options as Options<Option>).filter((opt) =>
      values.includes(opt.value)
    );

    const commonValuesProps = {
      ...commonProps,
      isMulti: true,
      value: newValues,
    };

    return loadOptions ? (
      <ReactSelectAsync
        {...commonValuesProps}
        loadOptions={loadOptions}
        loadingMessage={loadingMessage}
      />
    ) : (
      <ReactSelect {...commonValuesProps} />
    );
  }
  const newValue = (options as Options<Option>).find((o) => o.value === value);

  const commonValueProps = {
    ...commonProps,
    multi: false,
    value: newValue,
  };

  return loadOptions ? (
    <ReactSelectAsync
      {...commonValueProps}
      loadOptions={loadOptions}
      loadingMessage={loadingMessage}
    />
  ) : (
    <ReactSelect {...commonValueProps} />
  );
};

export default withIsVisible(MultiSelect);
