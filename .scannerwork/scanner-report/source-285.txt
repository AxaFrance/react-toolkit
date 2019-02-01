import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import {
  Input,
  InputConstants as Constants,
  withInput,
} from '@axa-fr/react-toolkit-form-core';

const MultiSelect = props => {
  const {
    name,
    loadOptions,
    values,
    options,
    value,
    onChange,
    onBlur,
    placeholder,
    className,
    readOnly,
    disabled,
    loadingPlaceholder,
    searchPromptText,
    noResultsText,
    ...otherProps
  } = props;

  const SelectComponent = loadOptions ? ReactSelect.Async : ReactSelect;

  if (values != null) {
    const newValues = options.reduce((acc, opt) => {
      const valueTemp = values.find(v => v === opt.value);
      if (valueTemp) {
        acc.push(opt);
      }
      return acc;
    }, []);

    return (
      <SelectComponent
        isMulti
        name={name}
        value={newValues}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        isDisabled={disabled || readOnly}
        options={options}
        loadOptions={loadOptions}
        loadingPlaceholder={loadingPlaceholder}
        searchPromptText={searchPromptText}
        noResultsText={noResultsText}
        valueKey="value"
        labelKey="label"
        {...otherProps}
      />
    );
  }
  const newValue = options.find(v => v.value === value);
  return (
    <SelectComponent
      multi={false}
      name={name}
      value={newValue}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      readOnly={readOnly}
      disabled={disabled}
      options={options}
      loadOptions={loadOptions}
      loadingPlaceholder={loadingPlaceholder}
      searchPromptText={searchPromptText}
      noResultsText={noResultsText}
      valueKey="value"
      labelKey="label"
      {...otherProps}
    />
  );
};

const propTypes = {
  ...Constants.propTypes,
  values: PropTypes.array,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  loadingPlaceholder: PropTypes.string,
  searchPromptText: PropTypes.string,
  noResultsText: PropTypes.string,
  loadOptions: PropTypes.func,
};

const defaultProps = {
  ...Constants.defaultProps,
  values: null,
  placeholder: 'Select',
  loadingPlaceholder: 'Chargement...',
  searchPromptText: 'Saisir pour chercher',
  noResultsText: 'Aucun résultat',
  loadOptions: null,
};
const defaultClassName = '';

const handlers = {
  onChange: ({ values, name, id, onChange }) => newValue => {
    if (values != null) {
      const newValues = newValue.map(v => v.value);
      onChange({
        values: newValues,
        name,
        id,
      });
    } else {
      onChange({
        value: newValue.value,
        name,
        id,
      });
    }
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(MultiSelect);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = MultiSelect.name;

export default EnhancedComponent;
