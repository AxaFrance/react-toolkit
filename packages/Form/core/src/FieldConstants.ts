import { ReactNode } from 'react';
import {
  ValidationMap,
  oneOfType,
  string,
  func,
  bool,
  element,
  oneOf,
  node,
} from 'prop-types';
import MessageTypes from './MessageTypes';

export type FieldDefaultPropTypes = {
  label?: ReactNode;
  helpMessage?: ReactNode;
  message?: string | null;
  onFocus: Function | null;
  onBlur: Function | null;
  forceDisplayMessage: boolean;
  messageType: MessageTypes;
  readOnly: boolean;
  disabled: boolean;
  isVisible: boolean;
  children: ReactNode;
  className?: string | null;
  classModifier: string | null;
  id: string | undefined;
  autoFocus: boolean;
  tabIndex: string | null;
  classNameContainerLabel: string;
  classNameContainerInput: string;
};

export type FieldPropTypes = FieldDefaultPropTypes & {
  name: string;
  onChange: Function;
};

const propTypes: ValidationMap<FieldPropTypes> = {
  label: oneOfType([element, string]),
  name: string.isRequired,
  onChange: func.isRequired,
  helpMessage: string,
  message: string,
  forceDisplayMessage: bool,
  messageType: oneOf([
    MessageTypes.error,
    MessageTypes.warning,
    MessageTypes.success,
  ]),
  readOnly: bool,
  disabled: bool,
  isVisible: bool,
  children: node,
  className: string,
  classModifier: string,
  id: string,
  tabIndex: string,
  autoFocus: bool,
  classNameContainerLabel: string,
  classNameContainerInput: string,
};

const defaultProps: FieldDefaultPropTypes = {
  label: null,
  helpMessage: null,
  message: null,
  onFocus: null,
  onBlur: null,
  forceDisplayMessage: false,
  messageType: MessageTypes.error,
  readOnly: false,
  disabled: false,
  isVisible: true,
  children: null,
  className: null,
  classModifier: null,
  id: null,
  autoFocus: null,
  tabIndex: null,
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};

const FieldConstants = {
  propTypes,
  defaultProps,
};

export default FieldConstants;
