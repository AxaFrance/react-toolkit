import React, { ReactNode } from 'react';

type Props = { id?: string; children?: ReactNode | ReactNode[] };
const CardContent = ({ id, children }: Props) => (
  <label className="af-rccard-content" htmlFor={id}>
    {children}
  </label>
);
export default CardContent;
