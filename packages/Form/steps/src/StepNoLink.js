import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from '@axa-fr/react-toolkit-core';
import StepBase from './StepBase';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.string.isRequired,
};
const defaultClassName = 'af-steps-list-step';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const StepNoLink = (props) => {
  const { number, id, title, className, modifier } = props;

  return (
    <StepBase
      id={id}
      className={`${className} ${number ? 'number' : ''}`}
      modifier={modifier}
      title={title}>
      <div className="af-steps-list-stepLabel">
        {!!number && <div className="af-steps-list-stepNumber">{number}</div>}
        <div className="af-steps-list-stepTitle">{title}</div>
      </div>
    </StepBase>
  );
};

StepNoLink.propTypes = propTypes;
StepNoLink.defaultProps = defaultProps;

export default StepNoLink;
