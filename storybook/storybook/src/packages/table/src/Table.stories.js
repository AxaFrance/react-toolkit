import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import Table from '@axa-fr/react-toolkit-table';

import readme from '@axa-fr/react-toolkit-table/dist/README.md';

const stories = [];

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

stories.push({
  desc: 'Table',
  component: () => (
    <Table
      classModifier={select('classModifier', modifiers, univers.sante)}
      className={text('className', '')}>
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
  ),
});

const storyData = {
  name: 'Table.Table',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
