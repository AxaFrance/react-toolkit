# `@axa-fr/react-toolkit-badge`

1. [Installation](#installation)
2. [Simple badge](#simple-badge)
3. [With Icon](#with-icon)

## Installation

```shell script
npm i @axa-fr/react-toolkit-badge
```

## Simple badge

### Import

```javascript
import Button from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const SimpleBadge = () => <Badge classModifier="success">Lorem ipsum</Badge>;
export default SimpleBadge;
```

## With Icon

### Import

```javascript
import Button from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const WithIconBadge = () => (
  <Badge classModifier="error">
    <i className="glyphicon glyphicon-bell" />
  </Badge>
);
export default WithIconBadge;
```
