import React, { ComponentPropsWithoutRef } from 'react';
import StepNoLink from './StepNoLink';

type Props = ComponentPropsWithoutRef<typeof StepNoLink>;
const StepCurrent = ({
  className = 'on af-steps-list-step',
  ...otherProps
}: Props) => <StepNoLink className={className} {...otherProps} />;

export default StepCurrent;
