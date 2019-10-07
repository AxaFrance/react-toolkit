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

import Select from './Select';
import SelectModes from './SelectModes';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  mode: PropTypes.oneOf([SelectModes.default, SelectModes.base]),
  forceDisplayPlaceholder: PropTypes.bool,
};

const defaultProps = {
  ...Constants.defaultProps,
  value: '',
  mode: SelectModes.default,
  forceDisplayPlaceholder: Boolean(false),
};

const SelectInput = props => {
  const {
    classModifier,
    message,
    children,
    helpMessage,
    id,
    disabled,
    label,
    name,
    mode,
    classNameContainerLabel,
    classNameContainerInput,
    messageType,
    isVisible,
    forceDisplayMessage,
    className,
    value,
    options,
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
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={inputFieldClassModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__select"
        classModifier={inputFieldClassModifier}>
        <Select
          name={name}
          id={id}
          mode={mode}
          value={value}
          options={options}
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

SelectInput.propTypes = propTypes;
SelectInput.defaultProps = defaultProps;

export default SelectInput;
