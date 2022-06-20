import React from 'react';
import ReactSelect, { OptionsType } from 'react-select';
import ReactSelectAsync, { Props as SelectProps } from 'react-select/async';

import { withInput } from '@axa-fr/react-toolkit-form-core';

type Option = { value: string; label: string; [x: string]: any };
type Props = Omit<SelectProps<Option, true>, 'value'> & {
  values?: string[] | null;
  value?: string;
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
  readOnly,
  disabled,
  loadingPlaceholder = 'Chargement...',
  searchPromptText = 'Saisir pour chercher',
  noResultsText = 'Aucun résultat',
  ...otherProps
}: Props) => {
  const isDisabled = disabled || readOnly;
  const commonProps = {
    name,
    onChange,
    onBlur,
    placeholder,
    className,
    isDisabled,
    options,
    searchPromptText,
    noResultsText,
    valueKey: 'value',
    labelKey: 'label',
    ...otherProps,
  };

  if (values != null) {
    const newValues = (options as OptionsType<Option>).filter((opt) =>
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
        loadingPlaceholder={loadingPlaceholder}
      />
    ) : (
      <ReactSelect {...commonValuesProps} />
    );
  }
  const newValue = (options as OptionsType<Option>).find(
    (o) => o.value === value
  );

  const commonValueProps = {
    ...commonProps,
    value: newValue,
  };

  return loadOptions ? (
    <ReactSelectAsync
      {...commonValueProps}
      loadOptions={loadOptions}
      loadingPlaceholder={loadingPlaceholder}
    />
  ) : (
    <ReactSelect {...commonValueProps} />
  );
};

const handlers = {
  onChange:
    ({ values, name, id, onChange }: any) =>
    (newValue: Option | Option[]) => {
      if (values !== null) {
        const newValues = ((newValue as Option[]) || []).map((v) => v.value);
        onChange({
          values: newValues,
          name,
          id,
        });
      } else {
        onChange({
          value: (newValue as Option).value,
          name,
          id,
        });
      }
    },
};

const EnhancedComponent = withInput<Props>(handlers)(MultiSelect);
export default EnhancedComponent;
