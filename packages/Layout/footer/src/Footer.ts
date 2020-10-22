import { withProps, compose } from '@axa-fr/react-toolkit-core';
import FooterCore, { FooterCoreProps } from './FooterCore';

export interface FooterProps extends FooterCoreProps {
  copyright?: React.ReactNode;
}

export const setWithProps = ({ copyright, ...otherProps }: FooterProps): FooterCoreProps => ({
  ...otherProps,
  children: copyright,
});
const enhanced = compose(withProps<FooterProps, FooterCoreProps>(setWithProps))(FooterCore);

enhanced.displayName = 'Footer';

export default enhanced;
