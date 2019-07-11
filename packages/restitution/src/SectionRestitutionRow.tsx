import * as React from 'react';
import classNames from 'classnames';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';

import { compose } from 'recompose';

interface RestitutionRowProps{
  classModifier?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

interface RestitutionColumn{
  children?: React.ReactNode;
}

export const SectionRestitutionRow: React.FC<RestitutionRowProps> = ({ title, classModifier, children }: { title?:React.ReactNode,classModifier:string, children?:React.ReactNode }) => {
  const modifier = {
    [`af-restitution__content-left--${classModifier}`]: classModifier
  };
  const className = classNames('af-restitution__content-left row', modifier);
  return (<div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div className="af-restitution__content-title">{title}</div>
    <div className={className}>
      {children}
    </div>
  </div>);
};

export const SectionRestitutionColumn: React.FC<RestitutionColumn> = ({ children }) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">{children}</div>
  );
};

/*
interface PanelRestitutionRowProps {
  right?: React.ReactNode;
  title: string;
  classModifier?: string;
}

const PanelRestitutionRow: React.FC<PanelRestitutionRowProps> = ({
  children,
  right,
  title,
  classModifier,
}: { title:string, classModifier:string, children?:React.ReactNode, right?:React.ReactNode }) => {
  return (
    <SectionRestitution title={title} classModifier={classModifier}>
      <RestitutionRow>
        <RestitutionColumn>{children}</RestitutionColumn>
        <RestitutionColumn>{right}</RestitutionColumn>
      </RestitutionRow>
    </SectionRestitution>
  );
};

export default PanelRestitutionRow;*/
