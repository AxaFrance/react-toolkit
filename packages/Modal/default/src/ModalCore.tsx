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

const ModalCoreRaw = ({
  className,
  isOpen,
  title,
  onOutsideTap,
  children,
}: ModalCoreProps) => (
  <ReactModal
    className={className}
    isOpen={isOpen}
    aria={{
      modal: isOpen,
    }}
    contentLabel={title}
    onRequestClose={onOutsideTap}>
    <div className="af-modal__dialog">
      <div className="af-modal__content">{children}</div>
    </div>
  </ReactModal>
);

ModalCoreRaw.defaultProps = defaultProps;

export default ModalCoreRaw;
