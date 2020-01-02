import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  FieldConstants as Constants,
  HelpMessage,
  FieldInput,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import Pass from './Pass';
import { typesField, strengthList } from './Constant';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([typesField.TEXT, typesField.PASSWORD]),
  strength: Pass.propTypes.strength,
  onToggleType: PropTypes.func.isRequired,
  score: PropTypes.number,
};

const defaultProps = {
  ...Constants.defaultProps,
  placeholder: null,
  value: '',
  type: typesField.PASSWORD,
  strength: null,
  score: null,
};

export const PassInput = props => {
  const {
    message,
    children,
    helpMessage,
    id,
    disabled,
    name,
    type,
    strength,
    label,
    messageType,
    isVisible,
    forceDisplayMessage,
    readOnly,
    placeholder,
    value,
    className,
    classModifier,
    classNameContainerLabel,
    classNameContainerInput,
    onChange,
    onToggleType,
    ...otherProps
  } = props;
  const classModifierStrength =
    strength !== null ? `${classModifier} ${strength}` : classModifier;
  const inputClassModifier = FormClassManager.getInputClassModifier(
    classModifierStrength,
    children
  );
  const inputFieldClassModifier = FormClassManager.getFieldInputClassModifier(
    classModifierStrength,
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
      classModifier={classModifierStrength}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        helpMessage={helpMessage}
        message={message}
        messageType={messageType}
        className="af-form__pass-container"
        classModifier={inputFieldClassModifier}>
        <Pass
          name={name}
          id={inputId}
          type={type}
          strength={strength}
          value={value}
          onChange={onChange}
          onToggleType={onToggleType}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          classModifier={inputClassModifier}
          {...otherProps}
        />
        {children}
        <HelpMessage message={helpMessage} isVisible={!message} />
      </FieldInput>
    </Field>
  );
};

PassInput.propTypes = propTypes;
PassInput.defaultProps = defaultProps;

const onToggleType = ({ type }) => () => ({
  type:
    type === typesField.PASSWORD ? typesField.TEXT : typesField.PASSWORD,
});

const onChangeCore = (state, { onChange, score }) => payload => {
  const strength = score === null ? null : strengthList[parseInt(score, 10)];
  onChange(payload);
  return {
    strength,
  };
};

const EnhancedComponent = (props) => {
  const [state, setState] = useState({ type: typesField.PASSWORD, strength: null });
  const toggleType = (e) => {
    const newState = onToggleType(state)(e);
    setState({ ...state, ...newState});
  };
  const change = (e) => {
    const newState = onChangeCore(state, props)(e);
    setState({ ...state, ...newState});
  };
  return (<PassInput {...props} {...state} onChange={change} onToggleType={toggleType} />);
};

EnhancedComponent.displayName = PassInput.name;

export default EnhancedComponent;
