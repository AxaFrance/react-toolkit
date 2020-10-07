import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Items } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Items/README.md';

const ItemsStory = () => (
  <Items
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    displayLabel={text('displayLabel', 'Show')}
    elementsLabel={text('elementsLabel', 'elements')}
    items={[5, 10, 25, 50, 100]}
    onChange={action('onChange')}
    numberItems={number('numberItems', 20)}
  />
);

const stories = storiesOf('Table/Items', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', ItemsStory);
