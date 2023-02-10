# `@axa-fr/react-toolkit-helpinfo`

1. [Text Story](#text-story)
2. [Html Story](#html-story)

## Text Story

### Installation

```shell script
npm i @axa-fr/react-toolkit-helpinfo
npm i @axa-fr/react-toolkit-popover
```

### Import

```javascript
import HelpInfo from '@axa-fr/react-toolkit-helpinfo';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import '@axa-fr/react-toolkit-popover/dist/af-help-info.css';
```

### Use

```javascript
const TextStory = () => (
  <form className="af-form" name="myform">
    <HelpInfo
      mode={PopoverModes.click}
      placement={PopoverPlacements.right}
      content="Lorem ipsum dolor sit amet">
      My content
    </HelpInfo>
  </form>
);
export default TextStory;
```

## Html Story

### Installation

```shell script
npm i @axa-fr/react-toolkit-helpinfo
npm i @axa-fr/react-toolkit-popover
```

### Import

```javascript
import HelpInfo from '@axa-fr/react-toolkit-help-info';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import '@axa-fr/react-toolkit-popover/dist/af-popover.css';
import '@axa-fr/react-toolkit-popover/dist/af-help-info.css';
```

### Use

```javascript
const overContent = <div className="af-help-demo__container">
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
    </div>;

const HtmlStory = () => (
  <HelpInfo
    classModifier="custom"
    mode={PopoverModes.over}
    placement={PopoverPlacements.right} content={overContent}>
    <h1>My HTML Content</p>
  </HelpInfo>
);
export default HtmlStory;
```
