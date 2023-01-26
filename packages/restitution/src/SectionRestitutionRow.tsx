import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import SectionRestitutionTitle from './SectionRestitutionTitle';

const DEFAULT_CLASSNAME = 'col col-sm-12 col-md-12 col-lg-12 col-xl-12';

export type SectionRestitutionRowProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
  classModifier?: string;
};

const SectionRestitutionRow = ({
  title,
  className = DEFAULT_CLASSNAME,
  classNameContainer = 'row af-restitution__content-left',
  children = null,
  classModifier,
}: SectionRestitutionRowProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    DEFAULT_CLASSNAME
  );
  return (
    <div className={componentClassName}>
      {title && <SectionRestitutionTitle title={title} />}
      <div className={classNameContainer}>{children}</div>
    </div>
  );
};

export default SectionRestitutionRow;
