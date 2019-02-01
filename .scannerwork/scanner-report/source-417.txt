import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import LoaderModes from './LoaderModes';

const texts = {
  get: 'Chargement en cours',
  post: 'Sauvegarde en cours',
  delete: 'Suppression en cours',
  update: 'Mise à jour en cours',
  error: 'Une erreur est survenue lors du chargement du composant',
};

const propTypes = {
  ...Constants.propTypes,
  text: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.oneOf([
    LoaderModes.none,
    LoaderModes.delete,
    LoaderModes.get,
    LoaderModes.error,
    LoaderModes.post,
    LoaderModes.update,
  ]),
};
const defaultClassName = 'af-loader';
const defaultProps = {
  ...Constants.defaultProps,
  text: null,
  children: null,
  mode: LoaderModes.none,
};

function Loader(props) {
  let message = '';
  const { className, classModifier, text, mode, children } = props;
  if (text) {
    message = props.text;
  } else {
    message = texts[props.mode];
  }
  let loader = '';

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  const isLoaderVisible = mode !== LoaderModes.none;
  const loadClassName = classNames(
    componentClassName,
    { 'af-loader-on': isLoaderVisible },
    { 'af-loader-off': !isLoaderVisible }
  );

  const spinnerClassNames = classNames('af-spinner', {
    'af-spinner--active': mode !== LoaderModes.none,
  });

  const isLoaderErrored = mode === LoaderModes.error;

  if (isLoaderVisible) {
    loader = (
      <div
        className={loadClassName}
        style={{
          backgroundColor: 'rgba(180, 180, 180, 0.75)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <div className={spinnerClassNames}>
          {!isLoaderErrored && <div className="af-spinner__animation" />}
          <div className="af-spinner__caption">{message}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{ minHeight: '94px', position: 'relative' }}>
      {children} {loader}
    </div>
  );
}

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
