import React from 'react';
import PropTypes from 'prop-types';

import { Constants } from '@axa-fr/react-toolkit-core';

import StepNoLink from './StepNoLink';
import StepLink from './StepLink';
import StepCurrent from './StepCurrent';
import StepModes from './StepModes';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  mode: PropTypes.string,
  icon: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  className: undefined,
  href: null,
  onClick: null,
  mode: StepModes.link,
};

const Step = (props) => {
  const {
    number,
    id,
    title,
    classModifier,
    href,
    onClick,
    mode,
    className,
    icon,
  } = props;

  switch (mode) {
    case StepModes.link:
      return (
        <StepLink
          id={id}
          href={href}
          number={number}
          classModifier={classModifier}
          className={className}
          title={title}
          onClick={onClick}
          icon={icon}
        />
      );
    case StepModes.active:
      return (
        <StepCurrent
          id={id}
          title={title}
          classModifier={classModifier}
          className={className}
          number={number}
          icon={icon}
        />
      );
    default:
      return (
        <StepNoLink
          id={id}
          title={title}
          classModifier={classModifier}
          className={className}
          number={number}
          icon={icon}
        />
      );
  }
};

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;

export default Step;
