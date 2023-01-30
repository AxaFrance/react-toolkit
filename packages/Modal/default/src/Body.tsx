import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import React from 'react';
import Div, { DivProps } from './Div';

export type BodyProps = DivProps & {
  classModifier?: string;
};

const Body = ({
  children,
  className,
  classModifier,
  ...otherProps
}: BodyProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__body'
  );
  return (
    <Div className={componentClassName} {...otherProps}>
      {children}
    </Div>
  );
};

export default Body;
