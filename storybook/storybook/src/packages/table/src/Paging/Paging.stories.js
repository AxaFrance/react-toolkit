import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Paging, Modes } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Paging/README.md';

const PagingStory = () => (
  <Paging
    classModifier={text('classModifier', '')}
    className={text('className', 'af-paging')}
    currentPage={number('currentPage', 5)}
    displayLabel={text('displayLabel', 'Show')}
    elementsLabel={text('elementsLabel', 'elements')}
    mode={select('mode', Modes, Modes.default)}
    nextLabel={text('nextLabel', 'Next »')}
    numberPages={number('numberPages', 23)}
    ofLabel={text('ofLabel', 'of')}
    onChange={action('onChange')}
    previousLabel={text('previousLabel', '« Previous')}
    numberItems={number('numberItems', 20)}
  />
);

const stories = storiesOf('Table/Paging', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', PagingStory);
