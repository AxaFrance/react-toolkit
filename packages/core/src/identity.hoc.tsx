import React from 'react';

const identity = <T extends {}>() => (
  BaseComponent: React.ComponentType<T>
): React.ComponentType<T> => {
  return (props: T) => {
    return <BaseComponent {...props} />;
  };
};

export default identity;
