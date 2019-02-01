import MessageTypes from './MessageTypes';

const getFieldInputClassModifier = (modifier, disabled) => {
  if (disabled) {
    return `${modifier} disabled`;
  }
  return modifier;
};

const getInputClassModifier = (modifier, children) => {
  if (children) {
    return `${modifier} hasinfobulle`;
  }
  return modifier;
};

const getModifier = messageType => {
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

const getMessageClassModifier = (messageType, message, modifier) => {
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
