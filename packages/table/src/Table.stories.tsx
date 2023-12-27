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
type TTableArgs = {
  columnHeaderId: string;
  firstRowHeaderId: string;
  secondRowHeaderId: string;
};

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  args: {
    columnHeaderId: 'col-header',
    firstRowHeaderId: 'row-header-1',
    secondRowHeaderId: 'row-header-2',
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
const Template: Story<TableProps & TTableArgs> = ({
  columnHeaderId,
  firstRowHeaderId,
  secondRowHeaderId,
  ...args
}) => (
  <Table {...args}>
    <Table.Header>
      <Table.Tr>
        <Table.Th id={columnHeaderId} colSpan={3}>
          <span className="af-table-th-content">Some text</span>
        </Table.Th>
      </Table.Tr>
    </Table.Header>
    <Table.Body>
      <Table.Tr>
        <Table.Th id={firstRowHeaderId} rowSpan={2}>
          <span className="af-table-th-content">Some text</span>
        </Table.Th>
        <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
          <b>Some balised text</b>
        </Table.Td>
        <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Th id={secondRowHeaderId}>
          <span className="af-table-th-content">Some text</span>
        </Table.Th>
        <Table.Td headers={`${columnHeaderId} ${secondRowHeaderId}`}>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
        <Table.Td headers={`${columnHeaderId} ${secondRowHeaderId}`}>
          <span className="af-table-body-content">Some text</span>
        </Table.Td>
      </Table.Tr>
    </Table.Body>
  </Table>
);

export const TableStory: Story<TableProps> = Template.bind({});
TableStory.storyName = 'Simple';

type TableWithPagingProps = ComponentProps<typeof Table>;
const TemplateWithPaging: Story<TableProps & TTableArgs> = ({
  columnHeaderId,
  firstRowHeaderId,
  secondRowHeaderId,
  ...args
}) => (
  <>
    <Table {...args}>
      <Table.Header>
        <Table.Tr>
          <Table.Th id={columnHeaderId} colSpan={3}>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        <Table.Tr>
          <Table.Th id={firstRowHeaderId} rowSpan={2}>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
          <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
            <b>Some balised text</b>
          </Table.Td>
          <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td headers={`${columnHeaderId} ${firstRowHeaderId}`}>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th id={secondRowHeaderId}>
            <span className="af-table-th-content">Some text</span>
          </Table.Th>
          <Table.Td headers={`${columnHeaderId} ${secondRowHeaderId}`}>
            <span className="af-table-body-content">Some text</span>
          </Table.Td>
          <Table.Td headers={`${columnHeaderId} ${secondRowHeaderId}`}>
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
