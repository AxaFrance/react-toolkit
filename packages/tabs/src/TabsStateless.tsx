import * as React from 'react';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';
import { TabProps } from './Tab';
import Title from './Title';
import Pane from './Pane';

const defaultClassName = 'af-tabs';

export interface TabsStatelessProps {
  className: string;
  children: React.ReactElement<TabProps>[];
  activeIndex: string;
  classModifier?: string;
}

export interface TabsStatelessHandlers {
  onChange: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const TabsStateless: React.SFC<TabsStatelessProps & TabsStatelessHandlers> = ({
  activeIndex,
  className,
  classModifier,
  children,
  onChange,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName}>
      <ul className="af-tabs__control">
        {children.map((item, index) => (
          <Title
            active={activeIndex === index.toString()}
            onChange={onChange}
            id={`${index}`}
            classModifier={item.props.classModifier}
            key={`title-${index}`}>
            {item.props.title}
          </Title>
        ))}
      </ul>
      <div className="af-tabs__content">
        {children.map((item, index) => (
          <Pane active={activeIndex === index.toString()} key={`pane -${index}`}>
            {item.props.children}
          </Pane>
        ))}
      </div>
    </div>
  );
};

TabsStateless.defaultProps = defaultProps;

export default TabsStateless;
