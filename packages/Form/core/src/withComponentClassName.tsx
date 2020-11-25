import { ClassManager } from '@axa-fr/react-toolkit-core';
import React, { ComponentType, ReactNode } from 'react';

export default <
  P extends { className?: string; classModifier?: string; children?: ReactNode }
>(
  defaultClassName: string
) => (
  Component: ComponentType<P>
): ComponentType<P & { componentClassName?: string }> => {
  return (props: P) => {
    const componentClassName = ClassManager.getComponentClassName(
      props.className,
      props.classModifier,
      defaultClassName
    );

    return <Component componentClassName={componentClassName} {...props} />;
  };
};
