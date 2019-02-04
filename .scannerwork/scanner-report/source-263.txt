import React from 'react';

const CardContent = ({ id, children }) => (
  <label className="af-rccard-content" htmlFor={id}>
    {children}
  </label>
);

CardContent.displayName = "CardContent";
export default CardContent;
