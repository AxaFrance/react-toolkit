import React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import FormClassManager from './FormClassManager';
import Input from './Input';

const Clone = data => {
  const { props, child, wrapper, messageType, message } = data;
  const classModifier = FormClassManager.getMessageClassModifier(
    messageType,
    message,
    props.classModifier
  );
  return React.cloneElement(child, {
    ...props,
    classModifier,
    ...Input.eventWrapper(wrapper, child.props),
  });
};

const getOptionClassName = (
  className,
  classModifier,
  defaultClassName,
  disabled
) => {
  const fieldinputClassModifier = FormClassManager.getFieldInputClassModifier(
    classModifier,
    disabled
  );
  const componentClassName = ClassManager.getComponentClassName(
    className,
    fieldinputClassModifier,
    defaultClassName
  );
  return componentClassName;
};

const isDisabled = (option, disabled) =>
  option.disabled !== undefined ? option.disabled : disabled;

export default {
  Clone,
  getOptionClassName,
  isDisabled,
};
