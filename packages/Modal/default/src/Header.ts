import { withClickId, WithClickIdProps, compose } from '@axa-fr/react-toolkit-core';
import { renameProp } from 'recompose';
import HeaderCore, { HeaderCoreProps } from './HeaderCore';

const onCancelEvent = 'onCancel';

export interface HeaderProps
  extends WithClickIdProps<HeaderCoreProps, typeof onCancelEvent> {
  title: string;
}

const enchance = compose<HeaderCoreProps, HeaderProps>(
  withClickId({ event: [onCancelEvent] }),
  renameProp('title', 'children')
)(HeaderCore);

enchance.displayName = 'Header';

export default enchance;
