import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

interface TabComponentProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  classModifier?: string;
}

const Tab: React.SFC<TabComponentProps> = () => <span />;

const DEFAULT_CLASSNAME = 'af-tabs__pane';

export type TabProps = TabComponentProps & WithClassModifierOptions;

const enhance = compose<TabComponentProps, TabProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Tab);
Enhanced.displayName = 'TabCore';
export default Enhanced;
