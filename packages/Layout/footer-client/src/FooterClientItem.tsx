import React, { MouseEvent, ReactNode } from 'react';

type Props = {
  path: string;
  onClick?: (action: {
    path: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
  children: ReactNode;
};
const FooterClientItem = ({ path, onClick, children }: Props) => (
  <li className="af-footer-client__column-item">
    <a
      href={path}
      onClick={(event) => onClick && onClick({ path, event })}
      className="af-footer-client__column-link">
      {children}
    </a>
  </li>
);

export default FooterClientItem;
