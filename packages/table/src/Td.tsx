import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__cell';

export type TdComponentProps = React.HTMLProps<HTMLTableDataCellElement>;

const defaultProps: Partial<TdComponentProps> = {
  children: null,
  rowSpan: null,
  colSpan: null,
  id: null,
};

/* const Span = props => {
  const { children } = props;
  return <span className="af-table-body-content">{children}</span>;
}; */

const Td: React.SFC<TdComponentProps> = (props) => {
  const { children, id, rowSpan, colSpan, className } = props;

  // A discuter mais je pense qu'il faut laisser les children gérer le contenu la cellule
  /* if (typeof children === 'string') {
    return (
      <td className={className} key={id} rowSpan={rowSpan} colSpan={colSpan}>
        <Span>{children}</Span>
      </td>
    );
  } */

  return (
    <td className={className} key={id} rowSpan={rowSpan} colSpan={colSpan}>
      {children}
    </td>
  );
};

export type TdProps = TdComponentProps & WithClassModifierOptions;
const enhance = compose<TdComponentProps, TdProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

Td.defaultProps = defaultProps;
Td.displayName = 'Table.Td';

export default enhance(Td);
