import React, { Fragment, ReactNode } from 'react';
import { ClassManager, InputManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-contrat';
type InfosProps = {
  infos: { id?: string; word: ReactNode; definition: ReactNode }[];
  className?: string;
  classModifier?: string;
};

const Infos = ({ infos, className, classModifier }: InfosProps) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <i className="glyphicon glyphicon-info-sign" />
      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => (
          <Fragment key={info.id}>
            <dt
              key={`word_${InputManager.getInputId(info.id)}`}
              className={`${defaultClassName}__word`}>
              {info.word}
            </dt>
            <dd
              key={`def_${InputManager.getInputId(info.id)}`}
              className={`${defaultClassName}__def`}>
              {info.definition}
            </dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export default Infos;
