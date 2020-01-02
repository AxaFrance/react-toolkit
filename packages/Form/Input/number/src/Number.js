import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputConstants as Constants, withInput, omit } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import parseValueToNumber from './NumberHelper';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const CustomNumber = props => {
  const {
    componentClassName,
    id,
    name,
    viewValue,
    value,
    onChange,
    onBlur,
    onFocus,
    readOnly,
    disabled,
    placeholder,
    inputRef,
    ...otherProps
  } = props;
  let currentViewValue = '';
  if (value !== undefined && value !== null) {
    currentViewValue = value.toString();
  } else if (viewValue !== null && viewValue !== undefined) {
    currentViewValue = props.viewValue;
  }
  const inputId = InputManager.getInputId(id);
  return (
    <input
      className={componentClassName}
      name={name}
      id={inputId}
      type="text"
      value={currentViewValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      ref={inputRef}
      {...omitProperties(otherProps)}
    />
  );
};

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.number,
  viewValue: PropTypes.string,
  placeholder: PropTypes.string,
};
const defaultClassName = 'af-form__input-text';
const defaultProps = {
  ...Constants.defaultProps,
  value: null,
  viewValue: '',
  className: defaultClassName,
  placeholder: '',
};

const handlers = {
  onChange: ({ onChange, name, id }) => e => {
    const viewValue = e.target.value;
    const value = parseValueToNumber(viewValue);

    onChange({
      value,
      viewValue,
      name,
      id,
    });
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(CustomNumber);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = CustomNumber.name;

export default EnhancedComponent;
