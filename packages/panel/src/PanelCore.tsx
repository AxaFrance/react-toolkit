import React, { FC, ReactNode } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-panel';

type PanelCoreComponentProps = {
  title?: string;
  className?: string;
  children?: ReactNode;
  badgeContent?: string;
  badgeClass?: string;
};

const PanelCore: FC<PanelCoreComponentProps> = ({
  title,
  className,
  children,
  badgeContent,
  badgeClass,
}) => (
  <article className={className}>
    {title && (
      <header className="af-panel__header">
        <span className="af-panel__title">
          {title}
          {badgeContent && (
            <span className={`af-badge af-badge--${badgeClass}`}>
              {badgeContent}
            </span>
          )}
        </span>
      </header>
    )}
    {children}
  </article>
);

type PanelCoreProps = PanelCoreComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<PanelCoreProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);
PanelCore.displayName = 'PanelCore';
export default enhance(PanelCore);
