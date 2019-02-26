import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-table__th';

export type ThComponentProps = React.HTMLProps<HTMLTableHeaderCellElement>;

const defaultProps: Partial<ThComponentProps> = {
  children: null,
  rowSpan: null,
  colSpan: null,
  id: null,
};

/* const Span = props => {
  const { children } = props;
  return <span className="af-table-th-content">{children}</span>;
}; */

const Th: React.SFC<ThComponentProps> = props => {
  const { children, id, rowSpan, colSpan, className } = props;

  // A discuter mais je pense qu'il faut laisser les children gérer le contenu la cellule
  /* if (typeof children === 'string') {
    return (
      <th className={className} key={id} rowSpan={rowSpan} colSpan={colSpan}>
        <Span>{children}</Span>
      </th>
    );
  } */

  return (
    <th className={className} key={id} rowSpan={rowSpan} colSpan={colSpan}>
      {children}
    </th>
  );
};
export type ThProps = ThComponentProps & WithClassModifierOptions;
const enhance = compose<ThComponentProps, ThProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

Th.defaultProps = defaultProps;
Th.displayName = 'Table.Th';

export default enhance(Th);
