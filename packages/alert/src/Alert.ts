import { mapProps } from 'recompose';
import AlertCore, { AlertCoreProps } from './AlertCore';
import icons from './icons';

const defaultClassModifier = 'error';

type AlertProps = Pick<AlertCoreProps, Exclude<keyof AlertCoreProps, 'iconClassName'>> & {
  icon?: string;
};

const enhance = mapProps<AlertCoreProps, AlertProps>(({ icon, ...otherProps }) => {
  const firstModifier = otherProps.classModifier.split(' ')[0];
  return {
    ...otherProps,
    iconClassName: `glyphicon glyphicon-${icon || icons[firstModifier]}`,
  };
});

const Enhanced = enhance(AlertCore);

Enhanced.displayName = 'Alert';
Enhanced.defaultProps = {
  classModifier: defaultClassModifier,
};

export default Enhanced;
