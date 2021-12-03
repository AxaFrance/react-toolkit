# `@axa-fr/react-toolkit-tabs`

1. [Default](#default)
2. [Only One Tab](#only-one-tab)

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-tabs
npm i @axa-fr/react-toolkit-badge
```

### Import

```javascript
import Tabs from '@axa-fr/react-toolkit-tabs';
import '@axa-fr/react-toolkit-tabs/dist/af-tabs.css';
import Badge from '@axa-fr/react-toolkit-badge';
import '@axa-fr/react-toolkit-badge/dist/af-badge.css';
```

### Use

```javascript
const TabTitleIconLeft = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const TabTitleBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

const TabsDefault = () => (
  <div>
    <Tabs>
      <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
        Content of my fifth tab
      </Tabs.Tab>
    </Tabs>
  </div>
);
export default TabsDefault;
```

## Only One Tab

### Installation

```shell script
npm i @axa-fr/react-toolkit-tabs
```

### Import

```javascript
import Tabs from '@axa-fr/react-toolkit-tabs';
import '@axa-fr/react-toolkit-tabs/dist/af-tabs.css';
```

### Use

```javascript
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const OnlyOneTab = () => (
  <div>
    <Tabs>
      <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
        Content of my unique tab
      </Tabs.Tab>
    </Tabs>
  </div>
);
export default OnlyOneTab;
```
