import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-footer';

export type FooterCoreProps = Partial<typeof defaultProps> &
  WithClassModifierOptions;

const defaultProps = {
  children: `© ${new Date().getFullYear()} AXA Tous droits réservés` as React.ReactNode,
  href: 'https://www.axa.fr/',
  title: 'Site Axa',
  icon: 'assets/logo-axa.svg',
  alt: 'Logo Axa',
  isIconHidden: false,
};

const FooterCoreRaw = ({
  className,
  href,
  title,
  icon,
  isIconHidden,
  alt,
  children,
}: FooterCoreProps) => (
  <footer className={className}>
    <div className="container-fluid container">
      {!isIconHidden && (
        <a className="af-logo" href={href} title={title} target="blank">
          <img className="af-logo__brand" src={icon} alt={alt} />
        </a>
      )}
      <div className="af-footer-content">{children}</div>
    </div>
  </footer>
);
FooterCoreRaw.defaultProps = defaultProps;

const enhance = compose(withClassDefault(DEFAULT_CLASSNAME), withClassModifier);

const Enhanced = enhance(FooterCoreRaw);
Enhanced.displayName = 'FooterCore';
export default Enhanced;
