import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__content-title';

type RestitutionBaseProps = {
  title: React.ReactNode;
  className?: string;
};

const Restitution = ({ title, className }: RestitutionBaseProps) => (
    <div className={className}>{title}</div>
  );

const enhance = compose<RestitutionBaseProps, RestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

type RestitutionProps = WithClassModifierOptions & RestitutionBaseProps;

const defaultProps: Partial<RestitutionProps> = {
  className:DEFAULT_CLASSNAME
};

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'SectionTitle';
Enhanced.defaultProps = defaultProps;

export default Enhanced;
