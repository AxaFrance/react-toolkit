import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__listdef';

type RestitutionValuesProps = {
  values: string[];
};

type RestitutionProps = WithClassModifierOptions &
  Partial<RestitutionValuesProps> & {
    label: string;
    value?: string;
    className?: string;
  };

const RestitutionValues = ({ values }: RestitutionValuesProps) => {
  const li = values.map((v: string) => (
    <li key={v} className="af-restitution__listul-item">
      {v}
    </li>
  ));

  return <ul className="af-restitution__listul">{li}</ul>;
};

const Restitution = ({ label, value, values, className }: RestitutionProps) => {
  let restitutionValue = values ? <RestitutionValues values={values} /> : value;

  if (!restitutionValue) {
    restitutionValue = '-';
  }

  return (
    <dl className={className}>
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{restitutionValue}</dd>
    </dl>
  );
};

const defaultProps: Partial<RestitutionProps> = {
  className: DEFAULT_CLASSNAME,
};

const enhance = compose(
  identity<RestitutionProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'Restitution';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
