import React from 'react';
import PropTypes from 'prop-types';
import { InputList, withInput, omit } from '@axa-fr/react-toolkit-form-core';
import { RadioItem } from '@axa-fr/react-toolkit-form-input-radio';

const omitProperties = omit(['className', 'id']);

const defaultClassName = 'af-form__radio-custom';
const Choice = (props) => {
  const {
    isVisible,
    disabled,
    onFocus,
    onBlur,
    name,
    readOnly,
    classModifier,
    children,
    value,
    options,
    onChange,
    ...otherProps
  } = props;
  return options.map((option) => (
    <RadioItem
      key={option.value}
      id={option.id}
      value={option.value != null ? option.value.toString() : ''}
      label={option.label}
      isChecked={option.value === value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      readOnly={readOnly}
      isVisible={isVisible}
      disabled={InputList.isDisabled(option, disabled)}
      className={defaultClassName}
      classModifier={classModifier}
      {...omitProperties(otherProps)}>
      {children}
    </RadioItem>
  ));
};

const propTypes = {
  value: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
};
const defaultProps = {
  value: null,
  className: defaultClassName,
  options: [
    { label: 'Oui', value: true },
    { label: 'Non', value: false },
  ],
};

const handlers = {
  onChange: ({ onChange, name, id }) => (e) => {
    const receivedValue = e.value;
    const newValue = receivedValue === '' ? null : receivedValue === 'true';
    onChange({
      value: newValue,
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
)(Choice);

EnhancedComponent.Clone = InputList.Clone;
EnhancedComponent.displayName = Choice.name;

export default EnhancedComponent;
