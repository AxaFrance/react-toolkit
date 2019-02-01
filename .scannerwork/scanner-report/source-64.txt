import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__body';

export type BodyProps = DivProps & WithClassModifierOptions;

const enhance = compose<DivProps, BodyProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Div);
Enhanced.displayName = 'Body';
export default Enhanced;
