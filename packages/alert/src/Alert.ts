import { withProps, compose, identity } from '@axa-fr/react-toolkit-core';
import AlertCore, { AlertCoreProps } from './AlertCore';
import icons from './icons';

const defaultClassModifier = 'error';

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

const enhance = compose(identity<AlertProps>(), withProps(setWithProps));

const Enhanced = enhance(AlertCore);
Enhanced.displayName = 'Alert';
Enhanced.defaultProps = {
  classModifier: defaultClassModifier,
};

export default Enhanced;
