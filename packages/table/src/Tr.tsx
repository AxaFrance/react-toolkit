import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__tr';

export type TrComponentProps = React.HTMLProps<HTMLTableRowElement>;

const defaultProps: Partial<TrComponentProps> = {
  children: null,
  id: null,
};

const Tr: React.SFC<TrComponentProps> = props => {
  const { children, id, className, ...otherProps } = props;
  return (
    <tr className={className} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

export type TrProps = TrComponentProps & WithClassModifierOptions;

const enhance = compose<TrComponentProps, TrProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);
Tr.defaultProps = defaultProps;
Tr.displayName = 'Table.Tr';

export default enhance(Tr);
