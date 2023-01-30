import React from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import LoaderModes from './LoaderModes';

const texts: { [index: string]: string } = {
  get: 'Chargement en cours',
  post: 'Sauvegarde en cours',
  delete: 'Suppression en cours',
  update: 'Mise à jour en cours',
  error: 'Une erreur est survenue lors du chargement du composant',
};

type LoaderProps = {
  className?: string;
  mode: string;
  text: string;
  children: React.ReactNode;
  classModifier?: string;
};

const Loader = ({
  className,
  text,
  children,
  classModifier,
  mode = LoaderModes.none,
}: LoaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-loader'
  );
  const message = text || texts[mode];
  const isLoaderVisible = mode !== LoaderModes.none;
  const isLoaderErrored = mode === LoaderModes.error;

  return (
    <div className={componentClassName}>
      {children}
      {isLoaderVisible && (
        <div className={`${componentClassName} af-loader-on`}>
          <div className="af-spinner">
            {!isLoaderErrored && <div className="af-spinner__animation" />}
            <div className="af-spinner__caption">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
