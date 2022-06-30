import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type TitleProps = ComponentPropsWithoutRef<'h1'> & {
  classModifier?: string;
};

const Title = ({
  className,
  classModifier,
  children,
  ...otherProps
}: TitleProps) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-title'
  );
  return (
    <h1 className={componentClassName} {...otherProps}>
      {children}
    </h1>
  );
};

export default Title;
