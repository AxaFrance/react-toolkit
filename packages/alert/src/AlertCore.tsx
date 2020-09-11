import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-alert';

export interface AlertCoreComponentProps {
  title: string;
  iconClassName?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const AlertCoreRaw: React.SFC<AlertCoreComponentProps> = ({
  className,
  onClose,
  iconClassName,
  title,
  children,
}) => (
  <div className={className} role="alert">
    {onClose && (
      <button className="af-alert__icon-close" onClick={onClose}>
        <i className="glyphicon glyphicon-close" />
      </button>
    )}
    <div className="af-alert__title">
      <div className="af-alert__title-icon">
        <i className={iconClassName} />
      </div>
      <div className="af-alert__title-text">{title}</div>
    </div>
    {children && (
      <div className="af-alert__content">
        <div className="af-alert__content__left" />
        <div className="af-alert__content__right">{children}</div>
      </div>
    )}
  </div>
);

export type AlertCoreProps = AlertCoreComponentProps & WithClassModifierOptions;

const enhance = compose<AlertCoreComponentProps, AlertCoreProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(AlertCoreRaw);
Enhanced.displayName = 'AlertCore';
export default Enhanced;
