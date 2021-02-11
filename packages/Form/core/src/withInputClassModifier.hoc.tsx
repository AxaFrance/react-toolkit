import React, { ComponentType, ReactNode } from 'react';

export const withInputClassModifier = <
  P extends {
    classModifier?: string;
    children?: ReactNode;
    disabled?: boolean;
    inputClassModifier: string;
    inputFieldClassModifier: string;
  }
>(
  BaseComponent: ComponentType<P>
): ComponentType<Omit<P, 'inputFieldClassModifier' | 'inputClassModifier'>> => (
  props: P
) => {
  const newProps = {
    ...props,
    inputClassModifier: `${props.classModifier} ${
      props.children ? 'hasinfobulle' : ''
    }`,
    inputFieldClassModifier: `${props.classModifier} ${
      props.disabled ? 'disabled' : ''
    }`,
  };
  return <BaseComponent {...newProps} />;
};
