import React from 'react';
import { Constants } from '@axa-fr/react-toolkit-core';
import PopoverBase from './PopoverBase';
import PopoverModes from './PopoverModes';
import Placement from './PopoverPlacements';

const defaultProps = {
  ...Constants.defaultProps,
  className: 'af-popover__container',
  placement: 'top' as Placement,
  mode: PopoverModes.click,
};

type Props = Partial<typeof defaultProps> & {
  children?: React.ReactNode;
};

const PopoverClick = ({ children, placement, className, classModifier }: Props) => {
  const wrapperRef = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const [isHover, setHover] = React.useState(false);
  const [isPopoverHover, setPopoverHover] = React.useState(false);

  const handleClickOutside = (event: MouseEvent | React.MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const handleClick = (
    event: MouseEvent | React.MouseEvent | React.KeyboardEvent<HTMLDivElement>
  ) => {
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
      tabIndex={0}
      ref={wrapperRef}
      className="af-popover__wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleClick}
      onClick={handleClick}
    >
      <PopoverBase
        onMouseEnter={handleMouseEnterPopover}
        onMouseLeave={handleMouseLeavePopover}
        isOpen={isOpen}
        placement={placement}
        className={className}
        classModifier={classModifier}
      >
        {children}
      </PopoverBase>
    </div>
  );
};

const PopoverOver = ({ children, placement, className, classModifier }: Props) => {
  const [isOpen, setOpen] = React.useState(false);

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
      onMouseLeave={handleMouseLeave}
    >
      <PopoverBase
        isOpen={isOpen}
        placement={placement}
        className={className}
        classModifier={classModifier}
      >
        {children}
      </PopoverBase>
    </div>
  );
};

export { PopoverClick, PopoverOver };

const Popover = ({ children, placement, className, classModifier, mode }: Props) => {
  return mode === PopoverModes.click ? (
    <PopoverClick className={className} classModifier={classModifier} placement={placement}>
      {children}
    </PopoverClick>
  ) : (
    <PopoverOver className={className} classModifier={classModifier} placement={placement}>
      {children}
    </PopoverOver>
  );
};

Popover.Pop = PopoverBase.Pop;
Popover.Pop.displayName = 'Popover.Pop';

Popover.Over = PopoverBase.Over;
Popover.Over.displayName = 'Popover.Over';

Popover.defaultProps = defaultProps;

export default Popover;
