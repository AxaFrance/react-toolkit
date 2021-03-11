import React, { ComponentProps } from 'react';
import CardGroup from './CardGroup';

type Props = Omit<ComponentProps<typeof CardGroup>, 'type'>;
const CardGroupCheckBox = ({ children, ...props }: Props) => (
  <CardGroup {...props} type="checkbox">
    {children}
  </CardGroup>
);

export default CardGroupCheckBox;
