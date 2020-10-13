import MessageTypes from './MessageTypes';

const getFieldInputClassModifier = (modifier: string, disabled: boolean) => {
  if (disabled) {
    return `${modifier} disabled`;
  }
  return modifier;
};

const getInputClassModifier = (modifier: string, children: React.ReactNode) => {
  if (children) {
    return `${modifier} hasinfobulle`;
  }
  return modifier;
};

const getModifier = (messageType: MessageTypes) => {
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
  messageType: MessageTypes,
  message: string,
  modifier: string
) => {
  if (message) {
    const messageModifier = getModifier(messageType);
    if (messageModifier) {
      return `${modifier} ${messageModifier}`;
    }
  }
  return '';
};

export default {
  getFieldInputClassModifier,
  getInputClassModifier,
  getMessageClassModifier,
};
