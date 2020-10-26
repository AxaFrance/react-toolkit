import React from 'react';
import Popover, {
  PopoverBase,
  PopoverModes,
  PopoverPlacements,
} from '@axa-fr/react-toolkit-popover';

const defaultProps = {
  mode: PopoverModes.click,
  placement: PopoverPlacements.right,
};

export type Props = Partial<typeof defaultProps> & {
  children: React.ReactNode;
  classModifier?: string;
  className?: string;
};
const Help = ({ className, classModifier, children, mode, placement }: Props) => (
  <Popover className={className} classModifier={classModifier} placement={placement} mode={mode}>
    <PopoverBase.Pop>{children}</PopoverBase.Pop>
    <PopoverBase.Over>
      <button className="btn af-btn--circle" type="button">
        <span className="af-more-help">i</span>
      </button>
    </PopoverBase.Over>
  </Popover>
);

Help.defaultProps = defaultProps;

export default Help;
