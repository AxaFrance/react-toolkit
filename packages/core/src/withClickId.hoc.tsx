import * as React from "react";

export interface ClickEvent {
  id?: string;
}

export interface WithClickIdOption {
  event: string[];
}

export type WithClickIdProps<TProps, TOption extends keyof TProps> = {
  [T in keyof TProps]: T extends TOption ? (e: ClickEvent) => void : TProps[T]
};

const withClickId = <TOutter extends {}>(option: WithClickIdOption)  => (BaseComponent: Function) => {
  const handler = option.event.reduce((previous: any, current: any) => {
    previous[current] = (props: any) => (event: React.MouseEvent<any>) => {
      if (props[current]) {
        event.preventDefault();
        props[current]({ id: event.currentTarget.id });
      }
    };
    return previous;
  }, {});
  return <BaseComponent {...handler} />;
};

export default withClickId;
