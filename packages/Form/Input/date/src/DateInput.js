import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  HelpMessage,
  FieldInput,
  FieldConstants,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import CustomDate from './CustomDate';

const propTypes = {
  ...FieldConstants.propTypes,
  value: PropTypes.object,
  viewValue: PropTypes.string,
  locale: PropTypes.string,
  format: PropTypes.string,
};

const defaultProps = {
  ...FieldConstants.defaultProps,
  value: null,
  viewValue: null,
  locale: 'fr',
  format: 'dd/MM/yyyy',
};

const DateInput = (props) => {
  const {
    classModifier,
    message,
    children,
    helpMessage,
    id,
    disabled,
    classNameContainerLabel,
    classNameContainerInput,
    label,
    messageType,
    placeholder,
    isVisible,
    forceDisplayMessage,
    className,
    name,
    value,
    locale,
    format,
    viewValue,
    onChange,
    readOnly,
    ...otherProps
  } = props;

  if (!isVisible) {
    return null;
  }
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
      placeholder={placeholder}
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
        className="af-datepicker__container"
        classModifier={inputFieldClassModifier}>
        <CustomDate
          name={name}
          id={inputId}
          value={value}
          locale={locale}
          format={format}
          viewValue={viewValue}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          classModifier={inputClassModifier}
          {...otherProps}
        />
        <span className="glyphicon glyphicon-calendar" />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
