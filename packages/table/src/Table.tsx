import React, { ComponentPropsWithoutRef } from 'react';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';
import Header from './Header';
import Body from './Body';
import TableCore from './TableCore';

const Table = (props: ComponentPropsWithoutRef<typeof TableCore>) => (
  <TableCore {...props} />
);

Table.Header = Header;
Table.Body = Body;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export default Table;
