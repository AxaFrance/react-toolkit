import * as React from 'react';
import { withClassDefault } from '@axa-fr/react-toolkit-core';
import { compose, branch, renderNothing } from 'recompose';

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
const Pane: React.SFC<PaneComponentProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const enchance = compose<PaneComponentProps, PaneComponentProps>(
  branch((props: PaneComponentProps) => props.active === false, renderNothing),
  withClassDefault(DEFAULT_CLASSNAME)
)(Pane);

export default enchance;
