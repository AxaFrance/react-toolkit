import React from 'react';

const withClassDefault = (defaultClassName: string) => (BaseComponent: Function) => {
  const Hoc = (props: any) => {
    const newProps = {
        ...{ className: defaultClassName },
      ...props,
    };
    return <BaseComponent {...newProps} />;
  };
  return Hoc;
};

export default withClassDefault;
