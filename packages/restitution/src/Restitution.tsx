import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__listdef';

const RestitutionValues = ({ values }: Pick<RestitutionProps, 'values'>) => {
  const li = values.map((v) => (
    <li key={v} className="af-restitution__listul-item">
      {v}
    </li>
  ));

  return <ul className="af-restitution__listul">{li}</ul>;
};

type RestitutionProps = ComponentPropsWithoutRef<'dl'> & {
  label: string;
  value?: ReactNode;
  values?: string[];
};
const Restitution = ({
  label,
  value = '-',
  values,
  className,
}: RestitutionProps) => (
  <dl className={className}>
    <dt className="af-restitution__listdef-item">
      <span className="af-restitution__text">{label}</span>
    </dt>
    <dd className="af-restitution__listdef-value">
      {values ? <RestitutionValues values={values} /> : value}
    </dd>
  </dl>
);

type RestitutionEnhancedProps = WithClassModifierOptions & RestitutionProps;
const enhance = compose(
  identity<RestitutionEnhancedProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'Restitution';
export default Enhanced;
