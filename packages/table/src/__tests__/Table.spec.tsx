import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table';

describe('Table', () => {
  it('render header & body cells', () => {
    const { getByRole, getAllByRole } = render(
      <Table>
        <Table.Header>
          <Table.Tr>
            <Table.Th colSpan={3}>
              <span className="af-table-th-content">Some text</span>
            </Table.Th>
          </Table.Tr>
        </Table.Header>
        <Table.Body>
          <Table.Tr>
            <Table.Td rowSpan={2}>
              <span className="af-table-body-content">Some text cell 1</span>
            </Table.Td>
            <Table.Td>
              <b>Some balised text</b>
            </Table.Td>
            <Table.Td>
              <span className="af-table-body-content">Last body cell</span>
            </Table.Td>
          </Table.Tr>
        </Table.Body>
      </Table>
    );
    expect(getByRole('table')).toBeInTheDocument();
    const columnsHeader = getAllByRole('columnheader');
    expect(columnsHeader).toHaveLength(1);
    expect(columnsHeader[0]).toHaveTextContent('Some text');

    const cellsBody = getAllByRole('cell');
    expect(cellsBody).toHaveLength(3);
    expect(cellsBody[0]).toHaveTextContent('Some text cell 1');
    expect(cellsBody[1]).toHaveTextContent('Some balised text');
    expect(cellsBody[2]).toHaveTextContent('Last body cell');
  });
});
