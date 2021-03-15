import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import StepBase from './StepBase';

const defaultClassName = 'af-steps-list-step';
type Props = ComponentPropsWithoutRef<typeof StepBase> & {
  number?: ReactNode;
};
const StepNoLink = ({
  number,
  id,
  title,
  className = defaultClassName,
  ...otherProps
}: Props) => (
  <StepBase
    className={`${className} ${number ? 'number' : ''}`}
    title={title}
    {...otherProps}>
    <div className="af-steps-list-stepLabel">
      {!!number && <div className="af-steps-list-stepNumber">{number}</div>}
      <div className="af-steps-list-stepTitle">{title}</div>
    </div>
  </StepBase>
);

export default StepNoLink;
