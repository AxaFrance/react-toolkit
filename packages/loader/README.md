# `@axa-fr/react-toolkit-loader`

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-loader
```

### Import

```javascript
import Loader from '@axa-fr/react-toolkit-loader';
import '@axa-fr/react-toolkit-loader/dist/af-spinner.css';
```

### Use

```javascript
const LoaderDefault = () => (
  <Loader mode="get" text="Chargement en cours">
    <div>
      <h1>Title Child</h1>
      <span>Here your child component</span>
    </div>
  </Loader>
);
export default LoaderDefault;
```
