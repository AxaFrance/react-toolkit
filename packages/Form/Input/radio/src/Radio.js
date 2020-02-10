import React from 'react';
import PropTypes from 'prop-types';
import {
  InputList,
  InputConstants as Constants,
  withInput,
  omit,
} from '@axa-fr/react-toolkit-form-core';
import RadioItem from './RadioItem';
import RadioModes from './RadioModes';

const omitProperties = omit(['mode', 'helpMessage', 'id']);

const Radio = ({
  isVisible,
  className,
  disabled,
  options,
  value,
  name,
  onBlur,
  onFocus,
  readOnly,
  classModifier,
  children,
  onChange,
  ...otherProps
}) =>
  options.map(option => {
    const isChecked = option.value === value;
    return (
      <RadioItem
        key={option.value}
        id={option.id}
        value={option.value}
        label={option.label}
        isChecked={isChecked}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readOnly}
        isVisible={isVisible}
        disabled={InputList.isDisabled(option, disabled)}
        className={className}
        classModifier={option.classModifier}
        {...omitProperties(otherProps)}>
        {children}
      </RadioItem>
    );
  });

const propTypes = {
  ...Constants.propTypes,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  mode: PropTypes.oneOf([
    RadioModes.default,
    RadioModes.classic,
    RadioModes.inline,
  ]),
};
const defaultClassName = '';
const defaultProps = {
  ...Constants.defaultProps,
  value: '',
  classModifier: defaultClassName,
  mode: RadioModes.default,
};

const handlers = {
  onChange: ({ onChange, name, id }) => e => {
    onChange({
      value: e.value,
      name,
      id,
    });
  },
};

const props = ({ mode }) => {
  let className = '';
  switch (mode) {
    case RadioModes.classic:
      className = 'af-form__radio';
      break;
    case RadioModes.inline:
      className = 'af-form__radio-inline';
      break;
    default:
      className = 'af-form__radio-custom';
      break;
  }
  return { className };
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers,
  props
)(Radio);

EnhancedComponent.propTypes = propTypes;
EnhancedComponent.defaultProps = defaultProps;

EnhancedComponent.Clone = InputList.Clone;
EnhancedComponent.displayName = Radio.name;

export default EnhancedComponent;
