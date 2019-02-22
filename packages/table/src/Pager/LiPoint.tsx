import * as React from 'react';
import { WithVisibilityOption } from './Pager';

export type LiPointProps = WithVisibilityOption &
  React.HTMLProps<HTMLAnchorElement>;

const LiPoint: React.SFC<LiPointProps> = props => {
  const { isVisible, children } = props;
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
