import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';
import SectionRestitutionTitle from './SectionRestitutionTitle';

const DEFAULT_CLASSNAME = 'col-sm-12 col-md-12 col-lg-6 col-xl-6';

type SectionRestitutionColumnBaseProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

const SectionRestitutionColumn = ({
  children,
  className,
  title,
}: SectionRestitutionColumnBaseProps) => (
  <div className={className}>
    {title && <SectionRestitutionTitle title={title} />}
    {children}
  </div>
);

type SectionRestitutionColumnProps = WithClassModifierOptions &
  SectionRestitutionColumnBaseProps;

const enhance = compose(
  identity<SectionRestitutionColumnProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(SectionRestitutionColumn);
Enhanced.displayName = 'SectionRestitutionColumn';

export default Enhanced;
