import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__header';

export type HeaderBaseProps = DivProps & WithClassModifierOptions;

const enhance = compose<DivProps, HeaderBaseProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Div);
Enhanced.displayName = 'HeaderBase';
export default Enhanced;
