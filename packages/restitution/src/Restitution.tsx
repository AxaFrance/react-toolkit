import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution__listdef';

type RestitutionProps = ComponentPropsWithoutRef<'dl'> & {
  label: string;
  children?: ReactNode;
};
const Restitution = ({
  label,
  children = '-',
  className,
}: RestitutionProps) => (
  <dl className={className}>
    <dt className="af-restitution__listdef-item">
      <span className="af-restitution__text">{label}</span>
    </dt>
    <dd className="af-restitution__listdef-value">{children}</dd>
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
