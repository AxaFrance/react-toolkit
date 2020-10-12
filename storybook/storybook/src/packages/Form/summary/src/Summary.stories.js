import React from 'react';
import { array, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Summary } from '@axa-fr/react-toolkit-form-summary';
import readme from '@axa-fr/react-toolkit-form-summary/dist/README.md';

const messages = ['Field Author is required', 'Field PlaceName is required'];

const stories = storiesOf('Form', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Summary', () => (
  <Summary
    messages={array('messages', messages)}
    isVisible={boolean('isVisible', true)}
    title={text('title', 'Le formulaire invalide')}
    classModifier={text('classModifier', 'error')}
    className={text('className', 'af-alert')}
  />
));
