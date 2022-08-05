import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import StepBase from './StepBase';

type CustomClickEvent = {
  href: string;
  number?: ReactNode;
  id: string;
  title: string;
};

type Props = ComponentPropsWithoutRef<typeof StepBase> & {
  href: string;
  number?: ReactNode;
  onClick?: (e: CustomClickEvent) => void;
};
const StepLink = ({
  id,
  href,
  number,
  title,
  className = 'past af-steps-list-step',
  onClick,
  ...otherProps
}: Props) => (
  <StepBase
    id={id}
    className={`${className} ${number ? 'number' : ''}`}
    title={title}
    {...otherProps}>
    <a
      className="af-steps-list-stepLabel"
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick({ href, id, title, number });
      }}>
      {!!number && <div className="af-steps-list-stepNumber">{number}</div>}
      <div className="af-steps-list-stepTitle">{title}</div>
    </a>
  </StepBase>
);

export default StepLink;
