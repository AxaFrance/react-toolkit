import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.node.isRequired,
  defaultCollapse: PropTypes.bool,
  onlyOne: PropTypes.bool,
};
const defaultClassName = 'af-accordion';
const defaultProps = {
  ...Constants.defaultProps,
  defaultCollapse: true,
  onlyOne: true,
  className: defaultClassName,
};

export const AccordionBase = props => {
  const { children, className, classModifier, handleToggle, collapses } = props;
  const renderedChildren = React.Children.map(children, child => {
    const index = Array.isArray(children) ? children.indexOf(child) : 0;
    return React.cloneElement(child, {
      ...child.props,
      index,
      onToggle: handleToggle,
      collapse:
        collapses[index] !== undefined
          ? collapses[index]
          : child.props.collapse,
      className: child.props.className,
      classModifier: child.props.classModifier,
    });
  });
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div
      className={componentClassName}
      role="tablist"
      aria-multiselectable="true">
      {renderedChildren}
    </div>
  );
};

export const handleToggle = (state, { onlyOne, children }) => e => {
  const newState = { collapses: [...state.collapses] };
  if (e.collapse && onlyOne) {
    if (Array.isArray(children)) {
      children.forEach((child, index) => {
        newState.collapses[index] = false;
      }, this);
    } else if (children) {
      newState.collapses[0] = false;
    }
  }
  newState.collapses[e.index] = e.collapse;
  return newState;
};

AccordionBase.propTypes = propTypes;
AccordionBase.defaultProps = defaultProps;

const EnhancedComponent = (props) => {
  const [state, setState] = useState({ collapses: [] });

  const toggle = (e) => {
    const newState = handleToggle(state, props)(e);
    setState(newState);
  };

  return (<AccordionBase {...props} {...state} handleToggle={toggle} />);
};

EnhancedComponent.displayName = 'Accordion';

export default EnhancedComponent;
