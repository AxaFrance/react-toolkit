import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import SectionRestitutionTitle from './SectionRestitutionTitle';

import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'col-sm-12 col-md-12 col-lg-6 col-xl-6';

type RestitutionColumnBaseProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<RestitutionColumnBaseProps> = {
  children: null,
  //className:DEFAULT_CLASSNAME
};

export const SectionRestitutionColumn: React.FC<RestitutionColumnBaseProps> = ({ children, className, title }) => {
  return (
    <div className={className}>
        {title && <SectionRestitutionTitle title={title} />}
       {children}
    </div>
  );
};


SectionRestitutionColumn.defaultProps = defaultProps;

interface SectionRestitutionColumnProps extends WithClassModifierOptions, RestitutionColumnBaseProps {}

const enhance = compose<RestitutionColumnBaseProps, SectionRestitutionColumnProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(SectionRestitutionColumn);
Enhanced.displayName = 'SectionRestitutionColumn';

Enhanced.defaultProps = defaultProps;

export default Enhanced;
