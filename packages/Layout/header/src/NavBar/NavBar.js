import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import NavBarBase from './NavBarBase';
import { setPosition } from './NavBar.helpers';

const propTypes = {
  ...Constants.propTypes,
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
  toggleMenuId: PropTypes.string,
  children: PropTypes.node,
  positionInit: PropTypes.number,
};

const defaultClassName = 'af-nav-container';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  id: 'mainmenu',
  toggleMenuId: 'togglemenu',
  positionInit: 0,
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.moveBykey = this.moveBykey.bind(this);
    this.getValidChildren = this.getValidChildren.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      isMenuFocused: false,
      position: props.positionInit,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ position: nextProps.positionInit });
  }

  onFocus() {
    this.setState({ isMenuFocused: true });
  }

  onBlur() {
    this.setState({ isMenuFocused: false });
  }

  getValidChildren() {
    const { children } = this.props;
    if (children && children.length) {
      return children.filter(c => !!c);
    }
    return children;
  }

  moveBykey(key) {
    const { position } = this.state;
    const newPosition = setPosition(
      React.Children.count(this.getValidChildren()),
      position,
      key
    );

    this.setState({ position: newPosition });
  }

  handleKeys(key) {
    if (key === 'Escape') {
      this.onBlur();
    }
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      this.moveBykey(key);
    }
  }

  renderChild(child, index) {
    const { position, isMenuFocused } = this.state;
    const childClassModifier = child.props.classModifier || '';
    return React.cloneElement(child, {
      classModifier: childClassModifier + (index === position ? ' active' : ''),
      tabIndex: index === position ? '0' : '-1',
      index,
      hasFocus: isMenuFocused && position === index,
    });
  }

  renderChildren() {
    return React.Children.map(this.getValidChildren(), (child, index) =>
      this.renderChild(child, index)
    );
  }

  render() {
    const { isVisible, onClick, id, toggleMenuId } = this.props;
    const { isMenuFocused } = this.state;
    const navBarProps = {
      isVisible,
      onClick,
      id,
      toggleMenuId,
      isMenuFocused,
      onFocus: this.onFocus,
      handleKeys: this.handleKeys,
      onBlur: this.onBlur,
    };

    return <NavBarBase {...navBarProps}>{this.renderChildren()}</NavBarBase>;
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
