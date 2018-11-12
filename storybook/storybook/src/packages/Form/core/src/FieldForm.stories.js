import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { Textarea } from '@axa-fr/react-toolkit-form-input-textarea';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
} from '@axa-fr/react-toolkit-form-core';

const stories = [];

stories.push({
  component: () => (
    <FieldForm
      message={text('message', 'Une erreur est trouvée')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-4">
        <Textarea
          name={text('name', 'placeName')}
          onChange={action('onChange')}
          value={text('value', '')}
          placeholder={text('placeholder', 'Paris')}
          readOnly={boolean('readOnly', false)}
          isVisible={boolean('isVisible', true)}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  ),
});

const storyData = {
  name: 'Form.FieldForm',
  stories,
};

addToStorie(storyData, module);
