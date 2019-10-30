import { ClassManager } from '@axa-fr/react-toolkit-core';
import Constants from './InputConstants';
import React from "react";

export const omit = keys => props => {
  if (!keys) {
    return props;
  }
  const clonedProps = { ...props };
  keys.forEach(element => {
    if (element in clonedProps) {
      delete clonedProps[element];
    }
  });
  return clonedProps;
};

const defaultOnChange = ({ name, onChange }) => e =>
  onChange({ value: e.target.value, name, id: e.target.id });

export const withInput = (
  defaultClassName,
  addPropTypes = {},
  addDefaultProps = {},
  withHandlersOverride = {},
  withPropsOverride = null
) => Component =>  {
  let defaultWithProps = ({ className, classModifier }) => ({
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

  const NewComponent = (props) => {
    const {isVisible} = props;
    if (!isVisible) {
      return null;
    }
    const onHandlers = {};
    for (let propertyName in handlers){
      onHandlers[propertyName] = handlers[propertyName](props);
    }
    return <Component {...props} {...defaultWithProps(props)} {...onHandlers} />;
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
