import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

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
  const componentClassName = getComponentClassName(
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
