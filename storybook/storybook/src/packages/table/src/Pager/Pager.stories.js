import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Pager, Modes } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Pager/README.md';

const PagerStory = () => (
  <Pager
    numberPages={number('numberPages', 23)}
    currentPage={number('currentPage', 5)}
    onChange={action('onChange')}
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    mode={select('mode', Modes, Modes.default)}
  />
);

const LightStory = () => (
  <Pager
    numberPages={number('numberPages', 23)}
    currentPage={number('currentPage', 5)}
    onChange={action('onChange')}
    classModifier={text('classModifier', '')}
    className={text('className', '')}
    mode={select('mode', Modes, Modes.light)}
  />
);

const stories = storiesOf('Table.Pager', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
});

stories.add('Default', PagerStory);
stories.add('Light', LightStory);
