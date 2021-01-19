import React, { ReactNode } from 'react';

type Props = { id?: string; children?: ReactNode };
const CardFooter = ({ children, id }: Props) => (
  <footer className="af-rccard-footer">
    <label htmlFor={id}>{children}</label>
  </footer>
);

export default CardFooter;
