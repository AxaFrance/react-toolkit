import React, { BaseSyntheticEvent, ComponentType } from 'react';

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

const defaultOnChange =
  ({ name, onChange }: any) =>
  (e: BaseSyntheticEvent) =>
    onChange({ name, value: e.target.value, id: e.target.id });

/**
 * @remarks - Will be rewrite into v2.1.x
 */
export const withInput =
  <P extends {}>(
    handlersOverride = {},
    propsOverride = null as (p: any) => any
  ) =>
  (Component: ComponentType<P>) => {
    const handlers: Record<string, any> = {
      onChange: defaultOnChange,
      ...handlersOverride,
    };

    const NewComponent = ({
      isVisible,
      ...props
    }: P & { isVisible?: boolean }) => {
      if (!isVisible) {
        return null;
      }

      const onHandlers = Object.entries(handlers).reduce(
        (acc, [propertyName]) => ({
          ...acc,
          [propertyName]: handlers[propertyName](props),
        }),
        {}
      );

      return <Component {...props} {...propsOverride(props)} {...onHandlers} />;
    };

    NewComponent.displayName = 'EnhancedInput';

    return NewComponent;
  };
