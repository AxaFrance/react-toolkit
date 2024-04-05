# `@axa-fr/react-toolkit-layout-footer`

1. [Default](#default)
2. [CoreHTMLChildren](#corehtmlchildren)

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-footer
```

### Import

```javascript
import { Footer } from '@axa-fr/react-toolkit-layout-footer';
import '@axa-fr/react-toolkit-layout-footer/dist/af-footer.css';
```

### Use

```javascript
const FooterDefault = () => (
  <Footer
    copyright="© 2021 AXA All right right reserved"
    isIconHidden={true}
  />
);
export default FooterDefault;
```

## CoreHTMLChildren

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-footer
npm i @axa-fr/react-toolkit-core
```

### Import

```shell script
import {FooterCore} from '@axa-fr/react-toolkit-layout-footer';
import '@axa-fr/react-toolkit-layout-footer/dist/af-footer.css';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
```

### Use

```javascript
const CoreHtmlChildren = () => (
  <FooterCore icon={logo}>
    <a href="https://www.axa.fr/">
      <strong>@ 2021 AXA</strong>
    </a>
    <i> All right right reserved</i>
  </FooterCore>
);
export default CoreHtmlChildren;
```
