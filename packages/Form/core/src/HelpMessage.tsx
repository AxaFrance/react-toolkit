import React, { ReactNode } from 'react';

type HelpProps = React.ComponentPropsWithoutRef<'small'> & {
  message?: ReactNode | string;
  isVisible?: boolean;
};

const HelpMessage = ({ message, isVisible = true }: HelpProps) =>
  isVisible && <small className="af-form__help">{message}</small>;

export default HelpMessage;
