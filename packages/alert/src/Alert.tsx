import React from 'react';
import AlertCore, { AlertCoreProps } from './AlertCore';
import icons from './icons';

type AlertProps = Pick<
  AlertCoreProps,
  Exclude<keyof AlertCoreProps, 'iconClassName'>
> & {
  icon?: string;
};

const setWithProps = ({ icon, ...otherProps }: AlertProps): AlertCoreProps => {
  const firstModifier = otherProps.classModifier.split(' ')[0];
  return {
    ...otherProps,
    iconClassName: `glyphicon glyphicon-${icon || icons[firstModifier]}`,
  };
};

const Alert = ({ classModifier = 'error', ...props }: AlertProps) => {
  const customProps = setWithProps({ ...props, classModifier });
  return <AlertCore {...customProps} classModifier={classModifier} />;
};

export default Alert;
