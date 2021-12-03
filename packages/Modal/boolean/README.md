# `@axa-fr/react-toolkit-modal-boolean`

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-modal-boolean
npm i @axa-fr/react-toolkit-button
```

### Import

```javascript
import BooleanModal from '@axa-fr/react-toolkit-modal-boolean';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const BooleanModalDefault = () => (
  <BooleanModal
    isOpen={true}
    title="Titre de la modal"
    onCancel={(e) => console.log(e)}
    onSubmit={(e) => console.log(e)}
    id="idModal"
    submitTitle="Soumettre"
    cancelTitle="Annuler">
    <p>
      Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
      aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
      laborum culpa laboris. Labore labore irure ipsum consequat enim officia
      anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor
      adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut
      mollit amet.
    </p>
  </BooleanModal>
);
export default BooleanModalDefault;
```
