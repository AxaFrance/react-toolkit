import React, { Fragment, ReactNode } from 'react';
import { createId, getComponentClassName } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-contrat';
type TInfo = { id?: string; word: ReactNode; definition: ReactNode };
type InfosProps = {
  infos: TInfo[];
  className?: string;
  classModifier?: string;
};

const Infos = ({ infos, className, classModifier }: InfosProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <i className="glyphicon glyphicon-info-sign" />
      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => (
          <Fragment key={info.id ?? createId()}>
            <dt className={`${defaultClassName}__word`}>{info.word}</dt>
            <dd className={`${defaultClassName}__def`}>{info.definition}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export default Infos;
