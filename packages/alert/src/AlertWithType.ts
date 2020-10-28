import { withProps, compose, identity } from '@axa-fr/react-toolkit-core';
import classnames from 'classnames';
import AlertCore, { AlertCoreProps } from './AlertCore';

export interface AlertWithTypeProps extends AlertCoreProps {
  type?: 'error' | 'danger' | 'info' | 'success';
}

export enum TypeIcons {
  error = 'glyphicon glyphicon-exclamation-sign',
  danger = 'glyphicon glyphicon-alert',
  info = 'glyphicon glyphicon-info-sign',
  success = 'glyphicon glyphicon-ok',
}

export const setWithProps = ({
  type,
  classModifier,
  iconClassName,
  ...otherProps
}: AlertWithTypeProps): AlertCoreProps => ({
  ...otherProps,
  classModifier: classnames(classModifier, type),
  iconClassName: iconClassName || TypeIcons[type as keyof typeof TypeIcons],
});

const enhance = compose(
  identity<AlertWithTypeProps>(),
  withProps(setWithProps)
);

const Enhanced = enhance(AlertCore);
Enhanced.defaultProps = {
  type: 'error',
};
Enhanced.displayName = 'AlertWithType';
export default Enhanced;
