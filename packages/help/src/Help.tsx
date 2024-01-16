import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Popover, {
  PopoverBase,
  PopoverPlacements,
} from '@axa-fr/react-toolkit-popover';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

export type HelpProps = ComponentPropsWithoutRef<typeof Popover> & {
  helpButtonContent?: ReactNode;
};

const Help = ({
  className,
  classModifier,
  children,
  mode = 'click',
  placement = PopoverPlacements.right,
  helpButtonContent = <span className="af-more-help">i</span>,
}: HelpProps) => {
  const buttonClassName = getComponentClassName(
    'btn af-btn--circle',
    classModifier,
    ''
  );

  return (
    <Popover
      className={className}
      classModifier={classModifier}
      placement={placement}
      mode={mode}>
      <PopoverBase.Pop>{children}</PopoverBase.Pop>
      <PopoverBase.Over>
        <div className={buttonClassName}>{helpButtonContent}</div>
      </PopoverBase.Over>
    </Popover>
  );
};

export default Help;
