import * as React from 'react';

import TabsCore, { TabsCoreProps } from './TabsCore';
import Tab from './Tab';

class Tabs extends React.PureComponent<TabsCoreProps> {
  public render() {
    return <TabsCore {...this.props} />;
  }

  public static readonly Tab = Tab;
}

export default Tabs;
