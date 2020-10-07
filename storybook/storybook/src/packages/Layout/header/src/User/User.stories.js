import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { User } from '@axa-fr/react-toolkit-layout-header';
import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';

const onClick = e => {
  e.event.preventDefault();
  e.event = {};
  action('onClick')(e);
};

const UserStory = () => (
  <User
    name="Pierre Martin"
    href="/profile"
    profile="profile"
    onClick={onClick}
  />
);

const UserNoLinkStory = () => <User name="Pierre Martin" profile="profile" />;

const stories = storiesOf('Layout/Header/User', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', UserStory);
stories.add('No Link', UserNoLinkStory);
