import Title from './Title';
import compose from '../../compose';
import withProps from '../../withProps';
import { withClassModifier } from '@axa-fr/react-toolkit-core';

const withTitleClassName = withProps(({ backHome, classModifier }) => ({
  className: 'af-title-bar',
  classModifier: `${classModifier ? classModifier : ''}${
    backHome ? ' backhome' : ''
  }`,
}));

const enhance = compose(
  withTitleClassName,
  withClassModifier
);

const Enhanced = enhance(Title);

export default Enhanced;
