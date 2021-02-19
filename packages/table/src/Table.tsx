import React, { ComponentPropsWithoutRef, PureComponent } from 'react';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';
import Header from './Header';
import Body from './Body';
import TableCore from './TableCore';

class Table extends PureComponent<ComponentPropsWithoutRef<typeof TableCore>> {
  public static readonly Header = Header;

  public static readonly Body = Body;

  public static readonly Th = Th;

  public static readonly Tr = Tr;

  public static readonly Td = Td;

  public render() {
    return <TableCore {...this.props} />;
  }
}
export default Table;
