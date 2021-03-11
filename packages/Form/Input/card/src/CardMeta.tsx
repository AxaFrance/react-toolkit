import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

const CardMeta = ({ children }: Props) => (
  <p className="af-rccard-header__meta">{children}</p>
);

export default CardMeta;
