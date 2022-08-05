import React, { ComponentPropsWithoutRef } from 'react';
import Alert from '@axa-fr/react-toolkit-alert';

type SummaryProps = Omit<ComponentPropsWithoutRef<typeof Alert>, 'title'> & {
  title?: string;
  messages?: string[];
  isVisible?: boolean;
};
const Summary = ({
  messages = [],
  isVisible = true,
  className = 'af-alert',
  classModifier = 'danger',
  title = 'Invalid form',
}: SummaryProps) => {
  if (!messages || !isVisible) {
    return null;
  }

  const messagesNotBlank = messages.filter(
    (message) => message !== null && message !== ''
  );
  if (!messagesNotBlank.length) {
    return null;
  }
  return (
    <Alert
      classModifier={classModifier}
      className={className}
      icon="warning-sign"
      title={title}>
      <ul className="af-summary__message-list">
        {messages.map((message) => (
          <li className="af-summary__message-item" key={message}>
            <span>{message}</span>
          </li>
        ))}
      </ul>
    </Alert>
  );
};

export default Summary;
