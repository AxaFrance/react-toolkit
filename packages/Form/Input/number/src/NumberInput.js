import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  FieldConstants as Constants,
  HelpMessage,
  FieldInput,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Number from './Number';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.number,
  viewValue: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  placeholder: null,
  value: null,
  viewValue: '',
};

const NumberInput = (props) => {
  const {
    classModifier,
    message,
    children,
    helpMessage,
    id,
    disabled,
    label,
    classNameContainerLabel,
    classNameContainerInput,
    name,
    forceDisplayMessage,
    messageType,
    isVisible,
    className,
    value,
    viewValue,
    onChange,
    readOnly,
    placeholder,
    ...otherProps
  } = props;
  const inputClassModifier = FormClassManager.getInputClassModifier(
    classModifier,
    children
  );
  const inputFieldClassModifier = FormClassManager.getFieldInputClassModifier(
    classModifier,
    disabled
  );
  const inputId = InputManager.getInputId(id);
  return (
    <Field
      label={label}
      name={name}
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Number
          name={name}
          id={inputId}
          value={value}
          viewValue={viewValue}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          classModifier={inputClassModifier}
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

NumberInput.propTypes = propTypes;
NumberInput.defaultProps = defaultProps;

export default NumberInput;
