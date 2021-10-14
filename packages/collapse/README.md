# `@axa-fr/react-toolkit-collapse`

1. [Installation](#installation)
2. [Collapse](#collapse)
3. [Accordion](#accordion)

## Installation

```shell script
npm i @axa-fr/react-toolkit-collapse
```

## Collapse

### Import

```javascript
import { CollapseCard } from '@axa-fr/react-toolkit-collapse';
import '@axa-fr/react-toolkit-collapse/dist/af-accordion.css';
```

### Use

```javascript
const Collapse = () => (
  <CollapseCard>
    <CollapseCard.Header>Your Header Text #1</CollapseCard.Header>
    <CollapseCard.Body>
      Your Body Text <b>Your Bold Text</b>
    </CollapseCard.Body>
  </CollapseCard>
);
export default Collapse;
```

## Accordion

### Import

```javascript
import { Accordion, CollapseCard } from '@axa-fr/react-toolkit-collapse';
import '@axa-fr/react-toolkit-collapse/dist/af-accordion.css';
```

### Use

```javascript
const AccordionCollapse = () => (
  <Accordion
    collapses={[]}
    handleToggle={() => console.log('your function')}
    onlyOne={true}>
    <CollapseCard>
      <CollapseCard.Header>CollpaseCard #1 Title</CollapseCard.Header>
      <CollapseCard.Body>Your Body Text #1</CollapseCard.Body>
    </CollapseCard>
    <CollapseCard>
      <CollapseCard.Header>CollpaseCard #2 Title</CollapseCard.Header>
      <CollapseCard.Body>Your Body Text #2</CollapseCard.Body>
    </CollapseCard>
    <CollapseCard>
      <CollapseCard.Header>CollpaseCard #3 Title</CollapseCard.Header>
      <CollapseCard.Body>Your Body Text #3</CollapseCard.Body>
    </CollapseCard>
  </Accordion>
);
export default AccordionCollapse;
```
