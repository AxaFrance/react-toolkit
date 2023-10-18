import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import Popover, { PopoverPlacements } from '@axa-fr/react-toolkit-popover';

export type Props = ComponentPropsWithoutRef<typeof Popover>;

export type THelpInfo = Props & {
  content?: ReactNode;
  isDisabled?: boolean;
};

const HelpInfo = ({
  className,
  children,
  content,
  isDisabled,
  mode = 'hover',
  classModifier = 'short',
  placement = PopoverPlacements.top,
}: THelpInfo) =>
  !isDisabled && content ? (
    <Popover
      className={className}
      mode={mode}
      classModifier={classModifier}
      placement={placement}>
      <Popover.Pop>{content}</Popover.Pop>
      <Popover.Over>{children}</Popover.Over>
    </Popover>
  ) : (
    <>{children}</>
  );

export default HelpInfo;
