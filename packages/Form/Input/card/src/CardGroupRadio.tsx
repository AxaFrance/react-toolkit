import React, { ComponentProps } from 'react';
import CardGroup from './CardGroup';

type Props = Omit<ComponentProps<typeof CardGroup>, 'type'>;
const CardGroupRadio = ({ children, ...props }: Props) => (
  <CardGroup {...props} type="radio">
    {children}
  </CardGroup>
);

export default CardGroupRadio;
