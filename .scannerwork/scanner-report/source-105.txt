import AlertCore, { AlertCoreProps } from './AlertCore';
import { mapProps, mapper } from 'recompose';
import classnames from 'classnames';

export interface AlertWithTypeProps extends AlertCoreProps {
  type?: 'error' | 'danger' | 'info' | 'success';
}

export enum TypeIcons {
  error = 'glyphicon glyphicon-exclamation-sign',
  danger = 'glyphicon glyphicon-alert',
  info = 'glyphicon glyphicon-info-sign',
  success = 'glyphicon glyphicon-ok',
}

export const typePropsToCoreProps: mapper<
  AlertWithTypeProps,
  AlertCoreProps
> = ({ type, classModifier, iconClassName, ...otherProps }) => ({
  ...otherProps,
  classModifier: classnames(classModifier, type),
  iconClassName: iconClassName || TypeIcons[type as keyof typeof TypeIcons],
});

const enhance = mapProps(typePropsToCoreProps)(AlertCore);

enhance.defaultProps = {
  type: 'error',
};
enhance.displayName = 'AlertWithType';

export default enhance;
