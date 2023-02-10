import React, { ComponentPropsWithoutRef } from 'react';
import Popover, {
  PopoverBase,
  PopoverPlacements,
} from '@axa-fr/react-toolkit-popover';

export type Props = ComponentPropsWithoutRef<typeof Popover>;

const Help = ({
  className,
  classModifier,
  children,
  mode = 'click',
  placement = PopoverPlacements.right,
}: Props) => (
  <Popover
    className={className}
    classModifier={classModifier}
    placement={placement}
    mode={mode}>
    <PopoverBase.Pop>{children}</PopoverBase.Pop>
    <PopoverBase.Over>
      <button className="btn af-btn--circle" type="button">
        <span className="af-more-help">i</span>
      </button>
    </PopoverBase.Over>
  </Popover>
);

export default Help;
