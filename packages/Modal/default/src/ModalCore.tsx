import React from 'react';
import ReactModal from 'react-modal';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-modal';

ReactModal.setAppElement('body');

interface ModalCoreComponentProps {
  isOpen: boolean;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  className?: string;
  title?:string
}

const ModalCoreRaw: React.SFC<ModalCoreComponentProps> = (props) => (
  <ReactModal
    className={props.className}
    isOpen={props.isOpen}
    aria={{
      modal: props.isOpen,
    }}
    contentLabel={props.title}
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
