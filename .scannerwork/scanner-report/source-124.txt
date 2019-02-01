import { compose, lifecycle, withStateHandlers } from 'recompose';
import { withClassDefault, withClassModifier } from '@axa-fr/react-toolkit-core';
import Help from './Help';

export const initialStateToggle = ({ isOpen }) => ({ isOpen });

export const setToggle = ({ isOpen }, props) => () => ({
  isOpen: !isOpen,
});

export const setOutsideTap = (state, props) => () => ({
  isOpen: false,
});

export const withInitState = lifecycle({
  state: {
    isOpen: false,
  },
});

const withToggle = withStateHandlers(initialStateToggle, {
  toggle: setToggle,
  outsideTap: setOutsideTap,
});

const enhance = compose(
  withInitState,
  withClassDefault('af-popover__container'),
  withClassModifier,
  withToggle
);

const enhanced = enhance(Help);
enhanced.displayName = 'Help';

export default enhanced;
