import * as React from 'react';
import { compose } from 'recompose';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table';

export type TableCoreComponentProps = Pick<
  React.HTMLProps<HTMLTableElement>,
  'className'
>;

const TableCore: React.SFC<TableCoreComponentProps> = props => {
  const { className, children } = props;
  return <table className={className}>{children}</table>;
};

export type TableCoreProps = TableCoreComponentProps & WithClassModifierOptions;

const enhance = compose<TableCoreComponentProps, TableCoreProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);
TableCore.displayName = 'TableCore';
export default enhance(TableCore);
