import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

interface TabComponentProps {
  className?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  classModifier?: string;
}

const Tab = (_props: TabComponentProps) => <span />;

const DEFAULT_CLASSNAME = 'af-tabs__pane';

export type TabProps = TabComponentProps & WithClassModifierOptions;

const enhance = compose(
  identity<TabComponentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(Tab);
Enhanced.displayName = 'TabCore';
export default Enhanced;
