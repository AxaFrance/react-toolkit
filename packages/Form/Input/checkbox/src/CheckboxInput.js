import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldConstants as Constants,
  Field,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import CheckBoxModes from './CheckboxModes';
import Checkbox from './Checkbox';

const propTypes = {
  ...Constants.propTypes,
  mode: PropTypes.oneOf([
    CheckBoxModes.default,
    CheckBoxModes.classic,
    CheckBoxModes.inline,
    CheckBoxModes.toggle,
  ]),
  options: PropTypes.array.isRequired,
  values: PropTypes.array,
};

const defaultProps = {
  ...Constants.defaultProps,
  mode: CheckBoxModes.default,
  values: null,
  className: '',
};

const CheckboxInput = props => {
  const {
    mode,
    messageType,
    message,
    classModifier,
    id,
    name,
    options,
    values,
    classNameContainerLabel,
    classNameContainerInput,
    label,
    helpMessage,
    children,
    placeholder,
    isVisible,
    className,
    onChange,
    readOnly,
    disabled,
    forceDisplayMessage,
    ...otherProps
  } = props;
  let rowModifier = classModifier;
  if (mode === CheckBoxModes.classic) {
    rowModifier += ' label-top';
  }
  const newOptions = InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
  return (
    <Field
      label={label}
      name={name}
      id={firstId}
      helpMessage={helpMessage}
      message={message}
      childrenRight={children}
      messageType={messageType}
      placeholder={placeholder}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Checkbox
        mode={mode}
        name={name}
        id={id}
        isVisible={isVisible}
        values={values}
        options={newOptions}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        classModifier={classModifier}
        {...otherProps}
      />
    </Field>
  );
};

CheckboxInput.propTypes = propTypes;
CheckboxInput.defaultProps = defaultProps;

export default CheckboxInput;
