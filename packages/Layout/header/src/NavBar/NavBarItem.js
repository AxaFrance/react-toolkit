import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import { setPosition } from './NavBar.helpers';
import { NavBarItemBase } from './NavBarItemBase';

const propTypes = {
  ...Constants.propTypes,
  tabIndex: PropTypes.string,
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  actionElt: PropTypes.element.isRequired,
};

const defaultClassName = 'af-nav__item';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  href: '#',
  tabIndex: '-1',
  role: 'menuitem',
  children: null,
  hasFocus: false,
  ariaLabel: '',
};

const subMenu = (children, renderedChildren, ariaLabel, index) => {
  const icon = (
    <i key={`icon${index}`} className="glyphicon glyphicon-arrow-xs-down" />
  );
  const list = (
    <ul
      key={`list${index}`}
      className="af-nav__list af-nav__list--children"
      role="menu"
      aria-label={ariaLabel}>
      {renderedChildren()}
    </ul>
  );
  return children ? [icon, list] : [];
};

class NavBarItem extends Component {
  constructor(props) {
    super(props);
    this.handleKeys = this.handleKeys.bind(this);
    this.moveBykey = this.moveBykey.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      isMenuOpen: false,
      position: 0,
    };
  }

  handleKeys(e) {
    const { position, isMenuOpen } = this.state;
    const { children } = this.props;
    const { key } = e;
    if (!children) {
      return;
    }
    if (key === 'ArrowDown') {
      e.stopPropagation();
      if (!isMenuOpen) {
        this.openMenu();
      } else {
        this.moveBykey(key);
      }
    }

    if (key === 'ArrowUp' && isMenuOpen) {
      e.stopPropagation();
      if (position === 0) {
        this.closeMenu();
      } else {
        this.moveBykey(key);
      }
    }

    if (key === 'ArrowRight' || key === 'ArrowLeft' || key === 'Escape') {
      this.closeMenu();
    }
  }

  openMenu() {
    const { children } = this.props;
    if (children) {
      this.setState({ isMenuOpen: true });
    }
  }

  closeMenu() {
    this.setState({ isMenuOpen: false, position: 0 });
  }

  moveBykey(key) {
    const { children } = this.props;
    const { position } = this.state;
    const newPositionv = setPosition(
      React.Children.count(children),
      position,
      key
    );
    this.setState({ position: newPositionv });
  }

  renderChild(child, index) {
    const { position, isMenuOpen } = this.state;
    const { hasFocus } = this.props;
    return React.cloneElement(child, {
      classModifier: index === position && isMenuOpen ? 'active' : '',
      tabIndex: index === position && isMenuOpen ? '0' : '-1',
      key: `child${index}`,
      hasFocus: hasFocus && position === index && isMenuOpen,
    });
  }

  renderChildren() {
    const { children } = this.props;
    if (children) {
      return React.Children.map(children, (child, index) =>
        this.renderChild(child, index)
      );
    }
    return null;
  }

  render() {
    const { isMenuOpen } = this.state;
    const { children, index, actionElt, ariaLabel, ...otherProps } = this.props;

    return (
      <NavBarItemBase
        {...otherProps}
        isMenuOpen={isMenuOpen}
        handleKeys={this.handleKeys}
        actionElt={actionElt}>
        {subMenu(children, this.renderChildren, ariaLabel, index)}
      </NavBarItemBase>
    );
  }
}

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;
