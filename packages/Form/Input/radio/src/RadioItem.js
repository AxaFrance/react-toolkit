import React from 'react';
import PropTypes from 'prop-types';

import { InputList, InputConstants as Constants, withInput, omit } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

const omitProperties = omit([
  'classModifier',
  'className',
  'isVisible',
  'helpMessage',
  'options'
]);

const RadioItem = ({
                     optionClassName,
                     disabled,
                     value,
                     isChecked,
                     id,
                     name,
                     inputRef,
                     readOnly,
                     onChange,
                     onBlur,
                     onFocus,
                     children,
                     label,
                     ...otherProps
                   }) => {
  const newLabel = children || label;
  const newId = InputManager.getInputId(id); // id is require on this component
  return (
    <div className={optionClassName} key={value}>
      <input
        className="af-form__input-radio"
        name={name}
        id={newId}
        type="radio"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        checked={isChecked}
        readOnly={readOnly}
        disabled={disabled}
        ref={inputRef}
        {...omitProperties(otherProps)}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{newLabel}</span>
      </label>
    </div>
  );
};

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  isChecked: PropTypes.bool,
};
const defaultClassName = 'af-form__radio';
const defaultProps = {
  ...Constants.defaultProps,
  value: '',
  className: defaultClassName,
  classModifier: '',
  isChecked: false,
};

const props = ({ className, classModifier, disabled }) => ({
  optionClassName: InputList.getOptionClassName(
    className,
    classModifier,
    defaultClassName,
    disabled
  ),
});

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  {},
  props
)(RadioItem);
EnhancedComponent.displayName = RadioItem.name;

export default EnhancedComponent;
