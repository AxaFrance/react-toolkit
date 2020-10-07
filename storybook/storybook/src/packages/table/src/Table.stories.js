import React from 'react';
import { text, select, number, action } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Table, { Paging } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/dist/README.md';

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

const SimpleTableStory = () => (
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

const ComplexTableStory = () => (
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

const stories = storiesOf('Table/Table', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Simple', SimpleTableStory);
stories.add('Complex', ComplexTableStory);
