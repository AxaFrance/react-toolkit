# `@axa-fr/react-toolkit-header-client-app`

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-header-client-app
```

### Import

```javascript
import Title from '@axa-fr/react-toolkit-header-client-app';
import '@axa-fr/react-toolkit-header-client-app/dist/afc-header-app.css';
```

### Use

```javascript
const HeaderApp = () => (
  <HeaderClientApp rightChildren={<a>Annuler<a>} leftChildren={<a>Retour<a>}  >
    Sample Title
  </HeaderClientApp>
);
export default HeaderApp;
```
