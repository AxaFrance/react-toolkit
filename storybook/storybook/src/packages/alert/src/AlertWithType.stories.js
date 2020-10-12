import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { AlertWithType } from '@axa-fr/react-toolkit-alert';
import { action } from '@storybook/addon-actions';
import readme from '@axa-fr/react-toolkit-alert/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'label',
  type: 'type',
};

const AlertWithTypeStory = () => (
  <AlertWithType
    type={select(KNOBS_LABELS.type, LABELS.listClass, LABELS.listClass[2])}
    title={text('title', 'Attention: des informations sont manquantes')}
  />
);

const AlertWithTypeInfoStory = () => (
  <AlertWithType
    type={select(KNOBS_LABELS.type, LABELS.listClass, LABELS.listClass[1])}
    title={text(
      'title',
      'Info: vous pouvez également contacter un conseiller par téléphone'
    )}
  />
);

const AlertWithTypeWithCloseStory = () => (
  <AlertWithType
    type={select(KNOBS_LABELS.type, LABELS.listClass, LABELS.listClass[0])}
    title={text('title', 'Succès: votre demande a bien été enregistrée.')}
    onClose={action('onClose')}
  />
);

const AlertWithTypeWithDetailStory = () => (
  <AlertWithType
    type={select(KNOBS_LABELS.type, LABELS.listClass, LABELS.listClass[3])}
    title={text('title', 'Erreur dans les champs suivants :')}>
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  </AlertWithType>
);

const stories = storiesOf('Alert/AlertWithType', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', AlertWithTypeStory);
stories.add('Info', AlertWithTypeInfoStory);
stories.add('With close button', AlertWithTypeWithCloseStory);
stories.add('With child and custom icon', AlertWithTypeWithDetailStory);
