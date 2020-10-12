import React from 'react';
import { action } from '@storybook/addon-actions';
import Action from '@axa-fr/react-toolkit-action';
import { storiesOf } from '@storybook/react';
import { ToggleButton } from '@axa-fr/react-toolkit-layout-header';
import readme from './ToggleButton.md';

const actionToggle = {
  icon: 'menu-hamburger',
  title: 'Toggle',
};

const ToggleButtonStory = () => (
  <ToggleButton idControl="mainmenu">
    <Action
      id="togglemenu"
      icon={actionToggle.icon}
      title={actionToggle.title}
      onClick={action('Toggle Element')}
    />
  </ToggleButton>
);

const stories = storiesOf('Layout/Header/ToggleButton', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', ToggleButtonStory);
