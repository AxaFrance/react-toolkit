import React from 'react';
import PropTypes from 'prop-types';

import {
  ClassManager,
  Constants,
  InputManager,
} from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ).isRequired,
};

const defaultClassName = 'af-contrat';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const Infos = (props) => {
  const { infos, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <i className="glyphicon glyphicon-info-sign" />
      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => {
          const word = (
            <dt
              key={`word_${InputManager.getInputId(info.id)}`}
              className={`${defaultClassName}__word`}>
              {info.word}
            </dt>
          );
          const definition = (
            <dd
              key={`def_${InputManager.getInputId(info.id)}`}
              className={`${defaultClassName}__def`}>
              {info.definition}
            </dd>
          );
          return [word, definition];
        })}
      </dl>
    </div>
  );
};

Infos.propTypes = propTypes;
Infos.defaultProps = defaultProps;

export default Infos;
