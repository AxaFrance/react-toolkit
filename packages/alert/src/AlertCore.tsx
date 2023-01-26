import React, { MouseEventHandler, ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type AlertCoreComponentProps = {
  title: string;
  iconClassName?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
  classModifier?: string;
};
export type AlertCoreProps = AlertCoreComponentProps;

const AlertCore = ({
  className,
  onClose,
  iconClassName,
  title,
  children,
  classModifier,
}: AlertCoreComponentProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-alert'
  );
  return (
    <div className={componentClassName} role="alert">
      <div className="af-alert__title">
        <div className="af-alert__title-icon">
          <i className={iconClassName} />
        </div>
        <div className="af-alert__title-text">{title}</div>
        {onClose && (
          <button
            type="button"
            className="af-alert__title-icon-close"
            onClick={onClose}>
            <i className="glyphicon glyphicon-close" />
          </button>
        )}
      </div>
      {children && (
        <div className="af-alert__content">
          <div className="af-alert__content__left" />
          <div className="af-alert__content__right">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AlertCore;
