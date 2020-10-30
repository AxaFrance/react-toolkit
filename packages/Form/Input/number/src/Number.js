import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputConstants as Constants,
  withInput,
  omit,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const CustomNumber = ({
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
}) => {
  const inputId = InputManager.getInputId(id);
  return (
    <input
      className={componentClassName}
      name={name}
      id={inputId}
      type="number"
      value={value}
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
  onChange: ({ onChange, name, id }) => (e) =>
    onChange({
      value: e.target.value,
      viewValue: e.target.value,
      name,
      id,
    }),
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
