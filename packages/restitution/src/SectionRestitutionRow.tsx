import * as React from 'react';
import SectionRestitutionTitle from './SectionRestitutionTitle';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';

import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'col col-sm-12 col-md-12 col-lg-12 col-xl-12';

type SectionRestitutionRowBaseProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  classNameContainer?: string;
  //className: string;
}

const defaultProps: Partial<SectionRestitutionRowBaseProps> = {
  children: null,
  classNameContainer: "row af-restitution__content-left",
  //className:DEFAULT_CLASSNAME
};
interface SectionRestitutionRowProps extends WithClassModifierOptions, SectionRestitutionRowBaseProps {}

export const SectionRestitutionRow: React.FC<SectionRestitutionRowProps> = ({ title, className, classNameContainer, children }: { title?:React.ReactNode,className:string, classNameContainer:string, children?:React.ReactNode }) => {
  return (<div className={className}>
    {title && <SectionRestitutionTitle title={title} />}
    <div className={classNameContainer}>
      {children}
    </div>
  </div>);
};

SectionRestitutionRow.defaultProps = defaultProps;

const enhance = compose<SectionRestitutionRowBaseProps, SectionRestitutionRowProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(SectionRestitutionRow);
Enhanced.displayName = 'SectionRestitutionRow';

Enhanced.defaultProps = defaultProps;

export default Enhanced;

