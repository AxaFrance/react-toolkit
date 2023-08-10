import React, { forwardRef } from 'react';
import Modal, {
  Body,
  Footer,
  Header,
  HeaderProps,
} from '@axa-fr/react-toolkit-modal-default';
import Button from '@axa-fr/react-toolkit-button';
import { getComponentClassName, ClickEvent } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-modal';

export type ModalBooleanProps = HeaderProps & {
  onSubmit: (e: ClickEvent) => void;
  onCancel: (e: ClickEvent) => void;
  id: string;
  children: React.ReactNode;
  submitTitle?: string;
  cancelTitle?: string;
  className?: string;
  classModifier?: string;
};

const ModalBoolean = forwardRef<HTMLDialogElement, ModalBooleanProps>(
  (
    {
      children,
      title,
      submitTitle = 'Valider',
      cancelTitle = 'Annuler',
      className = defaultClassName,
      classModifier,
      onCancel,
      id,
      onSubmit,
      closeButtonAriaLabel,
      ...props
    }: ModalBooleanProps,
    ref
  ) => {
    const onCancelcb = () => onCancel && onCancel({ id });

    const onSubmitcb = () => onSubmit && onSubmit({ id });

    const componentClassName = getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    return (
      <Modal
        className={componentClassName}
        onOutsideTap={onCancelcb}
        title={title}
        ref={ref}
        {...props}>
        <Header
          title={title}
          onCancel={onCancelcb}
          closeButtonAriaLabel={closeButtonAriaLabel}
        />
        <Body>{children}</Body>
        <Footer>
          <Button classModifier="reverse" onClick={onCancelcb}>
            {cancelTitle}
          </Button>
          <Button onClick={onSubmitcb}>{submitTitle}</Button>
        </Footer>
      </Modal>
    );
  }
);

export default ModalBoolean;
