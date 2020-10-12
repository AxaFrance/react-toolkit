import React from 'react';
import { number, select, text } from '@storybook/addon-knobs';
import Table, { Paging } from '@axa-fr/react-toolkit-table';
import Readme from '@axa-fr/react-toolkit-table/README.md';

const univers = {
  sante: 'sante',
  epargne: 'epargne',
  banque: 'banque',
  iard: 'iard ',
  retraite: 'retraite',
  axa: 'axa',
};
const modifiers = [
  '',
  univers.sante,
  univers.epargne,
  univers.banque,
  univers.iard,
  univers.retraite,
  univers.axa,
];

export default {
  title: 'Table/Table',
  component: Table,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
};

export const Simple = () => (
  <Table
    classModifier={select('classModifier', modifiers, univers.axa)}
    className={text('className', 'af-table')}>
    <Table.Header>
      <Table.Tr>
        <Table.Th colSpan="3">
          <span className="af-table-th-content">Some text</span>
        </Table.Th>
      </Table.Tr>
    </Table.Header>
    <Table.Body>
      <Table.Tr>
        <Table.Td rowSpan="2">
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td>
          <b>Some balised text</b>
        </Table.Td>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
    </Table.Body>
  </Table>
);

export const Complex = () => (
  <>
    <Table
      classModifier={select('classModifier', modifiers, univers.axa)}
      className={text('className', 'af-table')}>
      <Table.Header>
        <Table.Tr>
          <Table.Th>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
          <Table.Th>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
          <Table.Th>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td>
            <b>Some balised text</b>
          </Table.Td>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
    <Paging
      numberItems={number('numberItems', 20)}
      numberPages={number('numberPages', 23)}
      currentPage={number('currentPage', 5)}
    />
  </>
);

