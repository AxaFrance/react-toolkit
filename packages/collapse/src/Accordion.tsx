import * as React from 'react';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import { CollapseProps } from './CollapseCardBase';
import { HeaderToggleElement } from './Header';

const defaultClassName = 'af-accordion';
const defaultProps = {
  ...Constants.defaultProps,
  defaultCollapse: true,
  onlyOne: true,
  className: defaultClassName,
};

type Props = Partial<typeof defaultProps> & {
  children: React.ReactElement<CollapseProps>[];
  handleToggle: (e: HeaderToggleElement) => void;
  collapses: boolean[];
};

export const AccordionBase = ({
  children,
  className,
  classModifier,
  handleToggle,
  collapses,
}: Props) => {
  const renderedChildren = React.Children.map(children, (child, index) => {
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

export const handleToggleState = (collapses: boolean[], { onlyOne, children }: Props) => (
  e: HeaderToggleElement
): boolean[] => {
  if (e.collapse && onlyOne) {
    if (Array.isArray(children)) {
      return children.map((_child, index) =>
        e.index === index ? e.collapse : false
      );
    }
    if (children) {
      return [e.collapse];
    }
  }
  const newCollapses = [...collapses];
  newCollapses[e.index] = e.collapse;
  return newCollapses;
};

AccordionBase.defaultProps = defaultProps;

type EnhancedProps = Props & {
  onlyOne: boolean;
};
const EnhancedComponent = (props: EnhancedProps) => {
  const [collapses, setCollapses] = React.useState<boolean[]>([]);

  const toggle = (e: HeaderToggleElement) => {
    const newCollapses = handleToggleState(collapses, props)(e);
    setCollapses(newCollapses);
  };

  return <AccordionBase {...props} collapses={collapses} handleToggle={toggle} />;
};

EnhancedComponent.displayName = 'Accordion';

export default EnhancedComponent;
