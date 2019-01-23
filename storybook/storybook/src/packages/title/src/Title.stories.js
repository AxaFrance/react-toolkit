import React from 'react';
import addToStorie from '@axa-fr/storybook-addons';
import { text } from '@storybook/addon-knobs';
import Title from '@axa-fr/react-toolkit-title';

const readme = require('@axa-fr/react-toolkit-title/dist/README.md');

const stories = [];

stories.push({
  component: () => (
    <Title
      classModifier={text('classModifier', '')}
      className={text('className', 'af-title')}>
      Sample Title
    </Title>
  ),
});

const storyData = {
  name: 'Title',
  docs: readme,
  readme,
  stories,
};

addToStorie(storyData, module);
