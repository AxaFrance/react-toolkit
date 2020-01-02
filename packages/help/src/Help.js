import React from 'react';
import PropTypes from 'prop-types';
import Popover, {
  PopoverBase,
  PopoverModes,
  PopoverPlacements,
} from '@axa-fr/react-toolkit-popover';
import { Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  placement: PropTypes.oneOf([
    PopoverPlacements.top,
    PopoverPlacements.bottom,
    PopoverPlacements.left,
    PopoverPlacements.right,
  ]),
  mode: PropTypes.oneOf([PopoverModes.over, PopoverModes.click]),
};
const defaultProps = {
  ...Constants.defaultProps,
  children: '',
  mode: PopoverModes.click,
  placement: PopoverPlacements.right,
};

const Help = ({ toggle, outsideTap, className, children, mode, placement }) => (
  <Popover
    className={className}
    placement={placement}
    onOutsideTap={outsideTap}
    onToggle={toggle}
    mode={mode}>
    <PopoverBase.Pop>{children}</PopoverBase.Pop>
    <PopoverBase.Over>
      <button className="btn af-btn--circle" type="button">
        <span className="af-more-help">i</span>
      </button>
    </PopoverBase.Over>
  </Popover>
);

Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
