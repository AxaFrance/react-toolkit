import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  classModifier?: string;
};

const Footer = ({ classModifier, className, ...rest }: FooterProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__footer'
  );

  return <footer {...rest} className={componentClassName} />;
};

export default Footer;
