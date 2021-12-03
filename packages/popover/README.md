# `@axa-fr/react-toolkit-popover`

1. [Installation](#installation)
2. [Popover](#popover)
3. [PopoverBase](#popoverbase)

## Installation

```shell script
npm i @axa-fr/react-toolkit-popover
```

## Popover

### Import

```javascript
import Popover from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
```

### Use

```javascript
const PopoverDefault = () => (
  <Popover mode="hover">
    <Popover.Pop>
      <p>Modal content</p>
    </Popover.Pop>
    <Popover.Over>
      <button>Source</button>
    </Popover.Over>
  </Popover>
);
export default PopoverDefault;
```

## PopoverBase

### Import

```javascript
import { PopoverBase, PopoverPlacements } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import '@axa-fr/react-toolkit-popover/dist/af-help-custom.css';
```

### Use

```javascript
const PopoverBaseReturn = () => (
  <PopoverBase
    classModifier="custom"
    isOpen={true}
    placement={PopoverPlacements.right}>
    <PopoverBase.Pop>
      <div className="af-help-demo__container">
        <h3 className="af-help-demo__title">Profile</h3>
        <div className="af-help-demo__infos">
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Tweets</span>
            <span className="af-help-demo__info-number">1,337</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Following</span>
            <span className="af-help-demo__info-number">561</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Followers</span>
            <span className="af-help-demo__info-number">718</span>
          </p>
        </div>
      </div>
    </PopoverBase.Pop>
    <PopoverBase.Over>
      <button type="button" id="idbouton">
        Bouton d'exemple
      </button>
    </PopoverBase.Over>
  </PopoverBase>
);
export default PopoverBaseReturn;
```
