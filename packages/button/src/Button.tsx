import { withClickId, WithClickIdProps } from '@axa-fr/react-toolkit-core';
import { ComponentPropsWithoutRef } from 'react';

import ButtonCore from './ButtonCore';

type ButtonCoreProps = ComponentPropsWithoutRef<typeof ButtonCore>;
export type ButtonProps = WithClickIdProps<ButtonCoreProps, 'onClick'>;

const Button = withClickId<ButtonCoreProps>({ event: ['onClick'] })(ButtonCore);
Button.displayName = 'Button';

export default Button;
