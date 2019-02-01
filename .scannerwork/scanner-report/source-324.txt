import React from 'react';
import PropTypes from 'prop-types';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
const defaultClassName = 'af-steps-list-step';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const StepBase = props => {
  const { children, id, title, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <li key={id} className={componentClassName} title={title}>
      {children}
    </li>
  );
};

StepBase.propTypes = propTypes;
StepBase.defaultProps = defaultProps;

export default StepBase;
