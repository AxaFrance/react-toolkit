import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Title from '@axa-fr/react-toolkit-title';

import readme from '@axa-fr/react-toolkit-title/dist/README.md';

const TitleStory = () => (
  <Title
    classModifier={text('classModifier', '')}
    className={text('className', 'af-title')}>
    Sample Title
  </Title>
);

const stories = storiesOf('Title', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', TitleStory);
