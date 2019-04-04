import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import PopoverBase from './PopoverBase';
import PopoverPlacements from './PopoverPlacements';
import PopoverModes from './PopoverModes';

const propTypes = {
  ...Constants.propTypes,
  title: PropTypes.string,
  children: PropTypes.any,
  placement: PropTypes.oneOf([
    PopoverPlacements.top,
    PopoverPlacements.bottom,
    PopoverPlacements.left,
    PopoverPlacements.right,
  ]),
  mode: PropTypes.oneOf([PopoverModes.over, PopoverModes.click]),
};
const defaultClassName = 'af-popover__container';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  placement: PopoverPlacements.top,
  mode: PopoverModes.click,
};

class PopoverClick extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.outsideTap = this.outsideTap.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  outsideTap() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { children, placement, className, classModifier } = this.props;
    const { isOpen } = this.state;
    return (
      <PopoverBase
        className={className}
        classModifier={classModifier}
        onToggle={this.toggle}
        onOutsideTap={this.outsideTap}
        isOpen={isOpen}
        placement={placement}>
        {children}
      </PopoverBase>
    );
  }
}

class PopoverOver extends Component {
  constructor(props) {
    super(props);
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  enter() {
    this.setState({
      isOpen: true,
    });
  }

  leave() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { children, placement, className, classModifier } = this.props;
    const { isOpen } = this.state;
    return (
      <span onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <PopoverBase
          isOpen={isOpen}
          placement={placement}
          className={className}
          classModifier={classModifier}>
          {children}
        </PopoverBase>
      </span>
    );
  }
}

const Popover = props => {
  const { children, placement, className, classModifier, mode } = props;
  const DynamicComponent =
    mode === PopoverModes.click ? PopoverClick : PopoverOver;

  return (
    <DynamicComponent
      className={className}
      classModifier={classModifier}
      placement={placement}>
      {children}
    </DynamicComponent>
  );
};

Popover.Pop = PopoverBase.Pop;
Popover.Over = PopoverBase.Over;

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
