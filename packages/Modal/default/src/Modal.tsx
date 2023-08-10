/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode, forwardRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type ModalProps = {
  className?: string;
  title?: string;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: ReactNode;
  classModifier?: string;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className,
      title = '',
      onOutsideTap,
      children,
      classModifier,
      ...props
    }: ModalProps,
    ref
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      'af-modal'
    );
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <dialog
        aria-describedby={title}
        className={componentClassName}
        onClick={onOutsideTap}
        ref={ref}
        {...props}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="af-modal__dialog"
          onClick={(event) => event.stopPropagation()}>
          <div className="af-modal__content">{children}</div>
        </div>
      </dialog>
    );
  }
);

export default Modal;
