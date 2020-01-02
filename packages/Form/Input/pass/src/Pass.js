import React from 'react';
import PropTypes from 'prop-types';
import { Input, withInput, omit } from '@axa-fr/react-toolkit-form-core';
import { typesField, strengthList } from './Constant';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const Pass = props => {
  const {
    id,
    name,
    value,
    type,
    onBlur,
    onFocus,
    readOnly,
    disabled,
    placeholder,
    componentClassName,
    onToggleType,
    onChange,
    inputRef,
    ...otherProps
  } = props;

  return (
    <div className={componentClassName}>
      <div className="af-form__pass-strength" />
      <input
        className="af-form__input-text"
        name={name}
        id={id}
        type={type}
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
      <button
        className="af-form__pass-btn"
        type="button"
        onClick={onToggleType}>
        <i
          className={`glyphicon glyphicon-eye${type === 'text'
            ? '-close'
            : '-open'}`}
        />
      </button>
    </div>
  );
};

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([typesField.TEXT, typesField.PASSWORD]),
  strength: PropTypes.oneOf([
    strengthList[0],
    strengthList[1],
    strengthList[2],
    strengthList[3],
    strengthList[4],
  ]),
  onToggleType: PropTypes.func.isRequired,
};
const defaultClassName = 'af-form__pass';
const defaultProps = {
  value: '',
  className: defaultClassName,
  placeholder: '',
  type: typesField.PASSWORD,
  strength: null,
};

export const handlers = {
  onToggleType: ({ onToggleType }) => e => {
    e.preventDefault();
    e.stopPropagation();
    onToggleType();
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(Pass);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.ContainerClassName = defaultClassName;

EnhancedComponent.displayName = Pass.name;

export default EnhancedComponent;
