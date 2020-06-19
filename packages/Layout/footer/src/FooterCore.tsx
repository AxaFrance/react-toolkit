import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';
const DEFAULT_CLASSNAME = 'af-footer';

interface FooterCoreComponentProps {
  children?: React.ReactNode;
  href?: string;
  title?: string;
  icon?: string;
  alt?: string;
  className?: string;
}
const defaultProps: Partial<FooterCoreComponentProps> = {
  children: `© ${new Date().getFullYear()} AXA Tous droits réservés`,
  href: 'https://www.axa.fr/',
  title: 'Site Axa',
  icon: 'assets/logo-axa.svg',
  alt: 'Logo Axa',
};

const FooterCoreRaw: React.SFC<FooterCoreComponentProps> = ({
  className,
  href,
  title,
  icon,
  alt,
  children,
}) => (
  <footer className={className}>
    <div className="container-fluid container">
      <a className="af-logo" href={href} title={title} target="blank">
        <img className="af-logo__brand" src={icon} alt={alt} />
      </a>
      <div className="af-footer-content">{children}</div>
    </div>
  </footer>
);
FooterCoreRaw.defaultProps = defaultProps;

export type FooterCoreProps = FooterCoreComponentProps &
  WithClassModifierOptions;

const enhance = compose<FooterCoreComponentProps, FooterCoreProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(FooterCoreRaw);
Enhanced.displayName = 'FooterCore';
export default Enhanced;
