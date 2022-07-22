import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'thead'> & {
  classModifier?: string;
};

const Header = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = useComponentClassName(
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
