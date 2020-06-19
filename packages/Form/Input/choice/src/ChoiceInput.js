import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldConstants as Constants } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Choice from './Choice';

const propTypes = {
  ...Constants.propTypes,
  value: PropTypes.bool,
};

const defaultProps = {
  ...Constants.defaultProps,
  value: null,
  options: [
    { label: 'Oui', value: true },
    { label: 'Non', value: false },
  ],
};

const ChoiceInput = props => {
  const {
    mode,
    messageType,
    message,
    className,
    classModifier,
    id,
    name,
    isVisible,
    classNameContainerLabel,
    classNameContainerInput,
    label,
    forceDisplayMessage,
    value,
    onChange,
    readOnly,
    disabled,
    options,
    ...otherProps
  } = props;
  if (!isVisible) {
    return null;
  }

  let newOptions;
  if (id) {
    newOptions = options.map((option, index) => {
      if (option.id) {
        return option;
      }

      return { ...option, id: `${id}_${index}` };
    });
  }
  newOptions = InputManager.getOptionsWithId(newOptions);

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
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Choice
        name={name}
        id={id}
        options={newOptions}
        value={value}
        mode={mode}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        classModifier={classModifier}
        className={className}
        {...otherProps}
      />
    </Field>
  );
};

ChoiceInput.propTypes = propTypes;
ChoiceInput.defaultProps = defaultProps;

export default ChoiceInput;
