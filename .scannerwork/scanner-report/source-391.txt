import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import ToggleButton from '../ToggleButton';

const propTypes = {
  ...Constants.propTypes,
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  handleKeys: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  id: PropTypes.string,
  toggleMenuId: PropTypes.string,
  children: PropTypes.node,
  isMenuFocused: PropTypes.bool,
};

const defaultClassName = 'af-nav-container';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  id: 'mainmenu',
  toggleMenuId: 'togglemenu',
  isMenuFocused: false,
};

const NavBarBase = ({
  isVisible,
  onClick,
  id,
  toggleMenuId,
  isMenuFocused,
  className,
  classModifier,
  handleKeys,
  onFocus,
  onBlur,
  children,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <ToggleButton idControl={id}>
        <button
          onClick={onClick}
          type="button"
          className={`mask fade ${isVisible ? 'show' : ''}`}
          id={toggleMenuId}
        />
      </ToggleButton>
      <nav
        className={`af-nav af-drawer left ${isVisible ? 'show' : ''}`}
        role="navigation"
        aria-label="Menu principal">
        <div className="container af-nav__wrapper">
          <div className="af-nav__aside-header">
            <h4 className="af-nav__aside-title">Menu</h4>
            <ToggleButton idControl={id}>
              <button
                onClick={onClick}
                type="button"
                className="af-nav__aside-close"
                id={toggleMenuId}>
                ×
              </button>
            </ToggleButton>
          </div>
          <ul
            onKeyDown={e => {
              e.preventDefault();
              handleKeys(e.key);
            }}
            onFocus={e => {
              onFocus({ e });
            }}
            onBlur={e => {
              onBlur({ e });
            }}
            className={`af-nav__list ${
              isMenuFocused ? 'af-nav__list--focused' : ''
            }`}
            role="menubar"
            aria-labelledby={toggleMenuId}
            id={id}>
            {children}
          </ul>
        </div>
      </nav>
    </div>
  );
};

NavBarBase.propTypes = propTypes;
NavBarBase.defaultProps = defaultProps;

export default NavBarBase;
