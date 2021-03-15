import React, { ComponentPropsWithoutRef } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-steps-list-step';

type Props = Omit<ComponentPropsWithoutRef<'li'>, 'onClick'> & {
  classModifier?: string;
};
const StepBase = ({ children, id, title, className, classModifier }: Props) => {
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

export default StepBase;
