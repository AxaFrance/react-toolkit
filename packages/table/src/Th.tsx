import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'th'> & {
  classModifier?: string;
};

const Th = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-table__th'
  );
  return (
    <th className={componentClassName} key={id} {...otherProps}>
      {children}
    </th>
  );
};

export default Th;
