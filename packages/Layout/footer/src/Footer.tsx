import React, { ComponentProps, ReactNode } from 'react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import FooterCore from './FooterCore';

interface FooterProps
  extends Omit<ComponentProps<typeof FooterCore>, 'children'> {
  copyright?: ReactNode;
}

const Footer = ({ copyright, ...footerProps }: FooterProps) => (
  <FooterCore {...footerProps} icon={logo}>
    {copyright}
  </FooterCore>
);
export default Footer;
