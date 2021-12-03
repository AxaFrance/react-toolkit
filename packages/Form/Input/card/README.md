1. [`@axa-fr/react-toolkit-form-input-card (Checkbox)`](#axa-frreact-toolkit-form-input-card-checkbox)
2. [`@axa-fr/react-toolkit-form-input-card (Radio)`](#axa-frreact-toolkit-form-input-card-radio)

# `@axa-fr/react-toolkit-form-input-card (Checkbox)`

1. [Card Group Checkbox with One Card](#card-group-checkbox-with-one-card)
2. [Card Group Checkbox with One disabled Card](#card-group-checkbox-with-one-disabled-card)
3. [Card Group Checkbox with Two Card](#card-group-checkbox-with-two-card)
4. [Card Group Checkbox with Three Card](#card-group-checkbox-with-three-card)

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-card
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-form-input-checkbox
```

## Card Group Checkbox with One Card

### Import

```javascript
import {
  CardGroupCheckbox,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxCardwithOneCard = () => (
  <CardGroupCheckbox values={['1']}>
    <Card name="name" id="name" value="1">
      <CardHeader type="radio">
        <p className="af-rccard-header__title"> Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term"> Status: </dt>
          <dd className="af-rccard__def"> In progress </dd>
          <dt className="af-rccard__term"> Savings reached: </dt>
          <dd className="af-rccard__def"> 125 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p> Compulsory annuity withdrawal </p>
      </CardFooter>
    </Card>
  </CardGroupCheckbox>
);
export default CheckboxCardwithOneCard;
```

## Card Group Checkbox with One disabled Card

### Import

```javascript
import {
  CardGroupCheckbox,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxCardwithOneCardDisabled = () => (
  <CardGroupCheckbox values="1">
    <Card id="uniqueId" name="name" value="1" disabled="true">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">125 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>
  </CardGroupCheckbox>
);
export default CheckboxCardwithOneCardDisabled;
```

## Card Group Checkbox with Two Card

### Import

```javascript
import {
  CardGroupCheckbox,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxCardwithTwoCard = () => (
  <CardGroupCheckbox values={['1']}>
    <Card id="uniqueIdOne" name="nameOne" value="1">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">125 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>

    <Card name="nameTwo" id="uniqueIdTwo" value="2">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">250 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">85 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>
  </CardGroupCheckbox>
);
export default CheckboxCardwithTwoCard;
```

## Card Group Checkbox with Three Card

### Import

```javascript
import {
  CardGroupCheckbox,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardMeta,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/af-checkbox.css';
```

### Use

```javascript
const CheckboxCardwithThreeCard = () => (
  <CardGroupCheckbox values={['1', '2']}>
    <CardMeta>Recommandé</CardMeta>
    <Card id="uniqueIdOne" name="nameOne" value="1">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">125 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>

    <Card id="uniqueIdTwo" name="nameTwo" value="2">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">250 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">75 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>

    <Card id="uniqueIdThree" name="nameThree" value="3">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">250 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">85 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>
  </CardGroupCheckbox>
);
export default CheckboxCardwithThreeCard;
```

# `@axa-fr/react-toolkit-form-input-card (Radio)`

1. [Card Group Radio with one Card](#card-group-radio-with-one-card)
1. [Card Group Radio with one Card disabled](#card-group-radio-with-one-card-disabled)
1. [Card Group Radio with one Card and action button on the footer](#card-group-radio-with-one-card-and-action-button-on-the-footer)
1. [Card Group Radio with two Radio Cards](#card-group-radio-with-two-radio-cards)

## Card Group Radio with one Card

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-card
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-form-input-radio
```

### Import

```javascript
import {
  CardGroupRadio,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardMeta,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
```

### Use

```javascript
const RadioCardOne = () => (
  <CardGroupRadio value="1">
    <CardMeta>Recommendation</CardMeta>
    <Card id="uniqueId" name="uniqueName" value="1">
      <CardHeader>
        <p className="af-rccard-header__title"> Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term"> Status: </dt>
          <dd className="af-rccard__def"> In progress </dd>
          <dt className="af-rccard__term"> Savings reached: </dt>
          <dd className="af-rccard__def"> 85 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p> Compulsory annuity withdrawal </p>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);
export default RadioCardOne;
```

### Card Group Radio with one Card disabled

To deactivate Radio Card, you must add:
disabled="true"
on the `<Card>` element

Before :

```javascript
<Card id="uniqueId" name="name" value="1">
```

After :

```javascript
<Card id="uniqueId" name="name" value="1" disabled="true">
```

## Card Group Radio with one Card and action button on the footer

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-card
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-form-input-radio
npm i @axa-fr/react-toolkit-button
```

### Import

```javascript
import {
  CardGroupRadio,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
import SimpleButton from '@axa-fr/react-toolkit-button';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const RadioCardWithActionButton = () => (
  <CardGroupRadio values="1">
    <Card name="name" id="uniqueId" value="1">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">125 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <SimpleButton>Compulsory annuity withdrawal</SimpleButton>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);
export default RadioCardWithActionButton;
```

## Card Group Radio with two Radio Cards

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-card
npm i @axa-fr/react-toolkit-form-core
npm i @axa-fr/react-toolkit-form-input-radio
```

### Import

```javascript
import {
  CardGroupRadio,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardMeta,
} from '@axa-fr/react-toolkit-form-input-card';
import '@axa-fr/react-toolkit-form-input-card/dist/af-card.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
import '@axa-fr/react-toolkit-form-input-radio/dist/af-radio.css';
```

### Use

```javascript
const RadioCardTwo = () => (
  <CardGroupRadio values="2">
    <CardMeta>
      Recommendation
      <br></br>
      <h3>Standard franchisees</h3>
    </CardMeta>
    <Card name="nameOne" id="uniqueIdOne" value="1">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">125 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>

    <Card name="nameTwo" id="uniqueIdTwo" value="2">
      <CardHeader>
        <p className="af-rccard-header__title">Reference</p>
        <p className="af-rccard-header__subtitle">50 € / month</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term">Status:</dt>
          <dd className="af-rccard__def">In progress</dd>
          <dt className="af-rccard__term">Savings reached:</dt>
          <dd className="af-rccard__def">85 000 €</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p>Compulsory annuity withdrawal</p>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);
export default RadioCardTwo;
```
