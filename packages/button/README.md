# `@axa-fr/react-toolkit-button`

1. [Installation](#installation)
1. [Import](#import)
1. [Simple button](#simple-button)
1. [Button circle](#button-circle)
1. [Button with left icon](#button-with-left-icon)
1. [Button with right icon](#button-with-right-icon)

## Installation

```sh
npm i @axa-fr/react-toolkit-button
```

### Import

```javascript
import SimpleButton from '@axa-fr/react-toolkit-button';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

## Simple button

```javascript
const Button = () => <SimpleButton>Lorem Ipsum</SimpleButton>;
export default Button;
```

| Button          | classModifier |
| --------------- | ------------- |
| Reverse Button  | reverse       |
| Disabled Button | disabled      |
| Success Button  | success       |
| Danger Button   | danger        |
| Small Button    | small         |

You can see the example below :

```javascript
const ReverseButton = () => (
  <SimpleButton classModifier="reverse">Lorem Ipsum</SimpleButton>
);
export default ReverseButton;
```

## Button circle

```javascript
const CircleButton = () => (
  <SimpleButton className="af-btn--circle glyphicon glyphicon-floppy-disk" />
);
export default CircleButton;
```

## Button with left icon

```javascript
const LeftIconButton = () => (
  <Button classModifier="hasiconLeft">
    Lorem Ipsum
    <i className="glyphicon glyphicon-arrowthin-left" />
  </Button>
);
export default LeftIconButton;
```

## Button with right icon

```javascript
const RightIconButton = () => (
  <Button classModifier="hasiconRight">
    Lorem Ipsum
    <i className="glyphicon glyphicon-arrowthin-right" />
  </Button>
);
export default RightIconButton;
```
