import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  FieldConstants as Constants,
  FieldInput,
  HelpMessage,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Switch from './Switch';

const propTypes = {
  ...Constants.propTypes,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
};

const defaultProps = {
  ...Constants.defaultProps,
  value: null,
};

const SwitchInput = props => {
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
    options,
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
  const newOptions = InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
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
      id={firstId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Switch
          name={name}
          id={firstId}
          value={value}
          options={newOptions}
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

SwitchInput.propTypes = propTypes;
SwitchInput.defaultProps = defaultProps;

export default SwitchInput;
