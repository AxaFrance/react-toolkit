import React from 'react';
import PropTypes from 'prop-types';

import { Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any.isRequired,
};

const defaultProps = {
  ...Constants.defaultProps,
  children: null,
};

const Pane = ({ children }) => (
  <div className="af-tabs__content">  {children} </div>
);

Pane.propTypes = propTypes;
Pane.defaultProps = defaultProps;

export default Pane;
