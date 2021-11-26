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
const CustomHeaderStory = () => (
  <Modal
    isOpen={true}
    onOutsideTap={(e: string) => {
      console.log(e);
    }}>
    <Modal.HeaderBase id="headerId">
      <p>
        Ici je contrôle complètement
        <b>le contenu</b>
      </p>
    </Modal.HeaderBase>
    <Modal.Body>
      <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <button className="btn af-btn af-btn--reverse" type="button">
        Annuler
      </button>
      <button className="btn af-btn" type="button">
        Valider
      </button>
    </Modal.Footer>
  </Modal>
);
export default CustomHeaderStory;
```

## Modal Core Story

### Import

```javascript
import Modal from '@axa-fr/react-toolkit-modal-default';
import '@axa-fr/react-toolkit-modal-default/dist/af-modal.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
```

### Use

```javascript
const ModalCoreStory = () => (
  <ModalCore
    isOpen={true}
    onOutsideTap={(e) => {
      console.log(e);
    }}>
    <HeaderBase id="headerId">
      <p>
        Ici je controle completement <b>le contenu</b>
      </p>
    </HeaderBase>
    <Body>
      <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>
    </Body>
    <Footer>
      <button className="btn af-btn af-btn--reverse" type="button">
        Annuler
      </button>
      <button className="btn af-btn" type="button">
        Valider
      </button>
    </Footer>
  </ModalCore>
);
export default ModalCoreStory;
```
