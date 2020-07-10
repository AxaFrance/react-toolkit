import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import PopoverBase from './PopoverBase';
import PopoverPlacements from './PopoverPlacements';
import PopoverModes from './PopoverModes';

const propTypes = {
  ...Constants.propTypes,
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

export const PopoverClick = props => {
  const { children, placement, className, classModifier } = props;

  const wrapperRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isPopoverHover, setPopoverHover] = useState(false);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const handleClick = event => {
    if (isPopoverHover) {
      event.stopPropagation();
      return;
    }

    const shouldOpen = !isOpen && isHover;
    setOpen(shouldOpen);

    if (shouldOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseEnterPopover = () => {
    setPopoverHover(true);
  };

  const handleMouseLeavePopover = () => {
    setPopoverHover(false);
  };

  return (
    <div
      role="button"
      tabIndex="0"
      ref={wrapperRef}
      className="af-popover__wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleClick}
      onClick={handleClick}>
      <PopoverBase
        onMouseEnter={handleMouseEnterPopover}
        onMouseLeave={handleMouseLeavePopover}
        isOpen={isOpen}
        placement={placement}
        className={className}
        classModifier={classModifier}>
        {children}
      </PopoverBase>
    </div>
  );
};

export const PopoverOver = props => {
  const { children, placement, className, classModifier } = props;
  const [isOpen, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="af-popover__wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <PopoverBase
        isOpen={isOpen}
        placement={placement}
        className={className}
        classModifier={classModifier}>
        {children}
      </PopoverBase>
    </div>
  );
};

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
