# `@axa-fr/react-toolkit-help`

1. [Text Story](#text-story)
2. [Html Story](#html-story)

## Text Story

### Installation

```shell script
npm i @axa-fr/react-toolkit-help
npm i @axa-fr/react-toolkit-popover
npm i @axa-fr/react-toolkit-button
```

### Import

```javascript
import HelpButton from '@axa-fr/react-toolkit-help';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import '@axa-fr/react-toolkit-popover/dist/af-help-custom.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const TextStory = () => (
  <form className="af-form" name="myform">
    <HelpButton mode={PopoverModes.click} placement={PopoverPlacements.right}>
      Lorem ipsum dolor sit amet
    </HelpButton>
  </form>
);
export default TextStory;
```

## Html Story

### Installation

```shell script
npm i @axa-fr/react-toolkit-help
npm i @axa-fr/react-toolkit-popover
npm i @axa-fr/react-toolkit-button
```

### Import

```javascript
import HelpButton from '@axa-fr/react-toolkit-help';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import '@axa-fr/react-toolkit-popover/dist/af-help-custom.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const HtmlStory = () => (
  <HelpButton
    classModifier="custom"
    mode={PopoverModes.over}
    placement={PopoverPlacements.right}>
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
  </HelpButton>
);
export default HtmlStory;
```
