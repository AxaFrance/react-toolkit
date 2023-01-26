import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import SectionRestitutionTitle from './SectionRestitutionTitle';

export type SectionRestitutionColumnProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  classModifier?: string;
};

const SectionRestitutionColumn = ({
  children,
  className,
  title,
  classModifier,
}: SectionRestitutionColumnProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'col-sm-12 col-md-12 col-lg-6 col-xl-6'
  );
  return (
    <div className={componentClassName}>
      {title && <SectionRestitutionTitle title={title} />}
      {children}
    </div>
  );
};

export default SectionRestitutionColumn;
