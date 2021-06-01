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

import Textarea from './Textarea';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

const defaultProps = {
  ...Constants.defaultProps,
  value: '',
  rows: 5,
  cols: 50,
};

const TextareaInput = props => {
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
    isVisible,
    forceDisplayMessage,
    className,
    name,
    rows,
    cols,
    value,
    readOnly,
    placeholder,
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
  const onChange = e => {
    props.onChange(e);
  };
  const rowModifier = `${classModifier} label-top`;
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
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__textarea"
        classModifier={inputFieldClassModifier}>
        <Textarea
          name={name}
          id={inputId}
          rows={rows}
          cols={cols}
          onChange={onChange}
          value={value}
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

TextareaInput.propTypes = propTypes;
TextareaInput.defaultProps = defaultProps;

export default TextareaInput;
