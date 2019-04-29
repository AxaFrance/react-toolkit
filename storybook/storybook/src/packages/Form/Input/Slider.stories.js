import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { SliderInput, Slider } from '@axa-fr/react-toolkit-form-input-slider';
import '@axa-fr/react-toolkit-form-input-slider/dist/af-slider.css';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants as Constants,
} from '@axa-fr/react-toolkit-form-core';

const readme = require('@axa-fr/react-toolkit-form-input-slider/dist/README.md');

const options = [
  { label: '64', value: '64', id: 'uniqueId1' },
  { label: '128', value: '128', id: 'uniqueId2' },
  { label: '256', value: '256', index: 2, id: 'uniqueId3' },
  { label: '1024', value: '1024', id: 'uniqueId4' },
  { label: '2048', value: '2048', id: 'uniqueId5' },
  { label: '4096', value: '4096', id: 'uniqueId5' },
];

const stories = [];

stories.push({
  desc: 'SliderInput',
  component: () => (
    <form className="af-form" name="myform">
      <SliderInput
        options={options}
        id={text('id', 'uniqueid')}
        label={text('label', 'Place name *')}
        name={text('name', 'placeName')}
        onChange={action('onChange')}
        value={number('value', 2)}
        helpMessage={text(
          'helpMessage',
          'Enter the place name, ex : Webcenter'
        )}
        placeholder={text('placeholder', '')}
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        classNameContainerLabel={text(
          'classNameContainerLabel',
          Constants.defaultProps.classNameContainerLabel
        )}
        classNameContainerInput={text(
          'classNameContainerInput',
          Constants.defaultProps.classNameContainerInput
        )}
      />
    </form>
  ),
});

stories.push({
  desc: 'Slider',
  component: () => (
    <form className="af-form" name="myform">
      <Slider
        name={text('name', 'placeName')}
        options={options}
        id={text('id', 'uniqueid')}
        onChange={action('onChange')}
        value={number('value', 'Robert')}
        placeholder={text('placeholder', 'Paris')}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
      />
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Slider',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
