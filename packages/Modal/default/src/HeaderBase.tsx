import React from 'react';

import {
  ClassManager,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__header';

export type HeaderBaseProps = DivProps & WithClassModifierOptions;

const HeaderBase = ({ classModifier, className, ...rest }: HeaderBaseProps) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASSNAME
  );

  return <Div {...rest} className={componentClassName} />;
};

export default HeaderBase;
