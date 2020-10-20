import * as React from 'react';
import SectionRestitutionTitle from './SectionRestitutionTitle';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'col col-sm-12 col-md-12 col-lg-12 col-xl-12';

type SectionRestitutionRowBaseProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  classNameContainer?: string;
  className?: string;
};

const SectionRestitutionRow = ({
  title,
  className,
  classNameContainer,
  children,
}: SectionRestitutionRowBaseProps) => (
  <div className={className}>
    {title && <SectionRestitutionTitle title={title} />}
    <div className={classNameContainer}>{children}</div>
  </div>
);

type SectionRestitutionRowProps = WithClassModifierOptions & SectionRestitutionRowBaseProps;

const enhance = compose<SectionRestitutionRowBaseProps, SectionRestitutionRowProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const defaultProps: Partial<SectionRestitutionRowBaseProps> = {
  children: null,
  classNameContainer: 'row af-restitution__content-left',
  className:DEFAULT_CLASSNAME
};

const Enhanced = enhance(SectionRestitutionRow);
Enhanced.displayName = 'SectionRestitutionRow';
Enhanced.defaultProps = defaultProps;

export default Enhanced;

