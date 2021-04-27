import React, { ComponentType } from 'react';

const withProps = <T extends {}, P extends {}>(
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
