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

export const onChangeEvent = (onChange:Function) => (setState:Function) => (state: any) => (e:any) => {
  onChange(e.id);
  setState ({
    ...state,
    activeIndex: e.id,
  });
};

const TabsCore = ({ onChange, ...otherProps }: TabsCoreProps) => {
  const [state, setState] = useState<TabsContainerState>(defaultState);
  return <TabsStateless {...state} {...otherProps} onChange={onChangeEvent(onChange)(setState)(state)} />;
};

export default TabsCore;
