import React from 'react';
import PropTypes from 'prop-types';

import { InputList, withInput, omit } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

const omitProperties = omit([
  'classModifier',
  'className',
  'isVisible',
  'onToggleType',
  'componentClassName',
]);

const CheckboxItem = (props) => {
  const {
    optionClassName,
    disabled,
    value,
    isChecked,
    name,
    onBlur,
    onFocus,
    readOnly,
    id,
    children,
    label,
    onChange,
    inputRef,
    ...otherProps
  } = props;
  const newLabel = children || label;
  const newId = InputManager.getInputId(id); // id is require on this component
  return (
    <div key={value} className={optionClassName}>
      <input
        className="af-form__input-checkbox"
        name={name}
        onChange={onChange}
        id={newId}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        readOnly={readOnly}
        ref={inputRef}
        {...omitProperties(otherProps)}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__indicator">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-form__description">{newLabel}</span>
      </label>
    </div>
  );
};

const propTypes = {
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};
const defaultClassName = 'af-form__checkbox';
const defaultProps = {
  value: '',
  className: defaultClassName,
  classModifier: '',
  isChecked: false,
  disabled: true,
};

const props = ({ className, classModifier, disabled }) => ({
  optionClassName: InputList.getOptionClassName(
    className,
    classModifier,
    defaultClassName,
    disabled
  ),
});

const handlers = {
  onChange: ({ onChange, value, name, id }) => (e) => {
    onChange({
      value,
      name,
      id,
    });
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers,
  props
)(CheckboxItem);
EnhancedComponent.displayName = CheckboxItem.name;

export default EnhancedComponent;
