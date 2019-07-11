import * as React from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

interface RestitutionProps{
  label: string;
  value?: string;
  values?: string[];
}

interface RestitutionValuesProps{
  values: string[];
}

const RestitutionValues : React.FC<RestitutionValuesProps> = ({ values }) => {
  const li = values.map((v: string) => (
    <li key={v} className="af-restitution__listul-item">
      {v}
    </li>
  ));

  return <ul className="af-restitution__listul">{li}</ul>;
};

const Restitution: React.FC<RestitutionProps> = ({ label, value, values }) => {
  let restitValue = values ? <RestitutionValues values={values} /> : value;

  if (!restitValue) {
    restitValue = '-';
  }

  return (
    <dl className="af-restitution__listdef">
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{restitValue}</dd>
    </dl>
  );
};

export default Restitution;
