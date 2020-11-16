import React, { MouseEventHandler, ReactNode } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-modal__header';

type HeaderCoreComponentProps = {
  className?: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  title?: string;
};

const HeaderCoreRaw = ({ className, children, onCancel }: HeaderCoreProps) => (
  <div className={className}>
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

export type HeaderCoreProps = HeaderCoreComponentProps &
  WithClassModifierOptions;

const enhance = compose(
  identity<HeaderCoreComponentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(HeaderCoreRaw);
Enhanced.displayName = 'HeaderCore';
export default Enhanced;
