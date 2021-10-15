# `@axa-fr/react-toolkit-table`

1. [Installation](#installation)
2. [Simple](#simple)
3. [Complex](#complex)

## Installation

```shell script
npm i @axa-fr/react-toolkit-table
```

## Simple

### Import

```javascript
import Table from '@axa-fr/react-toolkit-table';
import '@axa-fr/react-toolkit-table/dist/af-table.css';
```

### Use

Available values for classModifier :

| classModifier / type |
| -------------------- |
| sante                |
| epargne              |
| banque               |
| iard                 |
| retraite             |
| uaxa                 |

```javascript
const TableSimple = () => (
  <Table classModifier="banque" className="af-table">
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
export default TableSimple;
```

## Complex

### Import

```javascript
import Table, { Paging } from '@axa-fr/react-toolkit-table';
import '@axa-fr/react-toolkit-table/dist/af-table.css';
import '@axa-fr/react-toolkit-table/dist/Paging/af-paging.css';
import '@axa-fr/react-toolkit-table/dist/Pager/af-pager.css';
```

### Use

Available values for classModifier :

| classModifier / type |
| -------------------- |
| sante                |
| epargne              |
| banque               |
| iard                 |
| retraite             |
| uaxa                 |

```javascript
const ComplexTable = () => (
  <div>
    <Table classModifier="epargne" className="af-table">
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
      onChange={(e) => {
        console.log('Salut');
      }}
      numberItems={20}
      numberPages={23}
      currentPage={5}
    />
  </div>
);
export default ComplexTable;
```
