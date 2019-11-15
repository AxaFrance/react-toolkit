import FooterCore, { FooterCoreProps } from './FooterCore';
import {
  withProps,
  compose,
} from '@axa-fr/react-toolkit-core';

export interface FooterProps extends FooterCoreProps {
  copyright?: React.ReactNode;
}

const setWithProps = ({
                        copyright,
                        ...otherProps
                      }: FooterProps): FooterCoreProps => ({
  ...otherProps,
  children: copyright,
});
const enhanced = compose(withProps<FooterProps, FooterCoreProps>(setWithProps))(FooterCore);

enhanced.displayName = 'Footer';

export default enhanced;
