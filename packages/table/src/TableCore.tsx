import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table';

type TableCoreComponentProps = HTMLProps<HTMLTableElement>;

const TableCore: FC<TableCoreComponentProps> = ({
  className,
  children,
  ...othersProps
}) => (
  <table className={className} {...othersProps}>
    {children}
  </table>
);

type TableCoreProps = TableCoreComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<TableCoreProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);
TableCore.displayName = 'TableCore';
export default enhance(TableCore);
