import React, { ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-steps';

type Props = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
};
const Steps = ({
  children,
  className = defaultClassName,
  classModifier,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <ol className="af-steps-list">{children}</ol>
    </div>
  );
};

export default Steps;
