import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

type FieldProps = {
  isVisible?: boolean;
  className?: string;
  classModifier?: string;
  children?: ReactNode;
};

export default ({
  children,
  className,
  classModifier,
  isVisible = true,
}: FieldProps) => {
  if (!isVisible) {
    return <></>;
  }
  const newClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    ''
  );
  return <div className={newClassName}>{children}</div>;
};
