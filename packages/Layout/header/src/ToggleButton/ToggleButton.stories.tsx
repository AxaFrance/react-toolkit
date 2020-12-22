import React from 'react';
import Action from '@axa-fr/react-toolkit-action';
import { Meta } from '@storybook/react';
import ToggleButton from '.';
import readme from './ToggleButton.md';

export default {
  title: 'Layout/Header/ToggleButton',
  component: ToggleButton,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onClick: { action: 'Toggle Element' },
  },
} as Meta;

const actionToggle = {
  icon: 'menu-hamburger',
  title: 'Toggle',
};

export const Default = (args) => (
  <ToggleButton idControl="mainmenu">
    <Action
      id="togglemenu"
      icon={actionToggle.icon}
      title={actionToggle.title}
      {...args}
    />
  </ToggleButton>
);
