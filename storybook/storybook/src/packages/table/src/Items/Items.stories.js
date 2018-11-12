import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { Items } from '@axa-fr/react-toolkit-table';

const stories = [];

stories.push({
  component: () => (
    <Items
      numberItems={number('numberItems', 20)}
      onChange={action('onChange')}
      items={[5, 10, 25, 50, 100]}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
    />
),
});

const storyData = {
  name: 'Table.Items',
  stories: stories,
};

addToStorie(storyData, module);
