import React from 'react';
import {
  compose,
  withClassDefault,
  withClassModifier,
  identity,
} from '@axa-fr/react-toolkit-core';
import LoaderModes from './LoaderModes';

const texts: { [index: string]: string } = {
  get: 'Chargement en cours',
  post: 'Sauvegarde en cours',
  delete: 'Suppression en cours',
  update: 'Mise à jour en cours',
  error: 'Une erreur est survenue lors du chargement du composant',
};

const DEFAULT_CLASSNAME = 'af-loader';

type LoaderBaseProps = {
  className?: string;
  mode: string;
  text: string;
  children: React.ReactNode;
};

type LoaderProps = LoaderBaseProps & { classModifier?: string };

const Loader = ({ className, text, mode, children }: LoaderBaseProps) => {
  const message = text || texts[mode];

  const isLoaderVisible = mode !== LoaderModes.none;
  const isLoaderErrored = mode === LoaderModes.error;

  return (
    <div className={className}>
      {children}
      {isLoaderVisible && (
        <div className={`${className} af-loader-on`}>
          <div className="af-spinner">
            {!isLoaderErrored && <div className="af-spinner__animation" />}
            <div className="af-spinner__caption">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const defaultProps: Partial<LoaderProps> = {
  className: DEFAULT_CLASSNAME,
  mode: LoaderModes.none,
};

const enhance = compose(
  identity<LoaderProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(Loader);
Enhanced.displayName = 'Loader';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
