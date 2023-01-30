import React, { Fragment, ReactNode } from 'react';
import { getComponentClassName, useId } from '@axa-fr/react-toolkit-core';

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
          <Info id={info.id} word={info.word} definition={info.definition} />
        ))}
      </dl>
    </div>
  );
};

const Info = ({ id, word, definition }: TInfo) => {
  const infoKey = useId(id);
  return (
    <Fragment key={infoKey}>
      <dt key={`word_${infoKey}`} className={`${defaultClassName}__word`}>
        {word}
      </dt>
      <dd key={`def_${infoKey}`} className={`${defaultClassName}__def`}>
        {definition}
      </dd>
    </Fragment>
  );
};

export default Infos;
