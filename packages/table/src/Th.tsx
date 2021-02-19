import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__th';

type ThComponentProps = HTMLProps<HTMLTableHeaderCellElement>;

const Th: FC<ThComponentProps> = ({
  children,
  id,
  className,
  ...otherProps
}) => (
  <th className={className} key={id} {...otherProps}>
    {children}
  </th>
);
type ThProps = ThComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<ThProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Th.displayName = 'Table.Th';

export default enhance(Th);
