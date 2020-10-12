import React from 'react';
import { storiesOf } from '@storybook/react';
import { Infos } from '@axa-fr/react-toolkit-layout-header';
import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';

const infos = [
  {
    word: 'Client :',
    definition: '0123456789 - NOM',
  },
  {
    word: 'Portefeuille :',
    definition: '000123456789',
  },
  {
    word: 'Status :',
    definition: 'Affaire nouvelle',
  },
];

const InfosStory = () => <Infos infos={infos} />;

const stories = storiesOf('Layout/Header/Infos', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', InfosStory);
