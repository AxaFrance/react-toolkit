import * as React from 'react';
import Alert from '@axa-fr/react-toolkit-alert';

const defaultClassName = 'af-alert';
const defaultClassModifier = 'danger';
const defaultProps = {
  title: 'Invalid form',
  messages: null as string,
  isVisible: false,
  className: defaultClassName,
  classModifier: defaultClassModifier,
};

interface MessagesProps {
  messages: string[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <>
      {messages.map(message => (
        <li className="af-summary__message-item" key={message}>
          <span>{message}</span>
        </li>
      ))}
    </>
  );
};

interface SummaryProps {
  title?: string;
  messages?: string[];
  isVisible?: boolean;
  className?: string;
  classModifier?: string;
}

const Summary = ({ messages, isVisible, className, classModifier, title }: SummaryProps) => {
  if (!messages || !isVisible) {
    return null;
  }

  const messagesNotBlank = messages.filter(message => message !== null && message !== '');
  if (!messagesNotBlank.length) {
    return null;
  }
  return (
    <Alert classModifier={classModifier} className={className} icon="warning-sign" title={title}>
      <ul className="af-summary__message-list">
        <Messages messages={messagesNotBlank} />
      </ul>
    </Alert>
  );
};

Summary.defaultProps = defaultProps;

export default Summary;
