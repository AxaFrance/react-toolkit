import React, { ReactNode } from 'react';

type FooterCoreProps = {
  href?: string;
  title?: string;
  alt?: string;
  icon?: string;
  className?: string;
  children?: ReactNode;
};

const FooterCore = ({
  className = 'af-footer',
  href = 'https://www.axa.fr/',
  title = 'Site Axa',
  icon,
  alt = 'Logo Axa',
  children = `© ${new Date().getFullYear()} AXA Tous droits réservés`,
}: FooterCoreProps) => (
  <footer className={className}>
    <div className="container-fluid container">
      {!!icon && (
        <a className="af-logo" href={href} title={title} target="blank">
          <img className="af-logo__brand" src={icon} alt={alt} />
        </a>
      )}
      <div className="af-footer-content">{children}</div>
    </div>
  </footer>
);

export default FooterCore;
