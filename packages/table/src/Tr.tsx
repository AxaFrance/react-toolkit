import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'tr'> & {
  classModifier?: string;
};

const Tr = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-table__tr'
  );
  return (
    <tr className={componentClassName} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

export default Tr;
