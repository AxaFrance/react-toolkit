import { Constants } from '@axa-fr/react-toolkit-core';
import React from 'react';
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

const PopoverClick = ({
  children,
  placement,
  className,
  classModifier,
}: Props) => {
  const wrapperRef = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const [isPopoverHover, setPopoverHover] = React.useState(false);

  const handleClick = (
    event:
      | MouseEvent
      | React.MouseEvent
      | React.KeyboardEvent<HTMLDivElement>
      | React.FocusEvent,
    isOpenValue?: boolean
  ) => {
    if (isPopoverHover || !wrapperRef.current || isOpenValue === isOpen) {
      event.stopPropagation();
      return;
    }

    setOpen((oldIsOpen) => isOpenValue ?? !oldIsOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClick(event);
    }
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
      className="af-popover__wrapper af-popover__wrapper--click"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onBlur={(event) => handleClick(event, false)}>
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

const PopoverOver = ({
  children,
  placement,
  className,
  classModifier,
}: Props) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="af-popover__wrapper af-popover__wrapper--over"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}>
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

export { PopoverClick, PopoverOver };

const Popover = ({
  children,
  placement,
  className,
  classModifier,
  mode,
}: Props) => {
  return mode === PopoverModes.click ? (
    <PopoverClick
      className={className}
      classModifier={classModifier}
      placement={placement}>
      {children}
    </PopoverClick>
  ) : (
    <PopoverOver
      className={className}
      classModifier={classModifier}
      placement={placement}>
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
