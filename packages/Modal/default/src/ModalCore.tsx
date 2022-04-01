import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  identity,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-modal';

ReactModal.setAppElement('body');

const defaultProps = {
  className: DEFAULT_CLASSNAME,
  title: '',
};

export type ModalCoreComponentProps = Partial<typeof defaultProps> & {
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
}: ModalCoreComponentProps) => (
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

export type ModalCoreProps = ModalCoreComponentProps & WithClassModifierOptions;

const enhance = compose(
  identity<ModalCoreComponentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier(),
);

const ModalCoreRawEnhanced = enhance(ModalCoreRaw);
ModalCoreRawEnhanced.displayName = 'ModalCore';

export default ModalCoreRawEnhanced;
