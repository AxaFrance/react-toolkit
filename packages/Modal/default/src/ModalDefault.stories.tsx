import React, { ComponentPropsWithoutRef } from 'react';
import { Story } from '@storybook/react';
import Modal from './Modal';
import ModalCore from './ModalCore';
import Body from './Body';
import Footer from './Footer';
import HeaderBase from './HeaderBase';
import readme from '../README.md';

const CustomHeaderStoryTemplate: Story<
  ComponentPropsWithoutRef<typeof ModalCore>
> = (args) => (
  <div>
    <Modal {...args}>
      <Modal.HeaderBase id="headerId">
        <p>
          Ici je controle completement <b>le contenu</b>
        </p>
      </Modal.HeaderBase>
      <Modal.Body>
        <p>
          Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
          in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea
          eu laborum culpa laboris. Labore labore irure ipsum consequat enim
          officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa
          adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip
          occaecat. Aute ut mollit amet.
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
);

export const CustomHeaderStory = CustomHeaderStoryTemplate.bind({});
CustomHeaderStory.args = {
  isOpen: true,
  title: 'Titre de la modale',
};

const ModalCoreStoryTemplate: Story<ModalCoreProps> = (args) => (
  <div>
    <ModalCore {...args}>
      <HeaderBase id="headerId">
        <p>
          Ici je controle completement <b>le contenu</b>
        </p>
      </HeaderBase>
      <Body>
        <p>
          Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
          in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea
          eu laborum culpa laboris. Labore labore irure ipsum consequat enim
          officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa
          adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip
          occaecat. Aute ut mollit amet.
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
);
export const ModalCoreStrory = ModalCoreStoryTemplate.bind({});
ModalCoreStrory.args = {
  isOpen: true,
  title: 'Titre de la modale',
};

export default {
  title: 'Modal/Default',
  component: Modal,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onOutsideTap: { action: 'onOutsideTap' },
  },
};
