/* eslint-disable react/no-array-index-key */
import React from 'react';
import { action } from '@storybook/addon-actions';

import addToStorie from '@axa-fr/storybook-addons';
import { User } from '@axa-fr/react-toolkit-layout-header';

const readme = require('@axa-fr/react-toolkit-layout-header/dist/README.md');

const stories = [];

const onClick = e => {
  e.event.preventDefault();
  e.event = {};
  action('onClick')(e);
};

stories.push({
  component: () => (
    <User
      name="Pierre Martin"
      href="/profile"
      profile="profile"
      onClick={onClick}
    />
  ),
});

stories.push({
  desc: 'nolink',
  component: () => <User name="Pierre Martin" profile="profile" />,
});

const storyData = {
  name: 'Layout.Header.User',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
