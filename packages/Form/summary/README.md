# `@axa-fr/react-toolkit-form-summary`

## Installation

```shell script
npm i @axa-fr/react-toolkit-form-summary
npm i @axa-fr/react-toolkit-alert
```

## Import

```javascript
import { Summary } from '@axa-fr/react-toolkit-form-summary';
import '@axa-fr/react-toolkit-alert/dist/af-alert.css';
```

## Use

```javascript
const SummaryForm = () => (
  <Summary
    messages={[
      <span>Field Author is required</span>,
      'Field PlaceName is required',
    ]}
    title="Formulaire invalide"
    classModifier="error"
    className="af-alert"
    isVisible={true}
  />
);
export default SummaryForm;
```
