import React from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-title';

interface TitleBaseProps extends React.HTMLProps<HTMLHeadingElement> {}

const defaultProps: Partial<TitleBaseProps> = {
  children: null,
};

const omitProperties = PropsManager.omit(['classModifier']);

const TitleRaw: React.FC<TitleBaseProps> = ({ children, ...otherProps }) => (
  <h1 {...omitProperties(otherProps)}>{children}</h1>
);

TitleRaw.defaultProps = defaultProps;

export interface TitleProps extends WithClassModifierOptions, TitleBaseProps {}

const enhance = compose<TitleBaseProps, TitleProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(TitleRaw);
Enhanced.displayName = 'Title';
export default Enhanced;
