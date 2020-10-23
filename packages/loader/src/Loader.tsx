import React from 'react';
import {
  Constants,
  compose,
  withClassDefault,
  withClassModifier,
} from '@axa-fr/react-toolkit-core';
import LoaderModes from './LoaderModes';

const texts: { [index: string]: string } = {
  get: 'Chargement en cours',
  post: 'Sauvegarde en cours',
  delete: 'Suppression en cours',
  update: 'Mise à jour en cours',
  error: 'Une erreur est survenue lors du chargement du composant',
};

const defaultProps = {
  ...Constants.defaultProps,
  mode: LoaderModes.none,
};

type Props = Partial<typeof defaultProps> & {
  text: string;
  children: React.ReactNode;
};

const Loader = ({ className, text, mode, children }: Props) => {
  const message = text || texts[mode];

  const isLoaderVisible = mode !== LoaderModes.none;
  const isLoaderErrored = mode === LoaderModes.error;

  return (
    <div
      className={className}
      style={{ minHeight: '94px', position: 'relative' }}>
      {children}
      {isLoaderVisible && (
        <div
          className={`${className} ${
            isLoaderVisible ? 'af-loader-on' : 'af-loader-off'
          }`}
          style={{
            backgroundColor: 'rgba(180, 180, 180, 0.75)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}>
          <div
            className={`af-spinner ${
              isLoaderVisible ? 'af-spinner--active' : ''
            }`}>
            {!isLoaderErrored && <div className="af-spinner__animation" />}
            <div className="af-spinner__caption">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Loader.defaultProps = defaultProps;

export default compose(
  withClassDefault('af-loader'),
  withClassModifier
)(Loader);
