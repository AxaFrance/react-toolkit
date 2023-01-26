import classnames from 'classnames';
import React from 'react';
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

const AlertWithType = ({ type = 'error', ...props }: AlertWithTypeProps) => {
  const customProps = setWithProps({ ...props, type });
  return <AlertCore {...customProps} />;
};

export default AlertWithType;
