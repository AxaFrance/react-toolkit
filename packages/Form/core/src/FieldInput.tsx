import React, { ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type FieldProps = {
  isVisible?: boolean;
  className?: string;
  classModifier?: string;
  children?: ReactNode;
};

const FieldInput = ({
  children,
  className = '',
  classModifier = '',
  isVisible = true,
}: FieldProps) => {
  if (!isVisible) {
    return null;
  }

  const newClassName = getComponentClassName(className, classModifier, '');
  return <div className={newClassName}>{children}</div>;
};

export default FieldInput;
