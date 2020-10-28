import React from 'react';
import TabsCore, { TabsCoreProps } from './TabsCore';
import Tab, { TabProps } from './Tab';

const Tabs = (props: TabsCoreProps) => <TabsCore {...props} />;

Tabs.Tab = Tab;
export default Tabs as React.ComponentType<TabsCoreProps> & {
  Tab: React.ComponentType<TabProps>;
};
