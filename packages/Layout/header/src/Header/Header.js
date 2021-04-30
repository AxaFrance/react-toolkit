import React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-header';
const defaultProps = {
  className: defaultClassName,
};

const Header = ({ classModifier, className, children, id }) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName} id={id}>
      <div className="container af-header__wrapper">
        <header className="af-header__content" role="banner">
          {children}
        </header>
      </div>
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
