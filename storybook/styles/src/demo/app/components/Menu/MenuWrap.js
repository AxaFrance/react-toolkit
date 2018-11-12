import React, { Component } from 'react';

class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu() {
    this.setState({ isOpen: false });
  }

  renderChild(child) {
    return React.cloneElement(child, {
      hideMenu: this.hideMenu,
      isOpen: this.state.isOpen,
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => this.renderChild(child));
  }

  render() {
    return <div className={this.props.side}>{this.renderChildren()}</div>;
  }
}

export default MenuWrap;
