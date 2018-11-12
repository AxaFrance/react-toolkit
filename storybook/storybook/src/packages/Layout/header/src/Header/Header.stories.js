import React from 'react';
import logo from './react.svg';

import addToStorie from '@axa-fr/storybook-addons';
import { Name, Header } from '@axa-fr/react-toolkit-layout-header';

const stories = [];

stories.push({
  component: () => (
    <Header>
      <Name
        title="Nom de l&apos;application"
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
  stories: stories,
};

addToStorie(storyData, module);