import React from 'react';
import PropTypes from 'prop-types';

import { Input, withInput, omit } from '@axa-fr/react-toolkit-form-core';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const Textarea = props => {
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
    rows,
    cols,
    maxLength,
    minLength,
    ...otherProps
  } = props;

  return (
    <textarea
      className={componentClassName}
      name={name}
      rows={rows}
      id={id}
      cols={cols}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
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

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
const defaultClassName = 'af-form__input-textarea';
const defaultProps = {
  value: '',
  className: defaultClassName,
  placeholder: '',
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps
)(Textarea);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = Textarea.name;

export default EnhancedComponent;
