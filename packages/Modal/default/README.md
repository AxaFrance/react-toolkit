## Simple badge

### Get started

```sh
npm i "@axa-fr/react-toolkit-modal"
```

For more information about style component, you can see the [Modal Style on Toolkit-core ](http://toolkit-intranet-axa.azurewebsites.net/#/modal)

### Exemple

```javascript
import React from 'react';
import Modal from '@axa-fr/react-toolkit-modal';

const MyModal => () => {
 <Modal
  classModifier={text('classModifier', '')}
  className={text('className', '')}
  isOpen={boolean('isOpen', true)}
  onOutsideTap={action('onOutsideTap')}>
  <Modal.HeaderBase id="headerId">
    <p>
      Ici je controle completement <b>le contenu</b>
    </p>
  </Modal.HeaderBase>
  <Modal.Body>
    <p>
      Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
      in aliquip consectetur nulla sit anim. Pariatur minim commodo enim
      ea eu laborum culpa laboris. Labore labore irure ipsum consequat
      enim officia anim ipsum aliqua excepteur qui sint. Duis sint do
      culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco
      aliquip occaecat. Aute ut mollit amet.
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
}
```

