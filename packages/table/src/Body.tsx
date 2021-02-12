import React, { FC, HTMLProps } from 'react';

import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-table__body';

type BodyComponentProps = HTMLProps<HTMLTableSectionElement>;

const Body: FC<BodyComponentProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <tbody className={className} {...otherProps}>
    {children}
  </tbody>
);

type BodyProps = BodyComponentProps & WithClassModifierOptions;
const enhance = compose(
  identity<BodyProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

Body.displayName = 'Table.Body';

export default enhance(Body);
