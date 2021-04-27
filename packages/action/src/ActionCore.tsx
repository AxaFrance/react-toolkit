import React, { AnchorHTMLAttributes } from 'react';
import {
  withClassDefault,
  withClassModifier,
  compose,
  withProps,
  identity,
} from '@axa-fr/react-toolkit-core';

const defaultClassName = 'btn af-btn--circle';

type ActionCoreProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: string;
};

const ActionCore = ({
  icon,
  href = '#',
  tabIndex = 0,
  ...otherProps
}: ActionCoreProps) => (
  <a {...otherProps} href={href} tabIndex={tabIndex}>
    <i className={`glyphicon glyphicon-${icon}`} />
  </a>
);

const enhance = compose(
  identity<ActionCoreProps & { classModifier?: string }>(),
  withClassDefault(defaultClassName),
  withClassModifier(),
  withProps(({ onClick, href, role }) => ({
    href: onClick ? '#' : href,
    role: onClick ? 'button' : role,
  }))
)(ActionCore);

enhance.displayName = 'ActionCore';
export default enhance;
