import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'span'> & {
  classModifier?: string;
  disabled?: boolean;
};

const BadgeRaw = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-badge'
  );
  return (
    <span className={componentClassName} {...otherProps}>
      {children}
    </span>
  );
};

export default BadgeRaw;
