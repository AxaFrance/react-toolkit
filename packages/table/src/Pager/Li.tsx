import React, { MouseEvent } from 'react';

type LiProps = {
  isVisible?: boolean;
  active?: boolean;
  value: number;
  onChange: (e: { value: number }) => void;
};

const onClick =
  ({ onChange, value }: LiProps) =>
  (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onChange({
      value: Number(value),
    });
  };

const Li = ({ isVisible, active, value, ...props }: LiProps) => {
  if (!isVisible) {
    return null;
  }
  if (active) {
    return (
      <li className="af-pager__item af-pager__item--active">
        <a
          className="af-pager__item-link"
          href="#"
          onClick={onClick({ ...props, value })}>
          <span>{value}</span>
        </a>
      </li>
    );
  }
  return (
    <li className="af-pager__item">
      <a
        className="af-pager__item-link"
        href="#"
        onClick={onClick({ ...props, value })}>
        <span>{value}</span>
      </a>
    </li>
  );
};

export default Li;
