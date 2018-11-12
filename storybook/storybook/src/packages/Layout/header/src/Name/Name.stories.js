/* eslint-disable react/no-array-index-key */
import React from 'react';
import { action } from '@storybook/addon-actions';
import logo from './react.svg';
import addToStorie from '@axa-fr/storybook-addons';
import { Name } from '@axa-fr/react-toolkit-layout-header';

const stories = [];

stories.push({
  component: () => (
    <Name
      title="Nom de l&apos;application"
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
  stories,
};

addToStorie(storyData, module);
