import * as React from 'react';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution__content-title';

type RestitutionBaseProps = {
  title: string;
  className?: string;
}

const defaultProps: Partial<RestitutionProps> = {
  className:DEFAULT_CLASSNAME
};

interface RestitutionValuesProps{
  values: string[];
}

const Restitution: React.FC<RestitutionProps> = ({ title, className }) => {

  return (
    <div className={className}>{title}</div>
  );
};

Restitution.defaultProps = defaultProps;

interface RestitutionProps extends WithClassModifierOptions, RestitutionBaseProps {}

const enhance = compose<RestitutionBaseProps, RestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'SectionTitle';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
