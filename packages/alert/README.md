# `@axa-fr/react-toolkit-alert`

1. [Installation](#installation)
2. [Alert](#alert)
3. [AlertCore](#alertcore)
4. [Alert With Type](#alert-with-type)

## Installation

```shell script
npm i @axa-fr/react-toolkit-alert
```

| classModifier / type |
| -------------------- |
| danger               |
| info                 |
| error                |
| success              |

## Alert

### Import

```javascript
import Alert from '@axa-fr/react-toolkit-alert';
import '@axa-fr/react-toolkit-alert/dist/af-alert.css';
```

### Use

```javascript
const AlertComponent = () => (
  <Alert
    classModifier="danger"
    icon="glyphicon glyphicon-alert"
    title="Warning: information is missing"
  />
);
export default AlertComponent;
```

## AlertCore

### Import

```javascript
import { AlertCore } from '@axa-fr/react-toolkit-alert';
import '@axa-fr/react-toolkit-alert/dist/af-alert.css';
```

### Use

```javascript
const MyErrorAlert = () => (
  <AlertCore
    classModifier="error"
    iconClassName="glyphicon glyphicon-minus-sign"
    title="Error :">
    <ul>
      <li>Name is required</li>
      <li>Firstname is required</li>
      <li>Email is required</li>
      <li>The date format is invalid</li>
    </ul>
  </AlertCore>
);
export default MyErrorAlert;
```

## Alert With Type

### Import

```javascript
import { AlertWithType } from '@axa-fr/react-toolkit-alert';
import '@axa-fr/react-toolkit-alert/dist/af-alert.css';
```

### Use

```javascript
const MyInfoAlert = () => (
  <AlertWithType
    type="info"
    title="Info: you can also contact an advisor by phone"
  />
);
export default MyInfoAlert;
```
