import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution__listdef';

type RestitutionBaseProps = {
  label: string;
  value?: string;
  values?: string[];
  className?: string;
}

const defaultProps: Partial<RestitutionProps> = {
  className:DEFAULT_CLASSNAME
};

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

const Restitution: React.FC<RestitutionProps> = ({ label, value, values, className }) => {
  let restitValue = values ? <RestitutionValues values={values} /> : value;

  if (!restitValue) {
    restitValue = '-';
  }

  return (
    <dl className={className}>
      <dt className="af-restitution__listdef-item">
        <span className="af-restitution__text">{label}</span>
      </dt>
      <dd className="af-restitution__listdef-value">{restitValue}</dd>
    </dl>
  );
};

Restitution.defaultProps = defaultProps;

interface RestitutionProps extends WithClassModifierOptions, RestitutionBaseProps {}

const enhance = compose<RestitutionBaseProps, RestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'Restitution';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
