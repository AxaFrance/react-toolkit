import * as React from 'react';
import { useState } from 'react';
import TabsStateless from './TabsStateless';
import { TabProps } from './Tab';

export type TabsContainerState = {
  activeIndex: string;
};

const defaultState = { activeIndex: '0' };

export type TabsCoreProps = {
  children: React.ReactElement<TabProps>[];
  activeIndex?: string;
  className?: string;
  classModifier?: string;
  onChange?: (tabIndex: string) => void;
};

export const onChangeEvent = (onChange: Function) => (setState: Function) => (
  state: any
) => (e: any) => {
  if (onChange) {
    onChange(e.id);
  }
  setState({
    ...state,
    activeIndex: e.id,
  });
};

const TabsCore: React.FunctionComponent<TabsCoreProps> = ({
  activeIndex,
  onChange,
  ...otherProps
}) => {
  const [state, setState] = useState<TabsContainerState>(defaultState);

  return (
    <TabsStateless
      activeIndex={activeIndex || state.activeIndex}
      {...otherProps}
      onChange={onChangeEvent(onChange)(setState)(state)}
    />
  );
};

export default TabsCore;
