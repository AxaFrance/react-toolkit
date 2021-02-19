import React, { FC, HTMLProps } from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  compose,
  identity,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-badge';

type BadgeBaseProps = HTMLProps<HTMLSpanElement> & { disabled?: boolean };

const omitProperties = PropsManager.omit(['classModifier']);

const BadgeRaw: FC<BadgeBaseProps> = ({ children, ...otherProps }) => (
  <span {...omitProperties(otherProps)}>{children}</span>
);

type BadgeEnhancedProps = BadgeBaseProps & WithClassModifierOptions;
const enhance = compose(
  identity<BadgeEnhancedProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(BadgeRaw);
Enhanced.displayName = 'Badge';
export default Enhanced;
