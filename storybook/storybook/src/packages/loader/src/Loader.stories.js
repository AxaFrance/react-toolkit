import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import Loader, { LoaderModes } from '@axa-fr/react-toolkit-loader';

const stories = [];

stories.push({
  component: () => (
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
  ),
});

const storyData = {
  name: 'Loader',
  stories: stories,
};

addToStorie(storyData, module);