import * as React from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'btn af-btn';

const omitProperties = PropsManager.omit(['classModifier']);

interface ButtonCoreComponentProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {}

const ButtonRaw: React.SFC<ButtonCoreComponentProps> = props => {
  const buttonProps: ButtonCoreComponentProps = omitProperties(props);
  return <button {...buttonProps} />;
};

export type ButtonCoreProps = ButtonCoreComponentProps &
  WithClassModifierOptions;

const enhance = compose<ButtonCoreComponentProps, ButtonCoreProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(ButtonRaw);
Enhanced.displayName = 'ButtonCore';
export default Enhanced;
