import {
  withClickId,
  WithClickIdProps,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

import ButtonCore, { ButtonCoreProps } from './ButtonCore';

export type ButtonProps = WithClickIdProps<ButtonCoreProps, 'onClick'>;

const Button = compose(
  identity<ButtonCoreProps>(),
  withClickId({ event: ['onClick'] })
)(ButtonCore);

Button.displayName = 'Button';

export default Button;
