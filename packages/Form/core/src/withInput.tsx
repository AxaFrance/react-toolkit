import * as React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import Constants from './InputConstants';

export const omit = <T, K extends keyof T>(keys: K[]) => (
  props: T
): Partial<T> => {
  if (!keys) {
    return props;
  }
  const clonedProps = { ...props };
  keys.forEach((element) => {
    if (element in clonedProps) {
      delete clonedProps[element];
    }
  });
  return clonedProps;
};

export type DefaultOnChangeProps = {
  name: string;
  onChange: (event: CustomOnChangeEvent) => void;
};

export type CustomOnChangeEvent = {
  value: string;
  name: string;
  id: string;
};
const defaultOnChange = ({ name, onChange }: DefaultOnChangeProps) => (
  e: React.ChangeEvent<HTMLInputElement>
) => onChange({ value: e.target.value, name, id: e.target.id });

type WithInputBaseProps = {
  className: string;
  classModifier: string;
};
export const withInput = (
  defaultClassName: string,
  addPropTypes = {},
  addDefaultProps = {},
  withHandlersOverride = {},
  withPropsOverride = null
) => (Component: React.ComponentClass) => {
  let defaultWithProps = ({
    className,
    classModifier,
  }: WithInputBaseProps) => ({
    componentClassName: ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    ),
  });
  if (withPropsOverride) {
    defaultWithProps = withPropsOverride;
  }

  const handlers = {
    onChange: defaultOnChange,
    ...withHandlersOverride,
  };

  type NewComponentProps = {
    isVisible: boolean;
  } & WithInputBaseProps;

  const NewComponent = (props: NewComponentProps) => {
    const { isVisible } = props;
    if (!isVisible) {
      return null;
    }
    const onHandlers = {};
    // eslint-disable-next-line guard-for-in
    for (const propertyName in handlers) {
      onHandlers[propertyName] = handlers[propertyName](props);
    }
    return (
      <Component {...props} {...defaultWithProps(props)} {...onHandlers} />
    );
  };

  const propTypes = {
    ...Constants.propTypes,
    ...addPropTypes,
  };
  NewComponent.propTypes = propTypes;

  const defaultProps = {
    ...Constants.defaultProps,
    ...addDefaultProps,
  };
  NewComponent.defaultProps = defaultProps;

  return NewComponent;
};
