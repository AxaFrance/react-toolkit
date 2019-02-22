import * as React from 'react';

import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-table__body';

export type BodyComponentProps = React.HTMLProps<HTMLTableSectionElement>;

const Body: React.SFC<BodyComponentProps> = props => {
  const { children, className } = props;

  return <tbody className={className}>{children}</tbody>;
};

export type BodyProps = BodyComponentProps & WithClassModifierOptions;
const enhance = compose<BodyComponentProps, BodyProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

Body.displayName = 'Table.Body';

export default enhance(Body);
