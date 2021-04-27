import React, { ComponentType, ForwardRefExoticComponent } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

type ComponentOrForward<P> = ComponentType<P> | ForwardRefExoticComponent<P>;

const withOptionClassName = <
  P extends {
    disabled?: boolean;
    optionClassName?: string;
  }
>(
  defaultClassName: string
) => (
  Component: ComponentOrForward<P>
): ComponentOrForward<
  Omit<P, 'optionClassName'> & { className?: string; classModifier?: string }
> => {
  return ({
    classModifier,
    className,
    ...props
  }: Omit<P, 'optionClassName'> & {
    className?: string;
    classModifier?: string;
  }) => {
    const classModifierWithDisabled = [
      classModifier,
      props.disabled ? 'disabled' : undefined,
    ]
      .filter((c) => !!c)
      .join(' ');
    const optionClassName = ClassManager.getComponentClassName(
      className,
      classModifierWithDisabled,
      defaultClassName
    );
    return <Component {...(props as P)} optionClassName={optionClassName} />;
  };
};

export default withOptionClassName;
