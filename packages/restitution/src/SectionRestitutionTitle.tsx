import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__content-title';

type RestitutionBaseProps = {
  title: React.ReactNode;
  className?: string;
};

const Restitution = ({ title, className }: RestitutionBaseProps) => (
  <div className={className}>{title}</div>
);

type RestitutionProps = WithClassModifierOptions & RestitutionBaseProps;
const enhance = compose(
  identity<RestitutionProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(Restitution);
Enhanced.displayName = 'SectionTitle';

export default Enhanced;
