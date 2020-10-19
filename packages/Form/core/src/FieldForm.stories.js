import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MessageTypes from './MessageTypes';
import FieldForm from './FieldForm';
import HelpMessage from './HelpMessage';
import FieldError from './FieldError';
import readme from '../README.md';

const stories = storiesOf('Form', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('FieldForm', () => (
  <FieldForm
    message={text('message', 'Une erreur est trouvée')}
    messageType={select('messageType', MessageTypes, MessageTypes.error)}
    forceDisplayMessage={boolean('forceDisplayMessage', false)}>
    <div className="col-md-4">
      <textarea name="placeName" placeholder="Paris" />
      <HelpMessage
        message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
      />
      <FieldError />
    </div>
  </FieldForm>
));
