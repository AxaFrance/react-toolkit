import * as React from 'react';
import * as ReactModal from 'react-modal';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-modal';

ReactModal.setAppElement('body');

interface ModalCoreComponentProps {
  isOpen: boolean;
  onOutsideTap: (event: MouseEvent | KeyboardEvent) => void;
  className?: string;
}

const ModalCoreRaw: React.SFC<ModalCoreComponentProps> = props => (
  <ReactModal
    className={props.className}
    isOpen={props.isOpen}
    onRequestClose={props.onOutsideTap}>
    <div className="af-modal__dialog">
      <div className="af-modal__content">{props.children}</div>
    </div>
  </ReactModal>
);

export type ModalCoreProps = ModalCoreComponentProps & WithClassModifierOptions;

const enhance = compose<ModalCoreComponentProps, ModalCoreProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(ModalCoreRaw);
Enhanced.displayName = 'ModalCore';
export default Enhanced;
