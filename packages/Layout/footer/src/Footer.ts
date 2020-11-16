import { withProps, compose, identity } from '@axa-fr/react-toolkit-core';
import FooterCore, { FooterCoreProps } from './FooterCore';

export interface FooterProps extends FooterCoreProps {
  copyright?: React.ReactNode;
}

export const setWithProps = ({
  copyright,
  ...otherProps
}: FooterProps): FooterCoreProps => ({
  ...otherProps,
  children: copyright,
});
const enhance = compose(identity<FooterProps>(), withProps(setWithProps));

const Enhanced = enhance(FooterCore);
Enhanced.displayName = 'Footer';
export default Enhanced;
