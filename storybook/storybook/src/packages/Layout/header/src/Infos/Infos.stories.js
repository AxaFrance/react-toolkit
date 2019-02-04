import React from 'react';
import addToStorie from '@axa-fr/storybook-addons';
import { Infos } from '@axa-fr/react-toolkit-layout-header';

const readme = require('@axa-fr/react-toolkit-layout-header/dist/README.md');

const stories = [];

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

stories.push({
  component: () => <Infos infos={infos} />,
});

const storyData = {
  name: 'Layout.Header.Infos',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
