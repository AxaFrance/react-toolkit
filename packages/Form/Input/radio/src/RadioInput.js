import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  FieldConstants as Constants,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Radio from './Radio';
import RadioModes from './RadioModes';

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

const defaultProps = {
  ...Constants.defaultProps,
  value: '',
  mode: RadioModes.default,
};

const RadioInput = (props) => {
  const {
    mode,
    messageType,
    message,
    className,
    classModifier,
    id,
    name,
    isVisible,
    options,
    classNameContainerLabel,
    classNameContainerInput,
    label,
    forceDisplayMessage,
    value,
    onChange,
    readOnly,
    disabled,
    children,
    ...otherProps
  } = props;
  if (!isVisible) {
    return null;
  }
  let rowModifier = classModifier;
  if (mode === RadioModes.classic) {
    rowModifier += ' label-top';
  }
  const newOptions = InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
  return (
    <Field
      label={label}
      name={name}
      id={firstId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Radio
        name={name}
        id={id}
        options={newOptions}
        value={value}
        mode={mode}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        classModifier={classModifier}
        {...otherProps}
      />
      {children}
    </Field>
  );
};

RadioInput.propTypes = propTypes;
RadioInput.defaultProps = defaultProps;

export default RadioInput;
