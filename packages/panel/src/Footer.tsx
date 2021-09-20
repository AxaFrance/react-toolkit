import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-panel__footer';

type FooterComponentProps = HTMLProps<HTMLElement>;

const Footer: FC<FooterComponentProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <footer className={className} {...otherProps}>
    {children}
  </footer>
);

type FooterProps = FooterComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<FooterProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Footer.displayName = 'Panel.Footer';

export default enhance(Footer);
