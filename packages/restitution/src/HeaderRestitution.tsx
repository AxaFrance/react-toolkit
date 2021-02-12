import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__header';

type HeaderRestitutionBaseProps = {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightTitle?: React.ReactNode;
};

const HeaderRestitution = ({
  title,
  subtitle,
  rightTitle,
  className,
}: HeaderRestitutionBaseProps) => (
  <header className={className}>
    <div className="af-restitution__header-left">
      <div className="af-restitution__title">
        {title && <span className="af-restitution__title-main">{title}</span>}
        <span className="af-restitution__title-subtitle">{subtitle}</span>
      </div>
    </div>
    {rightTitle && (
      <div className="af-restitution__header-right">
        <span className="af-restitution__title">{rightTitle}</span>
      </div>
    )}
  </header>
);

type HeaderRestitutionProps = WithClassModifierOptions &
  HeaderRestitutionBaseProps;

const enhance = compose(
  identity<HeaderRestitutionBaseProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const defaultProps: Partial<HeaderRestitutionProps> = {
  className: DEFAULT_CLASSNAME,
};

const Enhanced = enhance(HeaderRestitution);
Enhanced.displayName = 'HeaderRestitution';
Enhanced.defaultProps = defaultProps;

export default Enhanced;
