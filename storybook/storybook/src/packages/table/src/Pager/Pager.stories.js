import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { Pager } from '@axa-fr/react-toolkit-table';

const readme = require('@axa-fr/react-toolkit-table/dist/README.md');

const stories = [];

stories.push({
  component: () => (
    <Pager
      numberPages={number('numberPages', 23)}
      currentPage={number('currentPage', 5)}
      onChange={action('onChange')}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      mode={select('mode', Pager.Modes, Pager.Modes.default)}
    />
),
});

const storyData = {
  name: 'Table.Pager',
  docs: readme,
  stories: stories,
};

addToStorie(storyData, module);
