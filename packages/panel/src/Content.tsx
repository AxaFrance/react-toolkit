import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-panel__content';

type ContentComponentProps = HTMLProps<HTMLElement>;

const Content: FC<ContentComponentProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <section className={className} {...otherProps}>
    {children}
  </section>
);

type ContentProps = ContentComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<ContentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Content.displayName = 'Panel.Content';

export default enhance(Content);
