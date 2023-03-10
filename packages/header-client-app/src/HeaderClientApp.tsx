import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type HeaderClientAppProps = ComponentPropsWithoutRef<'header'> & {
  classModifier?: string;
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
};

const HeaderClientApp = ({
  className,
  classModifier,
  children,
  leftChildren,
  rightChildren,
  ...otherProps
}: HeaderClientAppProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'afc-header-app'
  );
  return (
    <header className={componentClassName} {...otherProps}>
      {leftChildren}
      {children}
      {rightChildren}
    </header>
  );
};

export default HeaderClientApp;
