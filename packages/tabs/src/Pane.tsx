import React from 'react';
import { withClassDefault, compose } from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-tabs__pane';

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface PaneComponentProps extends DivProps {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
}
const Pane: React.SFC<PaneComponentProps> = ({
  children,
  className,
  active,
}) => {
  if (!active) {
    return null;
  }
  return <div className={className}>{children}</div>;
};

const enchance = compose<PaneComponentProps, PaneComponentProps>(
  withClassDefault(DEFAULT_CLASSNAME)
)(Pane);

export default enchance;
