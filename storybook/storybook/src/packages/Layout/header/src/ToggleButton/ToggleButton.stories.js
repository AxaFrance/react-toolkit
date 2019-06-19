import React from 'react';
import { action } from '@storybook/addon-actions';
import Action from '@axa-fr/react-toolkit-action';
import addToStorie from '@axa-fr/storybook-addons';
import { ToggleButton } from '@axa-fr/react-toolkit-layout-header';

import readme from './ToggleButton.md');

const stories = [];

const actionToggle = {
  icon: 'menu-hamburger',
  title: 'Toggle',
};

stories.push({
  component: () => (
    <ToggleButton idControl="mainmenu">
      <Action
        id="togglemenu"
        icon={actionToggle.icon}
        title={actionToggle.title}
        onClick={action('Toggle Element')}
      />
    </ToggleButton>
  ),
});

const storyData = {
  name: 'Layout.Header.ToggleButton',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
