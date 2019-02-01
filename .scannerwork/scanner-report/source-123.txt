import React from 'react';
import PropTypes from 'prop-types';
import { PopoverBase } from '@axa-fr/react-toolkit-popover';
import { Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
};
const defaultProps = {
  ...Constants.defaultProps,
  children: '',
};

const Help = ({ isOpen, toggle, outsideTap, className, children }) => (
  <PopoverBase
    className={className}
    placement="right"
    isOpen={isOpen}
    onOutsideTap={outsideTap}
    onToggle={toggle}>
    <PopoverBase.Pop>{children}</PopoverBase.Pop>
    <PopoverBase.Over>
      <button className="btn af-btn--circle" type="button">
        <span className="af-more-help">i</span>
      </button>
    </PopoverBase.Over>
  </PopoverBase>
);

Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
