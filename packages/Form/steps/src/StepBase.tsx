import React, { ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
};
const StepBase = ({ children, id, title, className, classModifier }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-steps-list-step'
  );
  return (
    <li key={id} className={componentClassName} title={title}>
      {children}
    </li>
  );
};

export default StepBase;
