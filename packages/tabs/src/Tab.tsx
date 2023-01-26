import React, { ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type TabProps = {
  className?: string;
  title: string;
  children?: ReactNode;
  classModifier?: string;
};

const Tab = ({ classModifier, children, className, ...props }: TabProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-tabs__pane'
  );
  return <span className={componentClassName} {...props} />;
};

export default Tab;
