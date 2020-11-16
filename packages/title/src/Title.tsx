import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-title';

export type TitleProps = React.HTMLProps<HTMLHeadingElement> &
  WithClassModifierOptions;

const TitleRaw: React.FC<TitleProps> = ({
  classModifier,
  children,
  ...otherProps
}) => <h1 {...otherProps}>{children}</h1>;

const enhance = compose(
  identity<TitleProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(TitleRaw);
Enhanced.displayName = 'Title';
export default Enhanced;
