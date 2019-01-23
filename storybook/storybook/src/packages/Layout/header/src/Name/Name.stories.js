/* eslint-disable react/no-array-index-key */
import React from 'react';
import { action } from '@storybook/addon-actions';
import addToStorie from '@axa-fr/storybook-addons';
import { Name } from '@axa-fr/react-toolkit-layout-header';
import logo from './react.svg';

const readme = require('@axa-fr/react-toolkit-layout-header/dist/README.md');

const stories = [];

stories.push({
  component: () => (
    <Name
      title="Nom de l'application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={e => {
        e.event.preventDefault();
        e.event = {};
        action('onClick')(e);
      }}
    />
  ),
});

const storyData = {
  name: 'Layout.Header.Name',
  docs: readme,
  readme,
  stories,
};

addToStorie(storyData, module);
