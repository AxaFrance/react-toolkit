import React from 'react';
import { array, boolean, text } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { Summary } from '@axa-fr/react-toolkit-form-summary';

const readme = require('@axa-fr/react-toolkit-form-summary/dist/README.md');

const stories = [];

const messages = ['Field Author is required', 'Field PlaceName is required'];

stories.push({
  component: () => (
    <Summary
      messages={array('messages', messages)}
      isVisible={boolean('isVisible', true)}
      title={text('title', 'Le formulaire invalide')}
      classModifier={text('classModifier', 'error')}
      className={text('className', 'af-alert')}
    />
  ),
});

const storyData = {
  name: 'Form.Summary',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
