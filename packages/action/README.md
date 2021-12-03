# `@axa-fr/react-toolkit-action`

1. [Installation](#installation)
2. [Link](#link)
3. [Button](#button)
4. [Link ActionCore](#link-actioncore)
5. [Button ActionCore](#button-actioncore)

## Installation

```shell script
npm i @axa-fr/react-toolkit-action
```

## Link

### Import

```javascript
import Button from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const LinkAction = () => (
  <Button
    id="id"
    icon="link"
    href="http://www.axa.fr"
    title="Test Link"
    target="_blank"
  />
);
export default LinkAction;
```

## Button

### Import

```javascript
import Button from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const ButtonAction = () => <Button id="id" icon="floppy-disk" title="Save" />;
export default ButtonAction;
```

## Link ActionCore

### Import

```javascript
import { ActionCore } from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const LinkActionCore = () => (
  <ActionCore id="id" icon="link" href="http://www.axa.fr" title="Test Link" />
);
export default LinkActionCore;
```

## Button ActionCore

### Import

```javascript
import { ActionCore } from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const ButtonActionCore = () => (
  <ActionCore
    id="id"
    icon="floppy-disk"
    href="http://www.axa.fr"
    title="Test Link"
  />
);
export default ButtonActionCore;
```
