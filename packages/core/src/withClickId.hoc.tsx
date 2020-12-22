import React, { ComponentType } from 'react';

export interface ClickEvent {
  id?: string;
}

export interface WithClickIdOption {
  event: string[];
}

export type WithClickIdProps<TProps, TOption extends keyof TProps> = {
  [T in keyof TProps]: T extends TOption ? (e: ClickEvent) => void : TProps[T];
};

const withClickId = <T extends {}>(option: WithClickIdOption) => (
  BaseComponent: ComponentType<T>
): ComponentType<T> => {
  const handler = option.event.reduce((previous: any, current: any) => {
    previous[current] = (props: any) => (event: React.MouseEvent<any>) => {
      if (props[current]) {
        event.preventDefault();
        props[current]({ id: event.currentTarget.id });
      }
    };
    return previous;
  }, {});

  return (props: T) => {
    const handlerWithProps: { [k: string]: any } = {};

    for (const property in handler) {
      if (handler.hasOwnProperty(property)) {
        handlerWithProps[property] = handler[property](props);
      }
    }
    const newProps = {
      ...props,
      ...handlerWithProps,
    };
    return <BaseComponent {...newProps} />;
  };
};

export default withClickId;
