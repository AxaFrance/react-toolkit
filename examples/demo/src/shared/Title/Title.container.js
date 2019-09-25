import Title from './Title';
import { withProps, compose } from 'recompose';
import { withClassModifier } from '@axa-fr/react-toolkit-core';

const withTitleClassName = withProps(({ onClick, classModifier }) => ({
  className: 'af-title-bar',
  classModifier: `${classModifier ? classModifier : ''}${
    onClick ? ' backhome' : ''
  }`,
}));

const enhance = compose(
  withTitleClassName,
  withClassModifier
);

const Enhanced = enhance(Title);

export default Enhanced;
