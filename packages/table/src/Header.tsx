import React, { FC, HTMLProps } from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table-thead';

type HeaderComponentProps = HTMLProps<HTMLTableSectionElement>;

const Header: FC<HeaderComponentProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <thead className={className} {...otherProps}>
    {children}
  </thead>
);

type HeaderProps = HeaderComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<HeaderProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Header.displayName = 'Table.Header';

export default enhance(Header);
