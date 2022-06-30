import React from 'react';

type PaneComponentProps = {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
};
const Pane = ({
  children,
  className = 'af-tabs__pane',
  active,
}: PaneComponentProps) => {
  if (!active) {
    return null;
  }
  return <div className={className}>{children}</div>;
};

export default Pane;
