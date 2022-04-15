import React, { ReactNode } from 'react';

type PreviousProps = {
  isVisible?: boolean;
  active?: boolean;
  children?: ReactNode;
  value: number;
  onChange: (e: { value: number }) => void;
};

const Previous = ({
  isVisible,
  active,
  children,
  onChange,
  value,
}: PreviousProps) => {
  if (!isVisible) {
    return null;
  }
  if (active) {
    return (
      <li className="af-pager__item">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onChange({
              value,
            });
          }}
          className="af-pager__item-link">
          {children}
        </a>
      </li>
    );
  }
  return (
    <li className="af-pager__item af-pager__item--disabled">
      <span className="af-pager__item-nolink">{children}</span>
    </li>
  );
};
export default Previous;
