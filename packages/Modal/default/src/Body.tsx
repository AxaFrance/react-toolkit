import React from 'react';
import {
  WithClassModifierOptions,
  ClassManager,
} from '@axa-fr/react-toolkit-core';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__body';

export type BodyProps = DivProps & WithClassModifierOptions;

const Body = ({ classModifier, className, ...rest }: BodyProps) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASSNAME
  );

  return <Div {...rest} className={componentClassName} />;
};

export default Body;
