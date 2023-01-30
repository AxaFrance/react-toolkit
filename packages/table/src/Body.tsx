import React, { ComponentPropsWithoutRef } from 'react';

import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'tbody'> & {
  classModifier?: string;
};

const Body = ({ children, className, classModifier, ...otherProps }: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-table__body'
  );
  return (
    <tbody className={componentClassName} {...otherProps}>
      {children}
    </tbody>
  );
};

export default Body;
