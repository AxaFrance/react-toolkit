import * as React from 'react';
import classNames from 'classnames';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution__content';

type SectionRestitutionBaseProps = {
  className?: string;
  children?: React.ReactNode;
} 

const defaultProps: Partial<SectionRestitutionBaseProps> = {
  children: null,
  className:DEFAULT_CLASSNAME
};

const SectionRestitution: React.FC<SectionRestitutionBaseProps> = ({ children, className }:{ children?:React.ReactNode, className?:string }) => {
  return (
    <section className={className}>
        {children}
    </section>
  );
};

SectionRestitution.defaultProps = defaultProps;

interface SectionRestitutionProps extends WithClassModifierOptions, SectionRestitutionBaseProps {}

const enhance = compose<SectionRestitutionBaseProps, SectionRestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(SectionRestitution);
Enhanced.displayName = 'SectionRestitution';

Enhanced.defaultProps = defaultProps;

export default Enhanced;
