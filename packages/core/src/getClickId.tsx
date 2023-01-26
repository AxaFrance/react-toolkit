import { MouseEvent } from 'react';

export type ClickEvent = {
  id?: string;
};

export type WithClickIdOption = {
  event: string[];
};

const setHandlers = (option: WithClickIdOption) =>
  option.event.reduce((previous: any, current: any) => {
    previous[current] = (props: any) => (event: MouseEvent<any>) => {
      if (props[current]) {
        event.preventDefault();
        props[current]({ id: event.currentTarget.id });
      }
    };
    return previous;
  }, {});

type TsetClickId<T> = {
  option: WithClickIdOption;
  props: T;
};

const getClickId = <T extends {}>({ option, props }: TsetClickId<T>) => {
  const handlers = setHandlers(option);
  const handlerWithProps: { [k: string]: any } = {};

  for (const property in handlers) {
    if (handlers.hasOwnProperty(property)) {
      handlerWithProps[property] = handlers[property](props);
    }
  }
  return {
    ...props,
    ...handlerWithProps,
  };
};

export default getClickId;
