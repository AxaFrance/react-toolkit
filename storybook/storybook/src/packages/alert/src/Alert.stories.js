import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Alert from '@axa-fr/react-toolkit-alert';
import { action } from '@storybook/addon-actions';
import readme from '@axa-fr/react-toolkit-alert/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'label',
};

const AlertStory = () => (
  <Alert
    classModifier={text(KNOBS_LABELS.classModifier, LABELS.listClass[2])}
    icon={text('icon', '')}
    title={text('title', 'Attention: des informations sont manquantes')}>
    {text('children', '')}
  </Alert>
);

const AlertInfoStory = () => (
  <Alert
    classModifier={text(KNOBS_LABELS.classModifier, LABELS.listClass[1])}
    icon={text('icon', '')}
    title={text(
      'title',
      'Info: vous pouvez également contacter un conseiller par téléphone'
    )}>
    {text('children', '')}
  </Alert>
);

const AlertWithCloseStory = () => (
  <Alert
    classModifier={text('classModifier', LABELS.listClass[0])}
    icon={text('icon', '')}
    title={text('title', 'Succès: votre demande a bien été enregistrée.')}
    onClose={action('onClose')}
  />
);

const AlertWithDetailStory = () => (
  <Alert
    classModifier={text('classModifier', LABELS.listClass[3])}
    icon={text('icon', 'minus-sign')}
    title={text('title', 'Erreur dans les champs suivants :')}>
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  </Alert>
);

const stories = storiesOf('Alert/Alert', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', AlertStory);
stories.add('Info', AlertInfoStory);
stories.add('With close button', AlertWithCloseStory);
stories.add('With child and custom icon', AlertWithDetailStory);
