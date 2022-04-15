import { Option } from '@axa-fr/react-toolkit-form-core';
import React, { ComponentPropsWithoutRef } from 'react';
import ReactSelectAsync from 'react-select/async';

type ReactSelectAsyncProps = ComponentPropsWithoutRef<typeof ReactSelectAsync>;
type Props = Omit<
  ReactSelectAsyncProps,
  | 'loadingMessage'
  | 'ariaLiveMessages'
  | 'noOptionsMessage'
  | 'isDisabled'
  | 'options'
> & {
  readOnly?: boolean;
  disabled?: boolean;
  options: Option[];
  values?: string[];
  loadingPlaceholder?: ReactSelectAsyncProps['loadingMessage'];
  searchPromptText?: ReactSelectAsyncProps['ariaLiveMessages'];
  noResultsText?: ReactSelectAsyncProps['noOptionsMessage'];
};

const MultiSelect = ({
  name,
  loadOptions,
  value,
  values,
  options,
  onChange,
  readOnly,
  disabled,
  placeholder = 'Select',
  className = 'react-select',
  loadingPlaceholder = () => 'Chargement...',
  searchPromptText = { onChange: () => 'Saisir pour chercher' },
  noResultsText = () => 'Aucun résultat',
  ...otherProps
}: Props) => {
  const isDisabled = disabled || readOnly;
  const newLoadOptions = loadOptions ?? (() => Promise.resolve(options));

  if (values != null) {
    const newValues = options.reduce((acc, opt) => {
      const valueTemp = values.find((v) => v === opt.value);
      if (valueTemp) {
        acc.push(opt);
      }
      return acc;
    }, []);

    return (
      <ReactSelectAsync
        isMulti
        name={name}
        value={newValues}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        isDisabled={isDisabled}
        options={options}
        loadOptions={newLoadOptions}
        loadingMessage={loadingPlaceholder}
        ariaLiveMessages={searchPromptText}
        noOptionsMessage={noResultsText}
        {...otherProps}
      />
    );
  }
  const newValue = options.find((v) => v.value === value) || '';
  return (
    <ReactSelectAsync
      name={name}
      value={newValue}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      isDisabled={isDisabled}
      options={options}
      loadOptions={loadOptions}
      loadingMessage={loadingPlaceholder}
      ariaLiveMessages={searchPromptText}
      noOptionsMessage={noResultsText}
      {...otherProps}
    />
  );
};

export default MultiSelect;
