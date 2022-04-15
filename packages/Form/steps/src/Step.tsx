import React, { ComponentPropsWithoutRef } from 'react';
import StepNoLink from './StepNoLink';
import StepLink from './StepLink';
import StepCurrent from './StepCurrent';

type Props = ComponentPropsWithoutRef<typeof StepLink> & {
  mode?: 'link' | 'active' | 'disabled';
};
const Step = ({
  number,
  id,
  title,
  classModifier,
  href,
  onClick,
  mode = 'link',
  className,
}: Props) => {
  switch (mode) {
    case 'link':
      return (
        <StepLink
          id={id}
          href={href}
          number={number}
          classModifier={classModifier}
          className={className}
          title={title}
          onClick={onClick}
        />
      );
    case 'active':
      return (
        <StepCurrent
          id={id}
          title={title}
          classModifier={classModifier}
          className={className}
          number={number}
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
        />
      );
  }
};

export default Step;
