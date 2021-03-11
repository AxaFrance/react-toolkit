import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
};

const Header = (props: Props) => {
  const { classModifier, className, children } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    'af-header'
  );
  return (
    <div className={componentClassName}>
      <div className="container af-header__wrapper">
        <header className="af-header__content" role="banner">
          {children}
        </header>
      </div>
    </div>
  );
};

export default Header;
