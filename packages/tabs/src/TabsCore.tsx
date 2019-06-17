import {
  StateHandlerMap,
  StateHandler,
  StateUpdaters,
  withStateHandlers,
  compose,
} from 'recompose';
import TabsStateless, {
  TabsStatelessHandlers,
  TabsStatelessProps,
} from './TabsStateless';

import { TabProps } from './Tab';

export interface TabsContainerState {
  activeIndex: string;
}

export interface TabsCoreProps {
  children: React.ReactElement<TabProps>[];
  onChange: React.MouseEventHandler<HTMLButtonElement>;
}

interface TabsUpdaters extends StateHandlerMap<TabsContainerState> {
  onChange: StateHandler<TabsContainerState>;
}

export const defaultState = { activeIndex: '0' };

export const stateUpdaters: StateUpdaters<
  TabsCoreProps,
  TabsContainerState,
  TabsUpdaters
> = {
  onChange: (state, { onChange }) => e => {
    onChange(e.id);
    return {
      ...state,
      activeIndex: e.id,
    };
  },
};

const enchancer = compose<
  TabsStatelessHandlers & TabsStatelessProps,
  TabsCoreProps
>(withStateHandlers(defaultState, stateUpdaters));

export default enchancer(TabsStateless);
