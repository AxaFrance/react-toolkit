import React, { BaseSyntheticEvent, ComponentType } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

/**
 * @remarks - Will be remove into v2.1.x
 */
export const omit =
  (keys?: string[]) =>
  <P extends {}>(props: P) => {
    if (!keys) {
      return props;
    }

    return Object.entries(props).reduce(
      (acc, [key, value]) =>
        !keys.includes(key)
          ? {
              ...acc,
              [key]: value,
            }
          : acc,
      {}
    );
  };

type DefaultOnChange = {
  onChange?: (data: { name: string; value: string; id: string }) => void;
};

export const defaultOnChange =
  <P extends DefaultOnChange>({ name, onChange }: P & { name?: string }) =>
  (e: BaseSyntheticEvent) =>
    onChange && onChange({ name, value: e.target.value, id: e.target.id });

const defaultWithProps = ({
  className,
  classModifier,
}: {
  className?: string;
  classModifier?: string;
}) => ({
  className: ClassManager.getComponentClassName(className, classModifier, ''),
});

type Handler<H extends { [key: string]: (...args: any[]) => any }> = {
  [Property in keyof H]: Parameters<H[Property]>[0][Property];
};

type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

type Handlers<H extends { [key: string]: (...args: any[]) => any }> = [
  keyof H
] extends [never]
  ? DefaultOnChange
  : Partial<Merge<DefaultOnChange, Handler<H>>>;

type CustomOverride = (...props: any[]) => any;
type ParamHandlers = { [key: string]: CustomOverride };
type ComponentProps = {
  className?: string;
  name?: string;
  classModifier?: string;
};
/**
 * @remarks - Will be rewrite into v2.1.x
 */
export const withInput =
  <
    H extends ParamHandlers = {},
    PO extends CustomOverride = typeof defaultWithProps
  >(
    handlers = {} as H,
    propsOverride = defaultWithProps as PO
  ) =>
  <P extends ComponentProps = ComponentProps>(Component: ComponentType<P>) => {
    type PropsOverride = Parameters<PO>[0];
    const NewComponent = ({
      isVisible = true,
      disabled = false,
      ...props
    }: Omit<P, 'onChange' | keyof H> & {
      isVisible?: boolean;
    } & Handlers<H> &
      PropsOverride) => {
      if (!isVisible) {
        return null;
      }

      const onHandlers = Object.entries(handlers).reduce(
        (acc, [propertyName]) => ({
          ...acc,
          [propertyName]: handlers[propertyName](props),
        }),
        { onChange: defaultOnChange(props) }
      );

      const newProps = {
        ...props,
        disabled,
        ...propsOverride({ ...props, disabled }),
        ...onHandlers,
      } as P;
      return <Component {...newProps} />;
    };

    if (
      Component.displayName !== 'EnhancedInputCheckbox' &&
      Component.displayName !== 'EnhancedInputRadio'
    ) {
      NewComponent.displayName = 'EnhancedInput';
    } else {
      NewComponent.displayName = Component.displayName || Component.name;
    }
    return NewComponent;
  };
