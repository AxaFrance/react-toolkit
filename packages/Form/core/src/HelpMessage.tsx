import React, { ReactNode } from 'react';

type HelpProps = {
  message?: ReactNode;
  isVisible?: boolean;
};

const HelpMessage = ({ message, isVisible = true }: HelpProps) =>
  isVisible && <small className="af-form__help">{message}</small>;

export default HelpMessage;
