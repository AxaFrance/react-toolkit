import { ReactNode } from 'react';
import MessageTypes from './MessageTypes';

const getFieldInputClassModifier = (modifier: string, disabled: boolean) =>
  disabled ? `${modifier} disabled` : modifier;

const getInputClassModifier = (modifier: string, children: ReactNode) =>
  children ? `${modifier} hasinfobulle` : modifier;

const getModifier = (messageType: string) => {
  let modifier = 'error';
  switch (messageType) {
    case MessageTypes.success:
      modifier = 'success';
      break;
    case MessageTypes.warning:
      modifier = 'warning';
      break;
    default:
      break;
  }
  return modifier;
};

const getMessageClassModifier = (
  messageType: 'error' | 'success' | 'warning',
  message: string,
  modifier: string
) => {
  if (message) {
    const messageModifier = getModifier(messageType);
    if (messageModifier) {
      return modifier ? `${modifier} ${messageModifier}` : messageModifier;
    }
  }
  return '';
};

const FormClassManager = {
  getFieldInputClassModifier,
  getInputClassModifier,
  getModifier,
  getMessageClassModifier,
};

export default FormClassManager;
