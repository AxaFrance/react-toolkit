import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Loader, { LoaderModes } from '@axa-fr/react-toolkit-loader';
import readme from '@axa-fr/react-toolkit-loader/dist/README.md';

const stories = storiesOf('Loader', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

const LoaderStory = () => (
  <Loader
    mode={select('mode', LoaderModes, LoaderModes.get)}
    text={text('text', '')}
    classModifier={text('classModifier', '')}
    className={text('className', '')}>
    <div>
      <h1>Title Child</h1>
      <span>Here your child component</span>
    </div>
  </Loader>
);

stories.add('Default', LoaderStory);
