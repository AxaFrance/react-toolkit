import { WithClickIdProps, withClickId, compose } from '@axa-fr/react-toolkit-core';
import ActionCore, { ActionCoreProps } from './ActionCore';

export type ActionProps = WithClickIdProps<ActionCoreProps, 'onClick'>;

const Action = compose<ActionCoreProps, ActionProps>(
  withClickId<ActionCoreProps>({ event: ['onClick'] })
)(ActionCore);
//Action.displayName = 'Action';

export default Action;
