import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  FieldConstants as Constants,
  HelpMessage,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Slider from './Slider';

const propTypes = {
  ...Constants.propTypes,
  options: PropTypes.array.isRequired,
};

const defaultProps = {
  ...Constants.defaultProps,
};

const SliderInput = (props) => {
  const {
    id,
    children,
    helpMessage,
    message,
    classNameContainerLabel,
    classNameContainerInput,
    label,
    messageType,
    isVisible,
    forceDisplayMessage,
    className,
    classModifier,
    name,
    value,
    onChange,
    readOnly,
    disabled,
    placeholder,
    ...otherProps
  } = props;
  const inputId = InputManager.getInputId(id);
  return (
    <Field
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Slider
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        classModifier={classModifier}
        {...otherProps}
      />
      {children}
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

SliderInput.propTypes = propTypes;
SliderInput.defaultProps = defaultProps;

export default SliderInput;
