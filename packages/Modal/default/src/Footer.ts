import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';
import Div, { DivProps } from './Div';

const DEFAULT_CLASSNAME = 'af-modal__footer';

export type FooterProps = DivProps & WithClassModifierOptions;

const enhance = compose<DivProps, FooterProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Div);
Enhanced.displayName = 'Footer';
export default Enhanced;
