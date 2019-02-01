import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  handleKeys: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
  className: PropTypes.string,
};

const defaultClassName = 'af-nav__link';
const defaultProps = {
  className: defaultClassName,
  href: '#',
  tabIndex: '-1',
  role: 'menuitem',
  children: null,
  hasFocus: false,
  isMenuOpen: false,
};

const NavBarItemLink = ({
  label,
  href,
  tabIndex,
  role,
  refCallBackFocus,
  isMenuOpen,
  ...otherProps
}) => (
  <a
    ref={refCallBackFocus}
    role={role}
    href={href}
    tabIndex={tabIndex}
    aria-expanded={isMenuOpen}
    {...otherProps}>
    {label}
  </a>
);

NavBarItemLink.propTypes = propTypes;
NavBarItemLink.defaultProps = defaultProps;

export default NavBarItemLink;
