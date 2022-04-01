import React, { ComponentPropsWithoutRef } from 'react';
// import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Modal from './Modal';
import ModalCore, { ModalCoreProps, DEFAULT_CLASSNAME } from './ModalCore';
import readme from '../README.md';

const ModalCoreStoryTemplate: Story<ModalCoreProps> = (args) => (
  <div>
    <Modal {...args} title="aria-label of the modal">
      <Modal.Header title={args.title} />
      <Modal.Body>
        <p>
          Voici une version avec un header de base avec le title en prop
          d'entrée. Il est possible d'ajouter son propre modifier pour
          personnaliser selon ses besoins avec la prop "classModifier" et un peu
          de CSS.
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

export const ModalCoreStory = ModalCoreStoryTemplate.bind({});
ModalCoreStory.args = {
  isOpen: true,
  title: 'Titre de la modale',
  className: DEFAULT_CLASSNAME,
};

const CustomHeaderStoryTemplate: Story<
  ComponentPropsWithoutRef<typeof ModalCore>
> = (args) => (
  <div>
    <Modal {...args}>
      <Modal.HeaderBase id="headerId">
        <p>
          Ici, je contrôle complètement <strong>le contenu du header</strong>
        </p>
        <button className="af-btn--circle" type="submit" id="btn-circle">
          <i className="glyphicon glyphicon-close" />
        </button>
      </Modal.HeaderBase>
      <Modal.Body>
        <p>
          Voici une version avec un header customisé à l'aide du composant
          Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une
          version plus large d'une modale. Il est existe également un modifier
          "sm", pour les modales plus petites. Mais il est possible d'ajouter
          son propre modifier pour personnaliser selon ses besoins avec un peu
          de CSS.
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
  className: DEFAULT_CLASSNAME,
  classModifier: 'lg',
};

export default {
  title: 'Components/Modal/Default',
  component: Modal,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;
