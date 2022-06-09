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

export const defaultOnChange =
  ({ name, onChange }: any) =>
  (e: BaseSyntheticEvent) =>
    onChange({ name, value: e.target.value, id: e.target.id });

const defaultWithProps = ({
  className,
  classModifier,
}: {
  className?: string;
  classModifier?: string;
}) => ({
  className: ClassManager.getComponentClassName(className, classModifier, ''),
});

/**
 * @remarks - Will be rewrite into v2.1.x
 */
export const withInput =
  <P extends {}>(
    handlersOverride = {},
    propsOverride = defaultWithProps as (p: any) => any
  ) =>
  (Component: ComponentType<P>) => {
    const handlers: Record<string, any> = {
      onChange: defaultOnChange,
      ...handlersOverride,
    };

    const NewComponent = ({
      isVisible = true,
      disabled = false,
      ...props
    }: P & { isVisible?: boolean; disabled?: boolean }) => {
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

      return (
        <Component
          {...props}
          disabled={disabled}
          {...propsOverride(props)}
          {...onHandlers}
        />
      );
    };

    if (
      Component.displayName === 'EnhancedInputRadio' ||
      Component.displayName === 'EnhancedInputCheckbox'
    ) {
      NewComponent.displayName = 'EnhancedInputList';
    } else {
      NewComponent.displayName = 'EnhancedInput';
    }

    return NewComponent;
  };
