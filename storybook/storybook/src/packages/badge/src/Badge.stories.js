/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Badge from '@axa-fr/react-toolkit-badge';
import readme from '@axa-fr/react-toolkit-badge/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
  defaultClass: 'success',
  title: 'Lorem ipsum',
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'title',
};

const BadgeStory = () => (
  <Badge
    classModifier={select(
      KNOBS_LABELS.classModifier,
      LABELS.listClass,
      LABELS.defaultClass
    )}>
    {text(KNOBS_LABELS.title, LABELS.title)}
  </Badge>
);

const BadgeIconStory = () => (
  <Badge
    classModifier={select(
      KNOBS_LABELS.classModifier,
      LABELS.listClass,
      'error'
    )}>
    <i className="glyphicon glyphicon-bell" />
  </Badge>
);

const stories = storiesOf('Badge', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Simple badge', BadgeStory);
stories.add('With Icon', BadgeIconStory);
