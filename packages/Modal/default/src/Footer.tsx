import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Div, { DivProps } from './Div';

export type FooterProps = DivProps & { classModifier?: string };

const Footer = ({ classModifier, className, ...rest }: FooterProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__footer'
  );

  return <Div {...rest} className={componentClassName} />;
};

export default Footer;
