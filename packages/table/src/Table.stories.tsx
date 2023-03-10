import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Table from './Table';
import Paging from './Paging/Paging';
import readme from '../README.md';

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
  title: 'Agent/Components/Table',
  component: Table,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    classModifier: {
      control: {
        type: 'select',
        options: modifiers,
      },
      defaultValue: univers.axa,
    },
  },
} as Meta;

type TableProps = ComponentProps<typeof Table>;
const Template: Story<TableProps> = (args) => (
  <Table {...args}>
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

export const TableStory: Story<TableProps> = Template.bind({});
TableStory.storyName = 'Simple';

type TableWithPagingProps = ComponentProps<typeof Table>;
const TemplateWithPaging: Story<TableProps> = (args) => (
  <>
    <Table {...args}>
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
    <Paging numberItems={20} numberPages={23} currentPage={5} />
  </>
);

export const TableWithPagingStory: Story<TableWithPagingProps> =
  TemplateWithPaging.bind({});
TableWithPagingStory.storyName = 'Table with Paging';
