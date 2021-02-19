import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__tr';

type TrComponentProps = HTMLProps<HTMLTableRowElement>;

const Tr: FC<TrComponentProps> = ({
  children,
  id,
  className,
  ...otherProps
}) => (
  <tr className={className} key={id} {...otherProps}>
    {children}
  </tr>
);

type TrProps = TrComponentProps & WithClassModifierOptions;

const enhance = compose(
  identity<TrProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);
Tr.displayName = 'Table.Tr';

export default enhance(Tr);
