import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Name } from '@axa-fr/react-toolkit-layout-header';
import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';
import logo from './react.svg';

const NameStory = () => (
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
);

const stories = storiesOf('Layout/Header/Name', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', NameStory);
