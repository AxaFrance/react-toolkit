import Title from './Title';
import { withProps, compose } from 'recompose';
import { withClassModifier } from '@axa-fr/react-toolkit-core';

const withTitleClassName = withProps(({ backHome, classModifier }) => ({
  className: 'af-title-bar',
  classModifier: `${classModifier}${backHome ? ' backhome' : ''}`
}));

const enhance = compose(
  withTitleClassName,
  withClassModifier
);

const Enhanced = enhance(Title);

export default Enhanced;
