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

const Header = (props) => {
  const { classModifier, className, children } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
