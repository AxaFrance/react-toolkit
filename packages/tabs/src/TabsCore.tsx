import React, { useState } from 'react';
import TabsStateless, { TabsStatelessProps } from './TabsStateless';

const DEFAULT_ACTIVE_INDEX = '0';

export type TabsCoreProps = Tabs & Omit<TabsStatelessProps, 'activeIndex'>;

interface Tabs {
  onChange?: (e: string) => void;
  activeIndex?: string;
}

export const onChangeEvent =
  (onChange: Function) => (setState: Function) => (e: any) => {
    if (onChange) {
      onChange(e.id);
    }
    setState(e.id);
  };

const TabsCore: React.FunctionComponent<TabsCoreProps> = ({
  activeIndex = DEFAULT_ACTIVE_INDEX,
  onChange,
  ...otherProps
}) => {
  const [stateActiveIndex, setActiveIndex] = useState<string>(activeIndex);

  return (
    <TabsStateless
      activeIndex={stateActiveIndex}
      {...otherProps}
      onChange={onChangeEvent(onChange)(setActiveIndex)}
    />
  );
};

export default TabsCore;
