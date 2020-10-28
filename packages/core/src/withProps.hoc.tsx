import React, { ComponentType } from 'react';

const withProps = <
  T extends { [key: string]: any },
  P extends { [key: string]: any }
>(
  propsMapper: (props: T) => P
) => (BaseComponent: ComponentType<T>): ComponentType<T & Partial<P>> => {
  const Hoc = (props: T) => {
    const newProps = {
      ...props,
      ...propsMapper(props),
    };
    return <BaseComponent {...newProps} />;
  };
  return Hoc;
};

export default withProps;
