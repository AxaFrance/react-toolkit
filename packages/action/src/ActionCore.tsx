import React from 'react';
import { withClassDefault, withClassModifier, PropsManager, compose, withProps } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'btn af-btn--circle';

export interface ActionCoreProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
  icon: string;
  className?: string;
}

const defaultProps: Partial<ActionCoreProps> = {
  tabIndex: 0,
  href: '#',
};

const omitProperties = PropsManager.omit(['classModifier']);

const ActionCore: React.FC<ActionCoreProps> = ({ icon, ...otherProps }) => (
  <a {...omitProperties(otherProps)}>
    <i className={`glyphicon glyphicon-${icon}`} />
  </a>
);

ActionCore.defaultProps = defaultProps;

const enhance = compose<ActionCoreProps, ActionCoreProps>(
  withClassDefault(defaultClassName),
  withClassModifier,
  withProps(({ onClick, href, role }: ActionCoreProps) => ({
    href: onClick ? '#' : href || undefined,
    role: onClick ? 'button' : role || undefined,
  }))
);

const Enhanced = enhance(ActionCore);
Enhanced.displayName = 'ActionCore';
export default Enhanced;
