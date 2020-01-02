import { withClickId, WithClickIdProps, compose, withProps } from '@axa-fr/react-toolkit-core';
import HeaderCore, { HeaderCoreProps } from './HeaderCore';

const onCancelEvent = 'onCancel';

export interface HeaderProps
  extends WithClickIdProps<HeaderCoreProps, typeof onCancelEvent> {
  title: string;
}

const setWithProps = (props: HeaderProps) => ({
  ...props,
  children: props.title,
});

const enchance = compose<HeaderCoreProps, HeaderProps>(
  withClickId({ event: [onCancelEvent] }),
  withProps<HeaderProps, HeaderCoreProps>(setWithProps),
)(HeaderCore);

enchance.displayName = 'Header';

export default enchance;
