import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type HeaderRestitutionProps = {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightTitle?: React.ReactNode;
  classModifier?: string;
};

const HeaderRestitution = ({
  title,
  subtitle,
  rightTitle,
  className,
  classModifier,
}: HeaderRestitutionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-restitution__header'
  );
  return (
    <header className={componentClassName}>
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
};

export default HeaderRestitution;
