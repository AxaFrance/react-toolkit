import React from 'react';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
};

const defaultClassName = 'af-header';
const defaultProps = {
  ...Constants.defaultProps,
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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
