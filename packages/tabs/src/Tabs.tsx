import React from 'react';

import TabsCore, { TabsCoreProps } from './TabsCore';
import Tab from './Tab';

class Tabs extends React.PureComponent<TabsCoreProps> {

  public static readonly Tab = Tab;

  public render() {
    return <TabsCore {...this.props} />;
  }
}

export default Tabs;
