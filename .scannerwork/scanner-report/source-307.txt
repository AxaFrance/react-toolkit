import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string,
  isVisible: PropTypes.bool,
};

const defaultProps = {
  message: null,
  isVisible: true,
};

const HelpMessage = props => {
  const { message, isVisible } = props;
  if (isVisible) {
    return <small className="af-form__help">{message}</small>;
  }
  return null;
};

HelpMessage.propTypes = propTypes;
HelpMessage.defaultProps = defaultProps;

HelpMessage.Clone = data => {
  const { props, message, child } = data;
  return React.cloneElement(child, {
    ...props,
    isVisible: !message,
  });
};

export default HelpMessage;
