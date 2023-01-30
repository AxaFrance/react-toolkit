import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type SectionRestitutionProps = {
  className?: string;
  children?: React.ReactNode;
  classModifier?: string;
};

const SectionRestitution = ({
  children = null,
  className,
  classModifier,
}: SectionRestitutionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-restitution__content'
  );
  return <section className={componentClassName}>{children}</section>;
};

export default SectionRestitution;
