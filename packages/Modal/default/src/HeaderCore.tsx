import React, { MouseEventHandler, ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type HeaderCoreProps = {
  className?: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  title?: string;
  classModifier?: string;
};

const HeaderCore = ({
  className,
  children,
  onCancel,
  classModifier,
}: HeaderCoreProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__header'
  );
  return (
    <div className={componentClassName}>
      <h4 className="af-modal__header-title">{children}</h4>
      <button
        className="af-modal__header-close-btn"
        type="button"
        aria-label="Close"
        onClick={onCancel}>
        <span className="glyphicon glyphicon-close" aria-hidden="true" />
      </button>
    </div>
  );
};

export default HeaderCore;
