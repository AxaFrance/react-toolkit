import React, { ReactNode } from 'react';

export type TabProps = {
  className?: string;
  title: ReactNode;
  children?: ReactNode;
  classModifier?: string;
};

const Tab = (props: TabProps) => <span />;

export default Tab;
