# `@axa-fr/react-toolkit-button`

1. [Installation](#installation)
1. [Import](#import)
1. [Simple button](#simple-button)
1. [Button circle](#button-circle)
1. [Button with left icon](#button-with-left-icon)
1. [Button with right icon](#button-with-right-icon)
1. [Disabled Button](#disabled-button)

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

## Disabled Button

For a better accessibility (users to have focus on disabled buttons), you should use the aria-disabled attribute instead of the disabled attribute.

```javascript
const DisabledButton = () => (
  <Button classModifier="disabled" aria-disabled>
    Lorem Ipsum
    <i className="glyphicon glyphicon-arrowthin-right" />
  </Button>
);
export default DisabledButton;
```

Be careful that using the aria-disabled attribute will not disable the button, so you have to handle the disabled state inside your onClick or onSubmit function.

```javascript
const disabledButton = true;

<form
  onSubmit={event => {
    event?.preventDefault();
    if (!disabledButton) {
      // call function
    }
  }}>
  <Button classModifier="disabled" aria-disabled={disabledButton}>
    Lorem Ipsum
    <i className="glyphicon glyphicon-arrowthin-right" />
  </Button>
</form>
);
export default DisabledButton;
```
