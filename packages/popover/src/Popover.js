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

export class PopoverClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHover: false,
      isHoverPopover: false,
    };
    this.outsideClick = this.outsideClick.bind(this);
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
    this.enterPopover = this.enterPopover.bind(this);
    this.leavePopover = this.leavePopover.bind(this);
  }

  componentDidMount() {
    const body = window.document.getElementsByTagName('body')[0];
    body.addEventListener("mouseup", this.outsideClick);
  }

  componentWillUnmount() {
    const body = window.document.getElementsByTagName('body')[0];
    body.removeEventListener("mouseup", this.outsideClick);
  }

  outsideClick ()
  {
    const { isHover, isHoverPopover, isOpen } = this.state;
    if (!isHoverPopover && isOpen) {
      this.setState({
        isOpen: false,
      });
    }
    if(isHover && !isHoverPopover && !isOpen) {
      this.setState({
        isOpen: true,
      });
    }
  }

  enter() {
    this.setState({
      isHover: true,
    });
  }

  leave() {
    this.setState({
      isHover: false,
      isHoverPopover: false,
    });
  }

  enterPopover() {
    this.setState({
      isHoverPopover: true,
    });
  }

  leavePopover() {
    this.setState({
      isHoverPopover: false,
    });
  }

  render() {
      const { children, placement, className, classModifier } = this.props;
        const { isOpen } = this.state;
        return (<span onMouseEnter={this.enter} onMouseLeave={this.leave}>
          <PopoverBase
            isOpen={isOpen}
            placement={placement}
            className={className}
            classModifier={classModifier}
            onMouseEnter={this.enterPopover}
            onMouseLeave={this.leavePopover}
          >
          {children}
      </PopoverBase>
  </span>);
    }
}

export class PopoverOver extends Component {
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
Popover.Pop.displayName = 'Popover.Pop';

Popover.Over = PopoverBase.Over;
Popover.Over.displayName = 'Popover.Over';

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
