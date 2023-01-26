import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

export type RestitutionProps = ComponentPropsWithoutRef<'dl'> & {
  label: string;
  children?: ReactNode;
  classModifier?: string;
};

const Restitution = ({
  label,
  children = '-',
  className,
  classModifier,
}: RestitutionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-restitution__listdef'
  );
  return (
    <dl className={componentClassName}>
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{children}</dd>
    </dl>
  );
};

export default Restitution;
