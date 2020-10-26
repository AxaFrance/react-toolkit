import React from 'react';
import Modal, { HeaderProps } from '@axa-fr/react-toolkit-modal-default';
import Button from '@axa-fr/react-toolkit-button';

import {
  ClassManager,
  ClickEvent,
  Constants,
} from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-modal';

const defaultProps = {
  ...Constants.defaultProps,
  submitTitle: 'Valider',
  cancelTitle: 'Annuler',
  className: defaultClassName,
};

type ModalBooleanCoreProps = Partial<typeof defaultProps> & {
  isOpen: boolean;
  onSubmit: (e: ClickEvent) => void;
  onCancel: (e: ClickEvent) => void;
  id: string;
  children: React.ReactNode;
};

type ModalBooleanProps = HeaderProps & ModalBooleanCoreProps;

const ModalBoolean = ({
  isOpen,
  children,
  title,
  submitTitle,
  cancelTitle,
  className,
  classModifier,
  onCancel,
  id,
  onSubmit,
}: ModalBooleanProps) => {
  const onCancelcb = () => onCancel && onCancel({ id });

  const onSubmitcb = () => onSubmit && onSubmit({ id });

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <Modal
      isOpen={isOpen}
      className={componentClassName}
      onOutsideTap={onCancelcb}
      title={title}>
      <Modal.Header title={title} onCancel={onCancelcb} />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button classModifier="reverse" onClick={onCancelcb}>
          {cancelTitle}
        </Button>
        <Button onClick={onSubmitcb}>{submitTitle}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalBoolean.defaultProps = defaultProps;

export default ModalBoolean;
