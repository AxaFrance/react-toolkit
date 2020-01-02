import { withClickId, WithClickIdProps, compose } from '@axa-fr/react-toolkit-core';

import ButtonCore, { ButtonCoreProps } from './ButtonCore';

export type ButtonProps = WithClickIdProps<ButtonCoreProps, "onClick">;

const Button = compose<ButtonCoreProps, ButtonProps>(
  withClickId<ButtonCoreProps>({ event: ['onClick'] })
)(ButtonCore);

Button.displayName = "Button";

export default Button;
