import * as React from 'react';
import { create } from 'react-test-renderer';
import Table from './Table';

describe('<DateInput>', () => {
  it('renders DateInput correctly', () => {
    const tree = create(
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
              <span className="af-table-body-content">Some text</span>
            </Table.Td>
            <Table.Td>
              <b>Some balised text</b>
            </Table.Td>
            <Table.Td>
              <span className="af-table-body-content">Some text</span>
            </Table.Td>
          </Table.Tr>
        </Table.Body>
      </Table>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
