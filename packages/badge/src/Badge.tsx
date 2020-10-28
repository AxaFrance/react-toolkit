import React from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-badge';

interface BadgeBaseProps extends React.HTMLProps<HTMLSpanElement> {}

const defaultProps: Partial<BadgeBaseProps> = {
  children: null,
};

const omitProperties = PropsManager.omit(['classModifier']);

const BadgeRaw: React.SFC<BadgeBaseProps> = ({ children, ...otherProps }) => (
  <span {...omitProperties(otherProps)}>{children}</span>
);

BadgeRaw.defaultProps = defaultProps;

const enhance = compose(
  identity<BadgeBaseProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(BadgeRaw);
Enhanced.displayName = 'Badge';
export default Enhanced;
