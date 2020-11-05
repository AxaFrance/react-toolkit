import React from 'react';

type HelpProps = {
  message?: string;
  isVisible?: boolean;
};

const HelpMessage = ({ message, isVisible = true }: HelpProps) => {
  if (isVisible) {
    return <small className="af-form__help">{message}</small>;
  }
  return <></>;
};

export default HelpMessage;
