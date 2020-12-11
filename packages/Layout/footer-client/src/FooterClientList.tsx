import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FooterClientList = ({ title, children }: Props) => (
  <div className="af-footer-client__column">
    <h3 className="af-footer-client__column-title">{title}</h3>
    <ul className="af-footer-client__column-items">{children}</ul>
  </div>
);

export default FooterClientList;
