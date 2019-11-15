import TabsStateless, { TabsStatelessProps } from './TabsStateless';

import * as React from "react";
import {useState} from "react";

export type TabsContainerState = {
  activeIndex: string;
}

export const defaultState = { activeIndex: '0' };

export type TabsCoreProps = Tabs & TabsStatelessProps;

export type Tabs = {
  onChange: (e:string)=>void;
}

const TabsCore = ({ onChange, ...otherProps }: TabsCoreProps) => {
  const [state, setState] = useState<TabsContainerState>(defaultState);
  const onChangeEvent = (e:any) => {
    onChange(e.id);
    setState ({
      ...state,
      activeIndex: e.id,
    });
  };
  return <TabsStateless {...otherProps} onChange={onChangeEvent} />;
};

export default TabsCore;
