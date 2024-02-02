import React, { ComponentPropsWithoutRef } from 'react';
import StepNoLink from './StepNoLink';

type Props = ComponentPropsWithoutRef<typeof StepNoLink>;
const StepDisabled = ({
  className = 'disabled af-steps-list-step',
  ...otherProps
}: Props) => <StepNoLink className={className} {...otherProps} />;

export default StepDisabled;
