import React from 'react';

const withProps = <TInner extends {}, TOutter extends {}>(propsMapper: Function) => (BaseComponent: Function) => {
  const Hoc = (props:TOutter) => {
    const newProps = {
      ...props,
      ...propsMapper(props),
    };
    return <BaseComponent {...newProps} />;
  };
  return Hoc;
};

export default withProps;
