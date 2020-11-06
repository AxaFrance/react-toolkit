import React from 'react';
import {
  ClassManager,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__footer';

export type FooterProps = DivProps & WithClassModifierOptions;

const Footer = ({ classModifier, className, ...rest }: FooterProps) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASSNAME
  );

  return <Div {...rest} className={componentClassName} />;
};

export default Footer;
