# `@axa-fr/react-toolkit-form-steps`

1. [Installation](#installation)
2. [Old Design Steps](#old-design-steps)
3. [New Design Steps](#new-design-steps)

The component step can have multiple values for the mode props :

```javascript
mode: 'link' | 'active' | 'disabled';
```

## Installation

```shell script
npm i @axa-fr/react-toolkit-form-steps
```

## Old Design Steps

### Import

```javascript
import { Steps, Step, StepBase } from '@axa-fr/react-toolkit-form-steps';
import '@axa-fr/react-toolkit-form-steps/dist/af-step-form.css';
```

### Use

```javascript
const OldDesignSteps = () => (
  <Steps classModifier="" className="">
    <Step
      id="id1"
      href="/etape1"
      onClick={(e) => {
        console.log(e);
      }}
      number="1"
      mode="link"
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={(e) => {
        console.log(e);
      }}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="3"
      onClick={(e) => {
        console.log(e);
      }}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-stepLabel"
        href="#/"
        onClick={(e) => {
          console.log(e);
        }}>
        <span className="af-steps-list-stepNumber">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-stepTitle">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode="disabled" />
  </Steps>
);
export default OldDesignSteps;
```

## New Design Steps

### Import

```javascript
import {
  Steps,
  Step,
  StepBase,
  StepModes,
} from '@axa-fr/react-toolkit-form-steps';
import '@axa-fr/react-toolkit-form-steps/dist/af-step-form-new.css';
```

### Use

```javascript
const NewDesignSteps = () => (
  <Steps classModifier="" className="af-steps-new">
    <Step
      id="id1"
      href="/etape1"
      onClick={(e) => {
        console.log(e);
      }}
      mode="link"
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      onClick={(e) => {
        console.log(e);
      }}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="13"
      onClick={(e) => {
        console.log(e);
      }}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-stepLabel"
        href="#/"
        onClick={(e) => {
          console.log(e);
        }}>
        <span className="af-steps-list-stepNumber">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-stepTitle">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" title="Final step" mode="disabled" />
  </Steps>
);
export default NewDesignSteps;
```
