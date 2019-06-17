import React from 'react';

import addToStorie from '@axa-fr/storybook-addons';
import { Name, Header } from '@axa-fr/react-toolkit-layout-header';
import logo from './react.svg';

import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';

const stories = [];

stories.push({
  component: () => (
    <Header>
      <Name
        title="Nom de l'application"
        subtitle="Baseline"
        img={logo}
        alt="Logo React"
        onClick={() => {}}
      />
    </Header>
  ),
});

const storyData = {
  name: 'Layout.Header.Header',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
