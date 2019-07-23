import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution__content';

type SectionRestitutionBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

const SectionRestitution = ({ children, className }: SectionRestitutionBaseProps) => (
    <section className={className}>
        {children}
    </section>
  );

type SectionRestitutionProps = WithClassModifierOptions & SectionRestitutionBaseProps;

const enhance = compose<SectionRestitutionBaseProps, SectionRestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const defaultProps: Partial<SectionRestitutionProps> = {
  children: null,
  className: DEFAULT_CLASSNAME
};

const Enhanced = enhance(SectionRestitution);
Enhanced.displayName = 'SectionRestitution';
Enhanced.defaultProps = defaultProps;

export default Enhanced;
