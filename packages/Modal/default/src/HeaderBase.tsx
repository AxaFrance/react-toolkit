import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type HeaderBaseProps = React.HTMLAttributes<HTMLDivElement> & {
  classModifier?: string;
};

const HeaderBase = ({ classModifier, className, ...rest }: HeaderBaseProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__header'
  );

  return <header {...rest} className={componentClassName} />;
};

export default HeaderBase;
