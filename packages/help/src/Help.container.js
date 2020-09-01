import {
  withClassDefault,
  withClassModifier,
  compose
} from '@axa-fr/react-toolkit-core';
import Help from './Help';

export const enhance = compose(
  withClassDefault('af-popover__container'),
  withClassModifier
);
console.log("youhou")
const enhanced = enhance(Help);
enhanced.displayName = 'Help';

export default enhanced;
