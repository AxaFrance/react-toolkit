# `@axa-fr/react-toolkit-form-input-slider`

1. [Slider](#slider)
2. [SliderInput](#sliderinput)
   1. [SliderInput Required](#sliderinput-required)

## Slider

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-slider
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { Slider } from '@axa-fr/react-toolkit-form-input-slider';
import '@axa-fr/react-toolkit-form-input-slider/dist/af-slider.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: '64', value: 64 },
  { label: '128', value: 128 },
  { label: '256', value: 256 },
  { label: '1024', value: 1024 },
  { label: '2048', value: 2048 },
  { label: '4096', value: 4096 },
];

const SliderInput = () => (
  <form className="af-form" name="myform">
    <Slider
      id="uniqueid"
      name="sliderName"
      options={options}
      value={2048}
      onChange={() => console.log('your function')}
    />
  </form>
);
export default SliderInput;
```

## SliderInput

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-slider
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { SliderInput } from '@axa-fr/react-toolkit-form-input-slider';
import '@axa-fr/react-toolkit-form-input-slider/dist/af-slider.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const options = [
  { label: '64', value: 64 },
  { label: '128', value: 128 },
  { label: '256', value: 256 },
  { label: '1024', value: 1024 },
  { label: '2048', value: 2048 },
  { label: '4096', value: 4096 },
];

const SliderInputReturn = () => (
  <form className="af-form" name="myform">
    <SliderInput
      id="uniqueid"
      name="sliderInputName"
      label="Place name"
      options={options}
      value={1024}
      helpMessage="Enter the place name, ex : Webcenter"
      messageType={MessageTypes.error}
      onChange={() => console.log('your function')}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
export default SliderInputReturn;
```

### SliderInput Required

To achieve SliderInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **SliderInput** component
