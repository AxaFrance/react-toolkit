import React, { ChangeEvent, ComponentType } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import Constants from './InputConstants';
import { CustomFormEvent } from './customEvent';

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

type DefaultOnChangeProps = {
  name: string;
  onChange: (event: CustomFormEvent) => void;
};

export const defaultOnChange =
  ({ name, onChange }: DefaultOnChangeProps) =>
  (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) =>
    onChange({ name, value: e.target.value, id: e.target.id });

const defaultWithProps =
  (defaultClassName: string) =>
  ({
    className,
    classModifier,
  }: {
    className?: string;
    classModifier?: string;
  }) => ({
    componentClassName: ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    ),
  });

const setOnHandlers = (handlers: any = {}, props: any) =>
  Object.entries(handlers).reduce(
    (acc, [propertyName]) => ({
      ...acc,
      [propertyName]: handlers[propertyName](props),
    }),
    {}
  );

export const withInput =
  <
    P extends {
      className?: string;
      classModifier?: string;
      isVisible?: boolean;
    }
  >(
    defaultClassName: string,
    addPropTypes = {},
    addDefaultProps = {},
    withHandlersOverride = {},
    withPropsOverride = defaultWithProps(defaultClassName),
    defaultOnChangeFn = defaultOnChange
  ) =>
  (Component: ComponentType<P>) => {
    const EnhancedInput = (props: P) => {
      const { isVisible } = props;
      if (!isVisible) {
        return null;
      }

      return (
        <Component
          {...props}
          {...withPropsOverride(props)}
          {...setOnHandlers(
            {
              onChange: defaultOnChangeFn,
              ...withHandlersOverride,
            },
            props
          )}
        />
      );
    };

    EnhancedInput.propTypes = {
      ...Constants.propTypes,
      ...addPropTypes,
    };

    EnhancedInput.defaultProps = {
      ...Constants.defaultProps,
      ...addDefaultProps,
    };

    return EnhancedInput;
  };
