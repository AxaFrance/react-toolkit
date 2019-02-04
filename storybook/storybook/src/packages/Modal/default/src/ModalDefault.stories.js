import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import addToStorie from '@axa-fr/storybook-addons';
import Modal, {
  ModalCore,
  Body,
  Footer,
  HeaderBase,
} from '@axa-fr/react-toolkit-modal-default';

const readme = require('@axa-fr/react-toolkit-modal-default/dist/README.md');

const stories = [
  {
    desc: 'Custom header',
    component: () => (
      <div>
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
              Reprehenderit sit quis aute nisi consequat consequat mollit.
              Commodo in aliquip consectetur nulla sit anim. Pariatur minim
              commodo enim ea eu laborum culpa laboris. Labore labore irure
              ipsum consequat enim officia anim ipsum aliqua excepteur qui sint.
              Duis sint do culpa adipisicing dolor adipisicing ea dolore aute
              nisi quis ullamco aliquip occaecat. Aute ut mollit amet.
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
      </div>
    ),
  },
  {
    desc: 'Modal core',
    component: () => (
      <div>
        <ModalCore
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          isOpen={boolean('isOpen', true)}
          onOutsideTap={action('onOutsideTap')}>
          <HeaderBase id="headerId">
            <p>
              Ici je controle completement <b>le contenu</b>
            </p>
          </HeaderBase>
          <Body>
            <p>
              Reprehenderit sit quis aute nisi consequat consequat mollit.
              Commodo in aliquip consectetur nulla sit anim. Pariatur minim
              commodo enim ea eu laborum culpa laboris. Labore labore irure
              ipsum consequat enim officia anim ipsum aliqua excepteur qui sint.
              Duis sint do culpa adipisicing dolor adipisicing ea dolore aute
              nisi quis ullamco aliquip occaecat. Aute ut mollit amet.
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
      </div>
    ),
  },
];

const storyData = {
  name: 'Modal.Default',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
