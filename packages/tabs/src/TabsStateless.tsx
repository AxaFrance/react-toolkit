import React, { Children, isValidElement, ReactNode } from 'react';
import { Constants, getComponentClassName } from '@axa-fr/react-toolkit-core';
import Title from './Title';
import Pane from './Pane';

const defaultClassName = 'af-tabs';

export interface TabsStatelessProps {
  children: ReactNode;
  activeIndex: string;
  className?: string;
  classModifier?: string;
}

export interface TabsStatelessHandlers {
  onChange: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

type Props = TabsStatelessProps & TabsStatelessHandlers;
const TabsStateless = ({
  activeIndex,
  className,
  classModifier,
  children,
  onChange,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <ul className="af-tabs__control">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <Title
                active={activeIndex === index.toString()}
                onChange={onChange}
                id={`${index}`}
                classModifier={child.props.classModifier}
                key={`title-${index}`}>
                {child.props.title}
              </Title>
            )
        )}
      </ul>
      <div className="af-tabs__content">
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <Pane
                active={activeIndex === index.toString()}
                key={`pane-${index}`}>
                {child.props.children}
              </Pane>
            )
        )}
      </div>
    </div>
  );
};

TabsStateless.defaultProps = defaultProps;

export default TabsStateless;
