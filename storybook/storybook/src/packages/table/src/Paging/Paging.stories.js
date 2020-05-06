import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Paging } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Paging/README.md';

const PagingStory = () => (
  <Paging
    numberItems={number('numberItems', 20)}
    numberPages={number('numberPages', 23)}
    currentPage={number('currentPage', 5)}
    onChange={action('onChange')}
    classModifier={text('classModifier', '')}
    className={text('className', 'af-paging')}
  />
);

const stories = storiesOf('Table.Paging', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
});

stories.add('Default', PagingStory);
