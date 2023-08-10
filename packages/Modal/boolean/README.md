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
import { useRef } from 'react';

export const YourComponent = () => {
  const ref = useRef < HTMLDialogElement > null;

  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Ouvrir la modal
      </button>

      <BooleanModal
        title="Titre de la modal"
        onCancel={() => ref.current?.close()}
        onSubmit={(e) => console.log(e)}
        id="idModal"
        submitTitle="Soumettre"
        cancelTitle="Annuler"
        ref={ref}>
        <p>
          Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
          in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea
          eu laborum culpa laboris. Labore labore irure ipsum consequat enim
          officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa
          adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip
          occaecat. Aute ut mollit amet.
        </p>
      </BooleanModal>
    </>
  );
};
```
