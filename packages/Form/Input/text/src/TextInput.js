import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  HelpMessage,
  FieldInput,
  FieldConstants as Constants,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Text from './Text';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  placeholder: null,
  value: '',
};

const TextInput = props => {
  const {
    classModifier,
    message,
    children,
    helpMessage,
    id,
    disabled,
    name,
    classNameContainerLabel,
    classNameContainerInput,
    value,
    onChange,
    readOnly,
    placeholder,
    label,
    messageType,
    isVisible,
    className,
    forceDisplayMessage,
    maxLength,
    minLength,
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
      helpMessage={helpMessage}
      message={message}
      childrenRight={children}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      id={inputId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Text
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          classModifier={inputClassModifier}
          maxLength={maxLength}
          minLength={minLength}
          {...otherProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
