import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

ReactModal.setAppElement('body');

export type ModalCoreProps = {
  className?: string;
  title?: string;
  isOpen: boolean;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: ReactNode;
  classModifier?: string;
};

const ModalCore = ({
  className,
  isOpen,
  title = '',
  onOutsideTap,
  children,
  classModifier,
}: ModalCoreProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal'
  );
  return (
    <ReactModal
      className={componentClassName}
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
};

export default ModalCore;
