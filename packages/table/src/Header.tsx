import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'thead'> & {
  classModifier?: string;
};

const Header = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-table-thead'
  );
  return (
    <thead className={componentClassName} {...otherProps}>
      {children}
    </thead>
  );
};

export default Header;
