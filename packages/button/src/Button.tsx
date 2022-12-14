import React, { ComponentPropsWithoutRef } from 'react';

import ButtonCore from './ButtonCore';

interface MyEvent extends React.MouseEvent<HTMLButtonElement> {
  id: string;
}

export type ButtonProps = Omit<
  ComponentPropsWithoutRef<typeof ButtonCore>,
  'onClick'
> & {
  onClick: React.EventHandler<MyEvent>;
};

const Button = (props: ButtonProps) => {
  const customOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onClick: React.EventHandler<MyEvent>
  ) => {
    return onClick({ ...e, id: props.id });
  };

  return (
    <ButtonCore {...props} onClick={(e) => customOnClick(e, props.onClick)} />
  );
};

Button.displayName = 'Button';

export default Button;
export { ButtonCore };
