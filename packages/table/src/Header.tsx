import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

import Tr from './Tr';

const DEFAULT_CLASSNAME = 'af-table__thead';

export type HeaderComponentProps = React.HTMLProps<HTMLTableSectionElement>;

const Header: React.SFC<HeaderComponentProps> = (props) => {
  const { children, headers, className } = props;

  if (headers) {
    return (
      <thead className={className}>
        <Tr>{children}</Tr>
      </thead>
    );
  }
  return <thead className="af-table-thead">{children}</thead>;
};

export type HeaderProps = HeaderComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<HeaderComponentProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Header.displayName = 'Table.Header';

export default enhance(Header);
