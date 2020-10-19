import AlertCore, { AlertCoreProps } from './AlertCore';
import icons from './icons';
import { withProps, compose } from '@axa-fr/react-toolkit-core';

const defaultClassModifier = 'error';

type AlertProps = Pick<AlertCoreProps, Exclude<keyof AlertCoreProps, 'iconClassName'>> & {
  icon?: string;
};

const setWithProps = ({ icon, ...otherProps }: AlertProps): AlertCoreProps => {
  const firstModifier = otherProps.classModifier.split(' ')[0];
  return {
    ...otherProps,
    iconClassName: `glyphicon glyphicon-${icon || icons[firstModifier]}`,
  };
};

const Enhanced = compose(withProps<AlertProps, AlertCoreProps>(setWithProps))(AlertCore);

Enhanced.displayName = 'Alert';
Enhanced.defaultProps = {
  classModifier: defaultClassModifier,
};

export default Enhanced;
