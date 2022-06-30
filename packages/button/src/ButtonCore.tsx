import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'button'> & {
  classModifier?: string;
};

const ButtonCore = ({
  className,
  classModifier,
  type = 'button',
  children,
  ...props
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'btn af-btn'
  );
  return (
    <button type={type} className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default ButtonCore;
