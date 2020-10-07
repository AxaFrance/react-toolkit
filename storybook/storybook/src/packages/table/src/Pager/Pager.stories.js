import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Pager, Modes } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Pager/README.md';

const PagerStory = () => (
  <Pager
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    currentPage={number('currentPage', 5)}
    mode={select('mode', Modes, Modes.default)}
    nextLabel={text('nextLabel', 'Next »')}
    ofLabel={text('ofLabel', 'of')}
    onChange={action('onChange')}
    previousLabel={text('previousLabel', '« Previous')}
    numberPages={number('numberPages', 23)}
  />
);

const ManyPagesStory = () => (
  <Pager
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    currentPage={number('currentPage', 4225)}
    mode={select('mode', Modes, Modes.default)}
    nextLabel={text('nextLabel', 'Next »')}
    ofLabel={text('ofLabel', 'of')}
    onChange={action('onChange')}
    previousLabel={text('previousLabel', '« Previous')}
    numberPages={number('numberPages', 5000)}
  />
);

const LightStory = () => (
  <Pager
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    currentPage={number('currentPage', 5)}
    mode={select('mode', Modes, Modes.light)}
    nextLabel={text('nextLabel', 'Next »')}
    ofLabel={text('ofLabel', 'of')}
    onChange={action('onChange')}
    previousLabel={text('previousLabel', '« Previous')}
    numberPages={number('numberPages', 23)}
  />
);

const stories = storiesOf('Table/Pager', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', PagerStory);
stories.add('ManyPages', ManyPagesStory);
stories.add('Light', LightStory);
