import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Icon from '@axa-fr/react-toolkit-icon';
import readme from '@axa-fr/react-toolkit-icon/dist/README.md';
import './icon-demo.scss';

const IconStory = () => (
  <div className="af-demo__icons">
    <Icon
      icon="sante"
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      basePath={text('basePath', '/')}
    />
    <Icon
      icon="banque"
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      basePath={text('basePath', '/')}
    />
    <Icon
      icon="epargne"
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      basePath={text('basePath', '/')}
    />
    <Icon
      icon="arrow-down"
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      basePath={text('basePath', '/')}
    />
  </div>
);

const stories = storiesOf('Icon', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Icon', IconStory);
