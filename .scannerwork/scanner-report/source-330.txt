import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';

import StepNoLink from './StepNoLink';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};
const defaultClassName = 'on af-steps-list-step';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const StepCurrent = props => {
  const { number, id, title, className, modifier, icon } = props;

  return (
    <StepNoLink
      id={id}
      className={className}
      title={title}
      modifier={modifier}
      number={number}
      icon={icon}
    />
  );
};

StepCurrent.propTypes = propTypes;
StepCurrent.defaultProps = defaultProps;

export default StepCurrent;
