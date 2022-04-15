import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type ActionCoreProps = ComponentPropsWithoutRef<'a'> & {
  icon: string;
  classModifier?: string;
};

const ActionCore = ({
  icon,
  href = '#',
  tabIndex = 0,
  className,
  classModifier,
  role,
  onClick,
  ...otherProps
}: ActionCoreProps) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'btn af-btn--circle'
  );
  return (
    <a
      {...otherProps}
      className={componentClassName}
      href={onClick ? '#' : href}
      role={onClick ? 'button' : role}
      onClick={onClick}
      tabIndex={tabIndex}>
      <i className={`glyphicon glyphicon-${icon}`} />
    </a>
  );
};

export default ActionCore;
