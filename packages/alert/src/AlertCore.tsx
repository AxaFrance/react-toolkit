import React, { MouseEventHandler, ReactNode } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-alert';

export type AlertCoreComponentProps = {
  title: string;
  iconClassName?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
} & WithClassModifierOptions;
export type AlertCoreProps = AlertCoreComponentProps;

const AlertCoreRaw = ({
  className,
  onClose,
  iconClassName,
  title,
  children,
}: AlertCoreComponentProps) => (
  <div className={className} role="alert">
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

const enhance = compose(
  identity<AlertCoreComponentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(AlertCoreRaw);
Enhanced.displayName = 'AlertCore';
export default Enhanced;
