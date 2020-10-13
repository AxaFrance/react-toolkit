import * as React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import FormClassManager from './FormClassManager';
import Input, { Option } from './Input';
import MessageTypes from './MessageTypes';

type InputListCloneData = {
  message: string;
  messageType: MessageTypes;
  child: React.ReactElement;
  props: any;
  wrapper: any;
};

const Clone = (data: InputListCloneData) => {
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
  className: string,
  classModifier: string,
  defaultClassName: string,
  disabled: boolean
): string => {
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

const isDisabled = (option: Option, disabled: boolean) =>
  option.disabled !== undefined ? option.disabled : disabled;

export default {
  Clone,
  getOptionClassName,
  isDisabled,
};
