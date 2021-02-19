import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__cell';

type TdComponentProps = HTMLProps<HTMLTableDataCellElement>;

const Td: FC<TdComponentProps> = ({
  children,
  id,
  className,
  ...otherProps
}) => (
  <td className={className} key={id} {...otherProps}>
    {children}
  </td>
);

type TdProps = TdComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<TdProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Td.displayName = 'Table.Td';

export default enhance(Td);
