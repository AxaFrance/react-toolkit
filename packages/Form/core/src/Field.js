import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import FieldError from './FieldError';
import MessageTypes from './MessageTypes';
import FieldForm from './FieldForm';
import Constants from './FieldConstants';

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf([
    MessageTypes.error,
    MessageTypes.success,
    MessageTypes.warning,
  ]),
  isVisible: PropTypes.bool,
  forceDisplayMessage: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
  id: PropTypes.string,
  classNameContainerLabel: PropTypes.string,
  classNameContainerInput: PropTypes.string,
};


console.log("youhou")

const defaultClassName = 'row af-form__group';
const defaultProps = {
  message: null,
  messageType: MessageTypes.error,
  isVisible: true,
  forceDisplayMessage: false,
  className: defaultClassName,
  classModifier: '',
  id: '',
  classNameContainerLabel: Constants.defaultProps.classNameContainerLabel,
  classNameContainerInput: Constants.defaultProps.classNameContainerInput,
};

const Field = props => {
  const {
    children,
    message,
    label,
    messageType,
    forceDisplayMessage,
    classModifier,
    className,
    id,
    classNameContainerLabel,
    classNameContainerInput,
    isVisible,
  } = props;
  if (!isVisible) {
    return false;
  }

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <div className={classNameContainerLabel}>
        <label className="af-form__group-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <FieldForm
        className={classNameContainerInput}
        message={message}
        messageType={messageType}
        forceDisplayMessage={forceDisplayMessage}>
        {children}
        <FieldError message={message} messageType={messageType} />
      </FieldForm>
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
