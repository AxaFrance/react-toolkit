import React, { ComponentPropsWithoutRef } from 'react';
import StepNoLink from './StepNoLink';

const defaultClassName = 'on af-steps-list-step';

type Props = ComponentPropsWithoutRef<typeof StepNoLink>;
const StepCurrent = ({
  className = defaultClassName,
  ...otherProps
}: Props) => {
  return <StepNoLink className={className} {...otherProps} />;
};

export default StepCurrent;
