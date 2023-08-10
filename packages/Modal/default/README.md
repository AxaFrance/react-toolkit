# `@axa-fr/react-toolkit-modal-default`

1. [Installation](#installation)
2. [Custom Header Story](#custom-header-story)
3. [Modal Core Story](#modal-core-story)

## Installation

```shell script
npm i @axa-fr/react-toolkit-modal-default
npm i @axa-fr/react-toolkit-button
```

## Custom Header Story

### Import

```javascript
import Modal from '@axa-fr/react-toolkit-modal-default';
import '@axa-fr/react-toolkit-modal-default/dist/af-modal.css';
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

      <Modal onOutsideTap={() => ref.current?.close()} ref={ref}>
        <HeaderBase id="headerId">
          <p>
            Ici je contrôle complètement
            <b>le contenu</b>
          </p>
        </HeaderBase>
        <Body>
          <p>
            Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
            in aliquip consectetur nulla sit anim. Pariatur minim commodo enim
            ea eu laborum culpa laboris. Labore labore irure ipsum consequat
            enim officia anim ipsum aliqua excepteur qui sint. Duis sint do
            culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco
            aliquip occaecat. Aute ut mollit amet.
          </p>
        </Body>
        <Footer>
          <button
            className="btn af-btn af-btn--reverse"
            type="button"
            onClick={() => ref.current?.close()}>
            Annuler
          </button>
          <button className="btn af-btn" type="button">
            Valider
          </button>
        </Footer>
      </Modal>
    </>
  );
};
```
