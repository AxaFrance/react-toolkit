import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type SectionRestitutionTitleProps = {
  title: React.ReactNode;
  className?: string;
  classModifier?: string;
};

const SectionRestitutionTitle = ({
  title,
  className,
  classModifier,
}: SectionRestitutionTitleProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-restitution__content-title'
  );
  return <div className={componentClassName}>{title}</div>;
};

export default SectionRestitutionTitle;
