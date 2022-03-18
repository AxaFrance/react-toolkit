import { ReactNode } from 'react';
import MessageTypes from './MessageTypes';

export const getFieldInputClassModifier = (
  modifier: string,
  disabled: boolean
) => (disabled ? `${modifier} disabled` : modifier);

export const getInputClassModifier = (modifier: string, children: ReactNode) =>
  children ? `${modifier} hasinfobulle` : modifier;

export const getModifier = ({ messageType = MessageTypes.error }) =>
  messageType === MessageTypes.success || messageType === MessageTypes.warning
    ? messageType
    : MessageTypes.error;

type GetMessageClassModifierType = {
  message: string;
  modifier?: string;
  messageType: MessageTypes;
};

export const getMessageClassModifier = ({
  message,
  modifier = '',
  messageType = MessageTypes.error,
}: GetMessageClassModifierType) =>
  message
    ? [modifier, getModifier({ messageType })].filter(Boolean).join(' ')
    : '';

const FormClassManager = {
  getFieldInputClassModifier,
  getInputClassModifier,
  getModifier,
  getMessageClassModifier,
};

export default FormClassManager;
