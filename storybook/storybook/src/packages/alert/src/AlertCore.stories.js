import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { AlertCore } from '@axa-fr/react-toolkit-alert';
import { action } from '@storybook/addon-actions';
import readme from '@axa-fr/react-toolkit-alert/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'label',
};

const AlertCoreStory = () => (
  <AlertCore
    classModifier={text(KNOBS_LABELS.classModifier, LABELS.listClass[2])}
    iconClassName={text('iconClassName', 'glyphicon glyphicon-alert')}
    title={text('title', 'Attention: des informations sont manquantes')}
  />
);

const AlertCoreInfoStory = () => (
  <AlertCore
    classModifier={text(KNOBS_LABELS.classModifier, LABELS.listClass[1])}
    iconClassName={text('iconClassName', 'glyphicon glyphicon-info-sign')}
    title={text(
      'title',
      'Info: vous pouvez également contacter un conseiller par téléphone'
    )}
  />
);

const AlertCoreWithCloseStory = () => (
  <AlertCore
    classModifier={text('classModifier', LABELS.listClass[0])}
    iconClassName={text('iconClassName', 'glyphicon glyphicon-ok')}
    title={text('title', 'Succès: votre demande a bien été enregistrée.')}
    onClose={action('onClose')}
  />
);

const AlertCoreWithDetailStory = () => (
  <AlertCore
    classModifier={text('classModifier', LABELS.listClass[3])}
    iconClassName={text('iconClassName', 'glyphicon glyphicon-minus-sign')}
    title={text('title', 'Erreur dans les champs suivants :')}>
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  </AlertCore>
);

const stories = storiesOf('Alert/AlertCore', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', AlertCoreStory);
stories.add('Info', AlertCoreInfoStory);
stories.add('With close button', AlertCoreWithCloseStory);
stories.add('With child', AlertCoreWithDetailStory);
