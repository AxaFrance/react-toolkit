import React from 'react';
import PropTypes from 'prop-types';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};
const defaultClassName = 'af-steps';
const defaultProps = {
  ...Constants.defaultProps,
  onClick: null,
  className: defaultClassName,
  children: null,
};

function Steps(props) {
  const { children, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
}

Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;

export default Steps;
