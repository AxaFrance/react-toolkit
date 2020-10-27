import React from 'react';

const CardFooter = ({ children, id }) => (
  <footer className="af-rccard-footer">
    <label htmlFor={id}>{children}</label>
  </footer>
);

CardFooter.displayName = 'CardFooter';
export default CardFooter;
