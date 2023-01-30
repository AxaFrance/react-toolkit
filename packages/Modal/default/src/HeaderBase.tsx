import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Div, { DivProps } from './Div';

export type HeaderBaseProps = DivProps & { classModifier?: string };

const HeaderBase = ({ classModifier, className, ...rest }: HeaderBaseProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__header'
  );

  return <Div {...rest} className={componentClassName} />;
};

export default HeaderBase;
