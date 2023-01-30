import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

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
  const componentClassName = getComponentClassName(
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
