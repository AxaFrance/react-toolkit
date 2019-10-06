import React from 'react';
import PropTypes from 'prop-types';

import { omit, withInput } from '@axa-fr/react-toolkit-form-core';

const omitProperties = omit([
  'classModifier',
  'className',
  'isVisible',
  'placeholder',
  'mode',
  'forceDisplayPlaceholder',
]);

const SelectBase = props => {
  const {
    componentClassName,
    name,
    options,
    value,
    onBlur,
    onFocus,
    readOnly,
    disabled,
    onChange,
    id,
    inputRef,
    ...otherProps
  } = props;

  return (
    <div className={componentClassName}>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className="af-form__input-select"
        readOnly={readOnly}
        disabled={disabled}
        ref={inputRef}
        {...omitProperties(otherProps)}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="glyphicon glyphicon-menu-down" />
    </div>
  );
};

const propTypes = {
  value: PropTypes.string,
  values: PropTypes.array,
  options: PropTypes.array.isRequired,
};

const defaultClassName = 'af-form__select-container';
const defaultProps = {
  values: null,
  value: '',
  className: defaultClassName,
};

const EnhancedText = withInput(defaultClassName, propTypes, defaultProps)(
  SelectBase
);

export default EnhancedText;
