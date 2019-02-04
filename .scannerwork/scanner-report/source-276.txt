import React from 'react';
import PropTypes from 'prop-types';

import { InputList, withInput, omit } from '@axa-fr/react-toolkit-form-core';

import CheckBoxModes from './CheckboxModes';
import CheckboxItem from './CheckboxItem';

const omitProperties = omit(['mode', 'id']);

const Checkbox = props => {
  const {
    classModifier,
    options,
    isVisible,
    disabled,
    name,
    onBlur,
    onFocus,
    readOnly,
    children,
    values,
    className,
    onChange,
    ...otherProps
  } = props;

  if (!options) {
    return null;
  }

  return options.map(option => {
    const isChecked = values ? values.indexOf(option.value) >= 0 : false;
    return (
      <CheckboxItem
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
        classModifier={classModifier}
        {...omitProperties(otherProps)}>
        {children}
      </CheckboxItem>
    );
  });
};

const propTypes = {
  mode: PropTypes.oneOf([
    CheckBoxModes.default,
    CheckBoxModes.classic,
    CheckBoxModes.inline,
  ]),
  options: PropTypes.array.isRequired,
  values: PropTypes.array,
};
const defaultClassName = 'af-form__checkbox-custom';
const defaultProps = {
  mode: CheckBoxModes.default,
  values: null,
  className: defaultClassName,
};

const handlers = {
  onChange: ({ onChange, name, values, id }) => e => {
    let newValues = [];
    if (values) {
      newValues = [...values];
    }
    const index = newValues.indexOf(e.value);
    const checked = index <= -1;
    if (checked) {
      newValues.push(e.value);
    } else {
      newValues.splice(index, 1);
    }
    onChange({
      values: newValues,
      target: { value: e.value, checked },
      name,
      id,
    });
  },
};

const props = ({ mode }) => {
  let className = '';
  switch (mode) {
    case CheckBoxModes.classic:
      className = 'af-form__checkbox';
      break;
    case CheckBoxModes.inline:
      className = 'af-form__checkbox-inline';
      break;
    default:
      className = 'af-form__checkbox-custom';
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
)(Checkbox);

EnhancedComponent.Clone = InputList.Clone;
EnhancedComponent.displayName = Checkbox.name;

export default EnhancedComponent;
