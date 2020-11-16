import {
  WithClickIdProps,
  withClickId,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';
import ActionCore, { ActionCoreProps } from './ActionCore';

export type ActionProps = WithClickIdProps<ActionCoreProps, 'onClick'>;

const Action = compose(
  identity<ActionCoreProps>(),
  withClickId({ event: ['onClick'] })
)(ActionCore);
Action.displayName = 'Action';

export default Action;
