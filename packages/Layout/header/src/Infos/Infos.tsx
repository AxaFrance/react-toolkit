import React, { Fragment } from 'react';
import { useComponentClassName, useId } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-contrat';
type TInfo = { id?: string; word: string; definition: string };
type Props = {
  infos: TInfo[];
  className?: string;
  classModifier?: string;
};

const Infos = ({ infos, className, classModifier }: Props) => {
  const componentClassName = useComponentClassName(
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
