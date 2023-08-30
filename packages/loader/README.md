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

The `text` attribute is optionnal. If you pass it to the component it will be displayed under the loader.
If not, the message will be calculated based on the mode you're using.

| mode   | Associated message                                      |
| ------ | ------------------------------------------------------- |
| get    | Chargement en cours                                     |
| post   | Sauvegarde en cours                                     |
| delete | Suppression en cours                                    |
| update | Mise à jour en cours                                    |
| error  | Une erreur est survenue lors du chargement du composant |

```javascript
<Loader mode="get" text="Chargement en cours">
  <div>
    <h1>Title Child</h1>
    <span>Here your child component</span>
  </div>
</Loader>
...
<Loader mode="update">
  <div>
    <h1>Title Child</h1>
    <span>Here your child component</span>
  </div>
</Loader>
```
