import React, { ReactNode, FC, HTMLProps } from 'react';

type HelpProps = HTMLProps<HTMLSpanElement> & {
  message?: ReactNode | string;
  isVisible?: boolean;
};

const HelpMessage: FC<HelpProps> = ({ message, isVisible = true }) =>
  isVisible ? <small className="af-form__help">{message}</small> : null;

export default HelpMessage;
