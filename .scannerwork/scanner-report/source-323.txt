import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import StepBase from './StepBase';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};
const defaultClassName = 'af-steps-list-step';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const StepNoLink = props => {
  const { number, id, title, className, modifier, icon } = props;

  return (
    <StepBase id={id} className={className} modifier={modifier} title={title}>
      <div className="af-steps-list-stepLabel">
        <div className="af-steps-list-stepNumber">{number}</div>
        <div className="af-steps-list-stepTitle">{title}</div>
        {icon && <i className={`icons-list__item-icon glyphicon ${icon}`} />}
      </div>
    </StepBase>
  );
};

StepNoLink.propTypes = propTypes;
StepNoLink.defaultProps = defaultProps;

export default StepNoLink;
