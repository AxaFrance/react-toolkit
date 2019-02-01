import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@axa-fr/react-toolkit-alert';

const propTypes = {
  title: PropTypes.string,
  messages: PropTypes.array,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};
const defaultClassName = 'af-alert';
const defaultClassModifier = 'danger';
const defaultProps = {
  title: "Le formulaire n'est pas valide",
  messages: null,
  isVisible: false,
  className: defaultClassName,
  classModifier: defaultClassModifier,
};

const Messages = ({ messages }) => {
  if (messages) {
    return messages.map(
      message =>
        message ? (
          <li className="af-summary__message-item" key={message}>
            <span>{message}</span>
          </li>
        ) : (
          ''
        )
    );
  }
  return null;
};

const Summary = ({ messages, isVisible, className, classModifier, title }) => {
  if (!messages || !isVisible) {
    return null;
  }
  const hasMessage = messages.some(e => e !== null && e !== '');
  if (!hasMessage) {
    return null;
  }
  return (
    <Alert
      classModifier={classModifier}
      className={className}
      icon="warning-sign"
      title={title}>
      <ul className="af-summary__message-list">{Messages({ messages })}</ul>
    </Alert>
  );
};

Summary.propTypes = propTypes;
Summary.defaultProps = defaultProps;

export default Summary;
