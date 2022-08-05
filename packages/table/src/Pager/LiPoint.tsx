import React, { ReactNode } from 'react';
import { WithVisibilityOption } from '@axa-fr/react-toolkit-core';

type LiPointProps = WithVisibilityOption & {
  children?: ReactNode;
};

const LiPoint = ({ isVisible, children }: LiPointProps) => {
  if (!isVisible) {
    return null;
  }
  return (
    <li className="af-pager__item af-pager__item--disabled">
      <span className="af-pager__item-link">{children}</span>
    </li>
  );
};
export default LiPoint;
