import React from 'react';
import PropTypes from 'prop-types';

import { ClassManager } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';
import FormClassManager from './FormClassManager';

const propTypes = {
  children: PropTypes.node.isRequired,
  childrenRight: PropTypes.node,
  helpMessage: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf([
    MessageTypes.error,
    MessageTypes.success,
    MessageTypes.warning,
  ]),
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};

const defaultClassName = '';
const defaultProps = {
  helpMessage: null,
  childrenRight: null,
  message: null,
  messageType: MessageTypes.error,
  isVisible: true,
  className: defaultClassName,
  classModifier: '',
};

const Clone = (data) => {
  const { messageType, message, child, props } = data;
  const classModifier = FormClassManager.getMessageClassModifier(
    messageType,
    message,
    props.classModifier
  );
  return React.cloneElement(child, {
    ...props,
    classModifier,
  });
};

const FieldInput = (props) => {
  const { children, className, classModifier, isVisible } = props;
  if (!isVisible) {
    return false;
  }
  const newClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return <div className={newClassName}>{children}</div>;
};

FieldInput.propTypes = propTypes;
FieldInput.defaultProps = defaultProps;
FieldInput.Clone = Clone;
export default FieldInput;
