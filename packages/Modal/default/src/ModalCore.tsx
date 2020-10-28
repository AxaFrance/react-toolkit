import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

const DEFAULT_CLASSNAME = 'af-modal';

ReactModal.setAppElement('body');

const defaultProps = {
  className: DEFAULT_CLASSNAME,
  title: '',
};

export type ModalCoreProps = Partial<typeof defaultProps> & {
  isOpen: boolean;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: ReactNode;
};

const ModalCoreRaw = (props: ModalCoreProps) => (
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

ModalCoreRaw.defaultProps = defaultProps;

export default ModalCoreRaw;
