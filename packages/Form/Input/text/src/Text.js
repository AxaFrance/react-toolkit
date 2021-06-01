import React from 'react';
import PropTypes from 'prop-types';

import { Input, withInput, omit } from '@axa-fr/react-toolkit-form-core';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const Text = props => {
  const {
    componentClassName,
    value,
    id,
    name,
    onFocus,
    onBlur,
    readOnly,
    disabled,
    placeholder,
    inputRef,
    onChange,
    maxLength,
    minLength,
    ...otherProps
  } = props;

  return (
    <input
      className={componentClassName}
      name={name}
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      ref={inputRef}
      maxLength={maxLength}
      minLength={minLength}
      {...omitProperties(otherProps)}
    />
  );
};

const defaultClassName = 'af-form__input-text';
const propTypes = {
  value: PropTypes.string,
};
const defaultProps = {
  value: '',
  className: defaultClassName,
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps
)(Text);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.ContainerClassName = 'af-form__text';
EnhancedComponent.displayName = Text.name;

export default EnhancedComponent;
