import React from 'react';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import { CollapseProps } from './CollapseCard';
import { HeaderToggleElement } from './Header';

const defaultClassName = 'af-accordion';

const defaultProps = {
  ...Constants.defaultProps,
  onlyOne: false,
  className: defaultClassName,
};

type AccordionProps = {
  className: string;
  classModifier: string;
  children: React.ReactElement<CollapseProps>[];
  handleToggle: (e: HeaderToggleElement) => void;
  collapses: boolean[];
};

const Accordion = ({
  className,
  classModifier,
  children,
  handleToggle,
  collapses,
}: AccordionProps) => {
  const renderedChildren = React.Children.map(children, (child, index) => {
    let mixCallback = handleToggle;
    if (child.props.onToggle) {
      mixCallback = (e: HeaderToggleElement) => {
        handleToggle(e);
        child.props.onToggle(e);
      };
    }
    return React.cloneElement(child, {
      ...child.props,
      index,
      onToggle: mixCallback,
      isOpen:
        collapses[index] !== undefined ? collapses[index] : child.props.isOpen,
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

Accordion.defaultProps = defaultProps;

export const handleToggleState = (
  collapses: boolean[],
  { onlyOne, children }: EnhancedProps
) => (e: HeaderToggleElement): boolean[] => {
  if (e.isOpen && onlyOne) {
    if (Array.isArray(children)) {
      return children.map((_child, index) =>
        e.index === index ? e.isOpen : false
      );
    }
    return [e.isOpen];
  }
  const newCollapses = [...collapses];
  newCollapses[e.index] = e.isOpen;
  return newCollapses;
};

export type EnhancedProps = Partial<typeof defaultProps> & {
  onlyOne?: boolean;
  className?: string;
  classModifier?: string;
  children: React.ReactElement<CollapseProps>[];
};

const EnhancedComponent = (props: EnhancedProps) => {
  const [collapses, setCollapses] = React.useState<boolean[]>([]);

  const toggle = (e: HeaderToggleElement) => {
    const newCollapses = handleToggleState(collapses, props)(e);
    setCollapses(newCollapses);
  };

  return <Accordion {...props} collapses={collapses} handleToggle={toggle} />;
};

EnhancedComponent.displayName = 'Accordion';

export default EnhancedComponent;
