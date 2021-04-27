import React, { ComponentType } from 'react';

export type WithClassDefaultProps = {
  className?: string;
};
const withClassDefault = <T extends {}>(defaultClassName: string) => (
  BaseComponent: ComponentType<T>
): ComponentType<T & WithClassDefaultProps> => {
  return (props: T) => {
    const newProps = {
      className: defaultClassName,
      ...props,
    };
    return <BaseComponent {...newProps} />;
  };
};

export default withClassDefault;
